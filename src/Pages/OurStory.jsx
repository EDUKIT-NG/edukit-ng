import React from 'react';
import Discover from '../components/OurStory/discover.jsx'
import HeroStory from '../components/OurStory/HeroStory/HeroStory';
import Learning from "../components/OurStory/E-learning/Learning";

const OurStory = () => {
  return (
    <div>
        <HeroStory/>
        <Discover />
        <Learning />
    </div>
  );
};

export default OurStory;