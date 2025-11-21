import Image from "next/image";
import React from "react";

const Card = ({ image = "", name, location, description }) => {
  return (
    <div
      className="w-[406px] h-[232px] flex flex-col shrink-0 snap-center"
      style={{
        padding: "24px",
        borderRadius: "calc(var(--corner-radius-large) * 1px)",
        border: "1px solid var(--ui-color-border-neutral-10, #e5e7eb)",
        background:
          "var(--ui-color-surface-container-neutral-neutral-00, #fff)",
        boxShadow:
          "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
      }}
    >
      <div className="w-full flex items-center gap-[20px]">
        {/* avatar */}
        <div
          className="w-[60px] h-[60px] rounded-full flex-shrink-0 overflow-hidden"
          style={{
            border: "2px solid var(--ui-color-border-neutral-00, #fff)",
            background: "var(--ui-color-on-surface-avatar-1, #e5e7eb)",
            borderRadius: "50%",
          }}
        ></div>

        <div className="w-[332px] ">
          <h3
            className="w-full h-[32px]"
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
              fontFamily:
                "var(--typogrraphy-heading-h5-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight:
                "calc(var(--typogrraphy-heading-h5-large-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-heading-h5-large-letter-spacing) * 1px)",
            }}
          >
            {name}
          </h3>

          <p
            className="w-full h-[18px]"
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-label-l-1-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight:
                "calc(var(--typogrraphy-label-l-1-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
            }}
          >
            {location}
          </p>
        </div>
      </div>

      {/* stars */}
      <div className="w-full  mt-[12px] h-[24px] flex gap-[-2px]">
        <Image src="/Icons/star100.svg" alt="Stars" width={24} height={24} />
        <Image src="/Icons/star100.svg" alt="Stars" width={24} height={24} />
        <Image src="/Icons/star100.svg" alt="Stars" width={24} height={24} />
        <Image src="/Icons/star100.svg" alt="Stars" width={24} height={24} />
        <Image src="/Icons/star50.svg" alt="Stars" width={24} height={24} />
      </div>

      {/* description */}
      <p
        className="w-full h-[80px] mt-[12px]"
        style={{
          color: "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
          fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
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
  );
};

export default Card;
