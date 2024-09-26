import React, { useState } from 'react';
import RecipeCard from './components/RecipeCard';
import recipesData from './recipesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
  const [dietFilter, setDietFilter] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false); // State to control visibility of favorites

  const handleSearch = () => {
    const results = recipesData.filter(recipe => {
      const ingredientNames = recipe.ingredients.map(ingredient => ingredient.name.toLowerCase());
      return (
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ingredientNames.some(name => name.includes(searchTerm.toLowerCase()))
      );
    });

    const finalResults = dietFilter ? results.filter(recipe => recipe.dietType === dietFilter) : results;

    setFilteredRecipes(finalResults);
  };

  const addReview = (recipeId, review) => {
    setFilteredRecipes(prevRecipes =>
      prevRecipes.map(recipe => 
        recipe.id === recipeId ? { ...recipe, reviews: [...(recipe.reviews || []), review] } : recipe
      )
    );
  };

  const handleDietFilter = (type) => {
    setDietFilter(type);
    const results = recipesData.filter(recipe => 
      (type === 'all' || recipe.dietType === type) && (
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
    setFilteredRecipes(results);
  };

  const toggleFavorite = (id) => {
    setFilteredRecipes(prevRecipes => 
      prevRecipes.map(recipe => 
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
      )
    );

    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const toggleShowFavorites = () => {
    setShowFavorites(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-600 to-black bg-clip-text text-transparent text-center mb-8 animate-fadeIn" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
        Recipe Finder
      </h1>

      <div className="mb-6 text-center">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for recipes or ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-l-full p-3 w-80 text-black placeholder-gray-400 focus:outline-none"
          />
          <button 
            onClick={handleSearch}
            className="bg-black text-white rounded-r-full px-4 hover:bg-gray-800 transition"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      {/* Diet Filter Buttons */}
      <div className="mb-6 text-center">
        <button onClick={() => handleDietFilter('all')} className="bg-gray-200 px-4 py-2 rounded-md">All</button>
        <button onClick={() => handleDietFilter('vegetarian')} className="bg-green-500 text-white px-4 py-2 rounded-md mx-2">Vegetarian</button>
        <button onClick={() => handleDietFilter('non-vegetarian')} className="bg-red-500 text-white px-4 py-2 rounded-md">Non-Vegetarian</button>
        <button onClick={() => handleDietFilter('vegan')} className="bg-yellow-500 text-white px-4 py-2 rounded-md mx-2">Vegan</button>
      </div>

      {/* Favorites Toggle Button */}
      <div className="mb-6 text-center">
        <button 
          onClick={toggleShowFavorites} 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
        >
          {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
        </button>
      </div>

      {/* Favorites Section */}
      {showFavorites && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRecipes.filter(recipe => recipe.isFavorite).length > 0 ? (
              filteredRecipes.filter(recipe => recipe.isFavorite).map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} onToggleFavorite={toggleFavorite} />
              ))
            ) : (
              <p className="text-center col-span-full">No favorite recipes found.</p>
            )}
          </div>
        </div>
      )}

      {/* Recipe List */}
      <h2 className="text-2xl font-bold mb-4 mt-8">Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} onToggleFavorite={toggleFavorite} />
          ))
        ) : (
          <p className="text-center col-span-full">No recipes found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;