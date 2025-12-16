import React from "react";
import Image from "next/image";
const Buttons = ({ label }) => {
  return (
    <button
      className="flex justify-center items-center gap-[8px] "
      style={{
        padding: "16px",
        borderRadius: "8px",
        border:
          "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
      }}
    >
      <Image
        src="/Icons/check-box-png.svg"
        alt="Check Box"
        width={18}
        height={18}
      />
      <span
        style={{
          color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #FFF)",
          textAlign: "center",

          fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
          fontSize: "var(--typogrraphy-label-l-1-size, 16px)",
          fontStyle: "normal",
          fontWeight: "500",
          // lineHeight: "var(--typogrraphy-label-l-1-line-height, 18px)",
          letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default Buttons;
