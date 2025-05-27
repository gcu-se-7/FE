import React from 'react';

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        검색 조건을 입력하고 레시피를 검색해보세요.
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-600 mr-2">난이도:</span>
              <span className="text-sm font-medium">
                {recipe.difficulty === 'easy' && '쉬움'}
                {recipe.difficulty === 'medium' && '보통'}
                {recipe.difficulty === 'hard' && '어려움'}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {recipe.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList; 