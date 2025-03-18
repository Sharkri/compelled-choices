import React, { useEffect, useState } from "react";
import scenariosData from "../data/scenarios.json";
import BackgroundMood from "./weather/BackgroundMood";

const { scenarios, endings } = scenariosData;

const Game = () => {
  const [state, setState] = useState({ compassion: 15, scenarioId: 1 });
  const [selectedChoice, setSelectedChoice] = useState(null);

  const scenario = scenarios.find((s) => s.id === state.scenarioId);

  const handleChoice = (choice) => {
    if (selectedChoice != null) return;

    const newCompassion = state.compassion + choice.compassionChange;
    setState({
      ...state,
      compassion: Math.max(0, Math.min(100, newCompassion)),
    });
    setSelectedChoice(choice);
  };

  const handleContinue = () => {
    setState({ ...state, scenarioId: selectedChoice.nextScenarioId });
    setSelectedChoice(null);
  };

  let weather = "sunny";
  if (state.compassion < 30) weather = "rain";
  else if (state.compassion < 80) weather = "cloudy";

  useEffect(() => {
    document.body.className = weather;
  }, [weather]);

  if (!scenario) {
    const ending = endings.find((e) => state.compassion >= e.minCompassion);

    return (
      <div className="ending-screen">
        <h2>{ending.title}</h2>
        <p>{ending.message}</p>
        <blockquote>{ending.verse}</blockquote>
        <div className="compel-wrapper">
          <label for="compel">What will Christ compel you to do?</label>
          <textarea
            placeholder="He inspires me to spread love and forgiveness in my community."
            id="compel"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="game-container">
          <div className="compassion-info">
            <span>Compassion Meter: {state.compassion}</span>
            <div className="compassion-meter">
              <div
                className="compassion-fill"
                style={{ width: `${state.compassion}%` }}
              />
            </div>
          </div>
          <div className="scenario">
            <p className="scenario-description">{scenario.description}</p>
            <div className="choices">
              {scenario.choices.map((choice, index) => (
                <div key={`choice-${index}`}>
                  <button
                    onClick={() => handleChoice(choice)}
                    className="choice-btn"
                    disabled={
                      selectedChoice && selectedChoice?.text !== choice.text
                    }
                  >
                    {choice.text}
                  </button>
                  {selectedChoice?.text === choice.text && (
                    <blockquote>{selectedChoice.verse}</blockquote>
                  )}
                </div>
              ))}
            </div>
            {selectedChoice && (
              <div>
                <button onClick={handleContinue} className="continue-btn">
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <BackgroundMood weather={weather} />
    </>
  );
};

export default Game;
