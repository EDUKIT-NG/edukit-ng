import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // For navigation
import "./SignUp.css";
import GoogleLogo from "../../assets/google-logo.svg"; // Add Google logo if available
import StudentIcon from "../../assets/student-icon.png";
import SchoolIcon from "../../assets/school-icon.png";
import NewUserIcon from "../../assets/new-user-icon.png";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [step, setStep] = useState(1);
  const history = useHistory();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedOption("");
  };

  const handleGuestSignIn = () => {
    history.push("/");
  };

  return (
    <div className="signup-container">
      {/* Left Side - Different Text for Each Step */}
      <div className="signup-left">
        {step === 1 ? (
          <>
            <h2 className="signup-heading">
              Create Your Edukit Foundation Account
            </h2>
            <p className="signup-subtext">
              Join our community to unlock essential resources, support, and
              opportunities that empower your educational journey.
            </p>
          </>
        ) : (
          <>
            <h2 className="signup-heading">Welcome to Edukit Foundation</h2>
            <p className="signup-subtext">
              Start your journey to accessing free learning resources. Fill in
              your details to create your student beneficiary account and get
              the support you need.
            </p>
          </>
        )}
      </div>

      {/* Right Side */}
      <div className="signup-right">
        {step === 1 ? (
          <>
            <span className="form-heading">Create Account</span>
            <p>
              <span className="form-subtext">
                Please select the option that best describes you.
              </span>
            </p>

            <div className="options-container">
              <div
                className={`option-box ${
                  selectedOption === "Student" ? "selected" : ""
                }`}
                onClick={() => handleSelect("Student")}
              >
                <img src={StudentIcon} alt="Student" className="option-icon" />
                <span>Student</span>
              </div>
              <div
                className={`option-box ${
                  selectedOption === "School" ? "selected" : ""
                }`}
                onClick={() => handleSelect("School")}
              >
                <img src={SchoolIcon} alt="School" className="option-icon" />
                <span>School</span>
              </div>
              <div
                className={`option-box ${
                  selectedOption === "New User" ? "selected" : ""
                }`}
                onClick={() => handleSelect("New User")}
              >
                <img src={NewUserIcon} alt="New User" className="option-icon" />
                <span>New User</span>
              </div>
            </div>

            <div className="buttons">
              <button className="guest" onClick={handleGuestSignIn}>
                Sign In as Guest
              </button>
              <button
                className="next"
                onClick={handleNext}
                disabled={!selectedOption}
              >
                Next
              </button>
            </div>
            <div className="signfooter">
              <div className="text">
                Have a question?
                <a href="#" className="link">
                  Contact Us
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="form-heading">Create Your Account</h2>
            <span className="form-subtext">
              Please fill in the correct details to get started
            </span>

            <form className="signup-form">
              <div className="name-fields">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>

              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="password" placeholder="Create Password" required />
              <input type="password" placeholder="Confirm Password" required />

              <p className="password-instruction">
                Must be at least 8 characters
              </p>

              <div className="checkbox-container">
                <input type="checkbox" id="privacy-policy" required />
                <label htmlFor="privacy-policy">
                  You agree to our <a href="#">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="create-account-btn">
                Create Account
              </button>

              <button className="google-signup-btn">
                <img src={GoogleLogo} alt="Google" className="google-icon" />
                Sign Up with Google
              </button>
            </form>

            <p className="login-text">
              Already have an account? <a href="/login">Log in</a>
            </p>

            <button className="back-btn" onClick={handleBack}>
              ← Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
