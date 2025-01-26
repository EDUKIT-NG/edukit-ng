import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import KeyFeatures from "../components/KeyFeatures/keyfeatures";
import ImpactSection from "../components/ImpactSection/ImpactSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import MissionSupport from "../components/MissionSupport/MissionSupport";
import NewsletterFooter from "../components/NewsletterFooter/NewsletterFooter";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <KeyFeatures />
      <ImpactSection />
      <TestimonialSection />
      <SuccessStories />
      <MissionSupport />
      <NewsletterFooter />
    </div>
  );
};

export default Home;
