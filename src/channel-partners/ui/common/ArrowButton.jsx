"use client";
import React from "react";

export default function ArrowButton({
  direction = "right",
  disabled,
  onClick,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        width: "36px",
        height: "36px",
        // width: "40px",
        // height: "40px",
        borderRadius: "50%",
        background: disabled ? "#F3F4F6" : "#E5E7EB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid #E5E7EB",
        // boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <span
        style={{
          fontSize: "20px",
          color: disabled ? "#D1D5DB" : "#374151",
          fontWeight: 500,
        }}
      >
        {direction === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}
