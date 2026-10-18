using LangSteps.Server.Models;

namespace LangSteps.Server.Services;

public interface IQuizService
{
    IReadOnlyList<QuizQuestionItem> GetQuestions(string language);
    QuizResultResponse Evaluate(QuizSubmissionRequest request);
    IReadOnlyList<LeaderboardEntryItem> GetLeaderboard();
    LeaderboardEntryItem AddLeaderboardEntry(string username, int xpEarned, string language);
    int GetTotalQuestionCount();
}

public class QuizService : IQuizService
{
    private readonly Dictionary<string, List<QuizQuestionItem>> _questionsByLang = new(StringComparer.OrdinalIgnoreCase);
    private readonly List<LeaderboardEntryItem> _leaderboard = new();
    private readonly object _leaderboardLock = new();

    public QuizService()
    {
        InitializeQuestions();
    }

    public IReadOnlyList<QuizQuestionItem> GetQuestions(string language)
    {
        if (_questionsByLang.TryGetValue(language, out var list))
            return list;

        return Array.Empty<QuizQuestionItem>();
    }

    public int GetTotalQuestionCount()
    {
        return _questionsByLang.Values.Sum(q => q.Count);
    }

    public QuizResultResponse Evaluate(QuizSubmissionRequest request)
    {
        var questions = GetQuestions(request.Language);
        int score = 0;
        var reviews = new List<QuestionReviewItem>();

        foreach (var q in questions)
        {
            bool hasAnswer = request.Answers.TryGetValue(q.Id, out int selected);
            bool isCorrect = hasAnswer && selected == q.Answer;

            if (isCorrect) score++;

            reviews.Add(new QuestionReviewItem(
                q.Id,
                q.Question,
                hasAnswer ? selected : -1,
                q.Answer,
                isCorrect,
                q.Explanation
            ));
        }

        int total = questions.Count > 0 ? questions.Count : Math.Max(1, request.Answers.Count);
        int percentage = total > 0 ? (int)Math.Round((double)score / total * 100) : 0;

        string tier = "Needs Practice";
        string color = "#ef4444";

        if (percentage == 100)
        {
            tier = "Master / Perfect Score 🏆";
            color = "#10b981";
        }
        else if (percentage >= 80)
        {
            tier = "Proficient Senior ⭐";
            color = "#3b82f6";
        }
        else if (percentage >= 60)
        {
            tier = "Competent Intermediate ⚡";
            color = "#f59e0b";
        }
        else if (percentage >= 40)
        {
            tier = "Junior Apprentice 💡";
            color = "#8b5cf6";
        }

        int speedBonus = (request.TimeSpentSeconds < 120 && percentage >= 70) ? 100 : 0;
        int xpEarned = (score * 50) + speedBonus;

        if (!string.IsNullOrWhiteSpace(request.Username))
        {
            AddLeaderboardEntry(request.Username, xpEarned, request.Language);
        }

        return new QuizResultResponse(
            request.Language,
            score,
            total,
            percentage,
            tier,
            color,
            xpEarned,
            request.TimeSpentSeconds,
            DateTime.UtcNow.ToString("o"),
            reviews
        );
    }

    public IReadOnlyList<LeaderboardEntryItem> GetLeaderboard()
    {
        lock (_leaderboardLock)
        {
            return _leaderboard.OrderByDescending(x => x.TotalXP).Take(10).ToList();
        }
    }

    public LeaderboardEntryItem AddLeaderboardEntry(string username, int xpEarned, string language)
    {
        lock (_leaderboardLock)
        {
        var existing = _leaderboard.FirstOrDefault(l => l.Username.Equals(username, StringComparison.OrdinalIgnoreCase));
        if (existing != null)
        {
            int updatedXP = existing.TotalXP + xpEarned;
            int updatedQuizzes = existing.QuizzesCompleted + 1;
            string updatedRank = updatedXP >= 5000 ? "LangSteps Grandmaster 👑" :
                                 updatedXP >= 3000 ? "Systems Engineer 🚀" :
                                 updatedXP >= 1500 ? "Architecture Specialist 🏛️" : "Syntax Craftsman 🛠️";

            var updated = existing with
            {
                TotalXP = updatedXP,
                QuizzesCompleted = updatedQuizzes,
                RankTitle = updatedRank,
                Date = DateTime.UtcNow.ToString("yyyy-MM-dd")
            };

            _leaderboard.Remove(existing);
            _leaderboard.Add(updated);
            return updated;
        }

        var entry = new LeaderboardEntryItem(
            $"lb-{Guid.NewGuid():N}"[..8],
            username,
            xpEarned,
            1,
            10,
            xpEarned >= 1000 ? "Architecture Specialist 🏛️" : "Syntax Craftsman 🛠️",
            username.ToLowerInvariant(),
            DateTime.UtcNow.ToString("yyyy-MM-dd")
        );

        _leaderboard.Add(entry);
        return entry;
        }
    }

