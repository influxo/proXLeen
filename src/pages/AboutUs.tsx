import React from "react";
import Hero from "../components/Home/Hero";
import FirstSection from "../components/AboutUs/FirstSection";
import WelcomeToOurCompany from "../components/WelcomeToOurCompany";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import GradientCard from "../components/GradientCard";

const AboutUs: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <FirstSection />
      <Cta />
      <WelcomeToOurCompany />
      <Faq />
      <div className="px-[10%] py-32">
        <GradientCard title="We specialises in the following." />
      </div>
    </div>
  );
};

export default AboutUs;
