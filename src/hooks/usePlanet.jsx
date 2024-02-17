import { useEffect, useState } from "react";
import { destinations } from "../../data.json";
const usePlanet = (planet = "Mars") => {
  const [planetData, setPlanetData] = useState("");
  useEffect(() => {
    setPlanetData(destinations.find((d) => d.name === planet));
  }, []);
  return planetData;
};

export default usePlanet;
