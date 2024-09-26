import React, { useState } from 'react';
import ReviewInput from './ReviewInput';

const RecipeCard = ({ recipe, onToggleFavorite, addReview }) => {
  const [reviews, setReviews] = useState(recipe.reviews || []);

  const handleAddReview = (recipeId, review) => {
    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
    addReview(recipeId, review); // Update review in parent
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <div className="relative h-48 w-full">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-white text-lg font-bold">{recipe.name}</h2>
          <button onClick={() => onToggleFavorite(recipe.id)} className="absolute top-2 right-2 text-white">
            {recipe.isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{recipe.description}</p>
        <a 
          href={recipe.url} 
          className="mt-2 inline-block text-blue-500 hover:underline"
        >
          View Recipe
        </a>

        {/* Render the Review Input */}
        <ReviewInput recipeId={recipe.id} addReview={handleAddReview} />

        {/* Display existing reviews */}
        <div className="mt-4">
          <h3 className="text-lg font-bold">Reviews:</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <p key={index} className="bg-gray-100 p-2 rounded mt-2">{review}</p>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
