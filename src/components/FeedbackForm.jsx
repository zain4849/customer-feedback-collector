import React, { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
        <textarea value={comment} onChange={(e) => {
            setComment(e.target.value)
        }}></textarea>
      </form>
    </>
  );
};

export default FeedbackForm;
