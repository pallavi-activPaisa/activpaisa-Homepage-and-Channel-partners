"use client";

import React, { useRef, useState, useEffect } from "react";

const MobExploreRangeCreditProducts = () => {
    const cards = [
        {
            title: "Home Loan",
            desc: "Finance for buying a new house or property",
            img: "/partnerspage/House-3--Streamline-Ultimate.svg",
        },
        {
            title: "Personal Loan",
            desc: "Standard loan with a structured application process & wider eligibility",
            img: "/partnerspage/Cash-Payment-Bag--Streamline-Ultimate.svg",
        },
        {
            title: "Credit Cards",
            desc: "Explore cards with superior rewards, benefits, and quick approval",
            img: "/partnerspage/Credit-Card-1--Streamline-Ultimate.svg",
        },
        {
            title: "Instant Personal Loan",
            desc: "Fast digital approval and quick access to funds with minimal documentation",
            img: "/partnerspage/Video-Edit-Brightness-1--Streamline-Ultimate.svg",
        },
        {
            title: "Business Loans",
            desc: "Focus on growing your business while we handle your financing",
            img: "/partnerspage/Business-Deal-Cash-3--Streamline-Ultimate.svg",
        },
        {
            title: "Balance Transfer (PL)",
            desc: "Move your loan to a lower interest rate and reduce EMIs",
            img: "/partnerspage/Data-Transfer-Horizontal--Streamline-Ultimate.svg",
        },
        {
            title: "Personal Overdraft",
            desc: "Withdraw funds when needed and pay only for what you use",
            img: "/partnerspage/Accounting-Coins-Stack--Streamline-Ultimate.svg",
        },
        {
            title: "Loan Against Properties",
            desc: "High-value loan secured against residential or commercial property",
            img: "/partnerspage/Real-Estate-Action-House-Dollar--Streamline-Ultimate.svg",
        },
        {
            title: "Professional Loan",
            desc: "Access tailored loan options to power your professional growth",
            img: "/partnerspage/Single-Neutral-Briefcase--Streamline-Ultimate.svg",
        },
    ];

    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollPosition = scrollRef.current.scrollLeft;
            const cardWidth = 280 + 16; // Card width + gap
            const index = Math.round(scrollPosition / cardWidth);
            setActiveIndex(index);
        }
    };

    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 20px", // Updated vertical padding to 40px
                width: "100%",
                alignSelf: "stretch",
                gap: "40px",
                background: "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",
            }}
        >
            {/* HEADING SECTION */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    alignSelf: "stretch",
                }}
            >
                <h2
                    style={{
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                        fontFamily: "var(--typogrraphy-heading-h4-inter-font-family, inter)",
                        fontSize: "calc(var(--typogrraphy-heading-h4-small-size, 24)*1px)",
                        fontWeight: 600,
                        lineHeight: "calc(var(--typogrraphy-heading-h4-small-line-height, 32)*1px)",
                        letterSpacing: "calc(var(--typogrraphy-heading-h4-small-letter-spacing, -0.48px)*1px)",
                        margin: 0,
                    }}
                >
                    Explore Our Range of Credit Products
                </h2>
                <p
                    style={{
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                        fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14)*1px)",
                        fontWeight: 400,
                        lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height, 20)*1px)",
                        letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                        margin: 0,
                    }}
                >
                    Provide loans for various customer needs
                </p>
            </div>

            {/* CAROUSEL WRAPPER */}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="hide-scrollbar"
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        scrollSnapType: "x mandatory",
                        width: "100vw",
                        marginLeft: "-20px",
                        padding: "0 20px",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            style={{
                                flex: "0 0 280px",
                                height: "232px",
                                padding: "24px", // Updated padding inside card
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "16px",
                                borderRadius: "calc(var(--corner-radius-large, 24px)*1px)",
                                background: "var(--gradients-g1, linear-gradient(45deg, #BD8668 0%, #5D51AF 50%, #3437C8 100%))",
                                scrollSnapAlign: "center",
                                color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #FFF)",
                                boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
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
                                    borderRadius: "calc(var(--corner-radius-2xsmall, 8px)*1px)",
                                    background: "var(--ui-color-surface-specials-secondary-light, #F2EFFC)",
                                }}
                            >
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    style={{ width: "24px", height: "24px", objectFit: "contain" }}
                                />
                            </div>

                            {/* TITLE */}
                            <h3
                                style={{
                                    fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, inter)",
                                    fontSize: "20px",
                                    fontWeight: 600,
                                    margin: 0,
                                    alignSelf: "stretch",
                                    color: "inherit",
                                }}
                            >
                                {card.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p
                                style={{
                                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "20px",
                                    margin: 0,
                                    alignSelf: "stretch",
                                    opacity: 0.9,
                                    color: "inherit",
                                }}
                            >
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* PAGINATION DOTS */}
                <div style={{ display: "flex", gap: "8px" }}>
                    {cards.map((_, i) => (
                        <div
                            key={i}
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: activeIndex === i ? "var(--ui-color-on-surface-neutral-dark-20-on-neutral-dark-20-n00, #0B0F19)" : "var(--ui-color-border-default-bd-neutral-medium-20, #D1D5DB)",
                                transition: "background 0.3s ease",
                            }}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
            `}</style>
        </section>
    );
};

export default MobExploreRangeCreditProducts;
