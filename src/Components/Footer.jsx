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
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
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

          <div className="footer-links-col">
            <h4>ENQUIRY</h4>
            <div className="enquiry-grid">
              <div className="enquiry-row">
                <div className="enquiry-item">
                  <p className="enquiry-title">Vipin Das</p>
                  <p><a href="tel:+971547927090">+971 54 792 7090</a></p>
                </div>
                <div className="enquiry-item">
                  <p className="enquiry-title">Sivakumar</p>
                  <p><a href="tel:+971547927093">054 792 7093</a></p>
                  <p><a href="tel:+971504941329">050 494 1329</a></p>
                </div>
                <div className="enquiry-item">
                  <p className="enquiry-title">Land Line</p>
                  <p><a href="tel:+97148868848">+971 4 886 8848</a></p>
                </div>
              </div>
              <div className="enquiry-row">
                <div className="enquiry-item">
                  <p className="enquiry-title">Accounts - Praveen</p>
                  <p><a href="tel:+971568578588">056 857 8588</a></p>
                  <p><a href="mailto:praveen@hegsauae.com">praveen@hegsauae.com</a></p>
                </div>
                <div className="enquiry-item">
                  <p className="enquiry-title">Sales - Vineeth</p>
                  <p><a href="tel:+971547925849">054 792 5849</a></p>
                  <p><a href="mailto:vineeth@hegsauae.com">vineeth@hegsauae.com</a></p>
                </div>
                <div className="enquiry-item">
                  <p className="enquiry-title">Enquiry - Info</p>
                  <p><a href="mailto:info@hegsauae.com">info@hegsauae.com</a></p>
                  <p><a href="tel:+971549981684">054 998 1684</a></p>
                </div>
              </div>
              <div className="enquiry-row">
                <div className="enquiry-item">
                  <p className="enquiry-title">Sales Direct</p>
                  <p><a href="mailto:sales@hegsauae.com">sales@hegsauae.com</a></p>
                  <p><a href="tel:+971547927092">054 792 7092</a></p>
                </div>
                <div className="enquiry-item">
                  <p className="enquiry-title">Vipin Das</p>
                  <p><a href="tel:+971563307606">+971 56 330 7606</a></p>
                </div>
                <div className="enquiry-item">
                  <p className="enquiry-title">Website</p>
                  <p><a href="https://www.hegsauae.com">www.hegsauae.com</a></p>
                </div>
              </div>
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
