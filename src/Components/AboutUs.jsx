import React, { useState, useEffect, useRef } from 'react';
import './AboutUs.css';

// 1. Data arrays can live outside the component safely
const tabData = [
  {
    id: '01',
    title: 'OUR VISION',
    heading: 'We Always Provide Best Quality Building Service.',
    description: 'Our vision is to provide the highest standards of quality and value to our clients. To achieve this, we offer an advantage over our competition in terms of our:',
    points: [
      'Collaborative and hands-on approach.',
      'Creative and efficient in procurement and administrative processes.',
      'Commercial competitiveness.'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: '02',
    title: 'OUR MISSION',
    heading: 'Leading Way In Building & Civil Constructions!',
    description: 'To consistently deliver satisfactory jobs across all sectors of our construction lifecycle.',
    points: [
      'Renovation Maintenance & services that satisfy the needs of our customers.',
      'Constantly achieving operational excellence.',
      'Conducting our business in a safe, environmentally sustainable & economically optimum manner.',
      'Employing a diverse, innovative and results-oriented team motivated to deliver excellence.'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: '03',
    title: 'OUR OBJECTIVES',
    heading: 'We Are Committed To Deliver Provable & Excellence Performance.',
    description: 'We focus closely on delivering structural value and high-end results by keeping our core corporate milestones front and center:',
    points: [
      'Minimize the Customers budget.',
      'Realize the customer requirements & meet our customer satisfaction.',
      'Job Guarantee to safeguard customer job integrity.',
      'Deliver structural cost reductions & sustain a robust management system.',
      'Deliver continuous sustainable HSE (Health, Safety, Security, and Environmental) excellence.'
    ],
    image: 'https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=900&q=80'
  }
];

const AboutUs = () => {
  // 2. React Hooks MUST live right here, inside the component function body
  const [activeTab, setActiveTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const currentContent = tabData[activeTab];

  useEffect(() => {
    const handleScroll = () => {
      // Timeline scroll logic
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight / 2;
        let progress = (start - top) / height;
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress * 100);
      }

      // Reveal scroll animation logic
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger on mount to check if elements are already in view
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-us-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1 className="reveal zoom-in">ABOUT US</h1>
          <p className="subtitle reveal fade-up delay-200">Hegsa - Leading Excellence in Construction and Maintenance</p>
        </div>
      </section>

      {/* 1st SECTION: IMAGES & INTRO TEXT */}
      <section className="about-us-container">
        <div className="about-us-grid">
          
          {/* LEFT COLUMN: IMAGES & BADGE */}
          <div className="images-wrapper">
            <div className="main-image-box">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80" 
                alt="Architect reviewing plans" 
                className="architect-img"
              />
            </div>

            <div className="side-assets-box">
              {/* 25+ Years Experience Badge */}
              <div className="experience-badge">
                <span className="experience-number">25+</span>
                <p className="experience-text">
                  Years Experiences Of Construction Company
                </p>
              </div>

              {/* Construction workers image */}
              <div className="site-image-box">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80" 
                  alt="Construction workers on site" 
                  className="workers-img"
                />
              </div>
            </div>
            
            {/* Dot matrix background element */}
            <div className="dot-matrix"></div>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <div className="content-wrapper">
            <div className="badge-wrapper">
              <span className="company-badge">About Us Company</span>
            </div>

            <h2 className="main-heading">
              We Are Always Think On Your Dream
            </h2>

            <p className="main-description">
              Many modern construction companies focus on sustainable building practices, 
              incorporating eco-friendly material energy-efficient systems and environmental 
              conscious designs to reduce the environmental impact of their projects.
            </p>

            <hr className="section-divider" />

            {/* Feature 1: Worldwide Services */}
            <div className="feature-item">
              <div className="icon-box">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.6 9h16.8M3.6 15h16.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Worldwide Services</h4>
                <p>They provide clients with transparent cost estimates and adhere to the agreed-upon</p>
              </div>
            </div>

            {/* Feature 2: Best Company Award Winner */}
            <div className="feature-item">
              <div className="icon-box">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.256.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.52 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.18 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.97-2.883c-.772-.555-.373-1.81.587-1.81H7.03a1 1 0 00.95-.69L11.05 2.93z" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Best Company Award Winner</h4>
                <p>A reliable construction company is adept at managing budgets and timelines effectively.</p>
              </div>
            </div>

            <div className="cta-wrapper"></div>
          </div>

        </div>
      </section>

      {/* 2nd SECTION: DYNAMIC TABS (VISION, MISSION, OBJECTIVES) */}
      <section className="tabs-section-container">
        {/* SECTION HEADER BLOCK */}
        <div className="section-header">
          <span className="sub-badge">Why Choose Our Company</span>
          <h2 className="top-title">
            We Help You Build On Your Past And<br />Prepare For The Feature
          </h2>
        </div>

        {/* DYNAMIC TAB INTERFACE SWITCHES */}
        <div className="tabs-nav-bar">
          {tabData.map((tab, index) => (
            <button
              key={tab.id}
              className={`tab-toggle-btn ${activeTab === index ? 'active-tab' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* CORE GRID CONTENT BODY */}
        <div className="tabs-display-grid">
          
          {/* LEFT COLUMN: ACTIVE VIDEO/IMAGE CARD */}
          <div className="media-preview-wrapper">
            <img 
              src={currentContent.image} 
              alt={currentContent.title} 
              className="media-display-img"
            />
            {/* Decorative video play overlay matching the design */}
            <div className="video-play-overlay">
              <div className="play-button-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: RE-RENDERING TAB WRITTEN CONTENT */}
          <div className="tabs-info-content">
            <h3 className="info-main-heading">
              {currentContent.heading}
            </h3>
            
            <p className="info-main-desc">
              {currentContent.description}
            </p>

            {/* CHECK BOX CONTENT GENERATED FROM YOUR ARRAY DATA */}
            <div className="info-points-grid">
              {currentContent.points.map((point, idx) => (
                <div key={idx} className="point-item-row">
                  <span className="checkbox-icon">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="point-text-string">{point}</p>
                </div>
              ))}
            </div>

            <hr className="tabs-inner-divider" />

            {/* FIXED SUB-FOOTER SECTIONS */}
            <div className="tabs-footer-cards">
              <div className="mini-card-item">
                <div className="mini-card-icon-box">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25( 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <div>
                  <h5>Planning</h5>
                  <h4>Construction Services</h4>
                </div>
              </div>

              <div className="mini-card-item">
                <div className="mini-card-icon-box">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18" />
                  </svg>
                </div>
                <div>
                  <h5>Planning</h5>
                  <h4>Architecture Design</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;