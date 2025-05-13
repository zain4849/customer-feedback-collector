import React, { useState } from "react";

const FeedbackForm = ({ AddOnfeedback }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  let messages = []

  const handleSubmit = (e) => {
    e.preventDefault();


    const newFeedback = {
      rating: rating,
      comment: comment,
      id: Date.now()
    }

    AddOnfeedback(newFeedback)

    setRating(1)
    setComment('')
    
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Leave Your Feedback</h2>
        <label>Rating (1-5)</label>
        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => {
            setRating((e.target.value));
          }}
          required
        />
        <button type="submit">Submit Feedback</button>

        <label>Comment:</label>
        <textarea placeholder="Leave a comment" value={comment} onChange={(e) => {
            setComment(e.target.value)
        }}></textarea>
      </form>
    </>
  );
};

export default FeedbackForm;
