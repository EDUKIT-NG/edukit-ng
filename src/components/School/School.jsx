import React, { useState } from "react";
import "./School.css";
import GoogleIcon from "../../assets/Google icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const School = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="school-container">
      <div className="school-wrapper">
        {/* Left Section */}
        <div className="school-left-section">
          <div className="school-overlay">
            <h3>Welcome to Edukit Foundation</h3>
            <p>
              Start your journey to accessing free learning resources. Fill in
              your details to create your school beneficiary account and get the
              support you need.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="school-right-section">
          <div className="school-formWrapper">
            <div className="school-header">
              <h2>Create Account</h2>
              <p>Please fill in the correct details to get started</p>
            </div>
            <form>
              <div className="school-input-group">
                <div className="input-wrapper">
                  <label htmlFor="school-name">School Name </label>
                  <input
                    type="text"
                    id="school-name"
                    placeholder="Enter the name of the school"
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="school-type">
                    Contact Person’s Full Name
                  </label>
                  <input
                    type="text"
                    id="school-type"
                    placeholder="Enter full name "
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="tel"
                  id="phone-number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Address" />
              </div>
              <div className="input-wrapper password-wrapper">
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="password-toggle-icon"
                    onClick={togglePasswordVisibility}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                  />
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="help-icon"
                  />
                </div>
              </div>
              <div className="input-wrapper password-wrapper">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="password-input-container">
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                    className="password-toggle-icon"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    placeholder="Confirm Password"
                  />
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="help-icon"
                  />
                </div>
              </div>

              <div className="school-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  You agree to our <a>Privacy Policy</a>.
                </label>
              </div>

              <button className="school-primary-btn">Register School</button>
              <button className="school-google-btn">
                <img
                  src={GoogleIcon}
                  alt="Google Icon"
                  className="google-icon"
                />{" "}
                Sign up with Google
              </button>

              <p className="school-footer">
                Already have an account? <a>Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
