import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js';
import Defoult from './pages/Defoult.js';
import Recipies from './pages/Recipies.js';
import SingleRecipe from './pages/SingleRecipe.js';


function App() {
  return (
    <div>
      <Home></Home>
      <Defoult></Defoult>
      <Recipies></Recipies>
      <SingleRecipe></SingleRecipe>
    </div>
  );
}

export default App;
