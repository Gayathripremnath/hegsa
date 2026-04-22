import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const radius = 20;
const circ = 2 * Math.PI * radius;

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const offset = circ - (progress / 100) * circ;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`scroll-progress ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg width="54" height="54" viewBox="0 0 54 54">
        <circle cx="27" cy="27" r={radius} className="sp-track" />
        <circle
          cx="27" cy="27" r={radius}
          className="sp-fill"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="sp-arrow">↑</span>
    </button>
  );
};

export default ScrollProgress;
