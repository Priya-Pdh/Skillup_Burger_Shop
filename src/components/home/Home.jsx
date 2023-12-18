import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Burger Shop!</h1>
      <p>Give yourself a tasty burger</p>
      <button> <Link to="/menu">Explore Menu</Link></button>
     
    </div>
  );
}

export default Home;
