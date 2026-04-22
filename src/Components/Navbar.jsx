import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [open]);

  return (
    <nav className={`navbar ${open ? 'mobile-open' : ''}`}>
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="HEGSA Logo" className="logo-img" />
        </div>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li className="active" onClick={() => setOpen(false)}>HOME +</li>
          <li onClick={() => setOpen(false)}>ABOUT US</li>
          <li onClick={() => setOpen(false)}>SERVICE</li>
          <li onClick={() => setOpen(false)}>TEAM</li>
          <li onClick={() => setOpen(false)}>BLOG</li>
          <li onClick={() => setOpen(false)}>CONTACT US</li>
        </ul>

        <div className="nav-actions">
          <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
          <button className="btn-quote-top">GET A QUOTE →</button>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
