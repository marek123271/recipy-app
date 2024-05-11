import React, { Component } from 'react';
import './Recipe.css'; // Import CSS file for styling

export default class Recipe extends Component {
  render() {
    const { recipe } = this.props;

    return (
      <div className="recipe">
        <h2 className="orange-textT">{recipe.title}</h2>
        <img src={recipe.image_url} alt={recipe.title} className="recipe-image" />
        <h6 className="orange-textC">provided by {recipe.publisher}</h6>
        
      </div>
    );
  }
}
