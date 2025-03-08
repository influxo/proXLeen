// import React from "react";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import line from "../../assets/icons/line.svg";

// const ProfessionalCleaning: React.FC = () => {
//   return (
//     <section className="py-28 px-[4%] bg-white">
//       <div className="container mx-auto">
//         {/* Top section with heading and description */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-10">
//           <div className="md:w-1/2">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Professional cleaning company
//             </h2>
//           </div>
//           <div className="md:w-1/2">
//             <p className="text-gray-600 leading-relaxed">
//               Whether you are one office, store, medical practice, showroom,
//               restaurant, apartment building, hotel, or industrial facility, we
//               are ready to provide you with cleaning solutions that meet your
//               specific needs.
//             </p>
//           </div>
//         </div>

//         {/* Cards section with lines */}
//         <div className="relative flex flex-col md:flex-row justify-between items-center px-24">
//           {/* First Card */}
//           <div className="relative flex-1 flex flex-col items-center">
//             <div className="relative">
//               <div className="rounded-3xl border shadow-md rotate-45 w-[170px] h-[170px] bg-white flex items-center justify-center">
//                 <img src={icon2} alt="Building icon" className="-rotate-45" />
//               </div>
//             </div>
//             <div className="flex flex-col gap-4 text-center mt-20">
//               <h3 className="text-xl font-bold text-[#FF9800]">
//                 ANTWERP REGION
//               </h3>
//               <p className="text-gray-600">
//                 Tell us when and where
//                 <br />
//                 you want
//                 <br />
//                 your cleaning.
//               </p>
//             </div>
//           </div>

//           {/* First Line */}
//           <div className="absolute hidden md:block left-1/4 top-[30px] w-[340px] h-[30px] ">
//             <img src={line} alt="Separator" />
//           </div>

//           {/* Second Card */}
//           <div className="relative flex-1 flex flex-col items-center">
//             <div className="relative">
//               <div className="rounded-3xl border shadow-md rotate-45 w-[170px] h-[170px] bg-white flex items-center justify-center">
//                 <img src={icon3} alt="Vacuum icon" className="-rotate-45" />
//               </div>
//             </div>
//             <div className="flex flex-col gap-4 text-center mt-20">
//               <h3 className="text-xl font-bold text-[#FF9800]">GHENT REGION</h3>
//               <p className="text-gray-600">
//                 A professional cleaner
//                 <br />
//                 comes over and cleans
//                 <br />
//                 your place.
//               </p>
//             </div>
//           </div>

//           {/* Second Line */}
//           <div className="absolute hidden md:block right-1/4 top-[30px] w-[320px] h-[30px] ">
//             <img src={line} alt="Separator" />
//           </div>

//           {/* Third Card */}
//           <div className="relative flex-1 flex flex-col items-center">
//             <div className="relative">
//               <div className="rounded-3xl border shadow-md rotate-45 w-[170px] h-[170px] bg-white flex items-center justify-center">
//                 <img src={icon1} alt="Floorplan icon" className="-rotate-45" />
//               </div>
//             </div>
//             <div className="flex flex-col gap-4 text-center mt-20">
//               <h3 className="text-xl font-bold text-[#FF9800]">
//                 HASSELT REGION
//               </h3>
//               <p className="text-gray-600">
//                 Enjoy your life and come
//                 <br />
//                 back
//                 <br />
//                 to a clean space!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProfessionalCleaning;

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
        <div className="hidden md:flex justify-center align-center items-center">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col md:flex-row justify-center md:align-center items-center md:pt-16 flex-col-3 lg:gap-36">
          <div className="flex flex-col gap-4 lg:w-[250px] mb-20">
            <div className="rounded-3xl md:hidden mx-auto border shadow-md rotate-45 w-[170px] mb-10 h-[170px] bg-white flex align-center items-center justify-center">
              <img src={icon2} alt="Building icon" className="-rotate-45" />
            </div>

            <h1 className="text-xl font-bold mx-auto md:mx-0 text-[#FF9800]">
              Antwerp region
            </h1>
            <p>Tell us when and where you want your cleaning.</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[250px] mb-20">
            <div className="rounded-3xl md:hidden border mx-auto shadow-md rotate-45 mb-10 w-[170px] h-[170px] bg-white flex align-center items-center justify-center">
              <img src={icon3} alt="Building icon" className="-rotate-45" />
            </div>
            <h1 className="text-xl font-bold mx-auto md:mx-0 text-[#FF9800]">
              Antwerp region
            </h1>
            <p>Tell us when and where you want your cleaning.</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[250px] mb-20">
            <div className="rounded-3xl md:hidden border mx-auto shadow-md rotate-45 mb-10 w-[170px] h-[170px] bg-white flex align-center items-center justify-center">
              <img src={icon1} alt="Building icon" className="-rotate-45" />
            </div>
            <h1 className="text-xl font-bold mx-auto md:mx-0 text-[#FF9800]">
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
