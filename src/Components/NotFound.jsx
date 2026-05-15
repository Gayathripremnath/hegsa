import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import illustration from '../assets/404-illustration.png';

const NotFound = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 50;
      
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="not-found-container">
      <div className="container">
        <div className="not-found-content">
          <div className="illustration-wrapper reveal zoom-in">
            <img src={illustration} alt="404 - Page Not Found" className="not-found-img" />
          </div>
          <div className="text-wrapper">
            <h2 className="reveal fade-up delay-200">OOPS! PAGE NOT FOUND</h2>
            <p className="reveal fade-up delay-300">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="action-buttons reveal fade-up delay-400">
              <Link to="/" className="btn-primary">BACK TO HOME</Link>
              <Link to="/contact" className="btn-secondary">CONTACT US</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-text">404</div>
    </div>
  );
};

export default NotFound;
