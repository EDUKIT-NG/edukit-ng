import React, { useState, useEffect } from "react";
import "./OurHolisticApproach.css";

const LEADFramework = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 300);
  }, []);

  return (
    <div className="lead-container">
      <div className="lead-header text-center">
        <h1 className="lead-title">
          OUR HOLISTIC APPROACH: <span className="lead-blue-text">L.E.A.D</span>
        </h1>
      </div>

      <div className="lead-grid-container">
        {/* Local Engagement Box */}
        <div
          className={`lead-box lead-blue-box ${animate ? "lead-animate" : ""}`}
        >
          <div className="lead-circle lead-blue-circle">
            <span>L</span>
          </div>
          <h2 className="lead-subtitle">Local Engagement</h2>
          <p className="lead-description">
            We actively engage with local communities, schools, and
            organizations to identify the educational needs of underprivileged
            students. Through participation and community outreach, we connect
            with donors and beneficiaries, ensuring that resources are
            effectively matched with those who need them most.
          </p>
        </div>

        {/* Empowerment Box */}
        <div
          className={`lead-box lead-red-box ${animate ? "lead-animate" : ""}`}
        >
          <div className="lead-circle lead-red-circle">
            <span>E</span>
          </div>
          <h2 className="lead-subtitle">Empowerment</h2>
          <p className="lead-description">
            We empower volunteers and community members to participate in our
            mission. By providing training and resources, we enable individuals
            to take an active role in collecting, managing, and distributing
            educational materials, fostering a sense of ownership and commitment
            to educational equity.
          </p>
        </div>

        {/* Access Box */}
        <div
          className={`lead-box lead-purple-box ${animate ? "lead-animate" : ""}`}
        >
          <div className="lead-circle lead-purple-circle">
            <span>A</span>
          </div>
          <h2 className="lead-subtitle">Access</h2>
          <p className="lead-description">
            We focus on increasing access to educational resources through
            donation drives, crowdfunding campaigns, and strategic partnerships.
            Our goal is to ensure that every child, regardless of their economic
            background, has access to the books, school supplies, and digital
            tools necessary for academic success.
          </p>
        </div>

        {/* Distribution Box */}
        <div
          className={`lead-box lead-green-box ${animate ? "lead-animate" : ""}`}
        >
          <div className="lead-circle lead-green-circle">
            <span>D</span>
          </div>
          <h2 className="lead-subtitle">Distribution</h2>
          <p className="lead-description">
            We systematically distribute collected resources to students in
            need, prioritizing those in rural and low-income urban areas. Our
            approach includes organizing community events and workshops that not
            only provide materials but also promote a culture of learning and
            sharing within the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LEADFramework;
