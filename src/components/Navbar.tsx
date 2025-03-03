import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black/30 backdrop-blur-md py-4 px-6 rounded-full mx-auto max-w-6xl border border-white/10">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">LOGO</div>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-orange-400 transition-colors">Home</Link>
          <Link to="/showrooms" className="text-white hover:text-orange-400 transition-colors">Showrooms</Link>
          <Link to="/services" className="text-white hover:text-orange-400 transition-colors">Services</Link>
          <Link to="/medical-areas" className="text-white hover:text-orange-400 transition-colors">Medical Areas</Link>
          <Link to="/facade-cleaning" className="text-white hover:text-orange-400 transition-colors">Facade Cleaning</Link>
        </div>
        
        <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;