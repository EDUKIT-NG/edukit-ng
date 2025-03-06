import studentImage from "./images/student.png";
import About from "./images/illustration.png";
import bookLogo from "./icons/book-2.png";
import boxLogo from "./icons/box-seam.png";
import truckLogo from "./icons/truck-delivery.png";
import heartLogo from "./icons/heart-handshake.png"
import targetLogo from "./icons/target-arrow.png";
import eyeLogo from "./icons/eye.png";
import questionLogo from "./icons/question-mark.png"
import keyLogo from "./icons/key.png"

import './Aboutus.css'

const AboutUs =()=> {

  return (
    <div>
      <div className="about-container">
        <div className="Goal">
          <h2>
            Help Us Reach Our Goal of Equipping 1,000,000
            Underpriviledged Students with Essential Learning
            Resources Over the Next 5 Years
          </h2>
          <div className="don-button">
            <button id = "btn-1"> Make a Donation</button>
            <button id = "btn-2">Volunteer With Us</button>
          </div>
        </div>
      </div>
      {/* who we are */}
      <div className="we-are">
        <div className="we-are-description">
          <h1><span className="highlight">WHO</span> WE ARE</h1>
          <p>
            Edukit Nigeria is an initiative aimed at transforming
            educational access for underprivileged students across
            Nigeria. We are dedicated to addressing the critial issues of
            educational inequality, particularly in rural and low-income
            urban areas where students often lack essential resources
            like textbooks, school supplies, and digital learning tools.
          </p>
          <p>
            Edukit Nigeria is committed to bridging the gap between
            those who have surplus educational materials and those WHO
            are eager to learn but cannot afford the necessary resources.
            We believe that education should be a right, not a privilege,
            and that every child deserves access to the tools that will
            empower them to build their dreams.
          </p>
          <button className="story-button">Read Our Story</button>
        </div>
        <div className="illustration">
          <img src = {About} alt = "About us"/>
          
        </div>
      </div>
      {/* what we do */}
      <div className="we-do">
        <div className="what-we-do">
          <h1><span className="highlight">WHAT</span> WE DO</h1>
          <p>
            Through our platform, we collect, manage, and distribute donated
            educational resources while also raising funds to purchase new academic
            materials for students in need. Our efforts are supportd by community engagement,
            partnerships with schools, NGOs, and corporate sponsors, as well as awareness campaigns
            aimed at fostering a culture of giving and support for education.
          </p>
        </div>  
        <div className="we-do-images">
          <div className="Info">
            <div className = "Collect-logo">
              <img src={bookLogo} alt="Collect icon"/>
            </div>
            <div>
              <h2>Collect</h2>
              <p>
                We gather donated educational materials form individuals and organizations.
              </p>
            </div>
          </div>
          <div className="Info">
            <div className = "Collect-logo">
              <img src={boxLogo} alt="Collect icon"/>
            </div>
            <div>
              <h2>Manage</h2>
              <p>
                Donated materials are sorted, cataloged, and stored efficiently to ensure
                smooth distribution.
              </p>
            </div>
          </div>

          {/* distribution */}
          <div className="Info">
            <div className = "Collect-logo">
              <img src={truckLogo} alt="Collect icon"/>
            </div>
            <div>
              <h2>Distribute</h2>
              <p>
                We provide academic materials to schools and students in need, fulfilling
                their specific requests.
              </p>
            </div>
          </div>

          {/* fund raising */}
          <div className="Info">
            <div className = "Collect-logo">
              <img src={heartLogo} alt="Collect icon"/>
            </div>
            <div>
              <h2>Fund Raising</h2>
              <p>
                Funds are raised to purchase new textbooks, school supplies, and modern leraning tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className="Values">
        <div className="Edukit-plan">
          <div className="Plan-logo">
            <div className="img-logo">
              <img src={targetLogo} alt="Our Mission" />
            </div>
            <div>
              <h2>OUR MISSION</h2>
            </div>
          </div>
          <div className="The-plan">
            <p>
              Edukit Nigeria is dedicated to bridging the gap between underprivileged students and the
              educational resources they need. By creating a sustainable, community-driven platform that 
              not only redistributes surplus materials but also secures funding to purchase new academic 
              resources. Edukit empowers students to achieve academic success and reach their full potential.
            </p>
          </div>
        </div>

        {/* our vision */}
        <div className="Edukit-plan">
          <div className="Plan-logo">
            <div className="img-logo">
              <img src = {eyeLogo} alt="Our Vision" />
            </div>
            <div>
              <h2>OUR VISION</h2>
            </div>
          </div>
          <div className="The-plan">
            <p>
              To create a Nigeria where every child, regardless of their economic background, has access to the 
              educational resources necessary to achieve their full potential and succeed academically
            </p>
          </div>
        </div>

        {/* our challenge */}
        <div className="Edukit-plan">
          <div className="Plan-logo">
            <div className="img-logo">
              <img src= {questionLogo} alt="Challenge" />
            </div>
            <div>
              <h2>THE CHALLENGE</h2>
            </div>
          </div>
          <div className="The-plan">
            <p>
              In Nigeria, millions of underprivileged students, particularly in rural and low-income areas, lack
              access to essential educational resources. According to UNICEF, over 10 million children are out of
              School, and many other struggle without textbooks, school supplies,and digital tools.
              Despite the large amount of unused resources in householda of those who have completed their schooling
              or advanced to higher levels(e.g. from secondary to university), there is no efficient system to
              redistribute those materials to those in need. Reliance on donations alone insufficient to meet the demand
              contributing to persistent education inequality.
            </p>
          </div>
        </div>

        {/* our solution */}
        <div className="Edukit-plan">
          <div className="Plan-logo">
            <div className="img-logo">
              <img src={ keyLogo} alt="Solution" />
            </div>
            <div>
              <h2> THE SOLUTION</h2>
            </div>
          </div>
          <div className="The-plan">
            <p>
              Edukit Nigeria addresses this gap by creating a platform to collect, manage, and distribute
              educational resources to students in need. Beyond redistributing unused materials, we raise
              funds to purchase textbooks, school supplies, and digital tools. Our platform also offers
              mentorship, personalized tutoring, counseling, scholarships and access to digital learning
              resources, including e-books and study groups. With an A.I-powered book recommendation system 
              and skill-building workshops, we ensure students are equipped for both academic success and 
              future careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
