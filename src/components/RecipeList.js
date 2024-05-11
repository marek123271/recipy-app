import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css'; // Import CSS file for styling
import emptyTableImage from '../Images/empty_table3.jpg';

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;

    if (!recipes || recipes.length === 0) {
      return (
        <div className="empty-table">
          <img src={emptyTableImage} alt="Empty table" />
          <img src={emptyTableImage} alt="Empty table" />

        </div>
      );
    }

    return (
      <div className="recipe-list">
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}
