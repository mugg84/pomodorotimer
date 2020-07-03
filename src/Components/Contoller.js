import React from "react";

const Contoller = ({handlePlayPause, handleReset}) => {
  

  return (
    <div className="controller">
      <button id="start_stop" onClick={handlePlayPause}>
        <i className="fas fa-play"></i>
        <i className="fas fa-pause"></i>
      </button>
      <button id="reset" onClick={handleReset}>
        <i className="fas fa-redo"></i>
      </button>
    </div>
  );
};

export default Contoller;
