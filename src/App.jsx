import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeContent from './pages/Home';
import RoadmapPage from './pages/Roadmap';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
