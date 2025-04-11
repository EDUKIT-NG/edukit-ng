import React, { useState, useRef } from "react";
import GoogleIcon from "../../assets/Google icon.png";
import HeadIcon from "../../assets/head-icon.png";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show modal on submit
  };

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // Allow only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next box
    if (index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0 && !otp[index]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-wrapper">
        <h5 className="reset-password-title">Reset Password</h5>
        <p className="reset-password-instruction">
          Enter your email address or phone number, and we’ll send you a 6 digit
          OTP to reset your password
        </p>

        <form className="reset-password-form" onSubmit={handleSubmit}>
          <label>Email/Phone Number</label>
          <input
            type="email"
            placeholder="Enter your email or phone number"
            required
          />
          <button type="submit" className="reset-password-btn">
            Send OTP
          </button>
          <button type="button" className="student-google-btn">
            <img
              src={GoogleIcon}
              alt="Google Icon"
              className="student-google-icon"
            />
            Sign up with Google
          </button>
          <p className="resetpwd-footer">
            Don't have an account? <a href="/SignUp">Sign Up</a>
          </p>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-modal">
            <div className="head-icon">
              <img src={HeadIcon} alt="Head" />
            </div>
            <h3
              className="head-text"
              style={{ textAlign: "center", marginBottom: "24px" }}
            >
              Reset Password
            </h3>
            <p
              className="head-body"
              style={{ textAlign: "center", marginBottom: "32px" }}
            >
              We've sent a code to <b>+234 123 456 7890</b>
            </p>

            <div className="otp-input-group">
              {otp.map((data, index) => (
                <input
                  placeholder="0"
                  key={index}
                  type="text"
                  maxLength="1"
                  className="otp-input-box"
                  value={otp[index]}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            <div className="rpwd-footer">
              Didn't get a code? <a href="resend">Click to resend.</a>
            </div>

            <button className="otp-submit-btn">Reset Password</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
