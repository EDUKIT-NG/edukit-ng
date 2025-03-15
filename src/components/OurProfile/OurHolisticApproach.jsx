import React, { useState, useEffect } from 'react';

// CSS styles
const styles = `
.lead-container {
  font-family: Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  padding: 20px 50px 40px 50px;
  background-color: #FFFFFF;
}

.header {
  margin-top: 60px; 
  margin-bottom: 50px; 
  padding-bottom: 5px;
  width: 100%;
}

.header h1 {
  font-size: 1.9rem;
  margin: 0;
  font-weight: bold;
}

.blue-text {
  color: #0056b3;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 80%; /* INCREASED: from 60% to 80% to make better use of large screens */  
  margin: 0 auto;  
  max-width: 1400px; /* Added max-width to control expansion on very large screens */
}

.box {
  border-radius: 15px;
  padding: 30px; /* Increased padding for more content space */
  position: relative;
  text-align: center;
  border: 3px solid;
  opacity: 0;
  transform: translateY(50px) scale(0.8);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  min-height: 250px; /* Added min-height to ensure consistent box sizing */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box.animate {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.blue-box {
  border-color: #0056b3;
  transition-delay: 0.1s;
}

.red-box {
  border-color: #d9480f;
  transition-delay: 0.3s;
}

.purple-box {
  border-color: #5f2eea;
  transition-delay: 0.5s;
}

.green-box {
  border-color: #00a86b;
  transition-delay: 0.7s;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease;
}

.circle span {
  color: #FFFFFF;
  font-size: 22px;
  font-weight: bold;
}

/* hover effect */
.box:hover .circle {
  transform: translate(-50%, -50%) rotate(360deg);
  transition: transform 0.8s ease;
}

.blue-circle {
  background-color: #0056b3;
}

.red-circle {
  background-color: #d9480f;
}

.purple-circle {
  background-color: #5f2eea;
}

.green-circle {
  background-color: #00a86b;
}

h2 {
  font-size: 1.3rem;
  margin: 25px 0 10px;
}

p {
  font-size: 0.85rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 0;
}

/* Responsive design */
@media (max-width: 1200px) {
  .grid-container {
    width: 90%;
  }
}

@media (max-width: 992px) {
  .grid-container {
    width: 95%;
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    width: 100%;
  }
  
  .header h1 {
    font-size: 1.5rem;
  }
  
  .box {
    padding: 15px;
    min-height: auto;
  }
  
  .lead-container {
    padding: 30px 15px;  
  }
}

/* Extra large screens */
@media (min-width: 1600px) {
  .grid-container {
    width: 70%;
  }
}

/* hover animation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
}

.box:hover {
  animation: bounce 1s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s ease;
}
`;

const LEADFramework = () => {
  const [animate, setAnimate] = useState(false);
 
  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 300);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="lead-container">
        <div className="header text-center">
          <h1>OUR HOLISTIC APPROACH: <span className="blue-text">L.E.A.D</span></h1>
        </div>
       
        <div className="grid-container">
          {/* Local Engagement Box */}
          <div className={`box blue-box ${animate ? 'animate' : ''}`}>
            <div className="circle blue-circle">
              <span>L</span>
            </div>
            <h2>Local Engagement</h2>
            <p>
              We actively engage with local communities, schools, and
              organizations to identify the educational needs of
              underprivileged students. Through participation and
              community outreach, we connect with donors and
              beneficiaries, ensuring that resources are effectively
              matched with those who need them most.
            </p>
          </div>
         
          {/* Empowerment Box */}
          <div className={`box red-box ${animate ? 'animate' : ''}`}>
            <div className="circle red-circle">
              <span>E</span>
            </div>
            <h2>Empowerment</h2>
            <p>
              We empower volunteers and community members to
              participate in our mission. By providing training and
              resources, we enable individuals to take an active role in
              collecting, managing, and distributing educational
              materials, fostering a sense of ownership and
              commitment to educational equity.
            </p>
          </div>
         
          {/* Access Box */}
          <div className={`box purple-box ${animate ? 'animate' : ''}`}>
            <div className="circle purple-circle">
              <span>A</span>
            </div>
            <h2>Access</h2>
            <p>
              We focus on increasing access to educational resources
              through donation drives, crowdfunding campaigns, and
              strategic partnerships. Our goal is to ensure that every
              child, regardless of their economic background, has
              access to the books, school supplies, and digital tools
              necessary for academic success.
            </p>
          </div>
         
          {/* Distribution Box */}
          <div className={`box green-box ${animate ? 'animate' : ''}`}>
            <div className="circle green-circle">
              <span>D</span>
            </div>
            <h2>Distribution</h2>
            <p>
              We systematically distribute collected resources to
              students in need, prioritizing those in rural and low-
              income urban areas. Our approach includes organizing
              community events and workshops that not only provide
              materials but also promote a culture of learning and
              sharing within the community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LEADFramework;