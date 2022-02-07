import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CanvasPage from 'src/javascripts/components/Drawing';

/*
  확장성을 고려 한 Route 처리
*/
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CanvasPage />} />
      </Routes>
    </Router>
  );
}
