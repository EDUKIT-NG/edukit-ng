import React from "react";
import AboutUs from "../components/OurProfile/AboutUs/Aboutus";
import OurHolisticApproach from "../components/OurProfile/OurHolisticApproach";
import SDG from "../components/OurProfile/SDGSection/SDG";
import ImpactSection from "../components/Home/ImpactSection/ImpactSection";
import NewsletterFooter from "../components/Home/NewsletterFooter/NewsletterFooter";
const OurProfile = () => {
  return (
    <div>
      <AboutUs />
      <OurHolisticApproach />
      <SDG />
      <ImpactSection />
      <NewsletterFooter />
    </div>
  );
};

export default OurProfile;
