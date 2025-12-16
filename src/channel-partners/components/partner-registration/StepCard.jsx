import React from "react";

const StepCard = ({ stepNumber = 1, title, description }) => {
  return (
    <div
      className="w-[407px] h-[187px] z-40 flex flex-col justify-center items-center "
      style={{
        borderRadius: "24px",
        padding: "24px",
        border:
          "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
        background: "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",

        boxShadow:
          "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
      }}
    >
      <div className=" w-full flex flex-col justify-center items-center gap-[24px]">
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
            className="w-full h-[32px] "
            style={{
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
              textAlign: "center",

              fontFamily:
                "var(--typogrraphy-heading-h5-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
              fontStyle: "normal",
              fontWeight: "600",
              // lineHeight:
              //   "var(--typogrraphy-heading-h5-large-line-height, 32px)",
              letterSpacing:
                "var(--typogrraphy-heading-h5-large-letter-spacing, -0.48px)",
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
