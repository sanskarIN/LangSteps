namespace LangSteps.Server.Models;

/// <summary>
/// Rust Curriculum and Systems Topic Data Transfer Object.
/// </summary>
public record RustTopicDto(
    string Id,
    string Category,
    string Title,
    string Summary,
    string CodeExample,
    string[] Tags
);

/// <summary>
/// Comprehensive Rust Curriculum Catalog DTO.
/// </summary>
public record RustCurriculumDto(
    string Platform,
    string Edition,
    int TotalTopics,
    string[] Categories,
    IEnumerable<RustTopicDto> Topics
);

/// <summary>
/// Borrow Checker Diagnostic Request DTO.
/// </summary>
public record RustDiagnoseRequest(
    string ErrorCode,
    string? SourceCode
);

/// <summary>
/// Borrow Checker Diagnostic Result DTO.
/// </summary>
public record RustDiagnoseResponse(
    string ErrorCode,
    string Name,
    string Description,
    string Cause,
    string Solution,
    string BadSnippet,
    string GoodSnippet,
    bool Found
);

/// <summary>
/// System and Platform Telemetry DTO.
/// </summary>
public record SystemTelemetryDto(
    string PlatformVersion,
    string Environment,
    string RuntimeVersion,
    int TotalCurricula,
    int TotalConcepts,
    long AllocatedMemoryBytes,
    TimeSpan Uptime,
    string Status
);

/// <summary>
/// Benchmark Suite Definition DTO.
/// </summary>
public record BenchmarkSuiteDto(
    string SuiteName,
    int TotalBenchmarks,
    IEnumerable<BenchmarkItemDto> Items
);

public record BenchmarkItemDto(
    string Id,
    string Name,
    string TargetRuntime,
    int Iterations,
    string Complexity
);

/// <summary>
/// Feedback Submission Request DTO.
/// </summary>
public record UserFeedbackRequest(
    string Name,
    string Email,
    string Category,
    string Message
);

/// <summary>
/// Feedback Submission Result DTO.
/// </summary>
public record UserFeedbackResponse(
    bool Success,
    string ReferenceId,
    string Message,
    DateTime SubmittedAtUtc
);
