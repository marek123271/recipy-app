import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js';
import Defoult from './pages/Defoult.js';
import Recipes from './pages/Recipes.js';
import SingleRecipe from './pages/SingleRecipe.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Recipes" exact element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Defoult />} />
      </Routes>
    </Router>
  );
}

export default App;
