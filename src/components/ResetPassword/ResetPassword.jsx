import React, { useState, useRef } from "react";
import GoogleIcon from "../../assets/Google icon.png";
import HeadIcon from "../../assets/head-icon.png";
import ErrorIcon from "../../assets/error-icon.png"; // Add your error icon image
import SuccessIcon from "../../assets/success-icon.png";
import FinalSuccessIcon from "../../assets/final-success-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false); // ✅ Success modal
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // 🔴 Error modal state
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [showFinalSuccessModal, setShowFinalSuccessModal] = useState(false); // State for final success modal

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

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

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      setShowPopup(false);
      setShowSuccessModal(true); // ✅ Show success modal
    } else {
      setShowPopup(false);
      setShowErrorModal(true); // Show error modal
    }
  };

  const handleRetry = () => {
    setOtp(new Array(6).fill(""));
    setShowErrorModal(false);
    setShowPopup(true); // Return to OTP screen
  };

  const handleFinalSuccess = () => {
    // Close the modal and go to login (you can also redirect here)
    setShowFinalSuccessModal(true);
  };

  const handleLoginRedirect = () => {
    // Redirect to login or close the modal
    setShowFinalSuccessModal(false);
    // You can redirect here to the login page or reset the form
  };

  // Check if passwords are valid (at least 8 characters and match)
  const isPasswordValid =
    newPassword.length >= 8 &&
    confirmPassword.length >= 8 &&
    newPassword === confirmPassword;

  // Determine the appropriate error message
  const getPasswordErrorMessage = () => {
    if (newPassword !== confirmPassword) {
      return "Passwords do not match";
    }
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      return "Not up to 8 characters";
    }
    return "";
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
            <img src={GoogleIcon} alt="Google Icon" />
            Sign up with Google
          </button>
          <p className="resetpwd-footer">
            Don't have an account? <a href="/SignUp">Sign Up</a>
          </p>
        </form>
      </div>

      {/* ✅ OTP Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-modal">
            <div className="head-icon">
              <img src={HeadIcon} alt="Head" />
            </div>
            <h3 className="head-text">Reset Password</h3>
            <p className="head-body">
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

            <button className="otp-submit-btn" onClick={handleOtpSubmit}>
              Reset Password
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="popup-overlay">
          <div className="popup-modal">
            <div className="error-icon-wrapper">
              <img src={ErrorIcon} alt="Error" className="error-icon" />
            </div>

            <h3 className="error-text">Email Verification</h3>

            <div className="otp-error-group">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  className="otp-error-box"
                  value={data}
                  readOnly
                />
              ))}
            </div>

            <p className="error-body">There was an error with the code</p>

            <div className="error-btn-group">
              <button
                className="error-back-btn"
                onClick={() => setShowErrorModal(false)}
              >
                Back
              </button>
              <button className="resend-btn" onClick={handleRetry}>
                Resend Code
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="popup-overlay">
          <div className="success-modal">
            <div className="success-icon">
              <img src={SuccessIcon} alt="Success" />
            </div>
            <h3 className="success-title">Create your new password</h3>
            <div className="success-body">
              Enter your new password to change
            </div>

            <div className="success-input-wrapper">
              <label htmlFor="new-password" className="input-label">
                New Password
              </label>
              <div className="password-input-group">
                <FontAwesomeIcon
                  icon={showNewPassword ? faEye : faEyeSlash}
                  className="password-toggle-icon-left"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowNewPassword(!showNewPassword);
                  }}
                  role="button"
                  aria-label="Toggle password visibility"
                />
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="new-password"
                  className="success-input with-icon-left"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewPassword(value);
                    setPasswordMismatch(
                      confirmPassword && value !== confirmPassword
                    );
                  }}
                />
              </div>

              <p className="input-instruction">Must be at least 8 characters</p>
            </div>

            <div className="success-input-wrapper">
              <label htmlFor="confirm-password" className="input-label">
                Confirm Password
              </label>
              <div className="password-input-group">
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEye : faEyeSlash}
                  className="password-toggle-icon-left"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                  role="button"
                  aria-label="Toggle confirm password visibility"
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  className="success-input with-icon-left"
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    setConfirmPassword(value);
                    setPasswordMismatch(newPassword && value !== newPassword);
                  }}
                />
              </div>

              {/* 🔁 Replacing the instruction dynamically */}
              <p
                className="input-instruction"
                style={{
                  color: passwordMismatch ? "red" : "#666",
                  fontSize: "14px",
                }}
              >
                {getPasswordErrorMessage()}
              </p>
            </div>

            <div className="success-btn-group">
              <button
                className="back-btn"
                onClick={() => setShowSuccessModal(false)}
              >
                Cancel
              </button>
              <button
                className="reset-btn"
                disabled={!isPasswordValid}
                onClick={handleFinalSuccess}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Success Modal */}
      {showFinalSuccessModal && (
        <div className="final-success-modal-overlay">
          <div className="final-success-modal">
            <div className="final-success-icon">
              <img src={FinalSuccessIcon} alt="FinalSuccess" />
            </div>
            <h3>Password Reset Successful</h3>
            <p>
              Your password has been successfully updated. You can now log in
              with your new password.
            </p>
            <a href="/Login">
              <button
                className="final-success-login-btn"
                onClick={handleLoginRedirect}
              >
                Login
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
