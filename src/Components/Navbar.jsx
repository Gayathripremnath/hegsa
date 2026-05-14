import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (open) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [open]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${open ? 'mobile-open' : ''}`}>
      <div className="nav-content">
        <div className="logo">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={logo} alt="HEGSA Logo" className="logo-img" />
          </Link>
        </div>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li className={isActive('/') ? 'active' : ''} onClick={() => setOpen(false)}>
            <Link to="/">HOME</Link>
          </li>
          <li className={isActive('/about') ? 'active' : ''} onClick={() => setOpen(false)}>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className={isActive('/services') ? 'active' : ''} onClick={() => setOpen(false)}>
            <Link to="/services">SERVICE</Link>
          </li>
          <li className={isActive('/team') ? 'active' : ''} onClick={() => setOpen(false)}>
            <Link to="/team">TEAM</Link>
          </li>
          <li className={isActive('/blog') ? 'active' : ''} onClick={() => setOpen(false)}>
            <Link to="/blog">BLOG</Link>
          </li>
          <li className={isActive('/contact') ? 'active' : ''} onClick={() => setOpen(false)}>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
          <button className="btn-quote-top">GET A QUOTE →</button>
        </div>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
