import React from 'react';
import mainImage from '../assets/images/WelcomeToOurCompany1.jpg';
import secondaryImage from '../assets/images/WelcomeToOurCompany2.jpg';

const WelcomeToOurCompany: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="relative flex-1">
          <div className="relative">
            {/* Main image with orange border */}
            <div className="border-t-4 border-l-4 border-orange-500 pt-4 pl-4 rounded-tl-lg">
              <img 
                src={mainImage} 
                alt="Cleaning professionals team" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
            
            {/* Overlapping image */}
            <div className="absolute bottom-[-40px] right-[-40px] w-1/3">
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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome To Our<br />Pro-cleaning Company!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We make your space shine! Professional and reliable cleaning 
            service company providing top-notch solutions for homes and 
            businesses. Satisfaction guaranteed!
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToOurCompany;
