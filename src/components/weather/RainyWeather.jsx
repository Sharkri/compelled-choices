import React from "react";
import "/src/css/RainEffect.css";
import rainSound from "/src/assets/rain.mp3";
import ReactHowler from "react-howler";
import Rain from "./helper/Rain";

const RainyWeather = () => {
  return (
    <>
      <Rain />
      <img src="src/assets/cloud-1.png" className="moon-img" data-id="1" />
      <img src="src/assets/cloud-1.png" className="moon-img" data-id="2" />
      <img src="src/assets/cloud-1.png" className="moon-img" data-id="3" />

      <ReactHowler src={rainSound} playing loop volume={0.2} />
    </>
  );
};

export default RainyWeather;
