import React from "react";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ProfessionalCleaning from "../components/Home/ProffesionalCleaning";
import ProffesionalMaintenance from "../components/Home/ProffesionalMaintenance";
import ServiceSlider from "../components/Home/ServiceSlider";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import GradientCard from "../components/GradientCard";

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <AboutSection />
      <ProfessionalCleaning />
      <Cta />
      <ProffesionalMaintenance />
      <ServiceSlider />
      <Faq />
      <div className="px-[10%] py-32">
        <GradientCard title="We specialises in the following." />
      </div>
    </div>
  );
};

export default Home;
