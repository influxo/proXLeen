import React from "react";
import backgroundImage from "../../assets/images/Background.jpg";
import Navbar from "../Navbar";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen px-[4%]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Navbar */}
      <div className="sticky top-0 z-50 pt-16 px-4">
        <Navbar />
      </div>

      {/* Content */}
      <div className="mx-auto px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center z-10">
        <div className="max-w-2xl">
          {/* <h1 className="text-5xl font-bold text-white mb-4">Professional Cleaning Services</h1> */}
          <div className="flex-col">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
              Proffesional
            </h1>
            <div className="flex gap-4">
              <h1 className="text-3xl md:text-5xl font-bold bg-white p-2 text-[#515854] mb-4">
                cleaning
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold text-white p-2 mb-4">
                service
              </h1>
            </div>
          </div>

          {/* <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Get a Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-6 rounded-md transition-colors">
              Our Services
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
