import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { servicesList } from './servicesData';

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div className="services-page">
      <section className="services-header">
        <div className="container header-container">
          <div className="header-left">
            <h1>Our Services</h1>
          </div>
          <div className="header-right">
            <span>Home / Our Services</span>
          </div>
        </div>
      </section>

      <section className="services-main-content">
        <div className="container layout-wrapper">
          
          <aside className="sidebar">
            <ul className="sidebar-menu">
              <li className="active"><Link to="/services">ALL SERVICES <i className="fa-solid fa-chevron-right"></i></Link></li>
              {servicesList.map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`}>{s.title} <i className="fa-solid fa-chevron-right"></i></Link>
                </li>
              ))}
            </ul>
            
          
          </aside>

          <main className="services-grid-wrapper">
            <div className="services-grid">
              {servicesList.map((service, index) => (
                <div key={service.id} className="service-card">
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="card-content">
                    <h3>{service.title}</h3>
                    <Link to={`/services/${service.id}`} className="read-more">READ MORE</Link>
                  </div>
                </div>
              ))}
            </div>
          </main>

        </div>
      </section>

      <section className="facades-section">
        <div className="container">
          <div className="facade-card">
            <div className="facade-text">
              <h2>Building Facades</h2>
              <p>Hegsa provides high-performance building facades for the Middle East region. We offer a range of options including curtain-walling systems, flush glazing, shopfront systems and sun louvres.</p>
              <p>Our building facades are designed to meet the highest standards of quality and performance in Dubai, Sharjah and UAE.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
