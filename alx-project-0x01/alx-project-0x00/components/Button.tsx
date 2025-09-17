// components/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, onClick, className = "", styles }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium ${styles} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;

