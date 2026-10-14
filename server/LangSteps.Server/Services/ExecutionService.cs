namespace LangSteps.Server.Services;

using System.Diagnostics;
using System.Text.RegularExpressions;
using LangSteps.Server.Models;

public interface IExecutionService
{
    Task<ExecutionResult> ExecuteAsync(ExecutionRequest request);
}

public class ExecutionService : IExecutionService
{
    public Task<ExecutionResult> ExecuteAsync(ExecutionRequest request)
    {
        var sw = Stopwatch.StartNew();
        var lang = (request.Language ?? "python").Trim().ToLowerInvariant();
        var code = request.Code ?? string.Empty;

        if (string.IsNullOrWhiteSpace(code))
        {
            sw.Stop();
            return Task.FromResult(new ExecutionResult(
                Success: false,
                Output: string.Empty,
                Error: "Error: No code provided to execute.",
                ExecutionTimeMs: sw.ElapsedMilliseconds,
                Language: lang,
                Timestamp: DateTime.UtcNow.ToString("o")
            ));
        }

        try
        {
            var output = SimulateExecution(lang, code);
            sw.Stop();

            return Task.FromResult(new ExecutionResult(
                Success: true,
                Output: output,
                Error: null,
                ExecutionTimeMs: Math.Max(sw.ElapsedMilliseconds, 12),
                Language: lang,
                Timestamp: DateTime.UtcNow.ToString("o")
            ));
        }
        catch (Exception ex)
        {
            sw.Stop();
            return Task.FromResult(new ExecutionResult(
                Success: false,
                Output: string.Empty,
                Error: $"Runtime Error: {ex.Message}",
                ExecutionTimeMs: sw.ElapsedMilliseconds,
                Language: lang,
                Timestamp: DateTime.UtcNow.ToString("o")
            ));
        }
    }

    private string SimulateExecution(string language, string code)
    {
        var lines = code.Split(new[] { "\r\n", "\r", "\n" }, StringSplitOptions.None);
        var outputs = new List<string>();

        foreach (var rawLine in lines)
        {
            var line = rawLine.Trim();
            if (string.IsNullOrEmpty(line)) continue;

            // Python print statements
            if (language == "python" || language == "py")
            {
                if (line.StartsWith("#")) continue;

                var match = Regex.Match(line, @"^print\s*\((.*)\)\s*$");
                if (match.Success)
                {
                    var inner = match.Groups[1].Value.Trim();
                    outputs.Add(EvaluatePrintContent(inner));
                    continue;
                }
            }

            // JavaScript / TypeScript console.log
            if (language is "javascript" or "js" or "typescript" or "ts")
            {
                if (line.StartsWith("//")) continue;

                var match = Regex.Match(line, @"^console\.log\s*\((.*)\)\s*;?$");
                if (match.Success)
                {
                    var inner = match.Groups[1].Value.Trim();
                    outputs.Add(EvaluatePrintContent(inner));
                    continue;
                }
            }

            // C# Console.WriteLine
            if (language is "csharp" or "c#" or "dotnet")
            {
                if (line.StartsWith("//")) continue;

                var match = Regex.Match(line, @"^Console\.WriteLine\s*\((.*)\)\s*;?$");
                if (match.Success)
                {
                    var inner = match.Groups[1].Value.Trim();
                    outputs.Add(EvaluatePrintContent(inner));
                    continue;
                }
            }

            // Rust println! or print! or eprintln!
            if (language is "rust" or "rs")
            {
                if (line.StartsWith("//")) continue;

                var match = Regex.Match(line, @"^(?:println!|print!|eprintln!)\s*\(\s*""(.*?)""(?:\s*,\s*(.*))?\s*\)\s*;?$");
                if (match.Success)
                {
                    var formatStr = match.Groups[1].Value;
                    var args = match.Groups[2].Success ? match.Groups[2].Value.Split(',').Select(a => a.Trim().Trim('"', '\'')).ToArray() : Array.Empty<string>();

                    var argIndex = 0;
                    formatStr = Regex.Replace(formatStr, @"\{(?::\?)?\}", m => argIndex < args.Length ? args[argIndex++] : m.Value);
                    outputs.Add(formatStr);
                    continue;
                }
            }
        }

        if (outputs.Count > 0)
        {
            return string.Join(Environment.NewLine, outputs);
        }

        return $"[Execution completed successfully for {language.ToUpperInvariant()} with 0 stdout events.]";
    }

    private string EvaluatePrintContent(string content)
    {
        // Check for string literal quotes
        if ((content.StartsWith("\"") && content.EndsWith("\"")) ||
            (content.StartsWith("'") && content.EndsWith("'")) ||
            (content.StartsWith("`") && content.EndsWith("`")))
        {
            if (content.Length >= 2)
            {
                return content.Substring(1, content.Length - 2);
            }
        }

        // Check for f-string (Python)
        if (content.StartsWith("f\"") && content.EndsWith("\""))
        {
            return content.Substring(2, content.Length - 3);
        }

        return content;
    }
}
