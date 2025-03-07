import React from "react";
import bgImage from "../assets/images/Background.jpg";

const Cta: React.FC = () => {
  return (
    <div
      className="brightness-75"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Your Centered Text Here</h1>
      <div className="button-container">
        <button className="cta-button">Button 1</button>
        <button className="cta-button">Button 2</button>
      </div>
    </div>
  );
};

export default Cta;
