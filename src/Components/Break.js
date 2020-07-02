import React from "react";

const Break = ({breakLength}) => {
  return (
    <div className="setter">
      <div id="break-label">Break Length</div>
      <div className="mini-controllers">
        <i className="fas fa-chevron-down" id="break-decrement"></i>
        <div id="break-length">{breakLength}</div>
        <i className="fas fa-chevron-up" id="break-increment"></i>
      </div>
    </div>
  );
};

export default Break;
