import React from "react";
import backgroundImage from "../../assets/images/Background.jpg";
import rocket from "../../assets/icons/Rocket.svg";
import happy from "../../assets/icons/HappyClients.svg";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";

const Hero: React.FC = () => {
  const location = useLocation();

  const getCurrentPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About Us";
      case "/services":
        return "Services";
      case "/contact":
        return "Contact";
      default:
        return "";
    }
  };

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
            <h2 className="text-2xl font-semibold text-white mb-10">-{getCurrentPageName()}-</h2>
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
          <div className="flex flex-col md:flex-row justify-between gap-14">
            <div
              className="bg-black/10 flex justify-center gap-4 items-center backdrop-blur-md rounded-none rounded-tr-lg rounded-bl-lg p-5 text-center flex-1 transform transition-transform duration-300 hover:-translate-y-1"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderImage: "linear-gradient(45deg, #FF512F, #F09819) 1",
              }}
            >
              <img src={happy} alt="" className="w-14" />
              <div className="flex flex-col  justify-center">
                <p className="text-3xl font-bold text-white text-start">
                  567+{" "}
                </p>
                <p className="text-lg font-semibold text-white">
                  Happy Customers
                </p>
              </div>
            </div>

            <div
              className="bg-black/10 flex justify-center gap-4 items-center backdrop-blur-md rounded-none rounded-tr-lg rounded-bl-lg p-5 text-center flex-1 transform transition-transform duration-300 hover:-translate-y-1"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderImage: "linear-gradient(45deg, #FF512F, #F09819) 1",
              }}
            >
              <img src={rocket} alt="" className="w-14" />
              <div className="flex flex-col  justify-center">
                <p className="text-3xl font-bold text-white text-start">
                  567+{" "}
                </p>
                <p className="text-lg font-semibold text-white">
                  Project Complete
                </p>
              </div>
            </div>

            <div
              className="bg-black/10 flex justify-center gap-4 items-center backdrop-blur-md rounded-none rounded-tr-lg rounded-bl-lg p-5 text-center flex-1 transform transition-transform duration-300 hover:-translate-y-1"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderImage: "linear-gradient(45deg, #FF512F, #F09819) 1",
              }}
            >
              <img src={rocket} alt="" className="w-14" />
              <div className="flex flex-col  justify-center">
                <p className="text-3xl font-bold text-white text-start">10+ </p>
                <p className="text-lg font-semibold text-white">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
