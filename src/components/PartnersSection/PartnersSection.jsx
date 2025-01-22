import React from 'react';
import './PartnersSection.css';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.png';
import logo6 from './logo6.png';

const PartnersSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="section-subtitle">
          PARTNERSHIPS & SPONSORSHIPS
        </div>
        
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">
              MEET OUR PARTNERS & SPONSORS
            </h2>
            <p className="section-description">
              Our partners and sponsors help us provide essential educational
              resources and bridge learning gaps for students across Nigeria.
              Their support strengthens our mission, enabling us to impact more
              lives and foster brighter futures.
            </p>
            <button className="partner-button">
              Partner With Us
            </button>
          </div>

          <div className="partners-grid">
            {logos.map((logo, index) => (
              <div key={index} className="partner-logo-container">
                <img 
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;