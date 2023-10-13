import React from "react";

interface Props {
  children: any;
  variant?: "outline" | "primary";
}

const Button = ({ children, variant = "outline" }: Props) => {
    const isOutline = variant === "outline"
  return (
    <button
      className={`flex items-center justify-center h-[35px] text-sm rounded-full p-4 
    bg-[${isOutline ? "white" : "#fe4f23"}] ${isOutline ? 'text-[#040404]' : 'text-[#fff]'}
     ${isOutline ? 'border border-[#040404]' : 'border-0'}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
