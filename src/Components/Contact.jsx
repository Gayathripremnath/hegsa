import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
    inquiryType: 'General',
    message: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <div className="left-content">
            <h1>You Have Questions,<br />We Have Answers</h1>
            <p>Discover experiences you won't find anywhere else — thoughtfully designed to immerse you in the heart of the destination. Soulful stories waiting to be lived.</p>
            
            <div className="contact-info-grid">
              <div className="info-column">
                <h3>Location</h3>
                <p>Dubai, Sharjah & Across UAE</p>
                <p>Monday-Saturday | 08:00 - 22:00</p>
                <p>(local time)</p>
              </div>
              
              <div className="info-column">
                <h3>Social Media</h3>
                <p>Instagram</p>
                <p>Facebook</p>
              </div>
              
              <div className="info-column">
                <h3>Email</h3>
                <p>vipin@hegsauae.com</p>
                <p>shiva.k@hegsauae.com</p>
              </div>
              
              <div className="info-column">
                <h3>Contact</h3>
                <p>+971 54 792 7093</p>
                <p>+971 4 886 8848</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="form-card">
            <h2>Tell Us What You Need</h2>
            <p className="form-subtitle">Our team is ready to assist you with every detail, big or small.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <div className="inquiry-type">
                <label>Type of Inquiry</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="Booking"
                      checked={formData.inquiryType === 'Booking'}
                      onChange={handleChange}
                    />
                    <span>Booking</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="General"
                      checked={formData.inquiryType === 'General'}
                      onChange={handleChange}
                    />
                    <span>General</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="Wedding"
                      checked={formData.inquiryType === 'Wedding'}
                      onChange={handleChange}
                    />
                    <span>Corporate</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="Others"
                      checked={formData.inquiryType === 'Others'}
                      onChange={handleChange}
                    />
                    <span>Others</span>
                  </label>
                </div>
              </div>
              
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                />
                <span>I'd like to receive exclusive offers and updates</span>
              </label>
              
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011839712!2d54.94728751325902!3d25.076022442436043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1715600000000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Hegsa Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
