import React from 'react';
import './PageStyles.css';
import mainImage from '../assets/chicken.jpg';
import mImage from '../assets/rice.jpg';

const sampleRecipes = [
  {
    title: 'Spicy Garlic Chicken',
    ingredients: ['Chicken', 'Garlic', 'Soy Sauce', 'Chili Flakes'],
    steps: ['Marinate chicken', 'Stir-fry garlic', 'Add sauces', 'Cook chicken'],
    image: mainImage
  },
  {
    title: 'Veggie Rice Bowl',
    ingredients: ['Rice', 'Spinach', 'Carrot', 'Onion'],
    steps: ['Cook rice', 'Sauté vegetables', 'Combine and season'],
    image: mImage
  }
];

const Recipes = () => {
  return (
    <div className="recipes-page">
      <h1 className="recipes-heading">Sample Recipes</h1>
      <div className="recipes-container">
        {sampleRecipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p><strong>Steps:</strong></p>
            <ol>
              {recipe.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
