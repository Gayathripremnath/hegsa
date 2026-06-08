import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import imgc1 from '../assets/imgc1.jpeg';
import imgc2 from '../assets/imgc2.jpeg';
import imgc3 from '../assets/imgc3.jpeg';
import imgc4 from '../assets/imgc4.jpeg';
import imgc5 from '../assets/imgc5.jpeg';
import imgc6 from '../assets/imgc6.jpeg';
import imgc7 from '../assets/imgc7.jpeg';
import imgc8 from '../assets/imgc8.jpeg';
import imgc9 from '../assets/imgc9.jpeg';
import imgc10 from '../assets/imgc10.jpeg';
import imgc11 from '../assets/imgc11.jpeg';
import imgc12 from '../assets/imgc12.jpeg';
import imgc13 from '../assets/imgc13.jpeg';
import imgc14 from '../assets/imgc14.jpeg';
import imgc15 from '../assets/imgc15.jpeg';
import imgc16 from '../assets/imgc16.jpeg';


const services = [
  {
    title: 'Joinery work',
    desc: 'Specializing in custom wood craftsmanship to bring your vision to life. Our Capabilities Includes',
    icon: 'fa-lightbulb',
    image:  
      'https://images.unsplash.com/photo-1705760058049-b58119c416a9?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEpPSU5FUlklMjBXT1JLU3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Wooden polishing work',
    desc: 'We offer professional wooden polishing services.',
    icon: 'fa-screwdriver-wrench',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Aluminium & Glass work',
    desc: 'We are the specialists in providing a comprehensive.',
    icon: 'fa-compass-drafting',
    image:
      'https://images.unsplash.com/photo-1723051390199-ea18f291141e?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFMVU1JTklVTSUyMCUyNiUyMEdMQVNTJTIwV09SS3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Building & Engineering',
    desc: 'Notalianops engage the resource maximizing process geneticalions.',
    icon: 'fa-gears',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Building Construction',
    desc: 'Intrinsically engage the resource maximizing process improvements.',
    icon: 'fa-house',
    image:
      'https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=900&q=80',
  },
];

const chooseItems = [
  {
    title: 'MISSION',
    desc: 'Assertively deliver client-centered communities without frictionless services.',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    points: ['Commercial Services', 'Residential Services', 'Industrial Services', 'Construction Service'],
  },
  {
    title: 'VISION',
    desc: 'Progressively transform practical opportunities with measurable outcomes for every project.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    points: ['Smart Planning', 'Expert Coordination', 'Faster Delivery', 'Strong Quality Control'],
  },
  {
    title: 'VALUE',
    desc: 'Professionally cultivate trusted partnerships through safety, quality, and transparent execution.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    points: ['Reliable Teamwork', 'Client First Approach', 'Sustainable Methods', 'Long-Term Support'],
  },
];

const stats = [
  { value: '20+', label: 'Years Experience', icon: 'fa-calendar-check' },
  { value: '100+', label: 'Skilled Workers', icon: 'fa-users' },
  { value: '15+', label: 'Services', icon: 'fa-tools' },
  { value: '8+', label: 'Cities Covered', icon: 'fa-city' },
];

const clients = [
  // ROW 1
  { logo: imgc1, name: "Sairam Spinning Mills" },
  { logo: imgc2, name: "ISRO" },
  { logo: imgc3, name: "Central Bank" },
  { logo: imgc4, name: "Wheels India" },
  { logo: imgc5, name: "Eureka Forbes" },
  { logo: imgc6, name: "Ashok Leyland" },

  // ROW 2
  { logo: imgc7, name: "Royal Enfield" },
  { logo: imgc8, name: "valeo" },
  { logo: imgc9, name: "TVS Motor" },
  { logo: imgc10, name: "Mahindra" },

  // ROW 3
  { logo: imgc11, name: "Royal Enfield" },
  { logo: imgc12, name: "valeo" },
  { logo: imgc13, name: "TVS Motor" },
  { logo: imgc14, name: "Mahindra" },
   { logo: imgc15, name: "Royal Enfield" },
  { logo: imgc16, name: "valeo" },
];

const blogs = [
  {
    title: 'Learning Construction Is Not Difficult At All!',
    desc: 'Modern House at leverage existing future proof bandwidth rather than of-manusa.',
    author: 'Alone Mask',
    date: 'March 17, 2024',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Get Great Depression The Building Constitute',
    desc: 'Building Design a leverage existing future proof bandwidth rather than of-morate.',
    author: 'Alone Mask',
    date: 'March 18, 2024',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Architects & Interiors Mark Finlay - Building',
    desc: 'Phosfluorescently leverage existing future proof bandwidth rather than of-breed.',
    author: 'Alone Mask',
    date: 'March 15, 2024',
    image:
      'https://images.unsplash.com/photo-1482731215275-a1f151646268?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D',
  },
];

