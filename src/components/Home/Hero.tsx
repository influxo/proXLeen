import React from "react";
import backgroundImage from "../../assets/images/Background.jpg";
import Navbar from "../Navbar";

const Hero: React.FC = () => {
  const StarRating = () => (
    <div className="flex justify-center gap-1 text-2xl text-[#FF9800] font-bold my-1">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );

  return (
    <div className="relative h-screen px-[10%]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Navbar */}
      <div className="sticky top-0 z-50 md:pt-16">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-between h-[calc(100vh-140px)] relative z-10">
        {/* Title Section */}
        <div className="flex items-center justify-center flex-grow">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Professional
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <span className="text-5xl md:text-7xl font-bold bg-white px-6 py-2 text-[#515854]">
                cleaning
              </span>
              <span className="text-5xl md:text-7xl font-bold text-white">
                services
              </span>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mb-8 hidden md:block">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="bg-black/10 backdrop-blur-md rounded-lg p-5 text-center flex-1 transform transition-transform duration-300 hover:scale-105">
              <p className="text-base text-gray-200">
                Over 2,500 satisfied customers
              </p>
              <StarRating />
              <p className="text-lg font-semibold text-white">
                Trusted Service
              </p>
            </div>

            <div className="bg-black/10 backdrop-blur-md rounded-lg p-5 text-center flex-1 transform transition-transform duration-300 hover:scale-105">
              <p className="text-base text-gray-200">
                Professional team of experts
              </p>
              <StarRating />
              <p className="text-lg font-semibold text-white">Expert Team</p>
            </div>

            <div className="bg-black/10 backdrop-blur-md rounded-lg p-5 text-center flex-1 transform transition-transform duration-300 hover:scale-105">
              <p className="text-base text-gray-200">
                100% satisfaction guaranteed
              </p>
              <StarRating />
              <p className="text-lg font-semibold text-white">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
