import React, { Component } from 'react';
import Search from '../components/Search';
import RecipeList from '../components/RecipeList';
import SingleRecipe from '../pages/SingleRecipe'; // Import SingleRecipe component
import '../App.css';



export default class Recipes extends Component {
  state = {
    recipes: [],
    search: '',
    showBackToTop: false // Add state to track whether to show the back to top button
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=${process.env.REACT_APP_API_KEY}`)
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

  handleScroll = () => {
    const { showBackToTop } = this.state;
    if (window.scrollY > 0 && !showBackToTop) {
      this.setState({ showBackToTop: true });
    } else if (window.scrollY === 0 && showBackToTop) {
      this.setState({ showBackToTop: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
  };

  render() {
    const { recipes, search, showBackToTop } = this.state;

    return (
      <div>
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={recipes} />
        {search && <SingleRecipe searchQuery={search} />} {/* Render SingleRecipe component with searchQuery prop */}
        {showBackToTop && ( // Render back to top button only when scrolled down
          <button className="back-to-top-btn" onClick={this.handleBackToTop}>
            Back to Top
          </button>
        )}
      </div>
    );
  }
}
