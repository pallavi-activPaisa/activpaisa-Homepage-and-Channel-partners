"use client";
import React from "react";
import Image from "next/image";

const CardOurProduct = ({ title, description }) => {
  return (
    <div
      className="flex flex-col items-center p-6"
      style={{
        width: "367px",
        borderRadius: "24px",
        height: "616px",
        background:
          "var(--ui-color-surface-container-brand-primary-00, #F2EFFC)",
        overflow: "hidden",
      }}
    >
      {/* Top Image/Text Area */}
      <div
        style={{
          width: "100%",
          height: "448px",
          borderRadius: "24px",
          background: "rgba(76, 35, 153, 0.08)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          textAlign: "center",
        }}
      ></div>

      {/* Title */}
      <h3
        className="mt-3"
        style={{
          color: "var(--ui-color-on-surface-on-primary-00-2, #4C2399)",
          fontSize: "20px",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="mt-2"
        style={{
          alignSelf: "stretch",
          color: "var(--ui-color-on-surface-on-primary-00-3, #6B7280)",
          textAlign: "center",
          fontFamily: "var(--typography-paragraph-inter-font-family, Inter)",
          fontSize: "var(--typography-paragraph-para-3-size, 14px)",
          fontWeight: 400,
          lineHeight: "var(--typography-paragraph-para-3-line-height, 20px)",
          letterSpacing: "var(--typography-paragraph-letter-spacing, 0)",
        }}
      >
        {description}
      </p>

      {/* Learn More Button */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "8px",
        }}
      >
        <button
          className="flex items-center gap-2"
          style={{
            color: "var(--ui-color-on-surface-on-primary-00-2, #4C2399)",
            textAlign: "right",
            fontFamily: "var(--typography-label-inter-font-family, Inter)",
            fontSize: "var(--typography-label-l-2-size, 14px)",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "var(--typography-label-l-2-line-height, 16px)",
            letterSpacing: "var(--typography-label-letter-spacing, 0)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>Learn More</span>
          <Image
            src="/Icons/cheveron-rightSS.svg"
            alt="arrow icon"
            width={16}
            height={16}
            style={{ marginTop: "2px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default CardOurProduct;
