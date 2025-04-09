import React from "react";
import ErrorIcon from "../../assets/error-icon.png";
import "../ResetPassword/ResetPassword.css"; // You can move styles to a separate ErrorScreen.css if needed

const ErrorScreen = ({
  otp,
  setOtp,
  inputRefs,
  handleChange,
  handleKeyDown,
  onClose,
  onSubmit,
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-modal">
        <div className="error-icon">
          <img src={ErrorIcon} alt="Error" />
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
              key={index}
              type="text"
              maxLength="1"
              placeholder="0"
              className="otp-input-box"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        <div className="rpwd-footer">
          Didn't get a code? <a href="resend">Click to resend.</a>
        </div>

        <button className="otp-submit-btn" onClick={onSubmit}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;
