import React, { useState } from "react";
import "./SDG.css";
import sdg1 from "./sectionimages/sdg1.png";
import sdg4 from "./sectionimages/sdg4.png";
import sdg10 from "./sectionimages/sdg10.png";
import sdg12 from "./sectionimages/sdg12.png";
import sdg17 from "./sectionimages/sdg17.png";

const SDG = () => {
  const TooltipSdg = ({ infoTitle, infoText, children }) => {
    // state to manage tooltip visibility
    const [showTooltip_sdg, setShowTooltip_sdg] = useState(false);

    return (
      <span
        className="tooltip-container"
        onMouseEnter={() => setShowTooltip_sdg(true)}
        onMouseLeave={() => setShowTooltip_sdg(false)}
      >
        {children}

        {/* tooltip content */}
        {showTooltip_sdg && (
          <div className="tooltip_sdg">
            <h3 className="infoTitle">{infoTitle}</h3>
            <p className="infoText">{infoText}</p>
            <div className="tooltip-arrow" />
          </div>
        )}
      </span>
    );
  };

  return (
    <div className="sdg-container">
      <div className="sdg-header">
        <h2 className="sdg-title">
          {" "}
          <span className="sdg-blue-text">SDG</span> GOALS WE ADDRESS
        </h2>
        <p className="sdg-description">
          Edukit Nigeria is committed to driving positive change by addressing
          critical global challenges through the lens of education. Our efforts
          align with several of the{" "}
          <TooltipSdg
            infoTitle="Disclaimer "
            infoText="The content of this publication has not been approved by the United Nations and does not reflect the views of the United Nations or its officials or Member States.  "
          >
            <span className="sdg-blue-des">
              United Nations Sustainable Development Goals (SDGs)
            </span>
          </TooltipSdg>{" "}
          , focusing on reducing inequalities, promoting quality education, and
          fostering sustainability{" "}
          <a href="/sublink" className="blueLink">
            (https://www.un.org/sustainabledevelopment).
          </a>
        </p>
      </div>

      <div className="SDG_grid">
        <div className="SDG_box">
          <img src={sdg1} alt="SDG1" className="SDG_image" />
          <p className="card-title">Ending poverty through education.</p>
          <p className="SDG_text">
            By equipping underprivileged students with essential academic
            resources, we strive to break the cycle of poverty, empowering both
            students and their communities through education.
          </p>
        </div>

        <div className="SDG_box">
          <img src={sdg4} alt="SDG4" className="SDG_image" />
          <p className="card-title">Quality Education for All</p>
          <p className="SDG_text">
            We work to ensure inclusive and equitable access to quality
            education by distributing learning materials, launching an
            e-library, and fostering partnerships that prioritize student
            success.
          </p>
        </div>

        <div className="SDG_box">
          <img src={sdg10} alt="SDG10" className="SDG_image" />
          <p className="card-title">Bridging Gaps in Education</p>
          <p className="SDG_text">
            Our platform levels the playing field by connecting disadvantaged
            students with the resources they need to thrive, regardless of their
            socioeconomic status.
          </p>
        </div>

        <div className="SDG_box">
          <img src={sdg12} alt="SDG12" className="SDG_image" />
          <p className="card-title">Promoting Reuse of Educational Materials</p>
          <p className="SDG_text">
            Through resource redistribution, we promote sustainability by
            minimizing waste and ensuring unused educational materials are
            repurposed for meaningful use.
          </p>
        </div>

        <div className="SDG_box">
          <img src={sdg17} alt="SDG17" className="SDG_image" />
          <p className="card-title">Collaborating for Impact</p>
          <p className="SDG_text">
            We foster collaborations with donors, schools, and organizations to
            scale our initiatives and maximize the reach and effectiveness of
            our programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SDG;
