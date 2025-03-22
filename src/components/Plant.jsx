import React, { useEffect, useState } from "react";
import "/src/css/Plant.css";
import rose from "/src/assets/rose.png";
import rose2 from "/src/assets/rose-2.png";
import rose3 from "/src/assets/rose-3.png";

const Plant = ({ compassion }) => {
  const [plantPositions, setPlantPositions] = useState([]);

  useEffect(() => {
    const positions = Array.from({ length: 10 }, () => ({
      x: Math.random() * 100, // Random X position (0% to 100%)
      y: Math.random() * 20 + 5, // Random Y position (5% to 25%)
    }));
    setPlantPositions(positions);
  }, []);

  const plants = plantPositions.map((pos, index) => {
    const { x, y } = pos;
    return (
      <div
        className="plant-container"
        key={`plant-${index}`}
        style={{
          left: `${x}%`, // Horizontal position
          bottom: `${y}%`, // Vertical position (from the bottom)
        }}
      >
        <div className="container">
          <img
            src={compassion < 30 ? rose3 : compassion < 70 ? rose2 : rose}
            alt="flower"
            className="plant"
          />
          {compassion > 30 && <div className="growth-particles"></div>}
        </div>
      </div>
    );
  });

  return <>{plants}</>;
};

export default Plant;
