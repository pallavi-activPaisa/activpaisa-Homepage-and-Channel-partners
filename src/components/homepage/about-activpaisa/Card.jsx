"use client"
import React, { useState } from "react";

const slides = [
  { id: 1, color: "var(--ui-color-surface-container-brand-primary-30, #4c2399)" },
  { id: 2, color: "var(--ui-color-surface-container-brand-primary-30, #4c2399)"  },
  { id: 3, color: "var(--ui-color-surface-container-brand-primary-30, #4c2399)" },
];

export default function Card() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className=" transition-all duration-500"
        style={{
          background: slides[current].color,
            width: "1260px",
            height: "477px",
            borderRadius: "calc(var(--corner-radius-large) * 1px)",
            marginTop: "24px",
            opacity: 0.24,
        }}
      ></div>

      <div className="flex gap-2 mt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={` rounded-full ${
              index === current ? "bg-gray-800" : "bg-gray-400 opacity-50"
            }`}
            style={{
                width : "8px",
                height : "8px"
            }}
          />
        ))}
      </div>
    </div>
  );
}
