import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Services.css';
import { servicesList } from './servicesData';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesList.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [id]);

  if (!service) {
    return (
      <div className="services-page" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="read-more">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="services-page">
      <section className="services-header">
        <div className="container header-container">
          <div className="header-left">
            <h1>{service.title}</h1>
          </div>
          <div className="header-right">
            <span><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> / <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link> / Details</span>
          </div>
        </div>
      </section>

      <section className="services-main-content">
        <div className="container layout-wrapper">
          
          <aside className="sidebar">
            <ul className="sidebar-menu">
              <li><Link to="/services">ALL SERVICES <i className="fa-solid fa-chevron-right"></i></Link></li>
              {servicesList.map(s => (
                <li key={s.id} className={id === s.id ? 'active' : ''}>
                  <Link to={`/services/${s.id}`}>{s.title} <i className="fa-solid fa-chevron-right"></i></Link>
                </li>
              ))}
            </ul>
            
            <div className="sidebar-brochures">
              <h3>Get your brochures</h3>
            </div>
          </aside>

          <main className="services-grid-wrapper">
            <div className="service-details-content">
              <div className="details-image" style={{ width: '100%', height: '400px', overflow: 'hidden', marginBottom: '30px' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h2 style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: '2rem', color: '#1a1a1a', marginBottom: '20px', textTransform: 'uppercase' }}>
                {service.title}
              </h2>
              <p className="desc" style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.8', marginBottom: '30px', fontFamily: 'sans-serif' }}>
                {service.desc}
              </p>
              
              {service.details && service.details.length > 0 && (
                <>
                  <h3 style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: '1.5rem', color: '#1a1a1a', marginBottom: '15px', marginTop: '30px' }}>Service Features</h3>
                  <ul className="card-details-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {Array.isArray(service.details) ? (
                      service.details.map((detail, idx) => (
                        <li key={idx} style={{ fontSize: '1rem', color: '#555', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: '1.6' }}>
                          <i className="fa-solid fa-check" style={{ color: '#d35400', fontSize: '0.9rem', marginTop: '5px' }}></i> <span>{detail}</span>
                        </li>
                      ))
                    ) : (
                      <li style={{ fontSize: '1rem', color: '#555', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: '1.6' }}>
                        <i className="fa-solid fa-check" style={{ color: '#d35400', fontSize: '0.9rem', marginTop: '5px' }}></i> <span>{service.details}</span>
                      </li>
                    )}
                  </ul>
                </>
              )}

              {service.detailedList && service.detailedList.length > 0 && (
                <>
                  <h3 style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: '1.5rem', color: '#1a1a1a', marginBottom: '20px', marginTop: '30px' }}>
                    {service.detailedListTitle || 'Our Capabilities Include:'}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                    {service.detailedList.map((item, idx) => (
                      <div key={idx} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #d35400' }}>
                        <h4 style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: '1.2rem', color: '#1a1a1a', marginBottom: '8px' }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: '#555', margin: 0, lineHeight: '1.6', fontFamily: 'sans-serif' }}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {service.applications && service.applications.length > 0 && (
                <>
                  <h3 style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: '1.5rem', color: '#1a1a1a', marginBottom: '15px', marginTop: '40px' }}>
                    Applications
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    {service.applications.map((app, idx) => (
                      <li key={idx} style={{ fontSize: '1rem', color: '#555', display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #eaeaea', padding: '12px 15px', borderRadius: '6px' }}>
                        <i className="fa-solid fa-angle-right" style={{ color: '#d35400', fontSize: '0.9rem' }}></i> {app}
                      </li>
                    ))}
                  </ul>
                  {service.applicationsDesc && (
                    <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.8', margin: '20px 0 0 0', fontFamily: 'sans-serif', fontWeight: '500', padding: '20px', background: '#fef5f0', borderLeft: '4px solid #d35400', borderRadius: '4px' }}>
                      {service.applicationsDesc}
                    </p>
                  )}
                </>
              )}
            </div>
          </main>

        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
