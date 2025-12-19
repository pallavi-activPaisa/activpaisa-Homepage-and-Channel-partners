"use client";
import React, { useState } from "react";
import Image from "next/image";

const MobWhoLoanAdvisor = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0 20px",
                width: "100%",
                alignSelf: "stretch",
                gap: "16px",

            }}
        >
            {/* IMAGE CONTAINER */}
            <div
                style={{
                    width: "333px",
                    height: "320px",
                    flexShrink: 0,
                    position: "relative",
                    borderRadius: "calc(var(--corner-radius-medium, 16px)*1px)", // Rounded top, may need adjustment based on overlap or separation
                    overflow: "hidden",

                }}
            >
                <Image
                    src="/Images/loan-advisor2.png"
                    alt="Who are Loan Advisors"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* CONTENT CARD */}
            <div
                style={{
                    display: "flex",
                    width: "335px",
                    padding: "20px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "16px",
                    borderRadius: "calc(var(--corner-radius-medium, 16px)*1px)",
                    border:
                        "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                    background:
                        "var(--ui-color-surface-neutral-neutral-light-10, #fff)",

                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                    }}
                >
                    <h2
                        style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",

                            /* heading/h4/semibold/small */
                            fontFamily: "var(--typogrraphy-heading-h4-inter-font-family, inter)",
                            fontSize: "calc(var(--typogrraphy-heading-h4-small-size)*1px)",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "calc(var(--typogrraphy-heading-h4-small-line-height)*1px)",
                            letterSpacing:
                                "calc(var(--typogrraphy-heading-h4-small-letter-spacing, -0.48px)*1px)",

                        }}
                    >
                        Who are Loan Advisor?
                    </h2>
                    <p
                        style={{
                            alignSelf: "stretch",
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",

                            /* paragraph/para-3/regular */
                            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                            fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
                            letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",

                        }}
                    >
                        They help customers choose and apply for loans
                    </p>
                </div>

                {/* TEXT CONTENT */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "16px",
                }}>
                    <p
                        style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                            /* Paragraph/Para-2/Regular - using Para-2 from desktop as base, but checking tokens */
                            // The screenshot looks like standard body text, likely Para-2 or Para-3. Let's stick to Para-3 for consistency with previous mobile components, or Para-2 if it needs to be larger.
                            // Desktop uses Para-2 (16px). Let's try Para-3 (usually 14px) or keep Para-2. Screenshot looks readable.
                            // Let's use Para-3 tokens as they seem to be the mobile standard used in MobWhyActivPaisa.
                            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                            fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14)*1px)",
                            fontWeight: 400,
                            lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height, 20)*1px)",
                            letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                            margin: 0,
                        }}
                    >
                        Loan advisors help customers find and apply for the right loans from trusted lenders. They understand customer needs, recommend suitable loan options, and assist in completing the application process. When a loan gets approved and disbursed, they earn a commission for that effort.
                        {!isExpanded && (
                            <span
                                onClick={() => setIsExpanded(true)}
                                style={{
                                    color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                                    textDecorationLine: "underline",
                                    cursor: "pointer",
                                    marginLeft: "5px",
                                    fontWeight: 500
                                }}
                            >
                                read more
                            </span>
                        )}
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateRows: isExpanded ? "1fr" : "0fr",
                            transition: "grid-template-rows 0.5s ease-out",
                        }}
                    >
                        <div style={{ overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <p
                                    style={{
                                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                                        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                        fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14)*1px)",
                                        fontWeight: 400,
                                        lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height, 20)*1px)",
                                        letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                                    }}
                                >
                                    At ActivPaisa, advisors work independently, without an office, investment, or prior experience. They simply connect customers to loan options and earn on every successful disbursal.
                                </p>
                                <p
                                    style={{
                                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                                        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                        fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14)*1px)",
                                        fontWeight: 400,
                                        lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height, 20)*1px)",
                                        letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                                    }}
                                >
                                    Loan advisors play an important role in improving access to finance. Many individuals struggle to compare banks, understand eligibility, or complete paperwork. Advisors act as a bridge, simplifying the process, supporting customers, and ensuring they receive loans that actually match their needs.
                                    <span
                                        onClick={() => setIsExpanded(false)}
                                        style={{
                                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                                            textDecorationLine: "underline",
                                            cursor: "pointer",
                                            marginLeft: "5px",
                                            fontWeight: 500
                                        }}
                                    >
                                        read less
                                    </span>
                                </p>
                                <button
                                    style={{
                                        display: "flex",
                                        height: "44px",
                                        width: "108px",
                                        padding:
                                            "var(--spacing-sp-10, 10px) var(--spacing-sp-16, 16px)",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "8px",

                                        border:
                                            "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                                        background:
                                            "var(--ui-color-surface-neutral-neutral-light-10, #fff)",
                                        borderRadius: "calc(var(--corner-radius-2xsmall, 8px)*1px)",
                                        /* drop shadow/xsmall */
                                        boxShadow:
                                            "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
                                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                                        textAlign: "center",
                                        whiteSpace: "nowrap", // Prevent wrapping

                                        /* label/l-2/medium */
                                        fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                                        fontSize: "calc(var(--typogrraphy-label-l-2-size, 14)*1px)", // Fallback to 14 if variable missing
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "calc(var(--typogrraphy-label-l-2-line-height, 20)*1px)", // Fallback to 20
                                        letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",

                                    }}
                                >
                                    Learn More
                                </button>
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default MobWhoLoanAdvisor;
