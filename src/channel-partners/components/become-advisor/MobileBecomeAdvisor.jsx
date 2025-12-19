"use client";
import React from "react";
import Image from "next/image";

const MobileBecomeAdvisor = () => {
    const cardData = [
        {
            id: 1,
            title: "Existing DSA & Agents",
            description:
                "Expand your lender access and offer a wider range of products",
        },
        {
            id: 2,
            title: "Finance Experts",
            description:
                "Use your network and industry expertise to earn additional income",
        },
        {
            id: 3,
            title: "Business Owners",
            description:
                "Offer loan support to customers and add a new income stream",
        },
        {
            id: 4,
            title: "Aspiring Advisors",
            description: "Begin your finance advisory journey with complete guidance",
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                width: "375px",
                maxWidth: "100%",
                padding: "40px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                margin: "0 auto",
                background:
                    "var(--ui-color-surface-neutral-neutral-light-10, #ffffff)",
            }}
        >
            {/* HEADER TEXT */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    alignSelf: "stretch",
                }}
            >
                <h2
                    style={{
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                        fontFamily: "var(--typogrraphy-heading-h4-inter-font-family, inter)",
                        fontSize: "calc(var(--typogrraphy-heading-h4-small-size) * 1px)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "calc(var(--typogrraphy-heading-h4-small-line-height) * 1px)",
                        letterSpacing: "var(--typogrraphy-heading-h4-small-letter-spacing, -0.48px)",
                        alignSelf: "stretch",
                    }
                    }
                >
                    Who Can Become a <br /> Loan Advisor?
                </h2>
                <p
                    style={{
                        alignSelf: "stretch",
                        color:
                            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                        /* paragraph/para-3/regular */
                        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                        fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight:
                            "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
                        letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                    }}
                >
                    ActivPaisa welcomes a diverse range of partners
                </p>
            </div>

            {/* IMAGE */}
            <div
                style={{
                    width: "335px",
                    height: "155px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background:
                        "var(--ui-color-surface-brand-primary-light-10, #F2EFFC)",
                    position: "relative",
                }}
            >
                <Image
                    src="/Images/loan-advisors.png"
                    alt="Who can become a loan advisor"
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>

            {/* CARDS LIST */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "16px",
                    alignSelf: "stretch",
                }}
            >
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        style={{
                            display: "flex",
                            padding: "20px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "8px",
                            alignSelf: "stretch",
                            borderRadius: "12px",
                            border:
                                "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                            background:
                                "var(--ui-color-surface-neutral-neutral-light-10, #fff)",
                            boxShadow:
                                "0px 1px 2px 0px rgba(17, 24, 39, 0.04), 0px 1px 2px 0px rgba(17, 24, 39, 0.04)",
                        }}
                    >
                        <h3
                            style={{
                                alignSelf: "stretch",

                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                                fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, inter)",
                                fontSize: "calc(var(--typogrraphy-heading-h6-small-size) * 1px)",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "calc(var(--typogrraphy-heading-h6-small-line-height) * 1px)",
                                letterSpacing: "var(--typogrraphy-heading-h6-small-letter-spacing, -0.36px)",
                            }
                            }
                        >
                            {card.title}
                        </h3>
                        <p
                            style={{
                                alignSelf: "stretch",
                                color:
                                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                                /* paragraph/para-4/regular */
                                fontFamily:
                                    "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                fontSize:
                                    "calc(var(--typogrraphy-paragraph-para-4-size)*1px)",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight:
                                    "calc(var(--typogrraphy-paragraph-para-4-line-height)*1px)",
                                letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                            }}
                        >
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileBecomeAdvisor;
