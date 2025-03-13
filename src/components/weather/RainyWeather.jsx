import React from "react";
import "/src/css/RainyWeather.css";
import rainSound from "/src/assets/rain.mp3";
import ReactHowler from "react-howler";
import Rain from "./helper/Rain";

const RainyWeather = () => {
  const cloudData = [
    { id: 1, left: 10, top: 2 },
    { id: 2, left: 22, top: 24 },
    { id: 3, left: 70, top: 6 },
    { id: 3, left: 50, top: 10 },
    { id: 3, left: 100, top: 16 },
  ];

  return (
    <>
      {cloudData.map(({ id, left, top }) => (
        <div
          key={id}
          className="cloud-container"
          style={{
            left: `${left}%`,
            top: `${top}%`,
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
