import Image from "next/image";
import React from "react";

const Card = ({ message, name, location }) => {
  return (
    <div
      className="w-[407px] shrink-0  flex flex-col justify-start items-start p-[24px] gap-[12px]"
      style={{
        borderRadius: "calc(var(--corner-radius-large) * 1px)",
        border:
          "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
        background: "var(--ui-color-surface-neutral-neutral-light-10, #fff)",

        /* drop shadow / xsmall */
        boxShadow:
          "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
      }}
    >
      <Image
        src="/Icons/double-quote.svg"
        alt="Partner review"
        width={24}
        height={19}
      />

      {/* message */}
      <p
        style={{
          color:
            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",

          /* paragraph / para-2 / regular */
          fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
          fontSize:
            "calc(var(--typogrraphy-paragraph-para-2-size, 16px) * 1px)",
          fontStyle: "normal",
          fontWeight: 400,
          // lineHeight: "var(--typogrraphy-paragraph-para-2-line-height, 24px)",
          letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
        }}
      >
        {message}
      </p>

      {/* partner info */}
      <div>
        {/* name */}
        <h5
          style={{
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",

            /* heading / h5 / semibold / large */
            fontFamily:
              "var(--typogrraphy-heading-h5-inter-font-family, inter)",
            fontSize:
              "calc(var(--typogrraphy-heading-h5-large-size, 24px) * 1px)",
            fontStyle: "normal",
            fontWeight: 600,
            // lineHeight: "var(--typogrraphy-heading-h5-large-line-height, 32px)",
            letterSpacing:
              "var(--typogrraphy-heading-h5-large-letter-spacing, -0.48px)",
          }}
        >
          {name}
        </h5>

        {/* location */}
        <p
          style={{
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",

            /* label / l-1 / regular */
            fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
            fontSize: "calc(var(--typogrraphy-label-l-1-size, 16px) * 1px)",
            fontStyle: "normal",
            fontWeight: 400,
            // lineHeight: "var(--typogrraphy-label-l-1-line-height, 18px)",
            letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
          }}
        >
          {location}
        </p>
      </div>

      {/* stars */}
      <div className="flex ">
        <Image src="/Icons/star100.svg" alt="Stars" width={24} height={24} />
        <Image src="/Icons/star100.svg" alt="Stars" width={24} height={24} />
        <Image src="/Icons/star100.svg" alt="Stars" width={24} height={24} />
        <Image src="/Icons/star100.svg" alt="Stars" width={24} height={24} />
        <Image src="/Icons/star50.svg" alt="Stars" width={24} height={24} />
      </div>
    </div>
  );
};

export default Card;
