// Write all the code here
import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Follow us on social media:</p>
        <div>
          {/* YouTube Icon and Link */}
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size={30} />
          </a>

          {/* Instagram Icon and Link */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={30} />
          </a>
        </div>
      </div>
      <div>
        <p>&copy; 2023 Burger Shop</p>
      </div>
    </footer>
  );
}

export default Footer;
