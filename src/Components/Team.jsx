import React from 'react';
import './Team.css';

const teamMembers = [
    {
    name: 'Vipin Das',
    role: 'Operation Manager',
    phone: '+971 54 792 7090',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070'
  },
  {
    name: 'Sivakumar',
    role: 'Project Manager / Primary Inquiry',
    phone: '+971 54 792 7093 / +971 50 494 1329',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974'
  },

  {
    name: 'Expert Engineering Team',
    role: 'Technical Support',
    phone: '+971 4 886 8848',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070'
  }
];

const Team = () => {
  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="container">
          <h1>Our Expert Team</h1>
          <p className="subtitle">The professionals behind Hegsa's success</p>
        </div>
      </section>

      <section className="team-grid-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-socials">
                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="phone"><i className="fa-solid fa-phone"></i> {member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-us">
        <div className="container">
          <div className="join-card">
            <h2>Work With Us</h2>
            <p>We are always looking for talented professionals to join our growing team.</p>
            <button className="btn-orange">Contact Us→</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
