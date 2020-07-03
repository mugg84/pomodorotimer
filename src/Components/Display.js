import React from "react";

const Display = ({ counter, isSession }) => {
  const convertTime = () => {
    let minutes, seconds;
    minutes = Math.floor(counter / 60);
    seconds = counter - minutes * 60;

    return `${minutes > 9 ? minutes : "0" + minutes}:${
      seconds > 9 ? seconds : "0" + seconds
    }`;
  };

  return (
    <div className="timer">
      <div id="timer-label">{isSession ? "Session" : "Break"}</div>
      <div id="time-left">{convertTime()}</div>
    </div>
  );
};

export default Display;
