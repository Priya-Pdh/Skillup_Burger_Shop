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
        </div>
          
      </nav>
    </div>
  );
}

export default Header;
