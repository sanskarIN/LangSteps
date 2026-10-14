using LangSteps.Server.Models;
using LangSteps.Server.Services;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Register Core Services
builder.Services.AddSingleton<IContentService, ContentService>();
builder.Services.AddSingleton<IQuizService, QuizService>();
builder.Services.AddSingleton<IProfileService, ProfileService>();
builder.Services.AddSingleton<IExecutionService, ExecutionService>();

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
        Version: "5.4.0",
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

// 7. Developer Profile & Official Ecosystem Links
app.MapGet("/api/profile", (IProfileService profileService) =>
{
    return Results.Ok(profileService.GetProfile());
});

app.MapGet("/api/profile/socials", (IProfileService profileService) =>
{
    return Results.Ok(profileService.GetSocials());
});

app.MapGet("/api/profile/ecosystem", (IProfileService profileService) =>
{
    return Results.Ok(profileService.GetEcosystem());
});

// 8. Interactive Code Playground Execution
app.MapPost("/api/playground/execute", async (ExecutionRequest request, IExecutionService executionService) =>
{
    var result = await executionService.ExecuteAsync(request);
    return Results.Ok(result);
});

// 9. Platform Summary Statistics
app.MapGet("/api/stats/summary", (IContentService content, IQuizService quiz) =>
{
    var modules = content.GetAllModules();
    var stats = new PlatformStatsResponse(
        ModuleCount: modules.Count,
        TotalQuestions: quiz.GetTotalQuestionCount(),
        SupportedLanguages: modules.Select(m => m.Slug).ToArray(),
        EcosystemLinksCount: 12,
        Version: "5.4.0",
        Timestamp: DateTime.UtcNow.ToString("o")
    );
    return Results.Ok(stats);
});

app.Run();

public record LeaderboardSubmitRequest(string Username, int XpEarned, string? Language = null);
