import React from "react";
import "/src/css/Raindrops.css";

const Rain = () => {
  const raindrops = Array.from({ length: 20 }).map((_, i) => (
    <div
      key={`raindrop-${i}`}
      className="raindrop"
      style={{
        left: `${Math.max(Math.random() * 90, 9)}%`, // Keep raindrops under the cloud
        animationDuration: `${Math.random() + 0.5}s`,
      }}
    />
  ));

  return <div className="rain-container">{raindrops}</div>;
};

export default Rain;
