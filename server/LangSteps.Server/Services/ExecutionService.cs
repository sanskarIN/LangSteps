using LangSteps.Server.Models;

namespace LangSteps.Server.Services;

public interface IExecutionService
{
    Task<ExecutionResult> ExecuteAsync(ExecutionRequest request);
}

/// <summary>
/// The static LangSteps site does not include a secured code-execution sandbox.
/// Never report a simulated output as a successful compilation or runtime result.
/// A separate isolated execution service would require authentication, quotas,
/// process isolation, network restrictions, and per-request resource limits.
/// </summary>
public sealed class ExecutionService : IExecutionService
{
    public Task<ExecutionResult> ExecuteAsync(ExecutionRequest request)
    {
        var language = (request.Language ?? "unknown").Trim().ToLowerInvariant();
        var message = string.IsNullOrWhiteSpace(request.Code)
            ? "Enter source code before requesting execution."
            : "Remote code execution is disabled in LangSteps v1.1.0. Run this example locally with a language compiler or use a trusted sandbox. No code was executed.";

        return Task.FromResult(new ExecutionResult(
            Success: false,
            Output: string.Empty,
            Error: message,
            ExecutionTimeMs: 0,
            Language: language,
            Timestamp: DateTime.UtcNow.ToString("o")
        ));
    }
}
