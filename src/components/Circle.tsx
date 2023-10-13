import React from "react";

interface Props {
  className?: string;
  children?: any;
}

const Circle = ({ className = "", children }: Props) => {
  return (
    <div
      className={`flex items-center justify-center h-[30px] w-[30px] rounded-full bg-[#fe4f23] ${className}`}
    >
      {children}
    </div>
  );
};

export default Circle;
