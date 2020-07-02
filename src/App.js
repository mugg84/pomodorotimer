import React, { useState, useEffect } from "react";
import Break from "./Components/Break";
import Session from "./Components/Session";
import Display from "./Components/Display";
import Controller from "./Components/Contoller";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(25);
  const [running, setRunning] = useState(false);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const handlePlayPause = () => {
    running ? setRunning(false) : setRunning(true);
  };

  const handleReset = () => {
    setRunning(false);
    setCounter(25);
  };

  useEffect(() => {
    if (running && counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter, running]);

  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>
      <div className="set-timer">
        <Break breakLength={breakLength} />
        <Session sessionLength={sessionLength} />
      </div>
      <Display counter={counter} />
      <Controller handlePlayPause={handlePlayPause} handleReset={handleReset} />
    </div>
  );
};

export default App;
