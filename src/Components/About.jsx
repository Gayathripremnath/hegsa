import React from 'react';
import './About.css';

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        
        {/* Left Side: Images and Circles */}
        <div className="about-image-wrapper">
          <div className="circle-outline"></div>
          <div className="main-image-container">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Engineers" 
              className="main-img" 
            />
          </div>
          <div className="experience-badge">
            <span className="exp-number">24</span>
            <span className="exp-text">Years Experience</span>
          </div>
          {/* Decorative dark blobs */}
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="about-text-content">
          <h4 className="sub-title">ABOUT US —</h4>
          <h2 className="main-title">A Company To Change The World We're Konta Industrial.</h2>
          <p className="description">
            Proactively pontificate client-centered relationships vis-a-vis process 
            centric leadership skills. Credibly maintain focused internal or "organic" 
            sources rather than vertical alignments.
          </p>

          <div className="video-features-row">
            <div className="video-thumb">
              <img src="https://www.freepik.com/free-video/construction-workers-discussing-blueprint_6337638#fromView=search&page=1&position=49&uuid=6c00e95a-14e3-4ee6-98af-dbeb1934e817" alt="Video" />
              <button className="play-btn">▶</button>
            </div>
            <ul className="features-list">
              <li>First Class Quality Service</li>
              <li>Service with reasonable price</li>
              <li>Immediate 24/7 Emergency</li>
              <li>Intentional development authority</li>
              <li>Stylistic formula method</li>
            </ul>
          </div>

          <div className="footer-action">
            <button className="about-btn">ABOUT MORE →</button>
            <div className="ceo-info">
              <img src="https://via.placeholder.com/50" alt="CEO" className="ceo-avatar" />
              <div className="ceo-sign">
                <span className="signature">M. Adam</span>
                <span className="designation">CEO, Of Company</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;