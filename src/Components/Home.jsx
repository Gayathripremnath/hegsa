import React, { useState, useEffect } from 'react';
import './Home.css';
import About from './About';
import bg4 from '../assets/bg4.png';

const slides = [
  {
    tagline: '# High Quality Construction',
    title: 'THE BEST BUILDING\nSERVICES FOR YOU',
    desc: 'Enthusiastically provide access to client-focused construction procedures through cooperative niches. Intrinsically promote compelling methods of empowerment.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070',
  },
  {
    tagline: '# Trusted Since 2005',
    title: 'WE BUILD YOUR\nDREAM PROJECTS',
    desc: 'Professionally deliver superior construction solutions with a commitment to quality, safety, and innovation. Your vision is our mission.',
    image: 'https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww',
  },
  {
    tagline: '# Expert Engineers',
    title: 'STRONG FOUNDATIONS\nBRIGHT FUTURES',
    desc: 'Our experienced team of engineers and architects bring decades of expertise to every project, ensuring excellence from groundbreaking to completion.',
    image: 'https://plus.unsplash.com/premium_photo-1661723468924-62073f1c3125?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
];

// Vision/Mission/Objectives cards (commented out per request)
// const vmCards = [
//   {
//     title: 'OUR VISION',
//     icon: 'fa-eye',
//     lead:
//       'Our vision is to provide the highest standards of quality and value to our clients. To achieve this, we offer an advantage over our completion in terms of our:',
//     bullets: ['Collaborative and hands-on approach.'],
//   },
//   {
//     title: 'OUR MISSION',
//     icon: 'fa-bullseye',
//     lead: 'To consistent deliver satisfactory job.',
//     bullets: ['Renovation maintenance & services that satisfy the needs of our customers.'],
//   },
//   {
//     title: 'OUR OBJECTIVES',
//     icon: 'fa-flag-checkered',
//     lead:
//       'We are committed to deliver provable & excellence performance by focusing on the following:',
//     bullets: ["Minimize the customers' budget."],
//   },
// ];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
      setAnimating(false);
    }, 500);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <>

      <section className="hero" style={{ backgroundImage: `url("${bg4}")` }}>

        {/* dark overlay on left for text readability */}
        <div className="hero-overlay" />

        {/* Left content */}
        <div className="hero-left">
          <div className={`hero-text-content ${visible ? 'slide-in' : 'slide-out'}`}>
            <h4 className="tagline">{slide.tagline}</h4>
            <h1 className="main-title">
              {slide.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
            <p className="description">{slide.desc}</p>
            <div className="hero-btns">
              <button className="btn-orange">OUR SERVICES →</button>
              <button className="btn-dark">GET A QUOTE →</button>
            </div>
          </div>

          <div className="slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        <div
          className={`hero-right ${visible ? 'img-in' : 'img-out'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >

          <div className="slide-counter">
            <span className="current-num">0{current + 1}</span>
            <span className="sep"> / </span>
            <span className="total-num">0{slides.length}</span>
          </div>
        </div>

        {/* Center diamond arrow */}
        <div className="diagonal-arrow" onClick={next}>
          <span>→</span>
        </div>
      </section>

      {/* Vision/Mission/Objectives section (commented out per request) */}
      {/*
      <section className="vm-section">
        <div className="vm-wrap">
          <div className="vm-grid">
            {vmCards.map((card) => (
              <article key={card.title} className="vm-card">
                <div className="vm-card-top">
                  <span className="vm-card-icon" aria-hidden="true">
                    <i className={`fa-solid ${card.icon}`}></i>
                  </span>
                  <h3 className="vm-card-title">{card.title}</h3>
                </div>
                <p className="vm-card-lead">{card.lead}</p>
                <ul className="vm-card-list">
                  {card.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      <About />
    </>
  );
};

export default Home;
