import React from "react";
// import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import KeyFeatures from "../components/KeyFeatures/keyfeatures";
import ImpactSection from "../components/Home/ImpactSection/ImpactSection";
import TestimonialSection from "../components/Home/TestimonialSection/TestimonialSection";
import ProjectsSection from "../components/Home/ProjectsSection/ProjectsSection";
import PartnerSection from "../components/Home/PartnerSection/partner";
import MissionSupport from "../components/Home/MissionSupport/MissionSupport";
import NewsletterFooter from "../components/Home/NewsletterFooter/NewsletterFooter";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <KeyFeatures />
      <ImpactSection />
      <TestimonialSection />
      <ProjectsSection />
      <PartnerSection />
      <MissionSupport />
      <NewsletterFooter />
    </div>
  );
};

export default Home;
