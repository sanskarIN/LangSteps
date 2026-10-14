namespace LangSteps.Server.Models;

public record LanguageModule(
    string Id,
    string Name,
    string Slug,
    string Icon,
    string Title,
    string Description,
    string Path,
    int ConceptCount,
    int CategoryCount,
    string[] Categories
);

public record ConceptItem(
    string Id,
    string ModuleId,
    string Title,
    string Badge,
    string Emoji,
    string DefaultCode,
    string Summary
);

public record QuizQuestionItem(
    int Id,
    string Language,
    string Question,
    string[] Options,
    int Answer,
    string Explanation,
    string Difficulty = "medium",
    string? CodeSnippet = null
);

public record QuizSubmissionRequest(
    string Language,
    Dictionary<int, int> Answers,
    int TimeSpentSeconds,
    string? Username = null
);

public record QuestionReviewItem(
    int QuestionId,
    string Question,
    int SelectedOption,
    int CorrectOption,
    bool IsCorrect,
    string Explanation
);

public record QuizResultResponse(
    string Language,
    int Score,
    int Total,
    int Percentage,
    string Tier,
    string Color,
    int XpEarned,
    int TimeSpentSeconds,
    string Timestamp,
    List<QuestionReviewItem> Review
);

public record LeaderboardEntryItem(
    string Id,
    string Username,
    int TotalXP,
    int QuizzesCompleted,
    int MasteredCount,
    string RankTitle,
    string AvatarSeed,
    string Date
);

public record HealthStatusResponse(
    string Status,
    string Version,
    string Platform,
    string Timestamp,
    string ServerTime,
    string DotNetVersion,
    int ModuleCount,
    int TotalQuestions
);
