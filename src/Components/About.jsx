import React from 'react';
import './About.css';

const stats = [
  { number: '25+', label: 'Years Experience' },
  { number: '850+', label: 'Projects Completed' },
  { number: '120+', label: 'Expert Engineers' },
  { number: '40+', label: 'Awards Won' },
];

const About = () => (
  <section className="about">
    <div className="about-container">

      {/* Left images */}
      <div className="about-images">
        <div className="img-main">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800"
            alt="Construction site"
          />
        </div>
        <div className="img-secondary">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600"
            alt="Engineer at work"
          />
          <div className="experience-badge">
            <span className="exp-number">25</span>
            <span className="exp-text">Years of<br />Experience</span>
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className="about-content">
        <span className="section-tag">About HEGSA</span>
        <h2 className="section-title">We Build The Future<br />With Strong Foundations</h2>
        <p className="section-desc">
          HEGSA Construction has been delivering world-class building solutions for over 25 years.
          From residential complexes to large-scale infrastructure, we bring precision, safety,
          and innovation to every project we undertake.
        </p>

        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon"><i className="fa-solid fa-helmet-safety"></i></div>
            <div>
              <h4>Safety First</h4>
              <p>We maintain the highest safety standards on every job site, protecting our team and clients.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fa-solid fa-award"></i></div>
            <div>
              <h4>Award Winning</h4>
              <p>Recognized globally for excellence in construction quality and project delivery.</p>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <button className="btn-orange">DISCOVER MORE →</button>
      </div>

    </div>
  </section>
);

export default About;