    private void InitializeQuestions()
    {
        // Python Questions
        _questionsByLang["python"] = new List<QuizQuestionItem>
        {
            new(1, "python", "In Python, what is the key difference between 'is' and '=='?",
                new[] { "They are completely identical", "'is' checks memory identity/address, '==' checks value equality", "'==' checks object type only", "'is' is used only for strings" },
                1, "'is' compares object identity (whether both variables point to the same PyObject memory address via id()), whereas '==' calls __eq__ to compare structural values."),
            new(2, "python", "What is the average time complexity of appending an element to a Python list?",
                new[] { "O(n)", "O(log n)", "O(1) amortized", "O(n^2)" },
                2, "Python lists are dynamic arrays with an over-allocation factor, giving list.append() amortized O(1) time complexity."),
            new(3, "python", "Which statement accurately describes Python's Global Interpreter Lock (GIL)?",
                new[] { "It prevents multiple threads from running simultaneously in separate processes", "It is a mutex in CPython that allows only one native thread to execute Python bytecode at a time", "It prevents garbage collection from freeing memory", "It was removed in Python 3.0" },
                1, "The GIL is a mutual exclusion lock used by CPython to prevent race conditions in its reference-counting memory management."),
            new(4, "python", "How does a generator function differ from a regular function in Python?",
                new[] { "It must be declared with the 'async' keyword", "It uses the 'yield' keyword to produce values lazily on demand without loading everything into memory", "It cannot accept arguments", "It always returns a list" },
                1, "Generators pause execution at 'yield' and maintain stack state, producing elements lazily with O(1) memory footprint."),
            new(5, "python", "What does the @property decorator do in Python class definitions?",
                new[] { "Makes a variable public", "Transforms a method into a getter attribute that can be accessed without parentheses", "Converts a method into a classmethod", "Marks a method as deprecated" },
                1, "@property creates managed getter attributes while allowing validation through accompanying setter decorators.")
        };

        // TypeScript Questions
        _questionsByLang["typescript"] = new List<QuizQuestionItem>
        {
            new(1, "typescript", "What is the key difference between 'type' and 'interface' in TypeScript?",
                new[] { "Interfaces cannot define objects", "Interfaces support declaration merging, whereas types cannot be redeclared", "Types can only represent primitives", "There is zero difference" },
                1, "Interfaces can be opened and merged across multiple declarations; type aliases are closed once declared."),
            new(2, "typescript", "What does the 'keyof' type operator return in TypeScript?",
                new[] { "An array of values", "A union of string, number, or symbol literal types representing the keys of a given type", "A boolean indicating key existence", "The total count of keys" },
                1, "keyof T produces the union of known public property names of type T."),
            new(3, "typescript", "What is a Discriminated Union in TypeScript?",
                new[] { "A union of types with a shared literal property used for type narrowing", "A union of deprecated APIs", "A type that disallows any value", "A union between string and number" },
                0, "A discriminated union uses a common literal field (like 'kind' or 'type') so TypeScript can narrow types inside switch/if blocks.")
        };

        // C# Questions
        _questionsByLang["csharp"] = new List<QuizQuestionItem>
        {
            new(1, "csharp", "What is the difference between a 'class' and a 'struct' in C#?",
                new[] { "No difference in memory", "Classes are reference types stored on the heap; structs are value types stored on the stack or inline", "Structs cannot have methods", "Classes cannot implement interfaces" },
                1, "Classes are reference types with heap allocation and GC management; structs are value types copied by value."),
            new(2, "csharp", "What does the 'yield return' keyword do in C#?",
                new[] { "Throws a runtime exception", "Creates a state-machine iterator returning elements of IEnumerable one at a time", "Returns immediately and terminates execution", "Yields processor time to another thread" },
                1, "yield return tells the compiler to generate an IEnumerator state machine that lazily evaluates and emits values."),
            new(3, "csharp", "In ASP.NET Core, what is the purpose of Minimal APIs introduced in .NET 6+?",
                new[] { "To create lightweight HTTP APIs with minimal overhead, routing directly through WebApplication endpoints without controllers", "To build GUI Windows applications", "To replace SQL databases", "To disable HTTPS security" },
                0, "Minimal APIs provide streamlined syntax to define HTTP endpoints with minimal ceremony and lower memory overhead compared to MVC controllers.")
        };

        // HTML Questions
        _questionsByLang["html"] = new List<QuizQuestionItem>
        {
            new(1, "html", "What is the primary semantic purpose of the <main> tag?",
                new[] { "To hold navigational links", "To encapsulate the central dominant content of the document body, unique to the page", "To style text with bold font", "To declare meta headers" },
                1, "The <main> element represents the dominant content of the <body> of a document that is unique to that document.")
        };

        // CSS Questions
        _questionsByLang["css"] = new List<QuizQuestionItem>
        {
            new(1, "css", "What does 'display: flex' do to the immediate direct children of a container?",
                new[] { "Hides them from view", "Converts them into flex items positioned along a main axis and cross axis", "Converts them into inline spans", "Clears all floats" },
                1, "Setting display: flex turns the element into a flex container and its direct children into flex items with flexible alignment.")
        };

        // JavaScript Questions
        _questionsByLang["javascript"] = new List<QuizQuestionItem>
        {
            new(1, "javascript", "What is the event loop's task queue priority between microtasks and macrotasks?",
                new[] { "Macrotasks run before microtasks", "All microtasks in the microtask queue run to completion before the next macrotask is dequeued", "They alternate 1-to-1", "Timers run before Promises" },
                1, "The JavaScript runtime drains the entire microtask queue (Promise callbacks, queueMicrotask) before executing the next macrotask (setTimeout, setInterval).")
        };
    }

}
