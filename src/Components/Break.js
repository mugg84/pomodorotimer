import React from "react";

const Break = ({ breakLength, handleBreak }) => {
  const handleClick = (e) => {
    handleBreak(e.target.id);
  };
  return (
    <div className="setter">
      <div id="break-label">Break Length</div>
      <div className="mini-controllers">
        <i
          className="fas fa-chevron-down"
          id="break-decrement"
          onClick={handleClick}
        ></i>
        <div id="break-length">{breakLength}</div>
        <i
          className="fas fa-chevron-up"
          id="break-increment"
          onClick={handleClick}
        ></i>
      </div>
    </div>
  );
};

export default Break;
