import React from "react";
import "./NewsletterFooter.css";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import email from "./email.png";
import location from "./location.png";
import phone from "./phone.png";

const NewsletterFooter = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <h2 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="newsletter-description">
          Stay updated on our journey to transform education in Nigeria. Get
          monthly updates on our initiatives, success stories, campaigns, and
          how you can be part of the solution.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <div className="subscribe-button">Subscribe</div>
        </div>
        <p className="privacy-note">
          We care about your data in our{" "}
          <a href="#" className="privacy-link">
            privacy policy
          </a>
        </p>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Our Vision</a>
            </li>
            <li>
              <a href="#">Impact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get Involved</h3>
          <ul>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Volunteer</a>
            </li>
            <li>
              <a href="#">Partner With Us</a>
            </li>
            <li>
              <a href="#">Sponsor an Event</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Request Support</h3>
          <ul>
            <li>
              <a href="#">Request as a Student</a>
            </li>
            <li>
              <a href="#">Request as a School</a>
            </li>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">E-Library</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <img src={location} alt="Location" className="icon" />
              No 8, Church Street, Poly Road, Sango Ibadan.
            </li>
            <li>
              <img src={email} alt="Email" className="icon" />
              edukitnigeria@gmail.com
            </li>
            <li>
              <img src={phone} alt="Phone" className="icon" />
              +234 810 569 4331
            </li>
          </ul>
        </div>
      </div>

      <div className="social-links">
        <a href="#">
          <img src={facebook} alt="Facebook" className="social-icon" />
        </a>
        <a href="#">
          <img src={instagram} alt="Instagram" className="social-icon" />
        </a>
        <a href="#">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="#">
          <img src={twitter} alt="X" className="social-icon" />
        </a>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>© 2024 Edukit Foundation. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default NewsletterFooter;
