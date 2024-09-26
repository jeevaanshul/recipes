// // src/components/IngredientInput.js
// import React, { useState } from 'react';

// const IngredientInput = ({ addIngredient }) => {
//   const [ingredient, setIngredient] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (ingredient) {
//       addIngredient(ingredient);
//       setIngredient('');
//     }
//   };

//   return (
//     <div className="mb-6">
//       <form onSubmit={handleSubmit} className="flex justify-center space-x-3">
//         <input
//           type="text"
//           placeholder="Enter an ingredient"
//           value={ingredient}
//           onChange={(e) => setIngredient(e.target.value)}
//           className="border p-3 rounded-md w-72 focus:ring focus:ring-blue-300"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition"
//         >
//           Add Ingredient
//         </button>
//       </form>
//     </div>
//   );
// };

// export default IngredientInput;
