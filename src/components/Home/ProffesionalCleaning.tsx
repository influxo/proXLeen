import React from "react";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";

import image from "../../assets/images/pcc.jpg";
import star from "../../assets/icons/StarSVG.svg";
const ProfessionalCleaning: React.FC = () => {
  return (
    <section className="py-28 px-[10%] bg-white">
      <div className="mx-auto">
        {/* Top section with heading and description */}
        <img src={star} alt="" className="w-14 -ml-3 mb-2" />
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Professional cleaning company
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-600 leading-relaxed">
              Whether you are one office, store, medical practice, showroom,
              restaurant, apartment building, hotel or industrial facility, we
              are ready to provide you with cleaning solutions that meet your
              specific needs.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex justify-center align-center items-center">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:align-center items-center lg:pt-16 flex-col-3 lg:gap-36">
          <div className="flex flex-col gap-4 lg:w-[250px] mb-20">
            <div className="rounded-3xl lg:hidden mx-auto border shadow-md rotate-45 w-[170px] mb-10 h-[170px] bg-white flex align-center items-center justify-center">
              <img src={icon2} alt="Building icon" className="-rotate-45" />
            </div>

            <h1 className="text-xl font-bold mx-auto lg:mx-0 text-[#FF9800]">
              Antwerp region
            </h1>
            <p>Tell us when and where you want your cleaning.</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[250px] mb-20">
            <div className="rounded-3xl lg:hidden border mx-auto shadow-md rotate-45 mb-10 w-[170px] h-[170px] bg-white flex align-center items-center justify-center">
              <img src={icon3} alt="Building icon" className="-rotate-45" />
            </div>
            <h1 className="text-xl font-bold mx-auto lg:mx-0 text-[#FF9800]">
              Antwerp region
            </h1>
            <p>Tell us when and where you want your cleaning.</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[250px] mb-20">
            <div className="rounded-3xl lg:hidden border mx-auto shadow-md rotate-45 mb-10 w-[170px] h-[170px] bg-white flex align-center items-center justify-center">
              <img src={icon1} alt="Building icon" className="-rotate-45" />
            </div>
            <h1 className="text-xl font-bold mx-auto lg:mx-0 text-[#FF9800]">
              Antwerp region
            </h1>
            <p>Tell us when and where you want your cleaning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCleaning;
