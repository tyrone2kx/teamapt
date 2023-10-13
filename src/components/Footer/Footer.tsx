import React from "react";
import "./footer.css";

const Footer = ({ hide = false }) => {
  return (
    <footer className="flex w-full items-end justify-between px-10 animate__animated animate__fadeInUp">
      <div className="mb-8 ">
        <div className="h-2 w-2 rounded-full bg-orange-600" />
        <p className="text-xs mt-1">Your Smile, Our Passion</p>
      </div>

      {!hide && (
        <div className="moveDown w-16 h-16 rounded-full border border-gray-400 flex justify-center">
          <i className="icon-down upDown"></i>
        </div>
      )}

      <div className="mb-8">
        <div className="flex gap-2 justify-end">
          <i className="icon-github-circled"></i>
          <i className="icon-instagram"></i>
          <i className="icon-facebook-rect"></i>
        </div>
        <p className="text-xs mt-2">Best Start Up of 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
