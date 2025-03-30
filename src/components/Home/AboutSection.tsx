import React from "react";
import { Link } from "react-router-dom";
// Note: These images need to be added to the assets/images directory
// Placeholder imports - replace with actual images when available
import cleaningService1 from "../../assets/images/Background.jpg"; // Temporary placeholder
import cleaningService2 from "../../assets/images/Background.jpg"; // Temporary placeholder
import star from "../../assets/icons/StarSVG.svg";
import Gradient_Btn from "../Gradient_Btn";

const AboutSection: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-28 bg-[#F8F8F8] relative">
      <div
        className="absolute inset-0 bg-[#FF9800]"
        style={{
          clipPath: "polygon(0 98%, 100% 75%, 100% 100%, 0 100%)",
        }}
      ></div>
      <div className="relative z-10 px-[10%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 xl:max-w-lg">
          <img src={star} alt="" className="w-14 -ml-3 mb-2" />
          <h2 className="text-5xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-black font-normal mb-8 leading-relaxed text-xl">
            Professional maintenance is essential to create a clean and safe
            environment, regardless of the type of space. At Axo Clean we are
            your reliable partner, with more than 15 years of experience, for
            high-quality cleaning services in various professional environments.
          </p>
          <Link to="/contact" className="">
            <Gradient_Btn text="Get a quote" onClick={handleScrollTop} />
          </Link>
        </div>

        {/* Right side - Images */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-lg overflow-hidden border-4 border-l-0 border-b-0 border-[#FF9800]">
            <img
              src={cleaningService1}
              alt="Cleaning professional wiping surface"
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div className="absolute -left-40 lg:hidden xl:block -bottom-10 z-20 rounded-lg overflow-hidden border-l-0 border-b-0 border-4 border-white">
            <img
              src={cleaningService2}
              alt="Cleaning professional mopping floor"
              className="w-[360px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
