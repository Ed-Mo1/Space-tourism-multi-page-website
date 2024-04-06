import { useState } from "react";
import PageTitle from "../components/PageTitle";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import { motion } from "framer-motion";
import { crew } from "../../data.json";

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
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0.5 },
};
const Crew = () => {
  const [data, setData] = useState(crew[0]);
  const images = {
    "Douglas Hurley": douglas,
    "Mark Shuttleworth": mark,
    "Victor Glover": victor,
    "Anousheh Ansari": anousheh,
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="crew_page"
    >
      <div className="min-h-screen max-md:pb-20 max-lg:pt-40  lg:pt-56">
        <PageTitle num1="0" num2="2" text="MEET YOUR CREW" />
        <div className="content max-lg:flex-col-reverse pb-0  lg:py-0">
          <div className="flex-1 max-lg:text-center flex flex-col max-md:flex-col-reverse ">
            <div>
              <motion.h4
                variants={animate}
                initial="initial"
                animate="animate"
                exit="exit"
                key={data.role}
                className="heading-4 text-white text-opacity-50 uppercase"
              >
                {data.role}
              </motion.h4>
              <motion.h3
                variants={animate}
                initial="initial"
                animate="animate"
                exit="exit"
                key={data.name}
                className="heading-3 uppercase text-white"
              >
                {data.name}
              </motion.h3>
              <motion.p
                variants={animate}
                initial="initial"
                animate="animate"
                exit="exit"
                key={data.bio}
                className="paragraph"
              >
                {data.bio}
              </motion.p>
            </div>
            <div className="flex gap-4 max-md:mb-12 md:mt-12 mt-7 max-lg:justify-center ">
              {crew.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setData(crew[i])}
                  className={`w-4 h-4 border-2 transition-colors cursor-pointer border-none  bg-white ${
                    data.name === item.name
                      ? "bg-opacity-100"
                      : "bg-opacity-50 hover:bg-opacity-70"
                  } rounded-full`}
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <motion.img
              variants={animate}
              initial="initial"
              animate="animate"
              exit="exit"
              key={images[data.name]}
              src={images[data.name]}
              alt="image"
              className="border-solid max-md:border-b-[1px] object-contain border-[#383B4B]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Crew;
