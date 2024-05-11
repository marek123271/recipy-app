import React, { Component } from 'react';
import './Recipe.css'; // Import CSS file for styling

export default class Recipe extends Component {
  render() {
    const { recipe } = this.props;

    return (
      <div className="recipe">
        <h2>{recipe.title}</h2>
        <img src={recipe.image_url} alt={recipe.title} className="recipe-image" />
        
      </div>
    );
  }
}
