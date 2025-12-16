import Icon from "@/components/ui/Icons/Icon";
import React from "react";

const SmallCard = ({ icon, title, subTitle }) => {
  return (
    <div className="w-[132px] h-[132px]  flex flex-col justify-center items-center gap-[12px]">
      <Icon icon={icon} />
      <div
        className="w-full h-[32px]"
        style={{
          color:
            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
          textAlign: "center",
          fontFamily: "var(--typogrraphy-heading-h5-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight:
            "calc(var(--typogrraphy-heading-h5-large-line-height) * 1px)",
          letterSpacing:
            "calc(var(--typogrraphy-heading-h5-large-letter-spacing) * 1px)",
        }}
      >
        {title}
        <p
          className="w-full h-[18px] mt-[8px] "
          style={{
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
            textAlign: "center",
            fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-label-l-1-size) * 1px)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "calc(var(--typogrraphy-label-l-1-line-height) * 1px)",
            letterSpacing:
              "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
          }}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
