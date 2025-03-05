import React from 'react';
import { Link } from 'react-router-dom';
// Note: These images need to be added to the assets/images directory
// Placeholder imports - replace with actual images when available
import cleaningService1 from '../../assets/images/Background.jpg'; // Temporary placeholder
import cleaningService2 from '../../assets/images/Background.jpg'; // Temporary placeholder

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-[4%] bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Text content */}
        <div className="md:w-1/2 max-w-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Professional maintenance is essential to create a clean
            and safe environment, regardless of the type of space.
            At Axo Clean we are your reliable partner, with more
            than 15 years of experience, for high-quality cleaning
            services in various professional environments.
          </p>
          <Link to="/contact" className="inline-block bg-[#FF9800] hover:bg-[#ff9900e6] text-white font-medium py-3 px-6 rounded-md transition-colors">
            Get a quote
          </Link>
        </div>
        
        {/* Right side - Images */}
        <div className="md:w-1/2 relative">
          <div className="relative z-10 rounded-lg overflow-hidden border-4 border-[#FF9800]">
            <img 
              src={cleaningService1} 
              alt="Cleaning professional wiping surface" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-4 z-20 rounded-lg overflow-hidden border-4 border-[#FF9800]">
            <img 
              src={cleaningService2} 
              alt="Cleaning professional mopping floor" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;