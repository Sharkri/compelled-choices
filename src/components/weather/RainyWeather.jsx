import React from "react";
import "/src/css/RainyWeather.css";
import rainSound from "/src/assets/rain.mp3";
import ReactHowler from "react-howler";
import Rain from "./helper/Rain";

const RainyWeather = () => {
  const cloudData = [
    { id: 1, left: 10, top: 2, duration: "30s" },
    { id: 2, left: 40, top: 24, duration: "25s" },
    { id: 3, left: 70, top: 6, duration: "27s" },
  ];

  return (
    <>
      {cloudData.map(({ id, left, top, duration }) => (
        <div
          key={id}
          className="cloud-container"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDuration: duration,
          }}
        >
          <img src="src/assets/cloud-1.png" className="cloud-img" />
          <Rain />
        </div>
      ))}

      <ReactHowler src={rainSound} playing loop volume={0.2} />
    </>
  );
};

export default RainyWeather;
