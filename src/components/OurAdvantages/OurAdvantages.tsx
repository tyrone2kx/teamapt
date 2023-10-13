import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import "./our-advantage.css";
import AnimatedHeading from "../AnimatedHeading/AnimatedHeading";
import Footer from "../Footer/Footer";
import { Icon } from "../Icon/Icon";
import img1 from "assets/images/img1.jpg";
import img2 from "assets/images/img2.jpg";
import img3 from "assets/images/img3.jpg";
import img4 from "assets/images/img4.jpg";
import img5 from "assets/images/img5.jpg";

const OurAdvantages = () => {
  return (
    <>
      <div
        onScroll={(e) => {
          console.log(e);
        }}
        className="h-full overflow-hidden flex flex-col justify-between relative"
      >
        <div />
        <div className="p-4">
          <AnimatedHeading />

          <div className="w-full h-full absolute top-0 card-container">
            <Card
              image={img1}
              className="card1"
              style={{ transform: "rotate(-35deg)" }}
              icon="icon-user-o"
              title="Personalized Care"
            />
            <Card
              image={img2}
              className="card2"
              style={{ transform: "rotate(-25deg)" }}
              icon="icon-flow-cross"
              title="Modern Solution"
            />
            <Card
              image={img3}
              className="card3"
              style={{ transform: "rotate(-15deg)" }}
              icon="icon-hand-pointer-o"
              title="Convenience"
            />
            <Card
              image={img4}
              className="card4"
              style={{ transform: "rotate(-5deg)" }}
              icon="icon-cog"
              title="Advanced Technology"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const Card = ({
  style = {},
  image = "https://picsum.photos/400",
  title = "",
  icon = "",
  className = "",
}) => {
  return (
    <div
      style={{}}
      className={`${className} h-[250px] w-[200px]  absolute top-[35%]  right-[40%]`}
    >
      <div
        className="rounded-xl h-full w-full flex flex-col justify-end bg-cover"
        style={{ ...style, backgroundImage: `url(${image})` }}
      >
        <div className="flex items-center justify-center p-4">
          <Icon
            name={icon}
            className="!bg-white !h-[30px] !w-[30px] "
            iconClassName="!text-gray-800"
          />
          <div className="  bg-white rounded-full px-2 h-[30px] flex items-center justify-center ">
            <p className="text-xs">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;
