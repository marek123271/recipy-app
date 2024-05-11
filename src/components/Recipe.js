import React, { Component } from 'react';

export default class Recipe extends Component {
  render() {
    const { recipe } = this.props;

    return (
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image_url} alt={recipe.title} />
        <p>{recipe.publisher}</p>
      </div>
    );
  }
}
