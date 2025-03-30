import React from "react";
import mainImage from "../assets/images/WelcomeToOurCompany1.jpg";
import secondaryImage from "../assets/images/WelcomeToOurCompany2.jpg";
import Gradient_Btn from "./Gradient_Btn";

const WelcomeToOurCompany: React.FC = () => {
  return (
    <div className="px-[10%] py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="relative flex-1">
          <div className="relative">
            {/* Main image with gradient border */}
            <div className="relative">
              {/* The actual image */}
              <div
                className="relative"
                style={{ marginTop: "4px", marginLeft: "4px" }}
              >
                <img
                  src={mainImage}
                  alt="Cleaning professionals team"
                  className="w-full rounded-lg shadow-md"
                />

                {/* Gradient borders - positioned absolutely to be directly on the image */}
                <div
                  className="absolute top-0 left-0 h-1 w-full rounded-tl-lg rounded-tr-lg"
                  style={{
                    background:
                      "linear-gradient(150deg, #8C6D9E, #F1653D, #FAEA8F)",
                    transform: "translateY(-100%)",
                  }}
                ></div>

                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-tl-lg rounded-bl-lg"
                  style={{
                    background:
                      "linear-gradient(150deg, #8C6D9E, #F1653D, #FAEA8F)",
                    transform: "translateX(-100%)",
                  }}
                ></div>
              </div>
            </div>

            {/* Overlapping image */}
            <div className="absolute bottom-[-40px] right-[-40px] w-1/3 z-10">
              <img
                src={secondaryImage}
                alt="Cleaning professional at work"
                className="rounded-lg shadow-md border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 md:pl-8 mt-16 md:mt-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome To Our
            <br />
            Pro-cleaning Company!
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We make your space shine! Professional and reliable cleaning service
            company providing top-notch solutions for homes and businesses.
            Satisfaction guaranteed!
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-orange-500">●</span>
              <span className="text-gray-700">Vetted professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">●</span>
              <span className="text-gray-700">Affordable Prices</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">●</span>
              <span className="text-gray-700">Next day availability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">●</span>
              <span className="text-gray-700">Best Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">●</span>
              <span className="text-gray-700">Standard cleaning tasks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">●</span>
              <span className="text-gray-700">Affordable Prices</span>
            </div>
          </div>

          {/* CTA Button */}
          <Gradient_Btn text="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeToOurCompany;
