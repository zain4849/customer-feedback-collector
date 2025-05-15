const FeedbackList = ({ feedbacks, name }) => {
  if (feedbacks.length === 0) {
    return (
      <p style={{ color: "lightgray", textAlign: "center", marginTop: "15px" }}>
        No feedbacks yet.
      </p>
    );
  }

  const getRatingStars = (rating) => {
    switch (rating) {
      case 1:
        return "⭐";
      case 2:
        return "⭐⭐";
      case 3:
        return "⭐⭐⭐";
      case 4:
        return "⭐⭐⭐⭐";
      case 5:
        return "⭐⭐⭐⭐⭐";
      default:
        return "⭐";
    }
  };

  return (
    <>
      <div className="feedback-list">
        <h2>Feedbacks:</h2>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <p className="feedback-rating"><span className="feedback-name">{feedback.anonymous ? "Anonymous" : feedback.name}</span> {getRatingStars(feedback.rating)}</p>
            <p className="feedback-comment">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeedbackList;
