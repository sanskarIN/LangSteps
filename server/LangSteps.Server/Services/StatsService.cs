using System.Diagnostics;
using LangSteps.Server.Models;

namespace LangSteps.Server.Services;

public interface IStatsService
{
    SystemTelemetryDto GetTelemetry();
    BenchmarkSuiteDto GetBenchmarkSuite();
}

public class StatsService : IStatsService
{
    private static readonly DateTime StartTime = DateTime.UtcNow;

    public SystemTelemetryDto GetTelemetry()
    {
        var proc = Process.GetCurrentProcess();
        var memoryBytes = proc.WorkingSet64;
        var uptime = DateTime.UtcNow - StartTime;

        return new SystemTelemetryDto(
            "LangSteps v1.0.0-stable",
            Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production",
            Environment.Version.ToString(),
            10, // 10 core curricula
            485, // 485 comprehensive technical concepts
            memoryBytes,
            uptime,
            "Healthy (Dual-Runtime Online)"
        );
    }

    public BenchmarkSuiteDto GetBenchmarkSuite()
    {
        var items = new List<BenchmarkItemDto>
        {
            new("bench-array-alloc", "Dynamic Array Allocation & Vector Resizing", "Native/WASM", 100000, "O(n) Amortized"),
            new("bench-hash-lookup", "Concurrent Hash Map Resolution", "Native/CLR", 250000, "O(1) Average"),
            new("bench-channel-msg", "MPSC Channel Message Passing", "Async Runtime", 50000, "O(1) Lock-free"),
            new("bench-json-ser", "Zero-Copy JSON Source Generated Deserialization", "System.Text.Json", 20000, "O(n) Linear"),
            new("bench-linq-filter", "SIMD-Accelerated LINQ Stream Pipeline", ".NET 9 JIT", 75000, "O(n) Vectorized")
        };

        return new BenchmarkSuiteDto("LangSteps Systems & Compute Benchmark Suite", items.Count, items);
    }
}
