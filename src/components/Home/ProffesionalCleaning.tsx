import React from "react";
import image from "../../assets/images/pcc.jpg";
const ProfessionalCleaning: React.FC = () => {
  return (
    <section className="py-28 px-[4%] bg-white">
      <div className="container mx-auto">
        {/* Top section with heading and description */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Professional cleaning company
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 leading-relaxed">
              Whether you are one office, store, medical practice, showroom,
              restaurant, apartment building, hotel or industrial facility, we
              are ready to provide you with cleaning solutions that meet your
              specific needs.
            </p>
          </div>
        </div>
        <div className="flex justify-center  align-center items-center">
          <img src={image} alt="" />
        </div>
        <div className="flex justify-center align-center items-center  flex-col-3 gap-36">
          <div className="flex flex-col gap-2 w-[250px]">
            <h1 className="text-xl font-bold text-[#FF9800]">Antwerp region</h1>
            <h2>We are active in:</h2>
            <p className="font-semibold">
              Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom,
              Bornem, Temse,
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[250px]">
            <h1 className="text-xl font-bold text-[#FF9800]">Ghent region</h1>
            <h2>We are active in:</h2>
            <p className="font-semibold">
              Aalter, Nevele, Nazareth, Wetteren, Lochristi, ...
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[250px]">
            <h1 className="text-xl font-bold text-[#FF9800]">
              {" "}
              Hasselt region
            </h1>
            <p>
              We are active in the regions of Lummen, Zonhoven, Genk, Zutendaal,
              Diepenbeek,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCleaning;
