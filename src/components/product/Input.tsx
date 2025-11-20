import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export default function Input({ className = "", ...props }: InputProps) {
  const baseStyle = "w-full border rounded-md px-4 py-1 pr-14";

  return <input {...props} className={`${baseStyle} ${className}`} />;
}
