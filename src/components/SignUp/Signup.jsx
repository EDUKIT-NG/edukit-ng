import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Use useHistory instead of useNavigate
import "./Signup.css";
import studentIcon from "../../assets/student-icon.png";
import schoolIcon from "../../assets/school-icon.png";
import newUserIcon from "../../assets/new-user-icon.png";
import questionIcon from "../../assets/question.svg";

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const history = useHistory(); // Initialize useHistory

  const handleNext = () => {
    if (selectedRole === "student") {
      history.push("/student");
    } else if (selectedRole === "school") {
      history.push("/school");
    } else if (selectedRole === "newUser") {
      history.push("/newUser");
    }
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <h1>Welcome to Our Platform</h1>
        <p>Join us and explore the possibilities.</p>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <h2>Create Account</h2>
        <p>Please select the option that best describes you</p>

        {/* Selection Boxes */}
        <div className="options-container">
          {[
            { id: "student", label: "Student", icon: studentIcon },
            { id: "school", label: "School", icon: schoolIcon },
            { id: "newUser", label: "New User", icon: newUserIcon },
          ].map((option) => (
            <div
              key={option.id}
              className={`option-box ${
                selectedRole === option.id ? "selected" : ""
              }`}
              onClick={() => setSelectedRole(option.id)}
            >
              <img
                src={option.icon}
                alt={option.label}
                className="option-icon"
              />
              <span className="option-label">{option.label}</span>
              <img src={questionIcon} alt="info" className="question-icon" />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="buttons-container">
          <button className="guest-button" onClick={() => history.push("/")}>
            Sign in as Guest
          </button>
          <button
            className={`next-button ${selectedRole ? "" : "disabled"}`}
            onClick={handleNext}
            disabled={!selectedRole}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
