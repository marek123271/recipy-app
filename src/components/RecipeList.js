import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;

    if (!recipes || recipes.length === 0) {
      return <div>No recipes available</div>;
    }

    return (
      <div>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}
