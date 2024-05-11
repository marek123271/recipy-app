import React, { Component } from 'react';
import Search from '../components/Search';
import RecipeList from '../components/RecipeList';

export default class Recipes extends Component {
  state = {
    recipes: [],
    search: ''
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=a136d7a1-48d1-4a85-9321-16fd21e19270`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          recipes: data.data.recipes
        });
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  };

  render() {
    const { recipes } = this.state;

    return (
      <div>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}
