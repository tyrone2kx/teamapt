import React from "react";
import "./header.css";
import Button from "../Button/Button";
import Circle from "../Circle";

const Header = () => {
  return (
    <header className="flex p-4 justify-between items-center fixed w-full z-10">
      <div className="flex  animate__animated animate__fadeInDown">
        <Button>Menu</Button>
        <Button>
          <i className="icon-menu"></i>
        </Button>
      </div>

      <div className="flex overflow-hidden justify-end items-center">
        <Circle className="animate__animated animate__zoomIn animate__faster">
          <i className="icon-fire text-white"></i>
        </Circle>
        <div className="ml-0 w-0 overflow-hidden logo-text">
          <p className="text-sm">DENTYTECH</p>
        </div>
      </div>

      <div className="flex animate__animated animate__fadeInDown">
        <Button>Login</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
