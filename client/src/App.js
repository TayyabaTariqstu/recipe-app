import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Recipes from './pages/Recipes';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
        <footer className="footer">Made with 💖 by Tayyba — 2025</footer>
      </div>
    </Router>
  );
}

export default App;
