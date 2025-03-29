import React, { useState } from 'react';

interface GradientBtnProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  gradientOnHover?: boolean;
}

const Gradient_Btn: React.FC<GradientBtnProps> = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  gradientOnHover = false,
}) => {
  const [hovered, setHovered] = useState(false);
  
  // Define styles based on props and hover state
  let buttonStyle = {};
  
  if (gradientOnHover === false) {
    // Default gradient style (always gradient)
    buttonStyle = {
      background: 'linear-gradient(150deg, #8C6D9E, #F1653D, #FAEA8F)',
      backgroundSize: '200% 100%',
      backgroundPosition: hovered ? '100% 0' : '0% 0',
      color: 'white',
      borderRight: '0.5px solid transparent', // Add transparent border to maintain size
    };
  } else {
    // White background that changes to gradient on hover
    if (hovered) {
      buttonStyle = {
        background: 'linear-gradient(150deg, #8C6D9E, #F1653D, #FAEA8F)',
        backgroundSize: '200% 100%',
        color: 'white',
        borderRight: '0.5px solid transparent' // Transparent border when showing gradient
      };
    } else {
      buttonStyle = {
        background: 'white',
        color: 'black',
        border: '1px solid #e5e7eb',
      };
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative px-6 py-3 rounded-md font-medium transition-all duration-100 overflow-hidden ${className}`}
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </button>
  );
};

export default Gradient_Btn;