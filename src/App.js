import React from 'react';
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js';
import Default from './pages/Default.js';
import Recipes from './pages/Recipes.js';
import SingleRecipe from './pages/SingleRecipe.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';

function App() {
  return (
    <Router basename="/recipy-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;
