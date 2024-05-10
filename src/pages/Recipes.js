import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/search';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Recipes: recipeData, // Assuming recipeData is imported from somewhere
      search: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  render() {
    return (
      <>
        <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <RecipeList recipies={this.state.Recipes} />
      </>
    );
  }
}
