import Icon from "@/components/ui/Icons/Icon";
import React from "react";

const Card = ({ title, description }) => {
  return (
    <div
      className="w-[301px] h-[128px] flex flex-col justify-start items-start"
      style={{
        padding: "24px",
        borderRadius: "24px",
        border:
          "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
        background: "var(--ui-color-surface-neutral-neutral-light-10, #fff)",
        boxShadow:
          "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
      }}
    >
      {/* inner box */}
      {/* <div className="w-full h-[80px] space-y-[24px] bg-amber-300 "> */}
      {/* <Icon icon={icon} /> */}

      {/* title */}
      <div
        className="w-full h-[32px] "
        style={{
          color:
            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
          fontFamily: "var(--typogrraphy-heading-h5-inter-font-family, inter)",
          fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight:
            "calc(var(--typogrraphy-heading-h5-large-line-height) * 1px)",
          letterSpacing:
            "calc(var(--typogrraphy-heading-h5-large-letter-spacing) * 1px)",
        }}
      >
        {title}
      </div>
      {/* </div> */}

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
