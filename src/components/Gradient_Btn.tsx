import React from 'react';

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
  gradientOnHover = true,
}) => {
  const gradientStyle = {
    background: 'linear-gradient(150deg, #8C6D9E, #F1653D, #FAEA8F)',
    backgroundSize: '200% 100%',
  };

  const defaultStyle = gradientOnHover 
    ? gradientStyle 
    : { 
        background: 'white',
        color: 'black',
        border: '1px solid #e5e7eb'
      };

  const hoverHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    if (gradientOnHover) {
      target.style.backgroundPosition = '100% 0';
    } else {
      target.style.background = gradientStyle.background;
      target.style.backgroundSize = gradientStyle.backgroundSize;
      target.style.color = 'white';
      target.style.border = 'none';
    }
  };

  const leaveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    if (gradientOnHover) {
      target.style.backgroundPosition = '0% 0';
    } else {
      target.style.background = 'white';
      target.style.color = 'black';
      target.style.border = '1px solid #e5e7eb';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative px-6 py-3 rounded-md font-medium transition-all duration-300 overflow-hidden ${className}`}
      style={{
        ...defaultStyle,
        color: gradientOnHover ? 'white' : 'black',
      }}
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandler}
    >
      {text}
    </button>
  );
};

export default Gradient_Btn;