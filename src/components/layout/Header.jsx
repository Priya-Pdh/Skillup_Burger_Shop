import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li>
         
          <li><Link to="/shopping-cart">Shopping Cart</Link></li>
          <li>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
