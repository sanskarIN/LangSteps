/**
 * LangSteps C# 13 & ASP.NET Core Mastery Module
 * Author: Sanskar <sanskarin@outlook.in>
 * Version: 1.0.0 (.NET 9 / C# 13)
 */

export interface CSharpFeature {
  id: string;
  name: string;
  version: 'C# 9' | 'C# 10' | 'C# 11' | 'C# 12' | 'C# 13';
  category: 'syntax' | 'linq' | 'aspnet' | 'concurrency' | 'types';
  summary: string;
  example: string;
}

export class CSharpModule {
  private features: CSharpFeature[] = [
    {
      id: 'primary-constructors',
      name: 'Primary Constructors on Classes & Structs',
      version: 'C# 12',
      category: 'syntax',
      summary: 'Declare parameters directly on the type header, automatically capturing constructor arguments.',
      example: 'public class TelemetryWorker(ILogger<TelemetryWorker> logger, IStatsService stats) {\n    public void Log() => logger.LogInformation("Stats: {0}", stats.Count);\n}'
    },
    {
      id: 'pattern-matching',
      name: 'Recursive Pattern Matching & Switch Expressions',
      version: 'C# 11',
      category: 'syntax',
      summary: 'Expressive type and property checking without verbose casting or nested if-statements.',
      example: 'public static decimal CalculateTax(object entity) => entity switch {\n    Order { Total: > 1000m } o => o.Total * 0.12m,\n    Order o => o.Total * 0.05m,\n    _ => 0m\n};'
    },
    {
      id: 'records-immutability',
      name: 'Record Types & Non-Destructive Mutation (with)',
      version: 'C# 10',
      category: 'types',
      summary: 'Nominal reference and value types with value-based equality semantics and with expressions.',
      example: 'public record UserProfile(string Username, string Role);\nvar admin = user with { Role = "Admin" };'
    },
    {
      id: 'linq-query-pipeline',
      name: 'LINQ & Deferred Execution Expressions',
      version: 'C# 9',
      category: 'linq',
      summary: 'Type-safe functional transformations evaluated lazily via IEnumerable and IQueryable pipelines.',
      example: 'var topStudents = students\n    .Where(s => s.Gpa >= 3.8)\n    .OrderByDescending(s => s.Score)\n    .Take(10)\n    .ToList();'
    },
    {
      id: 'minimal-apis',
      name: 'ASP.NET Core Minimal APIs',
      version: 'C# 12',
      category: 'aspnet',
      summary: 'High-throughput microservice endpoints using source-generated routing and dependency injection.',
      example: 'var app = WebApplication.Create();\napp.MapGet("/api/health", () => Results.Ok(new { Status = "Healthy" }));\napp.Run();'
    },
    {
      id: 'async-streams',
      name: 'Async Streams & IAsyncEnumerable<T>',
      version: 'C# 10',
      category: 'concurrency',
      summary: 'Pull-based asynchronous data streaming over networks without buffering entire datasets into memory.',
      example: 'public async IAsyncEnumerable<int> StreamMetricsAsync([EnumeratorCancellation] CancellationToken ct = default) {\n    for (int i = 0; i < 100; i++) {\n        await Task.Delay(100, ct);\n        yield return i;\n    }\n}'
    },
    {
      id: 'params-collections',
      name: 'Params Collections & Span Optimization',
      version: 'C# 13',
      category: 'syntax',
      summary: 'Params modifier extended beyond arrays to ReadOnlySpan<T>, List<T>, and IEnumerable<T> without heap allocation overhead.',
      example: 'public static void LogEvents(params ReadOnlySpan<string> events) {\n    foreach (var e in events) Console.WriteLine(e);\n}'
    }
  ];

  public getAllFeatures(): CSharpFeature[] {
    return [...this.features];
  }

  public getByCategory(category: CSharpFeature['category']): CSharpFeature[] {
    return this.features.filter(f => f.category === category);
  }

  public search(query: string): CSharpFeature[] {
    const q = query.toLowerCase();
    return this.features.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.summary.toLowerCase().includes(q)
    );
  }
}
