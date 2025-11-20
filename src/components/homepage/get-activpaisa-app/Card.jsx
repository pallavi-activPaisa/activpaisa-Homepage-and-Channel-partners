import React from "react";
import Icon from "@/components/ui/Icons/Icon";
const Card = ({ icon = "", title, subTitle }) => {
  return (
    <div className="w-full h-[60px] flex gap-[24px] ">
      {/* icon */}
      <Icon />
      <div className="w-[331px] h-fit">
        <h4
          style={{
            color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
            fontFamily:
              "var(--typogrraphy-heading-h6-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-heading-h6-large-size)*1px)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight:
              "calc(var(--typogrraphy-heading-h6-large-line-height)*1px)",
            letterSpacing:
              "calc(var(--typogrraphy-heading-h6-large-letter-spacing)*1px)",
          }}
        >
          {title}
        </h4>

        <p
          style={{
            color: "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight:
              "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
            letterSpacing:
              "calc(var(--typogrraphy-paragraph-letter-spacing)*1px)",
          }}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
