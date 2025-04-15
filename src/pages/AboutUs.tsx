import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import FirstSection from "../components/AboutUs/FirstSection";
import WelcomeToOurCompany from "../components/WelcomeToOurCompany";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import GradientCard from "../components/GradientCard";
import AOS from "aos";
const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      // offset: 100, // offset (in px) from the original trigger point
      // easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div data-aos="fade-in" data-aos-delay="100">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <FirstSection />
      </div>
      <div data-aos="fade-right" data-aos-delay="100">
        <Cta />
      </div>
      <div data-aos="fade-left" data-aos-delay="100">
        <WelcomeToOurCompany />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Faq />
      </div>
      <div className="px-[10%] py-32" data-aos="flip-up" data-aos-delay="100">
        <GradientCard title="We specialises in the following." />
      </div>
    </div>
  );
};

export default AboutUs;
