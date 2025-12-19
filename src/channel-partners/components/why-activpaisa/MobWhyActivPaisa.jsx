"use client";
import React, { useState } from "react";
import Image from "next/image";

const MobWhyActivPaisa = () => {
    const [showAll, setShowAll] = useState(false);

    const cardData = [
        {
            id: 1,
            title: "High Commissions",
            description: "Earn competitive payouts on every disbursal. No limits, no hidden cuts",
            icon: "/Icons/High-Commissions.svg",
        },
        {
            id: 2,
            title: "Flexible Work Hours",
            description: "Operate full-time or part-time - your business, your schedule",
            icon: "/Icons/Baggage-Weight.svg",
        },
        {
            id: 3,
            title: "Wide Loan Portfolio",
            description: "Offer personal loans, business loans, home loans, LAP, and credit cards",
            icon: "/Icons/Tool-Box.svg",
        },
        {
            id: 4,
            title: "Fast Digital Process",
            description: "Fast applications, minimal paperwork, smooth approvals",
            icon: "/Icons/Icon.svg",

            scale: 1.6, // ✅ visual compensation
        }

        ,

        {
            id: 5,
            title: "Dedicated Support",
            description: "We help you close deals, resolve issues, and grow your loan advisory business",
            icon: "/Icons/streamline-sharp.svg",
        },
        {
            id: 6,
            title: "Business Training",
            description: "Get practical training, sales guidance, and product knowledge",
            icon: "/Icons/Single-Man.svg",
        },
    ];

    const initialItems = cardData.slice(0, 3);
    const hiddenItems = cardData.slice(3);

    return (
        <div
            style={{
                display: "flex",
                padding: "0px 20px 20px 20px ",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                alignSelf: "stretch",


            }}
        >
            {/* TEXT CONTENT */}
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
                        alignSelf: "stretch",
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",

                        /* heading/h4/semibold/small */
                        fontFamily: "var(--typogrraphy-heading-h4-inter-font-family, inter)",
                        fontSize: "calc(var(--typogrraphy-heading-h4-small-size)*1px)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "calc(var(--typogrraphy-heading-h4-small-line-height)*1px)",
                        letterSpacing:
                            "var(--typogrraphy-heading-h4-small-letter-spacing, -0.48px)",


                    }}
                >
                    Join ActivPaisa <br /> Partner Program
                </h2>
                <p
                    style={{
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                        alignSelf: "stretch",

                        /* paragraph/para-3/regular */
                        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                        fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
                        letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",

                    }}
                >
                    Get everything you need to start and grow your loan advisory business
                </p>
            </div>

            {/* LIST ITEMS */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    width: "335px",
                }}
            >
                {initialItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: "flex",
                            alignItems: "flex-start", // Top align icon with text
                            gap: "16px",
                            alignSelf: "stretch",
                        }}
                    >
                        {/* ICON BOX */}
                        <div
                            style={{
                                display: "flex",
                                width: "48px",
                                height: "48px",
                                padding: "12px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "8px",
                                background:
                                    "var(--ui-color-surface-brand-primary-light-10, #f2effc)",

                            }}
                        >
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={24}
                                height={24}
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "contain",
                                    transform: item.scale ? `scale(${item.scale})` : undefined,
                                }}
                            />



                        </div>

                        {/* TEXT */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "4px",
                                flex: "1 0 0",
                            }}
                        >
                            <h3
                                style={{
                                    color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                                    alignSelf: "stretch",

                                    /* heading/h6/semibold/small */
                                    fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-heading-h6-small-size)*1px)",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    lineHeight: "calc(var(--typogrraphy-heading-h6-small-line-height)*1px)",
                                    letterSpacing:
                                        "var(--typogrraphy-heading-h6-small-letter-spacing, -0.36px)",


                                }}
                            >
                                {item.title}
                            </h3>
                            <p
                                style={{
                                    color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",

                                    /* paragraph/para-4/regular */
                                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-paragraph-para-4-size)*1px)",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "calc(var(--typogrraphy-paragraph-para-4-line-height)*1px)",
                                    letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",

                                }}
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}

                <div
                    style={{
                        display: "grid",
                        gridTemplateRows: showAll ? "1fr" : "0fr",
                        transition: "grid-template-rows 0.5s ease-out",
                        alignSelf: "stretch",
                    }}
                >
                    <div style={{ overflow: "hidden" }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                alignSelf: "stretch",
                            }}
                        >
                            {hiddenItems.map((item) => (
                                <div
                                    key={item.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start", // Top align icon with text
                                        gap: "16px",
                                        alignSelf: "stretch",
                                    }}
                                >
                                    {/* ICON BOX */}
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "48px",
                                            height: "48px",
                                            padding: "12px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "8px",
                                            background:
                                                "var(--ui-color-surface-brand-primary-light-10, #f2effc)",

                                        }}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={24}
                                            height={24}
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                objectFit: "contain",
                                                transform: item.scale ? `scale(${item.scale})` : undefined,
                                            }}
                                        />

                                    </div>

                                    {/* TEXT */}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "flex-start",
                                            gap: "4px",
                                            flex: "1 0 0",
                                        }}
                                    >
                                        <h3
                                            style={{
                                                alignSelf: "stretch",
                                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",

                                                /* heading/h6/semibold/small */
                                                fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, inter)",
                                                fontSize: "calc(var(--typogrraphy-heading-h6-small-size)*1px)",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                lineHeight: "calc(var(--typogrraphy-heading-h6-small-line-height)*1px)",
                                                letterSpacing:
                                                    "var(--typogrraphy-heading-h6-small-letter-spacing, -0.36px)",

                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            style={{
                                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",

                                                /* paragraph/para-4/regular */
                                                fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                                fontSize: "calc(var(--typogrraphy-paragraph-para-4-size)*1px)",
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                lineHeight: "calc(var(--typogrraphy-paragraph-para-4-line-height)*1px)",
                                                letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",

                                            }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* BUTTON */}
            <div
                onClick={() => setShowAll(!showAll)}
                style={{
                    display: "flex",
                    width: "335px",
                    height: "40px",
                    padding: "8px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "8px",
                }}
            >
                <span
                    style={{
                        color: "var(--ui-color-on-surface-neutral-light-20-on-neutral-light-20-n40, #374151)",
                        fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                        fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                        letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                    }
                    }
                >
                    {showAll ? "View less" : "View more"}
                </span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: showAll ? "rotate(180deg)" : "rotate(0deg)", transition: "0.2s" }}
                >
                    <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#4C2399"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default MobWhyActivPaisa;
