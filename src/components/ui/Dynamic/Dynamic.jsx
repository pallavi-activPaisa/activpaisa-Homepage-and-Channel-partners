"use client";
import React from "react";

const Dynamic = ({ label = "Schedule Call", size = "small", style }) => {
  const sizeStyles = {
    small: {
      //   padding: "var(--Spacing-sp-10, 10px) var(--Spacing-sp-16, 16px)",
      fontSize: "14px",
    },
    medium: {
      padding: "12px 20px",
      fontSize: "16px",
    },
    large: {
      padding: "16px 24px",
      fontSize: "18px",
    },
  };

  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        width: "124px",
        alignItems: "center",
        marginLeft: "18px",
        borderRadius: "var(--Corner-Radius-2xsmall, 8px)",
        border:
          "var(--Border-Width-width-1, 1px) solid var(--UI-Color-Border-neutral-10, #E5E7EB)",
        background:
          "var(--UI-Color-Surface-Container-Neutral-neutral-00, #FFF)",

        // Drop Shadow / XSmall
        boxShadow:
          "0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04))",

        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        lineHeight: "20px",

        ...sizeStyles[size], // correct dynamic size
        ...style, // custom override styles
      }}
    >
      {label}
    </button>
  );
};

export default Dynamic;
