import React from "react";
import Image from "next/image";

const Card = ({
  icon,
  iconTitle,
  title,
  list1,
  list2,
  styleBox,
  styleIconTitle,
}) => {
  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        gap: "24px",
        flexDirection: "column",

        borderRadius: "24px",
        border:
          "1px solid var(--UI-Color-Border-Default-bd-neutral-medium-10, #E5E7EB)",
        background: "var(--UI-Color-Surface-Neutral-neutral-light-10, #FFF)",

        boxShadow:
          "0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04))",
      }}
    >
      {/* icon */}
      <div
        className="w-fit h-[24px]  flex 
            items-center justify-center gap-[4px] "
        style={{
          padding: "4px 8px",
          ...styleBox,
        }}
      >
        {/* <div className="w-[16px] h-[16px] bg-purple-500"></div> */}
        <Image src={icon} width={16} height={16} alt="icon" />

        <p
          className="w-fit h-[16px] flex items-center justify-center text-center"
          style={{
            ...styleIconTitle,
          }}
        >
          {iconTitle}
        </p>
      </div>

      {/* content parent box */}

      <div className="w-[578px] h-[182px]  flex gap-[32px]">
        <div className="w-[246px]  h-[144px]  flex flex-col items-start">
          <h5
            className="w-full h-[32px]"
            style={{
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
              fontFamily:
                "var(--typogrraphy-heading-h5-inter-font-family, inter)",
              fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
              fontStyle: "normal",
              fontWeight: "600",
              //   lineHeight:
              //     "var(--typogrraphy-heading-h5-large-line-height, 32px)",
              letterSpacing:
                "var(--typogrraphy-heading-h5-large-letter-spacing, -0.48px)",
            }}
          >
            {title[0]}
          </h5>

          <ul className="space-y-[8px] list-disc ml-[20px] mt-[8px]">
            {list1.map((item, index) => (
              <li
                key={index}
                className="w-full h-[20px]"
                style={{
                  color:
                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                  fontFamily:
                    "var(--typogrraphy-paragraph-inter-font-family, inter)",
                  fontSize:
                    "calc(var(--typogrraphy-paragraph-para-3-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  // lineHeight:
                  //   "var(--typogrraphy-paragraph-para-3-line-height, 20px)",
                  letterSpacing:
                    "var(--typogrraphy-paragraph-letter-spacing, 0)",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* divder */}
        <div
          className="w-[1px] h-[182px]"
          style={{
            background:
              "var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
          }}
        ></div>

        {/* box 2 */}
        <div className="w-[260px] h-[144px]  flex flex-col items-start">
          <h5
            className="w-full h-[32px]"
            style={{
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
              fontFamily:
                "var(--typogrraphy-heading-h5-inter-font-family, inter)",
              fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
              fontStyle: "normal",
              fontWeight: "600",
              //   lineHeight:
              //     "var(--typogrraphy-heading-h5-large-line-height, 32px)",
              letterSpacing:
                "var(--typogrraphy-heading-h5-large-letter-spacing, -0.48px)",
            }}
          >
            {title[1]}
          </h5>

          <ul className="space-y-[8px] list-disc ml-[20px] mt-[8px]">
            {list2.map((item, index) => (
              <li
                key={index}
                className="w-full h-[20px]"
                style={{
                  color:
                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                  fontFamily:
                    "var(--typogrraphy-paragraph-inter-font-family, inter)",
                  fontSize:
                    "calc(var(--typogrraphy-paragraph-para-3-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  // lineHeight:
                  //   "var(--typogrraphy-paragraph-para-3-line-height, 20px)",
                  letterSpacing:
                    "var(--typogrraphy-paragraph-letter-spacing, 0)",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
