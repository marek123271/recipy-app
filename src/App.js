import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js';
import Defoult from './pages/Default.js';
import Recipes from './pages/Recipes.js';
import SingleRecipe from './pages/SingleRecipe.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js'; // Make sure the file name is correctly capitalized

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Defoult />} />
      </Routes>
    </Router>
  );
}

export default App;
