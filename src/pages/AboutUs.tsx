import React from "react";
import Hero from "../components/Home/Hero";
import FirstSection from "../components/AboutUs/FirstSection";
import WelcomeToOurCompany from "../components/WelcomeToOurCompany";
import Cta from "../components/Cta";
import Faq from "../components/Faq";

const AboutUs: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <FirstSection />
      <Cta />
      <WelcomeToOurCompany />
      <Faq />
    </div>
  );
};

export default AboutUs;
