import React, { useEffect, useMemo, useState } from 'react';
import './About.css';

const services = [
  {
    title: 'Projects Plannings',
    desc: 'Diestarbcse engage the resource maximizing process temparatorse.',
    icon: 'fa-lightbulb',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Interior Developments',
    desc: 'Moertsartis engage the resource maximizing process gataronsonse.',
    icon: 'fa-screwdriver-wrench',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Virtual Design & Build',
    desc: 'Gattisbarti engage the resource maximizing process materialistic.',
    icon: 'fa-compass-drafting',
    image:
      'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=900&q=80',
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
  { value: '2.2k+', label: 'Project Completed', icon: 'fa-trowel-bricks' },
  { value: '3.1k+', label: 'Team Members', icon: 'fa-helmet-safety' },
  { value: '1.9k+', label: 'Clients Are Happy', icon: 'fa-face-smile' },
  { value: '1.1k+', label: 'Award Wins', icon: 'fa-trophy' },
];

const testimonials = [
  {
    name: 'Avinash Kr',
    role: 'Co Founder at xyz',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    text: 'Like this video and ask your questions in comment section, do not forget to subscribe.',
  },
  {
    name: 'Bharat Kunal',
    role: 'Manager at xyz',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80',
    text: 'Easy Tutorials YouTube channel to watch more videos of website designing and photoshop.',
  },
  {
    name: 'Prabhakar D',
    role: 'CEO at xyz',
    avatar:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=240&q=80',
    text: 'Like this video and ask your questions in comment section, do not forget to subscribe.',
  },
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
            <h2 className="main-title1">A Company To Change The World We&apos;re Hegsa Industrial.</h2>
            <p className="description1">
              Proactively pontificate client-centered relationships vis-a-vis process centric leadership skills.
              Credibly maintain focused internal or "organic" sources rather than vertical alignments.
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
            <button className="services-cta">VIEW ALL SERVICES &gt;</button>
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
                <p>Uniquely orchestrate seamless potentialities via real-time.</p>
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
                <p>Matonsia orchestrate seamless potentialities via real-goal.</p>
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
                <p>Kotalian orchestrate seamless potentialities via real-mean.</p>
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
                <p>Barriaen orchestrate seamless potentialities via real-toan.</p>
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

          <div className="choose-stats">
            {stats.map((item) => (
              <article key={item.label} className="choose-stat">
                <div className="choose-stat-icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <p className="choose-stat-value">{item.value}</p>
                  <p className="choose-stat-label">{item.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-wrap">
          <p className="testimonials-kicker">TESTIMONIALS</p>
          <h2 className="testimonials-title">What Our Client Say?</h2>
          <p className="testimonials-sub">
            Subscribe Easy Tutorials YouTube channel to watch more videos.
          </p>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                <p className="testimonial-text">
                  <i className="fa-solid fa-quote-left"></i>
                  {item.text}
                </p>
                <h3 className="testimonial-name">{item.name}</h3>
                <p className="testimonial-role">{item.role}</p>
              </article>
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
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                        alt={item.author}
                      />
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
