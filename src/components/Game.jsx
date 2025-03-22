import React, { useEffect, useState } from "react";
import scenariosData from "../data/scenarios.json";
import BackgroundMood from "./weather/BackgroundMood";
import FeedbackMessage from "./weather/helper/FeedbackMessage";
import Plant from "./Plant";

const { scenarios, endings } = scenariosData;

const Game = () => {
  const [state, setState] = useState({ scenarioId: 0, compassion: 20 });
  const [selectedChoice, setSelectedChoice] = useState(null);

  const scenario = scenarios.find((s) => s.id === state.scenarioId);

  const handleChoice = (choice) => {
    if (selectedChoice != null) return;
    const compassionChange = Math.max(0, state.compassion + choice.compassion);
    setState({
      ...state,
      compassion: compassionChange,
    });
    setSelectedChoice(choice);
  };

  const handleContinue = () => {
    setState({ ...state, scenarioId: selectedChoice.nextScenarioId });
    setSelectedChoice(null);
  };

  let weather = "sunny";
  if (state.compassion < 30) weather = "rain";
  else if (state.compassion < 60) weather = "cloudy";

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
        <FeedbackMessage weather={weather} key={weather} />

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
              {scenario.choices.map((choice) => (
                <div key={`${choice.text}`}>
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
      <Plant compassion={state.compassion} />
      <BackgroundMood weather={weather} />
    </>
  );
};

export default Game;
