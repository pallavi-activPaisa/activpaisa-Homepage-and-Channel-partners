import Icon from "@/components/UI/Icons/Icon";
import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div
      className="w-[300px] h-[232px] flex flex-col items-start"
      style={{
        borderRadius: "calc(var(--corner-radius-large)*1px)",
        border:
          "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-neutral-10, #e5e7eb)",
        boxShadow:
          "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
        padding: "calc(var(--spacing-sp-24)*1px)",
      }}
    >
      {/* inner box */}
      <div className="w-full h-[136px]  space-y-[24px] ">
        <Icon icon={icon} />

        {/* title */}
        <div
          className="w-full h-[64px] "
          style={{
            color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
            fontFamily:
              "var(--typogrraphy-heading-h5-inter-font-family, inter)",
            fontSize: "calc(var(--typogrraphy-heading-h5-large-size)*1px)",
            fontStyle: "normal",
            fontWeight: 600,
            // lineHeight: "var(--typogrraphy-heading-h5-large-line-height, 32px)",
            letterSpacing:
              "var(--typogrraphy-heading-h5-large-letter-spacing, -0.48px)",
          }}
        >
          {title}
        </div>
      </div>

      {/* description */}
      <div
        className="w-full h-[60px] mt-[8px]"
        style={{
          color: "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
          fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
          fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
          fontStyle: "normal",
          fontWeight: 400,
          // lineHeight: "var(--typogrraphy-paragraph-para-3-line-height, 20px)",
          letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default Card;
