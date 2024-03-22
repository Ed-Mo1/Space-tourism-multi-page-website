import { useState } from "react";
import PageTitle from "../components/PageTitle";
import vehicleLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrit from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLand from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrit from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceLand from "../assets/technology/image-spaceport-landscape.jpg";
import spacePortrit from "../assets/technology/image-spaceport-portrait.jpg";
import { technology } from "../../data.json";

import { motion } from "framer-motion";
const variants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0.5,
    transition: {
      duration: 0.5,
    },
  },
};

const animate = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0.5 },
  transition: { duration: 1 },
};
const Technology = () => {
  const [data, setData] = useState(technology[0]);
  switch (data.name) {
    case "Launch vehicle":
      data.images.portrait = vehiclePortrit;
      data.images.landscape = vehicleLand;
      break;
    case "Space capsule":
      data.images.portrait = capsulePortrit;
      data.images.landscape = capsuleLand;
      break;
    case "Spaceport":
      data.images.portrait = spacePortrit;
      data.images.landscape = spaceLand;
  }
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="technology_page "
    >
      <div className="min-h-screen max-lg:pb-20 max-lg:pt-40  lg:pt-56">
        <PageTitle num1="0" num2="3" text="Pick your destination" />
        <div className="content max-lg:flex-col-reverse px-0 lg:ps-12 max-w-full">
          <div className="flex flex-grow-[1] lg:justify-center max-lg:flex-col items-center gap-8">
            <div className="flex  flex-row lg:flex-col gap-5">
              {technology.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setData(technology[i])}
                  className={` ${
                    item.name == data.name
                      ? "bg-white text-black"
                      : "bg-transparent border-[1px] text-white"
                  } text-[24px] transition-colors hover:border-white font-bellefair border-solid border-light_shade_blue w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full `}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="max-lg:text-center">
              <h4 className="text-4 text-light_shade_blue">THE TERMINOLOGY…</h4>
              <motion.h3
                key={data.name}
                variants={animate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="heading-3 text-white"
              >
                {" "}
                {data.name}
              </motion.h3>
              <motion.p
                key={data.description}
                variants={animate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="paragraph"
              >
                {data.description}
              </motion.p>
            </div>
          </div>
          <motion.img
            key={data.images.landscape}
            variants={animate}
            initial="initial"
            animate="animate"
            exit="exit"
            src={data.images.landscape}
            alt=""
            className="w-full lg:hidden"
          />
          <motion.img
            key={data.images.portrait}
            variants={animate}
            initial="initial"
            animate="animate"
            exit="exit"
            src={data.images.portrait}
            alt=""
            className=" max-lg:hidden"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Technology;
