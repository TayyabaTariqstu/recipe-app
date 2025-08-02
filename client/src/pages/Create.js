import React, { useState } from 'react';
import './PageStyles.css';

export default function Create() {
  const [ingredients, setIngredients] = useState('');
  const [message, setMessage] = useState('');
  const [recipe, setRecipe] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ingredients.trim() === '') {
      setMessage('⚠️ Please enter some ingredients first.');
      setRecipe(null);
    } else {
      setMessage(`✨ Generating recipe with: ${ingredients}`);
      setRecipe(null);

      try {
        const response = await fetch('http://localhost:5000/api/recipes/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ingredients }),
        });

        const data = await response.json();

        if (response.ok && data.title && data.html) {
          setRecipe(data);
          setMessage('✅ Recipe generated successfully!');
        } else {
          setRecipe(null);
          setMessage(`❌ ${data.error || 'Failed to generate recipe. Try again.'}`);
        }
      } catch (error) {
        console.error('Error generating recipe:', error);
        setMessage('🚨 Server error. Please try again later.');
        setRecipe(null);
      }

      setIngredients('');
    }
  };

  return (
    <div className="page">
      <h1 className="hp">🍳 Create Your Recipe</h1>
      <p className="hp">Type your ingredients below and get instant AI-based recipe suggestions.</p>

      <form className="form-section" onSubmit={handleSubmit}>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g. chicken, garlic, rice, spinach"
          rows="5"
        />
        <button type="submit">Generate Recipe</button>
      </form>

      {message && <p className="result-msg">{message}</p>}

      {recipe && (
        <div className="recipe-output">
          <h3>{recipe.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: recipe.html }} />
        </div>
      )}

      <img
        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
        alt="Ingredients"
        className="hero-image"
        style={{ marginTop: '2rem' }}
      />
    </div>
  );
}
