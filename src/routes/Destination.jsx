import PageTitle from "../components/PageTitle";
import { destinations } from "../../data.json";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";
import { useState } from "react";

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
  animate: { opacity: 1 ,transition: { duration: .75 } },
  exit: { opacity: 0.5 },
};
const Destination = () => {
  const [data, setData] = useState(destinations[0]);
  const images = {
    Moon: moon,
    Mars: mars,
    Europa: europa,
    Titan: titan,
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="destination_page"
    >
      <div className="max-lg:pt-40 pt-56">
        <PageTitle num1="0" num2="1" text="Pick your destination" />
        <div className="content lg:py-0">
          <div className="flex-1">
            <motion.img
              variants={animate}
              initial="initial"
              animate="animate"
              exit="exit"
              src={images[data.name]}
              key={images[data.name]}
              alt={`${name}__image`}
              className="object-contain mx-auto"
            />
          </div>
          <div className="max-lg:w-full flex-1">
            <div className="max-lg:mx-auto w-fit">
              <ul className="flex max-lg:justify-center gap-8 ">
                {destinations.map(({ name }, i) => (
                  <li
                    key={name}
                    onClick={() => setData(destinations[i])}
                    className={`planet_link ${
                      data.name === name && "before:w-full"
                    }`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <motion.h1
                key={data.name}
                variants={animate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="heading-2 mt-4 text-white max-lg:text-center "
              >
                {data.name}
              </motion.h1>
              <motion.p
                key={data.description}
                variants={animate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="paragraph mt-4 max-lg:text-center max-lg:mx-auto"
              >
                {data.description}
              </motion.p>
              <div className="flex gap-8 max-md:flex-col max-md:items-center max-lg:justify-center mt-7 border-solid border-t-[1px] pt-4 border-[#383B4B]">
                <div className="max-lg:text-center">
                  <h5 className="sub_heading_2 text-white">avg. distance</h5>
                  <motion.h4
                    key={data.distance}
                    variants={animate}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="sub_heading_1 font-bellefair"
                  >
                    {data.distance}
                  </motion.h4>
                </div>
                <div className="max-lg:text-center">
                  <h5 className="sub_heading_2  text-white">avg. distance</h5>
                  <motion.h4
                    key={data.travel}
                    variants={animate}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="sub_heading_1 font-bellefair"
                  >
                    {data.travel}
                  </motion.h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Destination;
