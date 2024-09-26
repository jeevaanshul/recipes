import React, { useState } from 'react';

const ReviewInput = ({ recipeId, addReview }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() !== '') {  // Ensure there's no whitespace-only submission
      addReview(recipeId, review);
      setReview('');  // Clear review input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        type="text"
        placeholder="Add a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="border p-2 rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-500 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewInput;
