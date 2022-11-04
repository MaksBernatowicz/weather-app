import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import icons
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";

import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";

// api key
const APIkey = "09032caa0112efdd24deab7804d6fb5a";

const App = () => {
  const [data, setData] = useState(null); // state for data
  const [location, setLocation] = useState("Bucharest"); // state for location

  // fetch the data
  useEffect(() => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
  });
  return <div>react app</div>;
};

export default App;
