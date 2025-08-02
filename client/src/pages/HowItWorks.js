import React from 'react';
import './PageStyles.css';
import mainImage from '../assets/working.jpg';

export default function HowItWorks() {
  return (
    <div className="page how-page">
      <h1>🔍 How It Works</h1>
      <p>We use smart AI to give you meal ideas from what you already have.</p>

      <div className="steps">
        <div className="step">
          <h2>1️⃣ Enter Ingredients</h2>
          <p>Tell us what’s in your fridge — like "chicken, tomatoes, rice".</p>
        </div>
        <div className="step">
          <h2>2️⃣ Magic Happens</h2>
          <p>Our AI analyzes ingredients and suggests creative, tasty recipes.</p>
        </div>
        <div className="step">
          <h2>3️⃣ View & Cook</h2>
          <p>Get full recipe details and start cooking instantly!</p>
        </div>
      </div>

      <img
        src={mainImage}
        alt="Cooking process"
        className="how-image"
      />
    </div>
  );
}
