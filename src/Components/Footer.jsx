import React from 'react';
import './Footer.css';

const quickLinks = ['About Us', 'Services', 'Projects', 'Blog Post', 'Contact Us'];
const serviceLinks = [
  'Building Construction',
  'Projects Plannings',
  'Interior Developments',
  'Virtual Design & Build',
  'Petroleum Oil & Gas',
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-overlay"></div>

      <div className="footer-wrap">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <a href="/" className="footer-logo" aria-label="Konta Home">
             
              <span className="footer-logo-text">
                <strong>HEGSA</strong>
                <small>Construction Industry</small>
              </span>
            </a>

            <p className="footer-brand-text">
              Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare.
              Objectively repurpose architectures.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>QUICK LINKS</h4>
            <ul>
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>SERVICES</h4>
            <ul>
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-subscribe-col">
            <h4>Subscribe</h4>
            <p>Subscribe For Our Latest News & Articles.</p>
            <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter Email" aria-label="Email address" />
              <button type="submit" aria-label="Send">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>
            Copyright &copy; 2026 Genova Technologies. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
