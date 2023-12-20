// Write all the code here
import React from 'react';
import '../../styles/home.scss';
import founderPic from "../../assets/skj.jpg";
import { FaSearch } from "react-icons/fa";
 
const About = () => {
  return (
    <div className='about'>
      <main>
      <h1>About Us</h1>
      <article>
        <h4>Burger Shop</h4>
      <p>This is Burger Shop. The place for most tasty burgers on the entire earth 🌎</p>
      <p>Explore the various types of food and burgers. Click below to see the menu.</p>
      <a href='/menu'><FaSearch /></a>
      </article>

      <div>
        <h2>Founder</h2>
        <article>
            <div>
        <img src={founderPic} alt="pic" />
       <h3>Nelson</h3>
        </div>
        <p>I am Nelson, the founder of Burger Shop. Affiliated to God Taste.</p>
       
        </article>

    </div>
      </main>
    </div>
  );
}

export default About;
