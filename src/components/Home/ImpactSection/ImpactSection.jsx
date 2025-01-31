import React, { useState, useEffect, useRef } from "react";
import "./ImpactSection.css";

const ImpactSection = () => {
  const [impactData, setImpactData] = useState({
    booksDonated: 123,
    studentsHelped: 456,
    schoolsReached: 789,
  });

  // Refs to track the numbers and animate them
  const booksRef = useRef(null);
  const studentsRef = useRef(null);
  const schoolsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate an API call to fetch data
    const fetchImpactData = () => {
      const data = {
        booksDonated: 123,
        studentsHelped: 456,
        schoolsReached: 789,
      };
      setImpactData(data);
    };

    fetchImpactData();

    // IntersectionObserver to detect when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section comes into view
        } else {
          setIsVisible(false); // Optionally, stop counting if section leaves view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const section = document.querySelector(".impact-section");
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Function to animate numbers
  const animateNumber = (target, ref) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        ref.current.innerText = count.toString().padStart(3, "0");
      } else {
        clearInterval(interval);
      }
    }, 5); // 5ms interval for smooth counting effect
  };

  // Reset and animate numbers when the section is visible
  useEffect(() => {
    if (isVisible) {
      // Reset numbers before animation
      booksRef.current.innerText = "000";
      studentsRef.current.innerText = "000";
      schoolsRef.current.innerText = "000";

      animateNumber(impactData.booksDonated, booksRef);
      animateNumber(impactData.studentsHelped, studentsRef);
      animateNumber(impactData.schoolsReached, schoolsRef);
    }
  }, [isVisible, impactData]);

  return (
    <section className="impact-section">
      <div className="impact-rectangle">
        <h2 className="impact-title">OUR IMPACT SO FAR</h2>
        <div className="impact-numbers">
          <div className="impact-number">
            <h3 ref={booksRef}>000</h3>
            <small>Number of books Donated</small>
          </div>
          <div className="impact-number">
            <h3 ref={studentsRef}>000</h3>
            <small>Number of students helped</small>
          </div>
          <div className="impact-number">
            <h3 ref={schoolsRef}>000</h3>
            <small>Number of schools reached</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
