import React, { useEffect, useRef } from "react";
import './index.css'

const AnimatedHeading = ({ text = "OUR ADVANTAGES", className='' }) => {
  const ref = useRef<any>(null);

  const animate = () => {
    const characters = text.split("");
    const elements = characters.map((char, index) => (
      <span key={index} className="animated-char animated-text" 
      style={{ animationDelay: `${0.01 * index}s` }}>
        {char === " " ? '\u00A0' : char}
      </span>
    ));

    return elements;
  };


  return (
    <div className="text-container">
      <p
        ref={ref}
        id="animated-text"
        className={`uppercase text-center text-[20px] md:text-[40px] 2xl:text-[60px] font-semibold tracking-widest ${className}`}
      >
        {animate().map(item => item)}
      </p>
    </div>
  );
};

export default AnimatedHeading;
