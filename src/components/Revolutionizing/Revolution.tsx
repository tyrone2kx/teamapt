import React from "react";
import Footer from "../Footer/Footer";
import "./revolution.css";
import { Icon } from "../Icon/Icon";
import img1 from 'assets/images/img1.jpg'
import img2 from 'assets/images/img2.jpg'
import img11 from 'assets/images/img11.jpg'
import img13 from 'assets/images/img13.jpg'
import img8 from 'assets/images/img8.jpg'

const Revolution = () => {
  return (
    <>
      <div className="h-full overflow-hidden flex flex-col justify-between relative">
        <div className="h-[100px]" />
        <section className="flex w-full justify-center">
          <div className="w-full md:w-[90%] 2xl:w-[65%] animate__animated  animate__slideInUp  min-h-[350px] flex flex-col justify-end p-4 ">
            <div className="flex rev-text-container justify-end items-center gap-4">
              <div>
                <p className=" text-[60px] font-semibold tracking-widest">
                  REVOLUTIONIZING
                </p>
              </div>
              <div className="slider-box1">
                <div className=" flex gap-2 animate__animated animate__fadeInDown animate__slow animate__delay-1s">
                  <Icon
                    name="icon-fire"
                    className="bg-[#d7e8f7] h-[25px] w-[25px]"
                    iconClassName="text-orange-600"
                  />
                  <Icon
                    name="icon-heart-empty"
                    className="bg-[#d7e8f7] h-[25px] w-[25px]"
                    iconClassName="text-orange-600"
                  />
                  <Icon
                    name="icon-lightbulb"
                    className="bg-[#d7e8f7] h-[25px] w-[25px]"
                    iconClassName="text-orange-600"
                  />
                </div>
                <div className="mt-2 overflow-hidden">
                  <p className="text-xs whitespace-nowrap  animate__animated animate__fadeInUp animate__slow animate__delay-1s">Modern Solutions,</p>
                  <p className="text-xs whitespace-nowrap animate__animated animate__fadeInUp animate__slow animate__delay-1s">Timeless Smiles,</p>
                </div>
              </div>
            </div>

            <div className="flex rev-text-container justify-start">
              <div className="flex items-center">
                <div className="slider-box1 flex items-center gap-2">
                  <div className="bg-[#d7e8f7] rounded-full px-4 h-[40px] flex items-center justify-center ">
                    <p className="text-sm text-orange-600 animate__animated animate__fadeIn animate__slow animate__delay-1s">ASSISTANCE</p>
                  </div>

                  <Icon name="icon-fire" iconClassName="animate__animated animate__fadeIn animate__delay-2s" />
                </div>
                <p className=" text-[60px] font-semibold tracking-widest">
                  DENTAL
                </p>
              </div>
              <div className="flex items-center">
                <div className="slider-box2 flex pl-8">
                  <div className="flex -space-x-1 overflow-hidden">
                    <img
                      className="inline-block h-[80px] w-[80px] rounded-full ring-2 ring-white"
                      src={img1}
                      alt=""
                    />
                    <img
                      className="inline-block h-[80px] w-[80px] rounded-full ring-2 ring-white"
                      src={img2}
                      alt=""
                    />
                  </div>
                </div>
                <p className="ml-8 text-[60px] font-semibold tracking-widest">
                  CARE
                </p>
              </div>
            </div>

            <div className="flex rev-text-container  justify-end items-center">
              <div>
                <p className=" text-[60px] font-semibold tracking-widest">
                  WITH TECHNOLOGY
                </p>
              </div>
              <div className="slider-box1">
                <div className="flex -space-x-5 overflow-hidden">
                  <img
                    className="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
                    src={img11} alt=""
                  />
                  <img
                    className="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
                    src={img13} alt=""
                  />
                  <img
                    className="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
                    src={img8} alt=""
                  />
                  <img
                    className="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
                    src={img8} alt=""
                  />
                </div>
              </div>
            </div>

            <section className="h-[150px] flex justify-between ">
              <div className=" w-[200px] animate__animated animate__fadeIn animate__delay-1s">
                <div className="bg-[#d7e8f7]  w-[200px] h-[100px] rounded-lg">
                  <img
                    className="h-full w-full rounded-lg"
                    src={img2}
                  />
                </div>
                <div className="flex justify-end">
                  <Icon
                    name="icon-play"
                    className="bg-[#d7e8f7] mt-[-20px] mr-[-20px] "
                    iconClassName="text-orange-600"
                  />
                </div>
              </div>

              <div className="h-[150px]">
              <div className="popCircleBig h-[150px] w-[150px] relative mt-16">
                <div className="h-full w-full rounded-full overflow-hidden flex flex-col justify-end">
                  <div className="bg-white w-full h-1/2"></div>
                  <div className="bg-orange-500 w-full h-1/2 orangeBottom"></div>
                </div>
                <div style={{borderWidth: '6px'}} className={`popCircle absolute bottom-[2px] right-[2px] h-[146px] w-[146px] 
                 border-white
                rounded-full overflow-hidden bg-orange-500 text-white text-sm flex flex-col items-center justify-center`}>
                  <p>GET</p>
                  <p>STARTED</p>
                </div>
              </div>
              </div>

              <div className="w-[150px]" />
            </section>
          </div>
        </section>
        <Footer hide />
      </div>
    </>
  );
};


export default Revolution;
