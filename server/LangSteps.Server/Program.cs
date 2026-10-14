using LangSteps.Server.Models;
using LangSteps.Server.Services;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Register Core Services
builder.Services.AddSingleton<IContentService, ContentService>();
builder.Services.AddSingleton<IQuizService, QuizService>();

// Enable CORS for frontend and GitHub Pages
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

// Serve frontend static files from the repository root if directory exists
var repoRoot = Path.GetFullPath(Path.Combine(app.Environment.ContentRootPath, "..", ".."));
if (Directory.Exists(repoRoot))
{
    app.UseDefaultFiles(new DefaultFilesOptions
    {
        FileProvider = new PhysicalFileProvider(repoRoot),
        RequestPath = ""
    });

    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(repoRoot),
        RequestPath = ""
    });
}

// ===== API ENDPOINTS =====

// 1. Health & Platform Status
app.MapGet("/api/health", (IContentService content, IQuizService quiz) =>
{
    var response = new HealthStatusResponse(
        Status: "healthy",
        Version: "5.3.0",
        Platform: "LangSteps.Server (ASP.NET Core / C#)",
        Timestamp: DateTime.UtcNow.ToString("o"),
        ServerTime: DateTime.UtcNow.ToString("R"),
        DotNetVersion: Environment.Version.ToString(),
        ModuleCount: content.GetAllModules().Count,
        TotalQuestions: quiz.GetTotalQuestionCount()
    );
    return Results.Ok(response);
});

// 2. Language Modules Catalog
app.MapGet("/api/modules", (IContentService content) =>
{
    return Results.Ok(content.GetAllModules());
});

// 3. Single Module By ID
app.MapGet("/api/modules/{id}", (string id, IContentService content) =>
{
    var module = content.GetModuleById(id);
    return module is not null ? Results.Ok(module) : Results.NotFound(new { message = $"Module '{id}' not found." });
});

// 4. Quiz Questions for Language
app.MapGet("/api/quiz/{language}", (string language, IQuizService quiz) =>
{
    var questions = quiz.GetQuestions(language);
    return Results.Ok(questions);
});

// 5. Submit Quiz & Calculate Results
app.MapPost("/api/quiz/submit", (QuizSubmissionRequest request, IQuizService quiz) =>
{
    if (string.IsNullOrWhiteSpace(request.Language))
    {
        return Results.BadRequest(new { error = "Language is required in submission." });
    }

    var result = quiz.Evaluate(request);
    return Results.Ok(result);
});

// 6. Leaderboard
app.MapGet("/api/leaderboard", (IQuizService quiz) =>
{
    return Results.Ok(quiz.GetLeaderboard());
});

app.MapPost("/api/leaderboard", (LeaderboardSubmitRequest body, IQuizService quiz) =>
{
    if (string.IsNullOrWhiteSpace(body.Username))
    {
        return Results.BadRequest(new { error = "Username is required." });
    }

    var entry = quiz.AddLeaderboardEntry(body.Username, body.XpEarned, body.Language ?? "general");
    return Results.Ok(entry);
});

app.Run();

public record LeaderboardSubmitRequest(string Username, int XpEarned, string? Language = null);
