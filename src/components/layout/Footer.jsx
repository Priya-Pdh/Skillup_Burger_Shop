// Write all the code here
import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
       <div>
      <h2>Burger Shop</h2>
     
      <p>We are trying to give you the best taste</p>
      <p> We give attention to genuine feedback.</p>
      <p>&copy; 2023 Burger Shop</p>
      </div>
      <aside>
        <h4>Follow</h4>
         {/* YouTube Icon and Link */}
         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size={30} />
          </a>

          {/* Instagram Icon and Link */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={30} />
          </a>
      </aside>
       
    </footer>
  );
}

export default Footer;
