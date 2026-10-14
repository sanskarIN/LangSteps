using System.Collections.Concurrent;
using LangSteps.Server.Models;

namespace LangSteps.Server.Services;

public interface IFeedbackService
{
    UserFeedbackResponse SubmitFeedback(UserFeedbackRequest request);
    IEnumerable<UserFeedbackRequest> GetAllFeedback();
}

public class FeedbackService : IFeedbackService
{
    private static readonly ConcurrentBag<(string Id, UserFeedbackRequest Data, DateTime Timestamp)> Feedbacks = [];

    public UserFeedbackResponse SubmitFeedback(UserFeedbackRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email) || !request.Email.Contains('@'))
        {
            return new UserFeedbackResponse(false, string.Empty, "Invalid email address format.", DateTime.UtcNow);
        }

        if (string.IsNullOrWhiteSpace(request.Message) || request.Message.Length < 5)
        {
            return new UserFeedbackResponse(false, string.Empty, "Message must contain at least 5 characters.", DateTime.UtcNow);
        }

        var refId = $"FB-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString()[..8].ToUpperInvariant()}";
        var timestamp = DateTime.UtcNow;

        Feedbacks.Add((refId, request, timestamp));

        return new UserFeedbackResponse(
            true,
            refId,
            "Thank you! Your feedback has been logged into the LangSteps feedback engine.",
            timestamp
        );
    }

    public IEnumerable<UserFeedbackRequest> GetAllFeedback()
    {
        return Feedbacks.Select(f => f.Data);
    }
}
