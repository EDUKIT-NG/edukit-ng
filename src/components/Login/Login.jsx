import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import GoogleIcon from "../../assets/Google icon.png";

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
          Welcome back! Please enter your details.
        </p>

        <form className="login-form">
          <label>Email</label>
          <div className="inputWrapper">
            <input type="email" placeholder="Enter your email" />
          </div>

          <label>Password</label>
          {/* Toggle between faEye and faEyeSlash based on showPassword */}
          <div className="pass-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="Login-password-toggle-icon"
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior
                togglePasswordVisibility();
              }}
              role="button"
              aria-label="Toggle password visibility"
            />
          </div>

          <div className="remember-forgot">
            <div className="login-Checkbox">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a className="forgot-password">Forgot password</a>
          </div>

          <button className="sign-in-btn">Sign in</button>

          <button className="google-sign-in">
            <img src={GoogleIcon} alt="Google Logo" />
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
