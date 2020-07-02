import React from "react";

const Display = ({counter}) => {
  return (
    <div className="timer">
      <div id="timer-label">Session</div>
      <div id="time-left">{counter}</div>
    </div>
  );
};

export default Display;
