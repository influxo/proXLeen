import React from "react";
import bgImage from "../assets/images/Background.jpg";
import Gradient_Btn from "./Gradient_Btn";
import { Link } from "react-router-dom";

const Cta: React.FC = () => {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
          <Link to="/contact">
          <Gradient_Btn text="Get a quote" onClick={handleScrollTop}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
