import React from 'react';
import backgroundImage from '../../assets/images/Background.jpg';
import Navbar from '../Navbar';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen px-[4%]">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      {/* Navbar */}
      <div className="sticky top-0 z-50 pt-16 px-4">
        <Navbar />
      </div>
      
      {/* Content */}
      <div className="mx-auto px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">Professional Cleaning Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            We provide high-quality cleaning services for residential and commercial properties.
            Our team of experts will make your space shine!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Get a Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-6 rounded-md transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;