import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  const baseStyle =
    "px-4 py-1 rounded-full text-xs text-shadow-2xs drop-shadow-md font-semibold ";

  return (
    <button {...props} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
