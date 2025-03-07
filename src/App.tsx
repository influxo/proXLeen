import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import TopLine from './components/TopLine';
import AboutUs from './pages/AboutUs';

const App: React.FC = () => {
  return (
    <div>
      <TopLine />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
