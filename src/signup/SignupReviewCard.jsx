import React, { useState } from "react";
import Image from "next/image";
import "../app/build/css/tokens.css";

// Reusing styles logic but inline or scoped to avoid messing with other files
const SignupReviewCard = ({ message, name, location, avatarSrc }) => {
  return (
    <div
      style={{
        width: "calc(527 * 1px)",
        height: "294px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        // borderRadius: "calc(var(--corner-radius-large, 24) * 1px)",
        // border:
        //   "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
        // background: "var(--ui-color-surface-neutral-neutral-light-10, #fff)",
        // boxShadow:
        //   "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
        // flexShrink: 0,
        borderRadius: "calc(var(--corner-radius-medium, 16px) * 1px)",
        border:
          "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
        background: "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",
        boxShadow:
          "0 2px 6px 0 var(--effects-shadow-8, rgba(17, 24, 39, 0.08))",
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
            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
          fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
          fontSize:
            "calc(var(--typogrraphy-paragraph-para-1-size, 18px) * 1px)",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight:
            "calc(var(--typogrraphy-paragraph-para-1-line-height, 28px) * 1px)",
          letterSpacing:
            "calc(var(--typogrraphy-paragraph-letter-spacing, 0) * 1px)",
        }}
      >
        {message}
      </p>

      {/* partner info */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {/* Avatar */}
        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            background: "#F3E8FF", // Light purple bg
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // color: "#6B21A8", // Removed as we are using an image
          }}
        >
          <Image
            src={avatarSrc || "/Icons/user.svg"}
            alt={name || "User"}
            width={31}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>  {/* Text Info */}
          <div>
            {/* name */}
            <h5
              style={{
                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                fontFamily:
                  "var(--typogrraphy-heading-h6-inter-font-family, Inter)",
                fontSize:
                  "calc(var(--typogrraphy-heading-h6-small-size, 18px) * 1px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight:
                  "calc(var(--typogrraphy-heading-h6-small-line-height, 24px) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-heading-h6-small-letter-spacing, -0.36px) * 1px)",
              }}
            >
              {name}
            </h5>

            {/* location */}
            <p
              style={{

                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size, 14px) * 1px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight:
                  "calc(var(--typogrraphy-label-l-2-line-height, 16px) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
              }}
            >
              {location}
            </p>
          </div></div>

      </div>

      {/* stars */}
      <div style={{ display: "flex" }}>
        {[1, 2, 3, 4].map((i) => (
          <Image
            key={i}
            src="/Icons/star100.svg"
            alt="Star"
            width={24}
            height={24}
          />
        ))}
        <Image src="/Icons/star50.svg" alt="Half Star" width={24} height={24} />
      </div>
    </div>
  );
};

export default SignupReviewCard;
