import PageTitle from "../components/PageTitle";
import { destinations } from "../../data.json";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

import { useState } from "react";
const Destination = () => {
  const [data, setData] = useState(destinations[0]);
  const images = {
    Moon: moon,
    Mars: mars,
    Europa: europa,
    Titan: titan,
  };

  return (
    <div className="destination_page">
      <div className="min-h-screen max-lg:py-40  lg:pt-56">
        <PageTitle num1="0" num2="1" text="Pick your destination" />
        <div className="min-h-[80vh] grid place-content-center">
          <div className="px-8 md:px-24 lg:px-52 pt-32 pb-12 flex flex-col  lg:flex-row gap-32 max-lg:items-center items-start">
            <div>
              <img
                src={images[data.name]}
                alt={`${name}__image`}
                className="object-contain"
              />
            </div>
            <div className="flex-grow-[1] max-lg:w-full">
              <ul className="flex max-lg:justify-center gap-8">
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
              <h1 className="heading-2 mt-4 text-white max-lg:text-center ">
                {data.name}
              </h1>
              <p className="paragraph mt-4 max-lg:text-center max-lg:mx-auto">
                {data.description}
              </p>
              <div className="flex gap-8 max-md:flex-col max-md:items-center max-lg:justify-center mt-7 border-solid border-t-[1px] pt-4 border-[#383B4B]">
                <div className="max-lg:text-center">
                  <h5 className="sub_heading_2 text-white">avg. distance</h5>
                  <h4 className="sub_heading_1 font-bellefair">
                    {data.distance}
                  </h4>
                </div>
                <div className="max-lg:text-center">
                  <h5 className="sub_heading_2  text-white">avg. distance</h5>
                  <h4 className="sub_heading_1 font-bellefair">
                    {data.travel}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
