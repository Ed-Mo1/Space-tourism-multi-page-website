import MainBtn from "../components/MainBtn";
import { useNavigate } from "react-router-dom";
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
const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home_page"
    >
      <div className="content">
        <div className="max-lg:text-center">
          <h5 className="heading-5 text-light_shade_blue ">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="heading-1 text-white">SPACE</h1>
          <p className="paragraph text-light_shade_blue max-w-[444px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:mt-12">
          <MainBtn
            text="EXPLORE"
            onClick={() =>
              navigate("/Space-tourism-multi-page-website/destination", {
                replace: true,
              })
            }
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
