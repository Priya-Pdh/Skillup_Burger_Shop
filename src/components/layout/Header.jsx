import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to ="/cart" className='a'><FaCartArrowDown /></Link>
          <Link to="/" className='a'>Home</Link>
          <Link to="/about" className='a'>About us</Link>
          <Link to="/contact" className='a'>Contact us</Link>
          <Link to="/login" className='a'>Login</Link>
        </div>
          
      </nav>
    </div>
  );
}

export default Header;
