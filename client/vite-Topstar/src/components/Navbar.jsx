 
import React from 'react';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
  return (
    <nav className="navigationWrapper">
      <div className="logoWrapper">
        <span className="stylish">Top</span>
        <span className="logo">Star</span>
      </div>
      <ul className="navigation">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/products" className="nav-link">Products</Link>
  <Link to="/cart" className="nav-link">Cart</Link>
  <Link to="/signIn" className="nav-link">Sign In</Link>
</ul>
    </nav>
  );
}

export default NavBar;