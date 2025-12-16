import React from "react";

const StepCard = ({ stepNumber = 1, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center p-[24px]">
      <div className=" w-[286px] flex flex-col justify-center items-center gap-[24px]">
        {/* icon */}
        <div
          className="w-[36px] h-[36px] rounded-full flex justify-center items-center "
          style={{
            padding: "10px 0px",
            borderRadius: "24px",
            background:
              "var(--ui-color-surface-brand-primary-strong-10, #4C2399)",

            color:
              "var(--ui-color-on-surface-primary-strong-10-on-primary-strong-10-n10, #FFF)",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "16px",
          }}
        >
          {stepNumber}
        </div>

        {/* title */}
        <div>
          <div
            className="w-full h-[18px]"
            style={{
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
              textAlign: "center",
              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-label-l-1-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight:
                "calc(var(--typogrraphy-label-l-1-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
            }}
          >
            {title}
          </div>
          <p
            className="w-full h-[40px] mt-[8px]"
            style={{
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
              textAlign: "center",
              fontFamily:
                "var(--typogrraphy-paragraph-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-paragraph-para-3-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight:
                "calc(var(--typogrraphy-paragraph-para-3-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-paragraph-letter-spacing) * 1px)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
