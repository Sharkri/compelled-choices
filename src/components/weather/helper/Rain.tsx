import React from "react";
import "/src/css/Raindrops.css";

const Rain = () => {
  const raindrops = Array.from({ length: 50 }).map((_, i) => (
    <div
      key={`raindrop-${i}`}
      className="raindrop"
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${0.5 + Math.random() * 1}s`,
      }}
    />
  ));

  return <div className="rain-container">{raindrops}</div>;
};
export default Rain;
