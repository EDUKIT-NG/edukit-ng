import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import KeyFeatures from "../components/KeyFeatures/keyfeatures";
import ImpactSection from "../components/ImpactSection/ImpactSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import MissionSupport from "../components/MissionSupport/MissionSupport";
import NewsletterFooter from "../components/NewsletterFooter/NewsletterFooter";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <KeyFeatures />
      <ImpactSection />
      <TestimonialSection />
      <ProjectsSection/>
      <MissionSupport />
      <NewsletterFooter />
    </div>
  );
};

export default Home;
