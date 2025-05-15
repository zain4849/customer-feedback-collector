import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ setRating, rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={24}
          color={star <= rating ? "#ffc107" : "#e4e5e9"}
          onClick={() => {
            setRating(star);
          }}
          style={{ cursor: "pointer", transition: "color 0.2s" }}
        />
      ))}
    </div>
  );
};

export default StarRating;