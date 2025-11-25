import React from "react";
import "./creditSolutions.css";

const ArrowButton = ({ direction, disabled, onClick }) => {
  return (
    <button
      className={`arrow-btn ${disabled ? "arrow-disabled" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
};

export default ArrowButton;
