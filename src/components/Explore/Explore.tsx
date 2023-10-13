import React from "react";
import Footer from "../Footer/Footer";
import AnimatedHeading from "../AnimatedHeading/AnimatedHeading";
import Button from "../Button/Button";
import { Icon } from "../Icon/Icon";
import "./explore.css";
import img1 from 'assets/images/img1.jpg'
import img2 from 'assets/images/img2.jpg'
import img3 from 'assets/images/img3.jpg'
import img4 from 'assets/images/img4.jpg'
import img5 from 'assets/images/img5.jpg'
import img11 from 'assets/images/img11.jpg'
import img13 from 'assets/images/img13.jpg'
import img8 from 'assets/images/img8.jpg'

const Explore = () => {
  return (
    <div className="h-full overflow-hidden flex  justify-between relative">
      <section className="w-1/2  flex flex-col justify-between items-start px-8">
        <div className="h-10" />
        <div className=" animate__animated  animate__slideInUp ">
          <div className=" flex gap-2 animate__animated animate__fadeIn animate__slow mb-2">
            <Icon
              name="icon-fire"
              className="!bg-[#d7e8f7]"
              iconClassName="!text-orange-600"
            />
            <Icon
              name="icon-heart-empty"
              className="!bg-[#d7e8f7]"
              iconClassName="!text-orange-600"
            />
            <Icon
              name="icon-lightbulb"
              className="!bg-[#d7e8f7]"
              iconClassName="!text-orange-600"
            />
          </div>

          <AnimatedHeading
            text="Explore our"
            className=" text-start tracking-normal"
          />
          <AnimatedHeading
            text="service, make"
            className=" text-start tracking-normal"
          />
          <AnimatedHeading
            text="your smile shine"
            className=" text-start tracking-normal"
          />

          <div className="flex gap-4 mt-4">
            <Button variant="primary">Get the app</Button>
            <Button>Meet the team</Button>
          </div>
        </div>
        <Footer hide />
      </section>

      <section className="w-1/2 h-screen animate__animated animate__slideInUp flex justify-center gap-6 flip-container ">
        <div
          style={{ transform: "rotateY(90deg)", opacity: "0.3" }}
          className="h-screen w-[250px] overflow-hidden flipInA"
        >
          <div className="h-full flex flex-col justify-center gap-6 overflow-hidden ">
            <Card2 title="Dental health records" image={img1} />
            <Card2 title="Toothbrush tracking" image={img2} />
            <Card2 title="Symptom checker" image={img3} />
            <Card2 title="Oral health assessment" image={img4} />
            <Card2 title="Dental health records" image={img1} />
            <Card2 title="Toothbrush tracking" image={img11} />
            <Card2 title="Symptom checker" image={img4} />
            <Card2 title="Oral health assessment" image={img1} />
            <Card2 />
            <Card2 />
          </div>
        </div>

        <div
          style={{ transform: "rotateY(270deg)", opacity: "0.3" }}
          className="h-screen w-[250px] flipInB"
        >
          <div className="h-full flex flex-col justify-center gap-6 overflow-hidden ">
            <Card title="Teledentistry consultation" image={img5} />
            <Card title='Oral care guides' image={img8} />
            <Card title="Appointment Scheduling"  image={img11}/>
            <Card title="Medication tracking" image={img13} />
            <Card title="Teledentistry consultation" image={img2} />
            <Card title='Oral care guides' image={img1} />
            <Card title="Appointment Scheduling" image={img1} />
            <Card title="Medication tracking" image={img1} />
            <Card title="Teledentistry consultation" image={img1} />
            <Card title='Oral care guides' image={img1} />
          </div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ title='', image='https://picsum.photos/400' }) => {
  return (
    <div className={`h-[250px] w-[250px] moveDownCol my-1`}>
    <div
        style={{ backgroundImage: `url(${image})` }}
      className="bg-red-500 rounded-2xl h-[250px]  w-[250px] bg-cover"
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          transform: "rotateY(180deg)",
        }}
        className=" rounded-2xl flex flex-col justify-between h-full p-4"
      >
        <div className="flex gap-2 justify-end">
          <Icon
            className="!bg-white "
            iconClassName="!text-gray-800"
            name="icon-heart-empty"
          />
          <Icon
            name="icon-up"
            className="!bg-white "
            iconClassName="!text-gray-800 rotate-45"
          />
        </div>

        <div className="">
          <div className="border-2 border-white rounded-full px-4 h-[40px] flex items-center justify-center ">
            <p className="text-sm text-white">{title}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};



const Card2 = ({title='', image='https://picsum.photos/400'}) => {
  return (
    <div className="h-[250px] w-[250px] moveUpCol my-1">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-red-500 rounded-2xl h-[250px]  w-[250px] bg-cover"
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            transform: "rotateY(180deg)",
          }}
          className=" rounded-2xl flex flex-col justify-between h-full p-4"
        >
          <div className="flex gap-2 justify-end">
            <Icon
              className="!bg-white "
              iconClassName="!text-gray-800"
              name="icon-heart-empty"
            />
            <Icon
              name="icon-up"
              className="!bg-white "
              iconClassName="!text-gray-800 rotate-45"
            />
          </div>

          <div className="">
            <div className="border-2 border-white rounded-full px-4 h-[40px] flex items-center justify-center ">
              <p className="text-sm text-white">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
