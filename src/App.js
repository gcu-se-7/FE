import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MainPage from './pages/MainPage';
import IntroPage from './pages/IntroPage'; // 여기 꼭 맞게

function App() {
  return (
    <Router>
      <nav className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
  <div className="text-2xl font-bold text-green-700">🥘 한식 레시피</div>
  <div className="space-x-4">
    <Link
      to="/"
      className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200"
    >
      메인
    </Link>
    <Link
      to="/intro"
      className="text-gray-700 hover:text-purple-600 hover:underline transition duration-200"
    >
      인트로
    </Link>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
