import React, { useState } from "react";
import "./NewUser.css";
import GoogleIcon from "../../assets/Google icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const NewUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="new-user-container">
      <div className="new-user-wrapper">
        {/* Left Section */}
        <div className="new-user-left-section">
          <div className="new-user-overlay">
            <h3>Welcome to Edukit Foundation</h3>
            <p>
              Start your journey us, create an account to explore and support
              educational initiatives.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="new-user-right-section">
          <div className="new-user-formWrapper">
            <div className="new-user-header">
              <h2>Create Account</h2>
              <p>Please fill in the correct details to get started</p>
            </div>
            <form>
              <div className="new-user-input-group">
                <div className="input-wrapper">
                  <label htmlFor="full-name">Full Name</label>
                  <input type="text" id="full-name" placeholder="Full name" />
                </div>
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
              </div>
              {/* <div className="input-wrapper">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="tel"
                  id="phone-number"
                  placeholder="Phone number"
                />
              </div> */}
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

              <div className="new-user-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  You agree to our <a href="#">Privacy Policy</a>.
                </label>
              </div>

              <button className="new-user-primary-btn">Create Account</button>
              <button className="new-user-google-btn">
                <img
                  src={GoogleIcon}
                  alt="Google Icon"
                  className="google-icon"
                />{" "}
                Sign up with Google
              </button>

              <p className="new-user-footer">
                Already have an account? <a href="#">Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
