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
        <h2 className="title">Key Features</h2>
        <p className="head">HOW EDUKIT NIGERIA WORKS</p>
        <p className="description">
          Edukit Nigeria is an initiative aimed at transforming educational
          access for underprivileged students across Nigeria.
        </p>
        <button className="cta-button">Learn More About Us</button>
      </div>

      {/* Right Side */}
      <div className="key-features-right">
        <div className="feature-card">
          <img src={Feat1} alt="Feat1" className="feature-image" />
          <h3 className="feature-heading">Resource Donation Platform</h3>
          <p className="feature-text">
            We accept donation of educational materials, from textbooks and
            stationery to school bags. Ensuring students receive quality
            resources they might otherwise lack.
          </p>
        </div>
        <div className="feature-card">
          <img src={Feat2} alt="Feat2" className="feature-image" />
          <h3 className="feature-heading">Student/School Request System</h3>
          <p className="feature-text">
            Schools and students can directly request specific resources through
            an online system, helping EduKit identify and fulfill the most
            urgent needs efficiently.
          </p>
        </div>
        <div className="feature-card">
          <img src={Feat3} alt="Feat3" className="feature-image" />
          <h3 className="feature-heading">Volunteer Sign Up Portal</h3>
          <p className="feature-text">
            A portal for individuals who want to volunteer their time, skills,
            or resources to support EduKit's mission, from organizing materials
            to logistics management.
          </p>
        </div>
        <div className="feature-card">
          <img src={Feat4} alt="Feat4" className="feature-image" />
          <h3 className="feature-heading">E-Library Access</h3>
          <p className="feature-text">
            We provide digital access to textbooks, novels, and other learning
            materials. The digital library offers a vast collection of
            educational materials, helping students with essential educational
            digital content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
