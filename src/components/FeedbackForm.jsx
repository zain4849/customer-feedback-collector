import React, { useState } from "react";
import StarRating from "./StarRating";

const FeedbackForm = ({ AddOnFeedback }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false)

  const handleCheckboxChange = (e) => {
    setIsAnonymous(e.target.checked)
  }



  let messages = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name: name,
      rating: rating,
      comment: comment,
      anonymous: isAnonymous, 
      id: Date.now(),
    };

    AddOnFeedback(newFeedback);

    setIsAnonymous(false)
    setRating(0);
    setComment("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Leave Your Feedback 📝</h2>
        <div className="nameOption">
          <input disabled={isAnonymous} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name" />
          <div className="hideOption">
            <label htmlFor="anonymous">Anonymous: </label>
            <input  checked={isAnonymous} onChange={handleCheckboxChange} type="checkbox" name="anonymous" id="anonymous" />
          </div>
        </div>
        <label>Rating (1-5)</label>
        <StarRating rating={rating} setRating={setRating} />

        <label>Comment:</label>
        <textarea
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
