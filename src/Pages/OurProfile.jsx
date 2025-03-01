import React from "react";
import AboutUs from "../components/AboutUs/Aboutus";
import SDGsection from "../components/OurProfile/SDGsection/SDG";
import ImpactSection from "../components/Home/ImpactSection/ImpactSection";
import NewsletterFooter from "../components/Home/NewsletterFooter/NewsletterFooter";
const OurProfile = () => {
    return ( 
        <div>
            <AboutUs/>
            <SDGsection/>
            <ImpactSection/>
            <NewsletterFooter/>
        </div>
    );
};

export default OurProfile;