const AboutSection = () => {
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [chooseIndex, setChooseIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % services.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const visibleServices = useMemo(
    () =>
      Array.from({ length: cardsPerView }, (_, i) => {
        const index = (startIndex + i) % services.length;
        return { ...services[index], index };
      }),
    [cardsPerView, startIndex]
  );
  const activeChoose = chooseItems[chooseIndex];

  return (
    <>
      <section className="about-container">
        <div className="about-content">
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
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>

          <div className="about-text-content">
            <h4 className="sub-title">ABOUT US -</h4>
            <h2 className="main-title1">Excellence in Construction & Maintenance Solutions.</h2>
            <p className="description1">
              Hegsa is a leading provider of complete system solutions for aluminum glass, skylights, and comprehensive maintenance works in Dubai and across the UAE. We are committed to delivering highest standards of quality and value to our clients.
            </p>

            <div className="video-features-row">
              <div className="video-thumb">
                <img
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=900&q=80"
                  alt="Video"
                />
                
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
              <button className="about-btn">ABOUT MORE</button>
            
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-wrap">
          <div className="services-head">
            <div>
              <p className="services-kicker">OUR SERVICES</p>
              <h2 className="services-title">The Best Service For You</h2>
            </div>
            <Link to="/services" className="services-cta">VIEW ALL SERVICES &gt;</Link>
          </div>

          <div className="services-grid">
            {visibleServices.map((service) => (
              <article
                key={`${service.title}-${service.index}`}
                className={`service-card ${hoveredCard === service.index ? 'is-active' : ''}`}
                onMouseEnter={() => setHoveredCard(service.index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-image-wrap">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-icon">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <div className="service-card-body">
                  <button type="button" className="service-arrow" aria-label={service.title}>
                    <span className="service-arrow-icon" aria-hidden="true"></span>
                  </button>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
            
          <div className="services-dots">
            {services.map((_, index) => (
              <button
                key={index}
                className={`services-dot ${index === startIndex ? 'active' : ''}`}
                onClick={() => setStartIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="work-process-section">
        <div className="work-process-overlay"></div>
        <div className="work-process-wrap">
          <p className="process-kicker">HOW WE WORK</p>
          <h2 className="process-title">Our Work Process</h2>

          <div className="process-grid">
            <article className="process-step">
              <span className="process-icon">
                <i className="fa-regular fa-file-lines"></i>
              </span>
              <div className="process-circle">
                <h3>Planning</h3>
                <p>Strategically align possibilities via real-time tracking.</p>
              </div>
            </article>

            <span className="process-link-arrow" aria-hidden="true">
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>

            <article className="process-step">
              <span className="process-icon">
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </span>
              <div className="process-circle">
                <h3>Design</h3>
                <p>Purposefully structure detailed layouts via real-world goals..</p>
              </div>
            </article>

            <span className="process-link-arrow" aria-hidden="true">
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>

            <article className="process-step">
              <span className="process-icon">
                <i className="fa-solid fa-helmet-safety"></i>
              </span>
              <div className="process-circle">
                <h3>Construct</h3>
                <p>"Robust and meaningful execution to bring plans to life."</p>
              </div>
            </article>

            <span className="process-link-arrow" aria-hidden="true">
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>

            <article className="process-step">
              <span className="process-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </span>
              <div className="process-circle">
                <h3>Finishing</h3>
                <p>"Immaculate final touches and a flawless handover.".</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="why-choose-wrap">
          <div className="why-choose-content">
            <div className="why-left">
              <p className="why-kicker">WHY CHOOSE US</p>
              <h2 className="why-title">Why Choose For Us</h2>
              <p className="why-desc">
                Interactively transition performance based services vis-a-vis world wide ROI.
                Proactively network next-generation markets whereas. Conveniently grow
                resource-leveling partnerships for top-line.
              </p>

              <div className="why-body">
                <div className="why-tabs">
                  {chooseItems.map((_, idx) => (
                    <button
                      key={idx}
                      className={`why-tab ${chooseIndex === idx ? 'active' : ''}`}
                      onClick={() => setChooseIndex(idx)}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <div className="why-detail">
                  <h3>{activeChoose.title}</h3>
                  <p>{activeChoose.desc}</p>
                  <div className="why-list-wrap">
                    <img src={activeChoose.image} alt={activeChoose.title} className="why-small-image" />
                    <ul className="why-list">
                      {activeChoose.points.map((point) => (
                        <li key={point}>
                          <i className="fa-solid fa-circle-check"></i>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-right">
              <div className="why-media-card">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681823100546-0541b5880f14?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Team engineers"
                />
              
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="clients-section">
      <div className="clients-wrap">
        <p className="clients-kicker">OUR CLIENTS</p>

        <h2 className="clients-title">
          Our Major Clients
        </h2>

        {/* The tight grid structure of the image */}
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              {/* Optional: Add text fallback if img link is empty for testing */}
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                  onError={(e) => {
                    // Fallback to text if img link is broken
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block'; 
                    e.target.nextElementSibling.classList.add('logo-text-fallback');
                  }}
                />
              ) : null}
              {/* This name tag is for accessibility and layout, hidden via CSS like image_0.png */}
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="blog-section">
        <div className="blog-wrap">
          <p className="blog-kicker">LETEST BLOG</p>
          <h2 className="blog-title">Latest News &amp; Feeds</h2>

          <div className="blog-grid">
            {blogs.map((item) => (
              <article key={item.title} className="blog-card">
                <div className="blog-image-wrap">
                  <img src={item.image} alt={item.title} className="blog-image" />
                </div>

                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-author">
                      <i className="fa-solid fa-user"></i>
                      {item.author}
                    </span>
                    <span className="blog-date">
                      <i className="fa-regular fa-calendar-days"></i>
                      {item.date}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button type="button" className="blog-read-btn">
                    READ MORE <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
