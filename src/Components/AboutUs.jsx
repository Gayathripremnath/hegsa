import React, { useState, useEffect, useRef } from 'react';
import './AboutUs.css';

const timelineData = [
  {
    id: '01',
    title: 'OUR VISION',
    description: 'Our vision is to provide the highest standards of quality and value to our clients.\nTo achieve this, we offer an advantage over our completion in terms of our:',
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
    description: 'To consistent deliver satisfactory job.',
    points: [
      'Renovation Maintenance & services that satisfy the needs of our customers.',
      'Constantly achieving operational excellence',
      'Conducting our business in a safe, environmentally sustainable & economically optimum manner',
      'Employing a diverse, innovative and results-oriented team motivated to deliver excellence'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: '03',
    title: 'OUR OBJECTIVES',
    description: 'We are committed to deliver provable & excellence performance by focusing on the following:',
    points: [
      'Minimize the Customers budget',
      'Realize the customer requirements',
      'Meet our customer satisfaction',
      'Job Guarantee o Safeguard to customer job integrity',
      'Deliver structural cost reductions',
      'Sustain a robust management system',
      'Deliver continuous sustainable HSE. Health, Safety, Security and Environmental excellence'
    ],
    image: 'https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=900&q=80'
  }
];

const AboutUs = () => {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const { top, height } = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled into the timeline
      const start = windowHeight / 2;
      let progress = (start - top) / height;

      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="about-us-page">
      <section className="about-hero">
        <div className="container">
          <h1>Who We Are</h1>
          <p className="subtitle">Hegsa - Leading Excellence in Construction and Maintenance</p>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-media">
               <div className="images-container">
                 <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800" alt="Construction site main" className="main-image" />
                 <div className="small-image-wrapper">
                   <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400" alt="Construction detail" className="small-image" />
                 </div>
                 <div className="elevate-box">
                   <span>ELEVATE PROFILE</span>
                 </div>
               </div>
            </div>
            
            <div className="about-intro-text">
              <span className="kicker">CONSTRUCTION COMPANY</span>
              <h2>Excellence in Construction & Maintenance Solutions.</h2>
              <p className="lead-text">
                Hegsa is a leading provider of complete system solutions for aluminum glass, skylights, and comprehensive maintenance works in Dubai and across the UAE. We are committed to delivering highest standards of quality and value to our clients.
              </p>
              
              <ul className="modern-features-list">
                <li><i className="fa-regular fa-circle-check"></i> First Class Quality Service</li>
                <li><i className="fa-regular fa-circle-check"></i> Service with reasonable price</li>
                <li><i className="fa-regular fa-circle-check"></i> Immediate 24/7 Emergency</li>
                <li><i className="fa-regular fa-circle-check"></i> Intentional development authority</li>
                <li><i className="fa-regular fa-circle-check"></i> Stylistic formula method</li>
              </ul>

              <div className="about-founder-action">
                <div className="founder-info">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150" alt="CEO" className="founder-img" />
                  <div className="founder-details">
                    <span className="founder-name">Daniel H. Smith</span>
                    <span className="founder-title">Founder & Ceo</span>
                  </div>
                </div>
                <button className="btn-get-in-touch">GET IN TOUCH</button>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg-text">ABOUT HEGSA</div>
      </section>

      <section className="vision-mission-objectives dark-timeline-section">
        <div className="container">
          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-line"></div>
            <div className="timeline-progress" style={{ height: `${scrollProgress}%` }}>
              <div className="timeline-dot"></div>
            </div>

            {timelineData.map((item, index) => (
              <div key={index} className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content text-content">
                  <div className="timeline-card">
                    <span className="bg-number">{item.id}</span>
                    <h2 className="timeline-title">{item.title}</h2>
                    <p className="timeline-desc">{item.description}</p>
                    <ul className="timeline-list">
                      {item.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="timeline-center-node">
                  <div className="node-dot"></div>
                </div>

                <div className="timeline-content image-content">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="policy-section">
        <div className="container">
          <div className="policy-content">
            <h2 className="section-title">HEGSA POLICY</h2>
            <div className="policy-text">
              <p>
                Hegsa aims to achieve the highest standards of, Health, Safety and Environment, incorporating the
                principles of sustainable development throughout its worldwide business.
              </p>
              <p>
                Hegsa identifies the health and safety of its employees, contractors and visitors, the satisfaction of its
                customers, the protection of the environment and the development of the communities where it has
                its operations as integrated key drivers of its business; the entire organization is oriented towards
                achieving these goals openly and transparently.
              </p>
              <p>
                Health, Safety and Environment management and risk assessment fundamentals are integrated in all
                business processes. Management is responsible and accountable for achieving excellence in Health,
                Safety and Environmental performance for successful business results.
              </p>
              <p>
                Hegsa is committed to training all its employees in the appropriate use of its Health, Safety and
                Environment management systems, strengthening its management through updating of professional
                and managerial skills, fostering diversity, emphasizing employee evaluation and motivation and
                complying with the ethical principles established in its code of conduct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="clients-section">
        <div className="container">
          <h2 className="section-title">OUR MAJOR CLIENTS</h2>
          <div className="clients-grid">
            {[
              "Easa Saleh Al Gurg LLC", "Sharjah (Shurooq)", "Grand Hyatt – Abu Dhabi",
              "Hesal Contracting LLC", "Al Fattan Properties", "Verne Hotel (TAJ Hotel)",
              "Trustwell", "SABA Property Management", "Al Futtaim", "Nshama",
              "Arada Development", "TTE Facilities Management", "Sustainable Solutions",
              "Imdaad LLC", "Sonder Holiday", "Transguard Group LLC", "ServeU",
              "Emirates NBD", "Dusit Thani Dubai", "EFS Facilities", "D1 Tower",
              "Scientechnic LLC", "Al Aaber", "Emrill", "Burjuman Mall"
            ].map((client, index) => (
              <div key={index} className="client-item">
                <i className="fa-solid fa-handshake"></i>
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
