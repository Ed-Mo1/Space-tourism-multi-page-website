import { useState } from "react";
import PageTitle from "../components/PageTitle";
import vehicleLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrit from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLand from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrit from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceLand from "../assets/technology/image-spaceport-landscape.jpg";
import spacePortrit from "../assets/technology/image-spaceport-portrait.jpg";
import { technology } from "../../data.json";
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
    <div className="technology_page ">
      <div className="min-h-screen max-lg:pb-20 max-lg:pt-40  lg:pt-56">
        <PageTitle num1="0" num2="3" text="Pick your destination" />
        <div className="min-h-[80vh] lg:ps-8 flex justify-center items-center">
          <div className="flex max-lg:mt-12 flex-col-reverse gap-x-4 gap-y-8 lg:flex-row lg:justify-between w-full items-center">
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
                <h4 className="text-4 text-light_shade_blue">
                  THE TERMINOLOGY…
                </h4>
                <h3 className="heading-3 text-white"> {data.name}</h3>
                <p className="paragraph">{data.description}</p>
              </div>
            </div>
            <img
              src={data.images.landscape}
              alt=""
              className="  w-full lg:hidden"
            />
            <img src={data.images.portrait} alt="" className=" max-lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
