import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Burger Shop!</h1>
      <p>Explore our menu and place your order.</p>
      <Link to="/menu">View Menu</Link>
    </div>
  );
}

export default Home;
