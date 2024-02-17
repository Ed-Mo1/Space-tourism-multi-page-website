import { useState } from "react";
import PageTitle from "../components/PageTitle";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

import { crew } from "../../data.json";
const Crew = () => {
  const [data, setData] = useState(crew[0]);
  const images = {
    "Douglas Hurley": douglas,
    "Mark Shuttleworth": mark,
    "Victor Glover": victor,
    "Anousheh Ansari": anousheh,
  };
  return (
    <div className="crew_page">
      <div className="min-h-screen max-md:pb-20 max-lg:pt-40  lg:pt-56">
        <PageTitle num1="0" num2="2" text="Pick your destination" />
        <div className="min-h-[80vh] grid place-content-center">
          <div className="flex max-md:flex-col-reverse max-lg:flex-col max-lg:mt-12 justify-center md:gap-24 items-center px-10">
            <div className="max-lg:text-center flex flex-col max-md:flex-col-reverse ">
              <div>
                <h4 className="heading-4 text-white text-opacity-50 uppercase">
                  {data.role}
                </h4>
                <h3 className="heading-3 uppercase text-white">{data.name}</h3>
                <p className="paragraph">{data.bio}</p>
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
            <img
              src={images[data.name]}
              alt="image"
              className="border-solid max-md:border-b-[1px] object-contain border-[#383B4B]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
