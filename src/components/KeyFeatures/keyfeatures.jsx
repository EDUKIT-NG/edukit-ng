import React from "react";
import "./keyfeatures.css";

// Import Images
import Feat1 from "../../assets/Feat1.png";
import Feat2 from "../../assets/Feat2.png";
import Feat3 from "../../assets/Feat3.png";
import Feat4 from "../../assets/Feat4.png";

const KeyFeatures = () => {
  return (
    <div className="key-features">
      {/* Left Side */}
      <div className="key-features-left">
        <h2 className="key-features-title">KEY FEATURES</h2>
        <p className="key-features-head">DISCOVER WHO WE ARE</p>
        <p className="key-features-description">
          Educational Kits for Charity Foundation is an N.G.O initiative aimed
          at transforming educational access for underprivileged students across
          Nigeria.
        </p>
        <button className="key-features-cta-button">Learn More About Us</button>
      </div>

      {/* Right Side */}
      <div className="key-features-right">
        <div className="key-features-card">
          <img src={Feat1} alt="Feat1" className="key-features-image" />
          <h3 className="key-features-heading">Resource Donation Platform</h3>
          <p className="key-features-text">
            We accept donations of educational materials like textbooks,
            stationery, and school bags, as well as funds, to ensure students
            receive essential resources they might lack.
          </p>
        </div>
        <div className="key-features-card">
          <img src={Feat2} alt="Feat2" className="key-features-image" />
          <h3 className="key-features-heading">
            Student/School Request System
          </h3>
          <p className="key-features-text">
            Schools and Students can directly request specific resources through
            an online system, helping Edukit identify and fulfill the most
            urgent needs efficiently.
          </p>
        </div>
        <div className="key-features-card">
          <img src={Feat3} alt="Feat3" className="key-features-image" />
          <h3 className="key-features-heading">Volunteer Sign Up Portal</h3>
          <p className="key-features-text">
            A portal for individuals who want to volunteer their time, skills,
            or resources to support Edukit’s mission, from organizing materials
            to logistics management.
          </p>
        </div>
        <div className="key-features-card">
          <img src={Feat4} alt="Feat4" className="key-features-image" />
          <h3 className="key-features-heading">Learning Hub Access</h3>
          <p className="key-features-text">
            Through the Learning Hub, students access an e-library of textbooks
            and learning materials, book academic counselors, join a student
            community, and schedule expert tutors for personalized online
            learning and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
