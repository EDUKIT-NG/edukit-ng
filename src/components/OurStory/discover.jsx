import React from "react";
import teamSpiritImage from "./images/pana.png";
import "./discover.css";

const Discover = () => {
  return (
    <div>
      <div className="discover">
        <div className="discover-box">
          <div className="discover-text">
            <h3>Discover the faces behind EduKit Foundation!</h3>
            <p>
              Our team is committed to transforming education in Nigeria, and
              we're excited to introduce you to the people making it happen.
            </p>
          </div>
          <div className="btn-discover">
            {" "}
            <button>Meet the Team</button>
          </div>
        </div>
        <div className="team-spirit">
          <img src={teamSpiritImage} alt="team-spirit" />
        </div>
      </div>
    </div>
  );
};
export default Discover;
