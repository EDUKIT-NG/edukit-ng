import React from "react";
import "./popup.css";
import UploadIcon from "../../assets/upload-icon.png"; // Replace with your icon path
import TopImage from "../../assets/popup-image.png"; // Optional top image

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {/* Image Placeholder */}
        <div className="popup-image-placeholder">
          <img src={TopImage} alt="Popup Visual" />
        </div>

        {/* Content */}
        <h2 className="popup-heading">Account Created Successfully</h2>
        <p className="popup-body-text">
          Welcome to Edukit Foundation! Start your journey to making an impact
          today!
        </p>

        {/* Buttons */}
        <div className="popup-buttons">
          <button className="popup-btn-light">           
            <div className="pbl-text">Share</div>
            <img src={UploadIcon} alt="Upload" />
          </button>
          <button className="popup-btn-dark" onClick={onClose}>
            <div className="pbd-text">Continue</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
