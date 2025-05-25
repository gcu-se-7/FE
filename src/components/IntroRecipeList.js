import React from 'react';

const IntroRecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        음식 이름을 검색해보세요.
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {recipe.title}
            </h3>
            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
              {recipe.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {recipe.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
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

export default IntroRecipeList;
