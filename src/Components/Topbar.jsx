import React from 'react';
import './Tobbar.css';

const Topbar = () => (
  <div className="header-top">
    <div className="top-container">
      <div className="header-links">
        <ul>
          <li><a href="tel:+19524357106"><i className="fa-solid fa-phone"></i> +1 952-435-7106</a></li>
          <li><a href="mailto:info@hegsa.com"><i className="fa-solid fa-envelope"></i> info@hegsa.com</a></li>
        </ul>
      </div>
      <div className="lang-select">
        <i className="fa-solid fa-globe"></i> English <i className="fa-solid fa-chevron-down"></i>
      </div>
      <span className="divider">|</span>
      <div className="top-social">
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  </div>
);

export default Topbar;
