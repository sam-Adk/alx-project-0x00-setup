import React from "react";

export interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

// Rename internal function so it's not the same as the file import
const ButtonComponent: React.FC<ButtonProps> = ({ title, className = "", onClick }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 font-medium ${className}`}>
      {title}
    </button>
  );
};

export default ButtonComponent;
