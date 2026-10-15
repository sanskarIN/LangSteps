window.LANGSTEPS_COURSE = {
  "slug": "csharp",
  "title": "C# 13 & ASP.NET Core Mastery",
  "summary": "15 lessons for C# 13 and .NET 9: language fundamentals, async patterns, minimal APIs, DI, testing, and security. Code snippets are not executed by the static site.",
  "lessons": [
    {
      "id": "hello",
      "category": "C# basics",
      "title": "Hello, .NET",
      "summary": "Create and run a console app using the .NET CLI.",
      "explanation": "Install the .NET 9 SDK for these lessons. dotnet new console scaffolds a project; top-level statements keep starter programs short.",
      "code": "// Program.cs\nConsole.WriteLine(\"Hello, LangSteps!\");\n// Run: dotnet run",
      "challenge": "Change the output and run with dotnet run.",
      "level": "Beginner"
    },
    {
      "id": "types",
      "category": "C# basics",
      "title": "Nullable types and inference",
      "summary": "Explore static types, var, and nullability.",
      "explanation": "The compiler checks types before execution. Turn on nullable reference types for safer APIs and use ? only when null is meaningful.",
      "code": "string language = \"C#\";\nint lessons = 15;\nstring? nickname = null;\nConsole.WriteLine($\"{language}: {lessons}\");",
      "challenge": "Declare a nullable int and check HasValue.",
      "level": "Beginner"
    },
    {
      "id": "records",
      "category": "C# basics",
      "title": "Records and immutability",
      "summary": "Represent value-like domain models with records.",
      "explanation": "Records generate useful equality and ToString behavior. The with expression makes a copy with selected properties changed.",
      "code": "public record Student(string Name, int XP);\nvar original = new Student(\"Sam\", 10);\nvar improved = original with { XP = 20 };\nConsole.WriteLine(improved);",
      "challenge": "Compare original and improved for equality.",
      "level": "Intermediate"
    },
    {
      "id": "collections",
      "category": "C# basics",
      "title": "Lists and dictionaries",
      "summary": "Manage strongly typed collections.",
      "explanation": "List<T> preserves order and supports indexing. Dictionary<TKey,TValue> maps unique keys to values.",
      "code": "var scores = new Dictionary<string, int> {\n  [\"Go\"] = 10, [\"C#\"] = 20\n};\nConsole.WriteLine(scores[\"C#\"]);",
      "challenge": "Use TryGetValue for a missing key.",
      "level": "Beginner"
    },
    {
      "id": "linq",
      "category": "C# basics",
      "title": "LINQ query pipelines",
      "summary": "Filter and transform sequences fluently.",
      "explanation": "Enumerable LINQ operators compose, and many are deferred until enumeration. Be conscious of repeated enumeration and side effects.",
      "code": "int[] points = { 3, 8, 13, 21 };\nvar top = points.Where(p => p >= 10).Select(p => p * 2);\nConsole.WriteLine(string.Join(\", \", top));",
      "challenge": "Add OrderByDescending before Select.",
      "level": "Intermediate"
    },
    {
      "id": "exceptions",
      "category": "Reliability",
      "title": "Exceptions and resource cleanup",
      "summary": "Handle exceptional failures and ensure cleanup.",
      "explanation": "Use try/catch for exceptional cases, not routine branching. IDisposable types should typically be held with using.",
      "code": "try {\n  var value = int.Parse(\"42\");\n  Console.WriteLine(value);\n} catch (FormatException) {\n  Console.WriteLine(\"Not a number\");\n}",
      "challenge": "Compare int.TryParse with exception-based parsing.",
      "level": "Intermediate"
    },
    {
      "id": "async",
      "category": "Reliability",
      "title": "async/await and cancellation",
      "summary": "Write responsive asynchronous operations.",
      "explanation": "Await I/O operations instead of blocking with .Result. CancellationToken propagates cancellation across async boundaries.",
      "code": "using var cts = new CancellationTokenSource();\ncts.CancelAfter(TimeSpan.FromSeconds(2));\ntry {\n  await Task.Delay(100, cts.Token);\n  Console.WriteLine(\"Done\");\n} catch (OperationCanceledException) {\n  Console.WriteLine(\"Cancelled\");\n}",
      "challenge": "Change the timeout to observe cancellation.",
      "level": "Intermediate"
    },
    {
      "id": "patterns",
      "category": "C# basics",
      "title": "Pattern matching",
      "summary": "Express conditional checks clearly.",
      "explanation": "Switch expressions and property patterns reduce nesting while retaining exhaustiveness checks in carefully modeled domains.",
      "code": "static string Describe(int value) => value switch {\n  < 0 => \"negative\",\n  0 => \"zero\",\n  _ => \"positive\"\n};\nConsole.WriteLine(Describe(-3));",
      "challenge": "Add a range for small positive values.",
      "level": "Intermediate"
    },
    {
      "id": "generics",
      "category": "C# basics",
      "title": "Generics and constraints",
      "summary": "Create reusable type-safe APIs.",
      "explanation": "Generic type parameters preserve information without casts. Add constraints when a function needs a supported operation.",
      "code": "static T First<T>(IReadOnlyList<T> values)\n{\n  if (values.Count == 0) throw new ArgumentException(\"Empty\");\n  return values[0];\n}\nConsole.WriteLine(First(new[] { 2, 3 }));",
      "challenge": "Change First to TryFirst for empty input.",
      "level": "Intermediate"
    },
    {
      "id": "di",
      "category": "ASP.NET Core",
      "title": "Dependency injection",
      "summary": "Register services with explicit lifetimes.",
      "explanation": "ASP.NET Core's built-in container supports Singleton, Scoped, and Transient lifetimes. Scoped services commonly live for one web request.",
      "code": "var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddScoped<IGreeter, Greeter>();\nvar app = builder.Build();\napp.MapGet(\"/greet\", (IGreeter service) => service.Hello());\napp.Run();\ninterface IGreeter { string Hello(); }\nclass Greeter : IGreeter { public string Hello() => \"Hello\"; }",
      "challenge": "Explain when a singleton must not depend on a scoped service.",
      "level": "Advanced"
    },
    {
      "id": "minimal",
      "category": "ASP.NET Core",
      "title": "Minimal Web APIs",
      "summary": "Build HTTP endpoints with structured results.",
      "explanation": "Minimal APIs map routes directly to handlers. Validate inputs and return suitable HTTP status codes, not just success responses.",
      "code": "var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\napp.MapGet(\"/api/health\", () => Results.Ok(new { status = \"healthy\" }));\napp.MapGet(\"/api/lessons/{id:int}\", (int id) =>\n  id > 0 ? Results.Ok(new { id }) : Results.BadRequest());\napp.Run();",
      "challenge": "Add a POST route with validation.",
      "level": "Intermediate"
    },
    {
      "id": "modelbinding",
      "category": "ASP.NET Core",
      "title": "DTO validation and binding",
      "summary": "Separate request contracts from internal models.",
      "explanation": "Use request DTOs with validation to reject malformed inputs. Treat all client-provided data as untrusted, even in internal tools.",
      "code": "record CreateNote(string Title);\nvar builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\napp.MapPost(\"/notes\", (CreateNote note) =>\n  string.IsNullOrWhiteSpace(note.Title)\n    ? Results.BadRequest(new { error = \"Title required\" })\n    : Results.Created(\"/notes/1\", new { id = 1, note.Title }));\napp.Run();",
      "challenge": "Add a maximum-length check for the title.",
      "level": "Advanced"
    },
    {
      "id": "security",
      "category": "ASP.NET Core",
      "title": "CORS and authentication",
      "summary": "Distinguish browser origin rules from API authorization.",
      "explanation": "CORS controls which browser origins may read responses; it is not authentication. Protect sensitive data with authentication and authorization regardless of CORS.",
      "code": "builder.Services.AddCors(options => options.AddPolicy(\"Site\", policy =>\n  policy.WithOrigins(\"https://example.github.io\")\n        .AllowAnyHeader().AllowAnyMethod()));\n// After app = builder.Build():\napp.UseCors(\"Site\");",
      "challenge": "Explain why AllowAnyOrigin does not secure private endpoints.",
      "level": "Advanced"
    },
    {
      "id": "testing",
      "category": "Quality",
      "title": "Unit tests with xUnit",
      "summary": "Verify behavior and prevent regressions.",
      "explanation": "Separate pure logic from transport concerns. A test project can use xUnit and run with dotnet test.",
      "code": "// In a test project with xUnit installed:\nusing Xunit;\npublic class ScoreTests {\n  [Theory]\n  [InlineData(1, 2, 3)]\n  [InlineData(-1, 1, 0)]\n  public void Adds(int a, int b, int expected) =>\n    Assert.Equal(expected, a + b);\n}",
      "challenge": "Write a failing test first, then fix the implementation.",
      "level": "Advanced"
    },
    {
      "id": "deployment",
      "category": "ASP.NET Core",
      "title": "Configuration and deployment",
      "summary": "Ship apps with environment-specific settings.",
      "explanation": "Store settings outside source control, enable HTTPS and logging, and use a real ASP.NET hosting service for server endpoints. GitHub Pages hosts static assets only.",
      "code": "// Example: read a required setting\nvar builder = WebApplication.CreateBuilder(args);\nstring? apiName = builder.Configuration[\"App:Name\"];\nif (string.IsNullOrWhiteSpace(apiName))\n  throw new InvalidOperationException(\"Set App:Name\");\nvar app = builder.Build();\napp.MapGet(\"/\", () => Results.Ok(new { apiName }));\napp.Run();",
      "challenge": "List which values belong in configuration rather than source.",
      "level": "Advanced"
    }
  ]
};
