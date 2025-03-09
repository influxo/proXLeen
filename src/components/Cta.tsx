import React from "react";
import bgImage from "../assets/images/Background.jpg";

const Cta: React.FC = () => {
  return (
    <div className="relative">
      <img
        src={bgImage}
        alt=""
        className="h-[500px] brightness-75 w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Your Centered Text Here
        </h1>
        <div className="flex gap-4 justify-between">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
