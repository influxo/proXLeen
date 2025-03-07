import React from 'react';
import image from "../../assets/images/TruckIcons.jpg"
const ProfessionalCleaning: React.FC = () => {
  return (
    <section className="py-20 px-[4%] bg-white">
      <div className="container mx-auto">
        {/* Top section with heading and description */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional cleaning company</h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 leading-relaxed">
              Whether you are one office, store, medical practice, showroom, restaurant, apartment 
              building, hotel or industrial facility, we are ready to provide you with cleaning 
              solutions that meet your specific needs.
            </p>
          </div>
        </div>
        <div className='flex justify-center align-center items-center'>
            <img src={image} alt="" />
            </div>
            <div className='flex justify-center align-center items-center pt-16 flex-col-3 lg:gap-36'>
                <div className='flex flex-col gap-4 lg:w-[250px]'>
                    <h1 className='text-xl font-bold text-[#FF9800]'>Antwerp region</h1>
                    <p>Tell us when and where you want
                    your cleaning.</p>
                </div>
                <div className='flex flex-col gap-4 lg:w-[250px]'>
                <h1 className='text-xl font-bold text-[#FF9800]'>Antwerp region</h1>
                    <p>Tell us when and where you want
                    your cleaning.</p>
                </div>
                <div className='flex flex-col gap-4 lg:w-[250px]'>
                    <h1 className='text-xl font-bold text-[#FF9800]'>Antwerp region</h1>
                    <p>Tell us when and where you want
                    your cleaning.</p>
                </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCleaning;