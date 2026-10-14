namespace LangSteps.Server.Models;

public record SocialLinks(
    string Bmc,
    string Razorpay,
    string Linkedin,
    string X,
    string Devto,
    string Bluesky,
    string Instagram,
    string Threads,
    string Github
);

public record SupportLinks(
    string BuyMeACoffee,
    string Razorpay
);

public record EcosystemUrls(
    string About,
    string Contact,
    string Projects,
    string Blog,
    string Repository,
    string Docs
);

public record DeveloperProfile(
    string Name,
    string Username,
    string Email,
    string Role,
    string Bio,
    SocialLinks Socials,
    SupportLinks Support,
    EcosystemUrls Ecosystem
);

public record ExecutionRequest(
    string Language,
    string Code,
    int TimeoutMs = 5000,
    string? Input = null
);

public record ExecutionResult(
    bool Success,
    string Output,
    string? Error,
    long ExecutionTimeMs,
    string Language,
    string Timestamp
);

public record PlatformStatsResponse(
    int ModuleCount,
    int TotalQuestions,
    string[] SupportedLanguages,
    int EcosystemLinksCount,
    string Version,
    string Timestamp
);
