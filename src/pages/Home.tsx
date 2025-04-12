import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ProfessionalCleaning from "../components/Home/ProffesionalCleaning";
import ProffesionalMaintenance from "../components/Home/ProffesionalMaintenance";
import ServiceSlider from "../components/Home/ServiceSlider";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import GradientCard from "../components/GradientCard";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      // offset: 100, // offset (in px) from the original trigger point
      // easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="">
      <div data-aos="fade-down" data-aos-delay="100">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AboutSection />
      </div>
      <div data-aos="fade-right" data-aos-delay="100">
        <ProfessionalCleaning />
      </div>
      <div data-aos="fade-left" data-aos-delay="100">
        <Cta />
      </div>
      <div data-aos="fade-left">
        <ProffesionalMaintenance />
      </div>
      <div data-aos="fade-right" data-aos-delay="150">
        <ServiceSlider />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Faq />
      </div>
      <div className="px-[10%] py-32" data-aos="flip-up" data-aos-delay="100">
        <GradientCard title="We specialises in the following." />
      </div>
    </div>
  );
};

export default Home;
