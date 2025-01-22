import React, { useState } from "react";
import "./SuccessStories.css";
import SuccessImage from './SuccessImage.png'; 

const SuccessStories = () => {
  return (
    <section className="success-stories-section">
      <div className="stories-container">
        <h3 className="stories-subtitle">SUCCESS STORIES</h3>
        <h2 className="stories-title">STORIES FROM THE COMMUNITY</h2>
        
        <div className="story-carousel">
          <div className="story-card">
            <div className="story-image-container">
              <img 
                src={SuccessImage}  
                alt="Head Teacher"
                className="story-image"
              />
            </div>
            
            <div className="story-content">
              <h4 className="storyteller-name">Victoria Monye</h4>
              <p className="storyteller-title">Head Teacher, Hope Secondary School</p>
              
              <blockquote className="story-quote">
                "EduKit Nigeria has been a blessing for our school. With many of our
                students from low-income families, accessing school materials was
                often a challenge. Through EduKit, we received notebooks,
                stationery, and even digital learning tools that have transformed
                our classrooms. Our students are excited to learn, EduKit Nigeria's
                support is helping us shape a brighter future for every student in
                our school."
              </blockquote>
              
              <button className="read-more-button">
                Read More
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
          
          <div className="carousel-controls">
            <button className="carousel-button prev">←</button>
            <button className="carousel-button next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;