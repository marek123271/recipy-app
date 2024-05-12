import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleRecipe = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe data');
        }
        const data = await response.json();
        setRecipeData(data.data.recipe); // Assuming 'data' structure matches your API response
      } catch (error) {
        console.error('Error fetching recipe data:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div>
      <h4>SingleRecipe</h4>
      {recipeData ? (
        <div>
          <p>Recipe ID: {id}</p>
          <p>Recipe Title: {recipeData.title}</p>
          {/* Render other recipe details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleRecipe;
