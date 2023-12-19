import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div>
      <h1>Burger Shop!</h1>
      <p>Give yourself a tasty burger</p>
      <button> <Link to="/menu" className='link'>Explore Menu</Link></button>
      </div>
    </div>
  );
}

export default Home;
