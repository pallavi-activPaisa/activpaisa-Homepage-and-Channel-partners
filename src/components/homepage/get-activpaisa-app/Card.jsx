import React from "react";
import Icon from "@/components/ui/Icons/Icon";
const Card = ({ number, title, subTitle }) => {
  return (
    <div className="w-full h-[60px]  flex items-center gap-[24px] ">
      {/* icon */}
      {/* <div
        className="w-[36px] h-[36px]  rounded-full flex justify-center items-center"
        style={{
          borderRadius: "24px",
          padding: "10px 0px",
          background:
            "var(--ui-color-surface-container-brand-primary-30, #4c2399)",
        }}
      >
        <div
          className="w-[8px] h-[16px]"
          style={{
            color: "var(--ui-color-on-surface-on-primary-30---1, #fff)",
            textAlign: "center",
            fontFamily: "inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "16px",
          }}
        >
          {number}
        </div>
      </div> */}

      <div
        className="rounded-full"
        style={{
          display: "flex",
          width: "36px",
          height: "36px",
          padding: "10px 0",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "24px",
          background:
            "var(--UI-Color-Surface-Container-Brand-primary-30, #4C2399)",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {number}
      </div>
      {/* icon code finished */}
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
