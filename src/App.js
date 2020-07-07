import React, { useState, useEffect } from "react";
import Break from "./Components/Break";
import Session from "./Components/Session";
import Display from "./Components/Display";
import Controller from "./Components/Contoller";

import "./App.css";

const App = () => {
  // 25 min in seconds
  const [counter, setCounter] = useState(1500);
  const [running, setRunning] = useState(false);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isSession, setIsSession] = useState(true);

  const handlePlayPause = () => {
    running ? setRunning(false) : setRunning(true);
  };

  const handleReset = () => {
    setRunning(false);
    setCounter(1500);
    setSessionLength(25);
    setBreakLength(5);
    setIsSession(true);
    audioRef.current.load();
  };

  const timersUpdate = (e) => {
    if (!running) {
      if (e === "session-increment" && sessionLength < 60) {
        setSessionLength(sessionLength + 1);
        // Convert time in seconds
        setCounter((sessionLength + 1) * 60);
      } else if (e === "session-decrement" && sessionLength > 1) {
        setSessionLength(sessionLength - 1);
        // Convert time in seconds
        setCounter((sessionLength - 1) * 60);
      } else if (e === "break-increment" && breakLength < 60) {
        setBreakLength(breakLength + 1);
      } else if (e === "break-decrement" && breakLength > 1) {
        setBreakLength(breakLength - 1);
      }
    }
  };

  useEffect(() => {
    if (running && counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }

    // change between break/session and restart timer
    if (counter === 0) {
      audioRef.current.play();
      isSession ? setCounter(breakLength * 60) : setCounter(sessionLength * 60);
      isSession ? setIsSession(false) : setIsSession(true);
    }
    // eslint-disable-next-line
  }, [counter, running, isSession]);

  const audioRef = React.useRef();

  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>
      <div className="set-timer">
        <Break breakLength={breakLength} handleBreak={timersUpdate} />
        <Session sessionLength={sessionLength} handleSession={timersUpdate} />
      </div>
      <Display counter={counter} isSession={isSession} />
      <Controller handlePlayPause={handlePlayPause} handleReset={handleReset} />
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ref={audioRef}
      />
    </div>
  );
};

export default App;
