using LangSteps.Server.Models;

namespace LangSteps.Server.Services;

public interface IContentService
{
    IReadOnlyList<LanguageModule> GetAllModules();
    LanguageModule? GetModuleById(string id);
}

public class ContentService : IContentService
{
    private readonly List<LanguageModule> _modules = new()
    {
        new LanguageModule(
            "html", "HTML", "html", "📄",
            "HTML Mastery",
            "100 HTML Tags Explained In-Depth with Interactive Sandboxes and Standards",
            "HTML/index.html",
            100, 8,
            new[] { "Document", "Inline", "Block", "Forms", "Media", "Tables", "Embedded", "Interactive" }
        ),
        new LanguageModule(
            "css", "CSS", "css", "🎨",
            "CSS Mastery",
            "100 CSS Properties with Live Visual Playgrounds and Responsive Layouts",
            "CSS/index.html",
            100, 9,
            new[] { "Layout", "Flexbox", "Grid", "Typography", "Colors", "Animations", "Transforms", "Filter", "Modern" }
        ),
        new LanguageModule(
            "javascript", "JavaScript", "javascript", "⚡",
            "JavaScript Mastery",
            "Complete ECMAScript & Browser Runtime Curriculum with Asynchronous Patterns",
            "JavaScript/index.html",
            100, 10,
            new[] { "Basics", "Objects", "Functions", "Async", "DOM", "Prototypes", "ESNext", "Patterns", "Performance", "APIs" }
        ),
        new LanguageModule(
            "react", "React", "react", "⚛️",
            "React Mastery",
            "Hooks, Suspense, State Management, Server Components, and Architecture",
            "React/index.html",
            100, 8,
            new[] { "Components", "Hooks", "State", "Effects", "Performance", "Patterns", "Router", "SSR" }
        ),
        new LanguageModule(
            "python", "Python", "python", "🐍",
            "Python Mastery",
            "Core, Memory Model, Asyncio, Django, FastAPI, NumPy, and Metaclasses",
            "Python/index.html",
            100, 12,
            new[] { "Basics", "Data Structures", "Control Flow", "Functions", "OOP", "System", "Concurrency", "Frameworks", "Data Science", "Advanced" }
        ),
        new LanguageModule(
            "typescript", "TypeScript", "typescript", "🔷",
            "TypeScript Mastery",
            "Generics, Conditional Types, Utility Types, Decorators, and Compiler APIs",
            "TypeScript/index.html",
            50, 6,
            new[] { "Types", "Interfaces", "Generics", "Advanced Types", "Decorators", "Compiler" }
        ),
        new LanguageModule(
            "rust", "Rust", "rust", "🦀",
            "Rust Mastery",
            "Ownership, Borrowing, Lifetimes, Concurrency, and Zero-Cost Systems Engineering",
            "Rust/index.html",
            35, 6,
            new[] { "Basics", "Ownership", "Modeling", "Functional", "Concurrency", "Systems" }
        ),
        new LanguageModule(
            "go", "Go", "go", "🐹", "Go Mastery",
            "Guided Go lessons: types, interfaces, concurrency, testing and APIs",
            "Go/index.html", 15, 7,
            new[] { "Foundations", "Collections", "Types", "Reliability", "Concurrency", "Tooling", "Web", "Advanced" }
        ),
        new LanguageModule(
            "sql", "SQL", "sql", "🗄️", "SQL Mastery",
            "Guided SQL lessons: querying, modeling, transactions and safe parameters",
            "SQL/index.html", 15, 8,
            new[] { "Foundations", "Queries", "Data changes", "Analytics", "Reliability", "Schema", "Performance", "Security" }
        ),
        new LanguageModule(
            "csharp", "C#", "csharp", "💜", "C# 13 & ASP.NET Core",
            "Guided C# 13 and .NET 9 lessons, async, Minimal APIs and DI",
            "CSharp/index.html", 15, 4,
            new[] { "C# basics", "Reliability", "ASP.NET Core", "Quality" }
        )
    };

    public IReadOnlyList<LanguageModule> GetAllModules() => _modules;

    public LanguageModule? GetModuleById(string id) =>
        _modules.FirstOrDefault(m => m.Id.Equals(id, StringComparison.OrdinalIgnoreCase) ||
                                     m.Slug.Equals(id, StringComparison.OrdinalIgnoreCase));
}
