import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/OrangeLogo.png";
import Gradient_Btn from "./Gradient_Btn";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <nav className="lg:bg-black/10 py-4 lg:px-[4%] rounded-[20px] mx-auto lg:border lg:border-white/10 w-full lg:backdrop-blur-md">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleDrawer}
            className="text-white p-2 lg:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className="text-white font-bold text-xl hidden lg:block">
            <img src={Logo} className="w-[250px]" alt="" />
          </div>

          <div className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-[#FF9800] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-[#FF9800] transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/services"
              className="text-white hover:text-[#FF9800] transition-colors"
            >
              Services
            </Link>
          </div>

          <Link to="/contact" className="">
            <Gradient_Btn text="Contact Us" />
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center mb-8">
            <div className="text-white font-bold text-xl">
              <img src={Logo} className="w-[250px]" alt="" />
            </div>
            <button
              onClick={toggleDrawer}
              className="text-white p-2"
              aria-label="Close Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-[#FF9800] transition-colors"
              onClick={toggleDrawer}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-[#FF9800] transition-colors"
              onClick={toggleDrawer}
            >
              About Us
            </Link>
            <Link
              to="/showrooms"
              className="text-white hover:text-[#FF9800] transition-colors"
              onClick={toggleDrawer}
            >
              Showrooms
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-[#FF9800] transition-colors"
              onClick={toggleDrawer}
            >
              Services
            </Link>
            <Link
              to="/medical-areas"
              className="text-white hover:text-[#FF9800] transition-colors"
              onClick={toggleDrawer}
            >
              Medical Areas
            </Link>
            <Link
              to="/facade-cleaning"
              className="text-white hover:text-[#FF9800] transition-colors"
              onClick={toggleDrawer}
            >
              Facade Cleaning
            </Link>
            <Link
              to="/contact"
              className="bg-[#FF9800] hover:bg-[#ff9900e6] text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
              onClick={toggleDrawer}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
