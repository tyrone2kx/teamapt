import React from 'react'
import { Theme } from '../../utils/theme';
import "./style.css";

const LoaderScreen = () => {
  return (
    <div className="App animate__animated  animate__fadeOut animate__delay-4s">
      <div className="w-[70%] flex justify-center ">
        <div className="first-circle  h-[50px] w-fit border border-[#fe4f23] text-center rounded-full text-orange-500">
          <div className="icon-container1">
            <i className="icon-right icon1" style={{ fontSize: "16px" }}></i>
          </div>
        </div>

        <div
          className="second-circle circle-outline flex relative"
          style={{ background: Theme.orange }}
        >
        <div className="absolute opacity-0 icon-container3 flex items-center justify-center h-full w-[50px] overflow-hidden">
          <i
            className="icon-fire text-white"
            style={{ fontSize: "16px" }}
          ></i>
        </div>
          <div className="icon-container">
            <i
              className="icon-right icon2 text-white"
              style={{ fontSize: "16px" }}
            ></i>
          </div>
          <div className="textContainer">
            <p className="text-center text-sm text-white">
              DENTAL
            </p>
          </div>
        </div>

        <div className="third-circle circle-outline flex bg-white">
          <div className="container icon-container2">
            <i className="icon-left icon3 text-orange-500 text-[16px]"></i>
          </div>
          <div className="textContainer">
            <p className="text-center text-sm text-orange-500">ASSISTANCE</p>
          </div>
        </div>

        <div className=" fourth-circle h-[50px] w-fit bg-[#fe4f23] text-center rounded-full text-orange-500">
          <div className="icon-container1">
            <i
              className="icon-fire text-white"
              style={{ fontSize: "18px" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="ml-[0px] overflow-hidden animated-height">
          <p className="text-orange-500">DENTYTECH</p>
        </div>
      </div>
    </div>
  );
}

export default LoaderScreen