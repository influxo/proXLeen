import React from "react";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ProfessionalCleaning from "../components/Home/ProffesionalCleaning";
import ProffesionalMaintenance from "../components/Home/ProffesionalMaintenance";
import ServiceSlider from "../components/Home/ServiceSlider";
import Cta from "../components/Cta";

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <AboutSection />
      <ProfessionalCleaning />
      <Cta />
      <ProffesionalMaintenance />
      <ServiceSlider />
    </div>
  );
};

export default Home;
