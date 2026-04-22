import React, { useState, useEffect } from 'react';
import './Home.css';
import About from './About';
import bg1 from '../assets/bg1.png';

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
      {/* bg1.png fills the entire hero */}
      <section className="hero" style={{ backgroundImage: `url("${bg1}")` }}>

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

        {/* Right: slider image placed ON TOP of bg1 */}
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

      <About />
    </>
  );
};

export default Home;
