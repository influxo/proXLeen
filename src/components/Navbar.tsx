import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/OrangeLogo.png"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black/10 backdrop-blur-md py-4 px-[4%] rounded-[20px] mx-auto  border border-white/10 w-ful">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl"><img src={Logo} className='w-[250px]' alt="" /></div>

        <div className="hidden md:flex space-x-8">
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
          <Link
            to="/medical-areas"
            className="text-white hover:text-[#FF9800] transition-colors"
          >
            Medical Areas
          </Link>
          <Link
            to="/facade-cleaning"
            className="text-white hover:text-[#FF9800] transition-colors"
          >
            Facade Cleaning
          </Link>
        </div>

        <Link
          to="/contact"
          className="bg-[#FF9800] hover:bg-[#ff9900e6] text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
