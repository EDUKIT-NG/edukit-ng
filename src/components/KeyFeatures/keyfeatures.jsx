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
        <h2 className="features-title">KEY FEATURES</h2>
        <p className="head">DISCOVER WHO WE ARE</p>
        <p className="features-description">
          Edukit Nigeria is an initiative aimed at transforming educational
          access for underprivileged students across Nigeria.
        </p>
        <button className="cta-button">Learn More About Us</button>
      </div>

      {/* Right Side */}
      <div className="key-features-right">
        <div className="feature-card">
          <img src={Feat1} alt="Feat1" className="feature-image" />
          <h3 className="feature-heading">Ship Learning Kits to 10 Students</h3>
          <p className="feature-text">
            We accept donations of educational materials like textbooks,
            stationery, and school bags, as well as funds, to ensure students
            receive essential resources they might lack.
          </p>
        </div>
        <div className="feature-card">
          <img src={Feat2} alt="Feat2" className="feature-image" />
          <h3 className="feature-heading">
            Deliver a Box of Books to a School
          </h3>
          <p className="feature-text">
            With <span>₦10,000</span>, you can stock a school library with a
            curated selection of books, helping students and teachers access
            valuable learning resources.
          </p>
        </div>
        <div className="feature-card">
          <img src={Feat3} alt="Feat3" className="feature-image" />
          <h3 className="feature-heading">Volunteer Sign Up Portal</h3>
          <p className="feature-text">
            Your <span>₦20,000</span> donation will equip an entire classroom
            with textbooks, stationary, and other essentials, creating a more
            effective learning environment.
          </p>
        </div>
        <div className="feature-card">
          <img src={Feat4} alt="Feat4" className="feature-image" />
          <h3 className="feature-heading">Learning Hub Access</h3>
          <p className="feature-text">
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
