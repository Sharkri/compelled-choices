import { useState } from "react";
import Game from "./components/Game";
import StartScreen from "./components/StartScreen";
import "./css/App.css";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {started ? <Game /> : <StartScreen onStart={() => setStarted(true)} />}
    </div>
  );
}

export default App;
