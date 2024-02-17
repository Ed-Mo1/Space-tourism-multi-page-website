import MainBtn from "../components/MainBtn";
const Home = () => {
  return (
    <div className="home_page">
      <div className="min-h-screen max-lg:py-40 lg:pt-40 px-4 lg:px-20 xl:px-40 flex flex-col  max-lg:gap-32 lg:flex-row justify-between items-center">
        <div className="max-lg:text-center max-lg:mt-10">
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
       <MainBtn text="EXPLORE" />
       </div>
      </div>
    </div>
  );
};

export default Home;
