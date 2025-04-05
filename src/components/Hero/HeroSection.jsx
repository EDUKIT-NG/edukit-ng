import React, { useState, useEffect } from "react";
import "./HeroSection.css";

// Import images
import Hero1 from "../../assets/Hero1.png";
import Hero2 from "../../assets/Hero2.png";
import Hero3 from "../../assets/Hero3.png";
import Hero4 from "../../assets/Hero4.png";
import Hero5 from "../../assets/Hero5.png";

const HeroSection = () => {
  const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [exitingSlide, setExitingSlide] = useState(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setExitingSlide(currentSlide);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, images.length]);

  return (
    <div className="hero-section">
      <div className="hero-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`hero-slide ${
              index === currentSlide
                ? "hero-active"
                : index === exitingSlide
                  ? "hero-exiting"
                  : ""
            }`}
          />
        ))}
      </div>
      <div className="hero-content">
        <p className="hero-subtitle">EDUKIT FOUNDATION</p>
        <h1 className="hero-title">
          BRIDGING GAPS, <br />
          BUILDING FUTURES!
        </h1>
        <p className="hero-small-text">
          Equipping students with essential resources today for a brighter
          future.
        </p>
        <div className="hero-buttons">
          <button className="hero-donation">Make a Donation</button>
          <button className="hero-request">Make a Request</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
