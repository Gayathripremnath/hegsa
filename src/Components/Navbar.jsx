import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-content">
      <div className="logo">
        <img src={logo} alt="HEGSA Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li className="active">HOME </li>
        <li>ABOUT US</li>
        <li>SERVICE</li>
        <li>TEAM</li>
        <li>BLOG</li>
        <li>CONTACT US</li>
      </ul>

      <div className="nav-actions">
        <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
        <button className="btn-quote-top">GET A QUOTE →</button>
      </div>
    </div>
  </nav>
);

export default Navbar;
