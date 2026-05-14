import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="subtitle">Get in touch for your next project</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <h2>Inquiry Details</h2>
              <div className="info-item">
                <i className="fa-solid fa-user-tie"></i>
                <div>
                  <h4>Sivakumar</h4>
                  <p>+971 54 792 7093 / +971 50 494 1329</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-user-tie"></i>
                <div>
                  <h4>Vipin Das</h4>
                  <p>+971 54 792 7090</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-phone-volume"></i>
                <div>
                  <h4>Land Line</h4>
                  <p>+971 4 886 8848</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-globe"></i>
                <div>
                  <h4>Website</h4>
                  <p>www.hegsauae.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Office</h4>
                  <p>Dubai, Sharjah, & across UAE</p>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-submit">SEND MESSAGE →</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011839712!2d54.94728751325902!3d25.076022442436043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1715600000000!5m2!1sen!2sae"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Hegsa Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
