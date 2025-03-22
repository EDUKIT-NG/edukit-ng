import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2 className="login-title">Log in to your account</h2>
        <p className="login-subtitle">
          I'm not done with the page yet, i'll finish up when i come back😊.
        </p>

        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <div className="password-field">
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
              role="button"
              aria-label="Toggle password visibility"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            {/* Toggle between faEye and faEyeSlash based on showPassword */}
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password
            </a>
          </div>

          <button className="sign-in-btn">Sign in</button>

          <button className="google-sign-in">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
            />
            Sign in with Google
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
