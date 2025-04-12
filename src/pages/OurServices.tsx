import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import ServicesSection from "../components/OurServices/ServicesSection";
import WelcomeToOurCompany from "../components/WelcomeToOurCompany";
import AOS from "aos";

const OurServices: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      // offset: 100, // offset (in px) from the original trigger point
      // easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-down" data-aos-delay="100">
        <Hero />
      </div>
      <div data-aos="fade-right" data-aos-delay="100">
        <ServicesSection />
      </div>
      <div data-aos="fade-left" data-aos-delay="100">
        <WelcomeToOurCompany />
      </div>
    </div>
  );
};

export default OurServices;
