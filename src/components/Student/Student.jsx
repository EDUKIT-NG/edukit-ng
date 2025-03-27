import React, { useState } from "react";
import "./Student.css";
import GoogleIcon from "../../assets/Google icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Student = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="student-container">
      <div className="student-wrapper">
        {/* Left Section */}
        <div className="student-left-section">
          <div className="student-overlay">
            <h3>Welcome to Edukit Foundation</h3>
            <p>
              Start your journey to accessing free learning resources. Fill in
              your details to create your student beneficiary account and get
              the support you need.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="student-right-section">
          <div className="student-formWrapper">
            <div className="student-header">
              <h2>Create Account</h2>
              <p>Please fill in the correct details to get started</p>
            </div>
            <form>
              <div className="student-input-group">
                <div className="input-wrapper">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="First name" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Last name" />
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
                  placeholder="Phone number"
                />
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

              <div className="student-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  You agree to our <a href="#">Privacy Policy</a>.
                </label>
              </div>

              <button className="student-primary-btn">Create Account</button>
              <button className="student-google-btn">
                <img
                  src={GoogleIcon}
                  alt="Google Icon"
                  className="google-icon"
                />{" "}
                Sign up with Google
              </button>

              <p className="student-footer">
                Already have an account? <a href="#">Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
