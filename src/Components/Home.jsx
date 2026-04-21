import React, { useState, useEffect } from 'react';
import './Home.css';

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
    image: 'https://plus.unsplash.com/premium_photo-1681823100546-0541b5880f14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    tagline: '# Expert Engineers',
    title: 'STRONG FOUNDATIONS\nBRIGHT FUTURES',
    desc: 'Our experienced team of engineers and architects bring decades of expertise to every project, ensuring excellence from groundbreaking to completion.',
    image: 'https://images.unsplash.com/photo-1664662566501-73a7e41d8c19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fDB8fHww',
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

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <>
    <section className="hero">
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

        {/* Slide dots */}
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

      {/* Right image */}
      <div
        className={`hero-right ${visible ? 'img-in' : 'img-out'}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      >
     
        {/* Slide counter */}
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

    {/* About section */}
    <section className="about">
      <div className="about-inner">
        <div className="about-left">
          <div className="about-circle">
            <img src="/src/assets/hero.png" alt="construction" />
            <div className="about-decor" />
            <div className="about-badge">
              <div className="badge-num">24</div>
              <div className="badge-text">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="eyebrow small">ABOUT US</div>
          <h2 className="about-title">A Company To Change The World We're Konta Industrial.</h2>
          <p className="about-desc">Proactively pontificate client-centered relationships vis-a-vis process centric leadership skills. Credibly maintain focused internal or "organic" sources rather than vertical alignments.</p>

          <div className="about-media-list">
            <div className="media-thumb">
              <div className="play">▶</div>
            </div>
            <ul className="about-features">
              <li>First Class Quality Service</li>
              <li>Service with reasonable price</li>
              <li>Immediate 24/7 Emergency</li>
              <li>Intentional development authority</li>
              <li>Stylistic formula method</li>
            </ul>
          </div>

          <div className="about-cta">
            <button className="btn-orange about-more">ABOUT MORE →</button>
            <div className="about-sig">
              <img src="/src/assets/react.svg" alt="ceo" />
              <div>
                <div className="sig-name">Mubashir</div>
                <div className="sig-title">CEO, Of Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
