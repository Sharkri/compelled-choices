import React from "react";
import sun from "/src/assets/pixel-art-sun.png";
import "/src/css/SunnyEffect.css";

const SunnyWeather = () => {
  return (
    <>
      <div className="sunny-container">
        <img src={sun} className="sun-img" />
      </div>
    </>
  );
};

export default SunnyWeather;
