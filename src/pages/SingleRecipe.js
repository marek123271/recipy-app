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
      {recipeData ? (
        <div>
          <p className='orange-textCT'>{recipeData.title}</p>
          <img
            className='recipe-image2'
            src={recipeData.image_url}
            alt={recipeData.title}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: '3%',
              marginTop: '0%',
              float: 'right',
              width: '45%',
              height: '45%',
              borderRadius: '90px'
            }}
          />
          <button
            className='btnSource'
            onClick={() => window.open(recipeData.source_url, '_blank')}
          >
            Recipe Source
          </button>
          <div className='text'>
            <p className='orange-textC'>servings: {recipeData.servings}</p>
            <p className='orange-textC'>cooking time: {recipeData.cooking_time}</p>
            <h1 className='orange-textCI'>ingredients</h1>
            <ul className='ingredients'>
              {recipeData.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.description}</li>
              ))}
            </ul>
          </div>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleRecipe;
