import React, { Component } from 'react';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      loading: false,
      error: null
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.fetchRecipes();
    }
  }

  fetchRecipes = () => {
    const { query } = this.props;
    this.setState({ loading: true });
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=a136d7a1-48d1-4a85-9321-16fd21e19270`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          recipes: data.data.recipes,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { recipes, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image_url} alt={recipe.title} />
            <p>{recipe.publisher}</p>
          </div>
        ))}
      </div>
    );
  }
}
