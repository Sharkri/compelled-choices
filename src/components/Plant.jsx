import React, { useEffect, useState } from "react";
import "/src/css/Plant.css";
import rose from "/src/assets/rose.png";
import rose2 from "/src/assets/rose-2.png";
import rose3 from "/src/assets/rose-3.png";
import lavender3 from "/src/assets/lavender.png";
import lavender2 from "/src/assets/lavender-dead.png";
import lavender from "/src/assets/lavender-grown.png";

const Plant = ({ compassion }) => {
  const [plantPositions, setPlantPositions] = useState([]);

  useEffect(() => {
    const positions = Array.from({ length: 10 }, () => ({
      x: 5 + Math.random() * 90, // Random X position (0% to 100%)
      y: Math.random() * 20 + 7, // Random Y position (5% to 25%)
      type: Math.random() > 0.5 ? "rose" : "lavender", // Randomly choose plant type
    }));
    setPlantPositions(positions);
  }, []);

  const getPlantImage = (type, compassion) => {
    if (compassion < 30) {
      return type === "rose" ? rose3 : lavender2;
    } else if (compassion < 70) {
      return type === "rose" ? rose2 : lavender3;
    } else {
      return type === "rose" ? rose : lavender;
    }
  };

  const plants = plantPositions.map((pos, index) => {
    const { x, y, type } = pos;
    const plantImage = getPlantImage(type, compassion);

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
          <img src={plantImage} alt={type} className="plant" />
          {compassion > 30 && <div className="growth-particles"></div>}
        </div>
      </div>
    );
  });

  return <>{plants}</>;
};

export default Plant;
