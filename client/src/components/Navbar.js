import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(255, 163, 77, 0.15)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ff914d',
  };

  const linkStyle = {
    marginLeft: '1rem',
    textDecoration: 'none',
    color: '#444',
    fontWeight: 500,
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>🍽️ FlavorMuse</div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/create" style={linkStyle}>Create</Link>
        <Link to="/recipes" style={linkStyle}>Recipes</Link>
        <Link to="/how-it-works" style={linkStyle}>How it Works</Link>
      </div>
    </nav>
  );
}

export default Navbar;
