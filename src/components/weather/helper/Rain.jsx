import React from "react";
import "/src/css/Raindrops.css";

const Rain = () => {
  const raindrops = Array.from({ length: 25 }).map((_, i) => {
    const left = Math.max(Math.random() * 90, 9);
    const duration = Math.random() + 0.5;
    const rippleYOffset = Math.random() * 10 - 5; // -5% to +5% vertical variation

    return (
      <div key={i} className="rain-column" style={{ left: `${left}%` }}>
        <div className="raindrop" style={{ "--duration": `${duration}s` }} />
        <div
          className="ripple"
          style={{
            animationDelay: `${duration}s`,
            animationDuration: `${0.5 + Math.random() * 0.5}s`, // 0.5-1s duration
            scale: `${0.5 + Math.random()}`, // 0.5x to 1x size
            bottom: `calc(30% + ${rippleYOffset}%)`, // Ground level + offset
          }}
        />
      </div>
    );
  });

  return <div className="rain-container">{raindrops}</div>;
};
export default Rain;
