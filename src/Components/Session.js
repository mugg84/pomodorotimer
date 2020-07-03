import React from "react";

const Session = ({ sessionLength, handleSession }) => {
  const handleClick = (e) => {handleSession(e.target.id)};
  return (
    <div className="setter">
      <div id="session-label">Session Length</div>
      <div className="mini-controllers">
        <i
          className="fas fa-chevron-down"
          id="session-decrement"
          onClick={handleClick}
        ></i>
        <div id="session-length">{sessionLength}</div>
        <i
          className="fas fa-chevron-up"
          id="session-increment"
          onClick={handleClick}
        ></i>
      </div>
    </div>
  );
};

export default Session;
