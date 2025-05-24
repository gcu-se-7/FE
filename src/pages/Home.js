import React, { useState } from 'react';
import IngredientInput from '../components/IngredientInput';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const [includedIngredients, setIncludedIngredients] = useState([]);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    // TODO: API 호출하여 레시피 검색
    // 임시 데이터
    const mockRecipes = [
      {
        id: 1,
        title: '김치찌개',
        difficulty: 'easy',
        ingredients: ['김치', '돼지고기', '두부'],
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        title: '된장찌개',
        difficulty: 'medium',
        ingredients: ['된장', '두부', '애호박'],
        image: 'https://via.placeholder.com/150'
      }
    ];
    setRecipes(mockRecipes);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">레시피 추천</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <IngredientInput
          label="포함할 재료"
          ingredients={includedIngredients}
          setIngredients={setIncludedIngredients}
          placeholder="포함할 재료를 입력하세요"
        />

        <IngredientInput
          label="제외할 재료"
          ingredients={excludedIngredients}
          setIngredients={setExcludedIngredients}
          placeholder="제외할 재료를 입력하세요"
        />

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            난이도
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="easy">쉬움</option>
            <option value="medium">보통</option>
            <option value="hard">어려움</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          레시피 검색
        </button>
      </div>

      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home; 