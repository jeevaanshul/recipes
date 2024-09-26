// src/components/RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ ingredients, recipes }) => {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients.some((ing) => ingredients.includes(ing))
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p className="text-gray-600 text-center col-span-full">
          No recipes match your ingredients.
        </p>
      )}
    </div>
  );
};

export default RecipeList;
