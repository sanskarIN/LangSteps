using LangSteps.Server.Models;
using LangSteps.Server.Services;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Register Core Services
builder.Services.AddSingleton<IContentService, ContentService>();
builder.Services.AddSingleton<IQuizService, QuizService>();
builder.Services.AddSingleton<IProfileService, ProfileService>();
builder.Services.AddSingleton<IExecutionService, ExecutionService>();
builder.Services.AddSingleton<IRustService, RustService>();
builder.Services.AddSingleton<IStatsService, StatsService>();
builder.Services.AddSingleton<IFeedbackService, FeedbackService>();

// Enable CORS for frontend and GitHub Pages
builder.Services.AddCors(options =>
{
    options.AddPolicy("SiteOrigins", policy =>
    {
        policy.WithOrigins("https://sanskarin.github.io", "http://localhost:3000", "http://localhost:5173")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("SiteOrigins");

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
        Version: "1.1.1",
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
    if (string.IsNullOrWhiteSpace(request.Language) || quiz.GetQuestions(request.Language).Count == 0)
    {
        return Results.BadRequest(new { error = "Choose a language with available quiz questions." });
    }
    if (request.Answers is null || request.TimeSpentSeconds < 0 || request.TimeSpentSeconds > 86400)
    {
        return Results.BadRequest(new { error = "Answers and a valid elapsed time (0-86400 seconds) are required." });
    }
    if (request.Username?.Trim().Length > 40)
    {
        return Results.BadRequest(new { error = "Username must be 40 characters or fewer." });
    }

    var result = quiz.Evaluate(request);
    return Results.Ok(result);
});

// 6. Leaderboard
app.MapGet("/api/leaderboard", (IQuizService quiz) =>
{
    return Results.Ok(quiz.GetLeaderboard());
});

// Scores originate from evaluated quizzes; arbitrary XP submissions are not accepted.
// This optional demo backend's leaderboard is in-memory and not identity-verified.

// // 7. Developer Profile & Official Ecosystem Links
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
        Version: "1.1.1",
        Timestamp: DateTime.UtcNow.ToString("o")
    );
    return Results.Ok(stats);
});

// 10. Rust Systems Curriculum & Diagnostics
app.MapGet("/api/rust/curriculum", (IRustService rust) => Results.Ok(rust.GetCurriculum()));

app.MapGet("/api/rust/category/{category}", (string category, IRustService rust) =>
    Results.Ok(rust.GetTopicsByCategory(category)));

app.MapPost("/api/rust/diagnose", (RustDiagnoseRequest request, IRustService rust) =>
{
    if (string.IsNullOrWhiteSpace(request.ErrorCode))
    {
        return Results.BadRequest(new { error = "ErrorCode is required (e.g. E0382)." });
    }
    return Results.Ok(rust.DiagnoseError(request));
});

// 11. System Telemetry & Benchmark Suite
app.MapGet("/api/stats/extended", (IStatsService stats) => Results.Ok(stats.GetTelemetry()));

app.MapGet("/api/benchmark/suite", (IStatsService stats) => Results.Ok(stats.GetBenchmarkSuite()));

// 12. User Feedback & Inquiries
app.MapPost("/api/feedback/submit", (UserFeedbackRequest request, IFeedbackService feedback) =>
{
    var response = feedback.SubmitFeedback(request);
    return response.Success ? Results.Ok(response) : Results.BadRequest(response);
});

// Feedback messages contain personal data. No anonymous read endpoint is exposed.

app.Run();

