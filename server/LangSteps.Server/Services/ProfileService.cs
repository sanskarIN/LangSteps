namespace LangSteps.Server.Services;

using LangSteps.Server.Models;

public interface IProfileService
{
    DeveloperProfile GetProfile();
    SocialLinks GetSocials();
    SupportLinks GetSupport();
    EcosystemUrls GetEcosystem();
}

public class ProfileService : IProfileService
{
    private readonly DeveloperProfile _profile;

    public ProfileService()
    {
        var socials = new SocialLinks(
            Bmc: "https://buymeacoffee.com/SanskarCodes",
            Razorpay: "https://razorpay.me/@SanskarCodes",
            Linkedin: "https://linkedin.com/in/SanskarCodes",
            X: "https://x.com/SanskarCodes",
            Devto: "https://dev.to/SanskarCodes",
            Bluesky: "https://SanskarCodes.bsky.social",
            Instagram: "https://instagram.com/SanskarCode",
            Github: "https://github.com/sanskarIN"
        );

        var support = new SupportLinks(
            BuyMeACoffee: "https://buymeacoffee.com/SanskarCodes",
            Razorpay: "https://razorpay.me/@SanskarCodes"
        );

        var ecosystem = new EcosystemUrls(
            About: "https://sanskarin.github.io/about",
            Contact: "https://sanskarin.github.io/contact",
            ContactForm: "https://sanskarin.github.io/contact/#send-a-message",
            Projects: "https://sanskarin.github.io/projects",
            Blog: "https://sanskarin.github.io/blog",
            Repository: "https://github.com/sanskarIN/LangSteps",
            Docs: "https://sanskarin.github.io/LangSteps"
        );

        _profile = new DeveloperProfile(
            Name: "Sanskar",
            Username: "sanskarIN",
            Email: "sanskarin@outlook.in",
            Role: "Software Engineer & Creator of LangSteps",
            Bio: "Empowering developers through interactive, high-fidelity polyglot programming pathways.",
            Socials: socials,
            Support: support,
            Ecosystem: ecosystem
        );
    }

    public DeveloperProfile GetProfile() => _profile;
    public SocialLinks GetSocials() => _profile.Socials;
    public SupportLinks GetSupport() => _profile.Support;
    public EcosystemUrls GetEcosystem() => _profile.Ecosystem;
}
