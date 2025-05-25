import React, { useState } from 'react';
import IntroRecipeList from '../components/IntroRecipeList';

const Intro = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    const mockRecipes = [
      {
        id: 1,
        title: '김치찌개',
        description: '매콤하고 깊은 맛의 한국 전통 찌개. 김치와 돼지고기의 조화!',
        ingredients: ['김치', '돼지고기', '두부', '대파', '고춧가루'],
        image: 'https://cdn.pixabay.com/photo/2020/10/21/11/49/kimchi-stew-5672594_1280.jpg'
      },
      {
        id: 2,
        title: '된장찌개',
        description: '된장의 구수한 맛이 살아있는 국민 찌개. 한국 가정식의 대표.',
        ingredients: ['된장', '두부', '애호박', '양파', '청양고추'],
        image: 'https://cdn.pixabay.com/photo/2020/01/01/16/37/miso-soup-4734200_1280.jpg'
      },
      {
        id: 3,
        title: '갈비찜',
        description: '부드럽고 달짝지근한 양념의 대표 보양식.',
        ingredients: ['소갈비', '간장', '배', '당근', '표고버섯'],
        image: 'https://cdn.pixabay.com/photo/2019/10/19/18/45/braised-short-ribs-4561075_1280.jpg'
      }
    ];

    const result = mockRecipes.filter((recipe) =>
      recipe.title.includes(searchKeyword.trim())
    );
    setRecipes(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        전통 한식 소개
      </h1>

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <label className="block text-lg font-semibold text-gray-700 mb-3">
          음식 이름을 검색해보세요
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="예: 김치찌개, 갈비찜 등"
            className="flex-1 px-4 py-2 border-2 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            검색
          </button>
        </div>
      </div>

      <IntroRecipeList recipes={recipes} />
    </div>
  );
};

export default Intro;
