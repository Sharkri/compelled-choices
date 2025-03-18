import { useEffect, useState } from "react";
import "/src/css/StartScreen.css";

const StartScreen = ({ onStart }) => {
  const openingLines = [
    "The world can feel cold sometimes.",
    "But even small kindnesses can bring warmth.",
    "The love of Christ compels me to act...",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    if (skipped) {
      setCurrentIndex(openingLines.length - 1);
      setShowButton(true);
      return;
    }

    if (currentIndex < openingLines.length - 1) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setFade(true);
        }, 1000);
      }, 3000);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => setShowButton(true), 3000);
    }
  }, [currentIndex, openingLines.length, skipped]);

  const handleSkip = () => {
    setSkipped(true);
    setFade(true);
  };

  return (
    <div className="opening-container">
      <p className={`fade-text ${fade ? "visible" : "hidden"}`}>
        {openingLines[currentIndex]}
      </p>

      <button
        className={`continue-button ${showButton ? "visible" : "hidden"}`}
        onClick={onStart}
      >
        Continue
      </button>
      <button
        className={`skip-button ${!showButton ? "visible" : "hidden"}`}
        onClick={handleSkip}
      >
        Skip
      </button>
    </div>
  );
};

export default StartScreen;
