import React, { useState } from "react";
import Image from "next/image";
import "../app/build/css/tokens.css";

// Reusing styles logic but inline or scoped to avoid messing with other files
const SignupReviewCard = ({ message, name, location }) => {
    return (
        <div
            style={{
                width: "calc(407 * 1px)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                borderRadius: "calc(var(--corner-radius-large, 24) * 1px)",
                border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                background: "var(--ui-color-surface-neutral-neutral-light-10, #fff)",
                boxShadow: "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
                flexShrink: 0,
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
                    color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                    fontSize: "calc(var(--typogrraphy-paragraph-para-2-size, 16) * 1px)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                    lineHeight: "1.5"
                }}
            >
                {message}
            </p>

            {/* partner info */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                {/* Avatar */}
                <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#F3E8FF", // Light purple bg
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#6B21A8" // Purple icon color
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>

                {/* Text Info */}
                <div>
                    {/* name */}
                    <h5
                        style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                            fontFamily: "var(--typogrraphy-heading-h5-inter-font-family, inter)",
                            fontSize: "18px", // Slightly adjusted for card balance
                            fontStyle: "normal",
                            fontWeight: 600,
                            letterSpacing: "var(--typogrraphy-heading-h5-large-letter-spacing, -0.48px)",
                            margin: 0
                        }}
                    >
                        {name}
                    </h5>

                    {/* location */}
                    <p
                        style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                            fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                            margin: 0
                        }}
                    >
                        {location}
                    </p>
                </div>
            </div>

            {/* stars */}
            <div style={{ display: "flex" }}>
                {[1, 2, 3, 4].map(i => (
                    <Image key={i} src="/Icons/star100.svg" alt="Star" width={24} height={24} />
                ))}
                <Image src="/Icons/star50.svg" alt="Half Star" width={24} height={24} />
            </div>
        </div>
    );
};

export default SignupReviewCard;

