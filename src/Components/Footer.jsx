import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

const serviceLinks = [
  'General Maintenance',
  'Civil Works',
  'MEP Works',
  'False Ceiling',
  'Aluminium & Glass',
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-overlay"></div>

      <div className="footer-wrap">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-text">
                <strong>HEGSA</strong>
                <small>Industrial & Construction</small>
              </span>
            </Link>

            <p className="footer-brand-text">
              Hegsa provides high-performance building facades and construction services across Dubai, Sharjah and UAE.
              Commitment to quality and safety.
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
                <li key={item.name}>
                  <Link to={item.path}>
                    <i className="fa-solid fa-arrow-right"></i>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>SERVICES</h4>
            <ul>
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link to="/services">
                    <i className="fa-solid fa-arrow-right"></i>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-subscribe-col">
            <h4>INQUIRY</h4>
            <div className="contact-info">
              <p><strong>Sivakumar:</strong><br /> +971 54 792 7093 / +971 50 494 1329</p>
              <p><strong>Vipin Das:</strong><br /> +971 54 792 7090</p>
              <p><strong>Land Line:</strong><br /> +971 4 886 8848</p>
              <p><strong>Website:</strong><br /> www.hegsauae.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>
            Copyright &copy; 2026 HEGSA Industrial. All Rights Reserved.
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
