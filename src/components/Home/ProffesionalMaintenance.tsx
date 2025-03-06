import React from 'react';
import img from "../../assets/images/Image.jpg";
const ProffesionalMaintenance: React.FC = () => {
  return (
    <section className="py-20 px-[4%] bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left side - Image */}
          <div className="lg:w-1/2 rounded-lg overflow-hidden">
            <div className="relative">
              {/* This would ideally be replaced with an actual image import */}
              <div className="bg-blue-100 flex max-w-[650px] items-center justify-center">
                <img 
                  src={img} 
                  alt="Professional cleaner mopping a floor" 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional maintenance</h2>
            
            <p className="text-gray-600 mb-4">
              Axo Clean is your reliable partner for a clean, tidy workplace.
              Whether you have an office, shop, practice, showroom, restaurant
              or other professional space, a spotless environment not only
              creates a positive first impression for customers and visitors, but it
              also promotes the productivity and well-being of your employees.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our experienced team offers thorough and results-oriented
              cleaning services, tailored to your needs. Whether you need daily
              cleaning, dust removal, disinfection, floor maintenance or window
              cleaning, we are here for you.
            </p>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProffesionalMaintenance;