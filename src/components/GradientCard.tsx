import React from "react";
import icons from "../assets/icons/smallicons.svg";

interface GradientCardProps {
  subtitle?: string;
  title: string;
}

const GradientCard: React.FC<GradientCardProps> = ({
  subtitle = "We specialises in the following.",
  title,
}) => {
  return (
    //linear-gradient(150deg, #8C6D9E, #F1653D, #FAEA8F)
    <div
      style={{
        background:
          "linear-gradient(165deg, #8C6D9E, #F1653D, #F1653D,#FAEA8F)",
      }}
      className="relative w-full overflow-hidden rounded-[32px] px-16 py-32 "
    >
      {/* Decorative Icons */}
      <div className="absolute right-16 top-0 opacity-20">
        <div className="flex flex-wrap gap-4">
          <img src={icons} alt="" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {subtitle && <p className=" font-medium text-xl mb-4">{subtitle}</p>}
        <h2 className="text-black text-4xl md:text-5xl font-medium max-w-2xl leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GradientCard;
