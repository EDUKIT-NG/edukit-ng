import React, { useState, useEffect } from "react";
import "./MissionSupport.css";
import image1 from "./missionsupport-1.png";
import image2 from "./missionsupport-2.png";
import image3 from "./missionsupport-3.png";
import image4 from "./missionsupport-4.png";

const MissionSupport = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      className="mission-banner"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="mission-content">
        <h2 className="mission-title">
          Support our mission today,
          <br />
          let's Make a Difference
          <br />
          together!
        </h2>
        <button className="support-button">Support Our Mission</button>
      </div>
    </section>
  );
};

export default MissionSupport;
