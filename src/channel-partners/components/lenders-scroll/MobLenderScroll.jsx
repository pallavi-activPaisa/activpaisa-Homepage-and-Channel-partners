"use client";
import React from "react";
import Image from "next/image";

const MobLenderScroll = () => {
    const banksLogo = [
        { logo: "/partnersLogo/axis-bank-black.png" },
        { logo: "/partnersLogo/bajaj-finserv-black.png" },
        { logo: "/partnersLogo/baroda-bank-black.png" },
        { logo: "/partnersLogo/clx-bank-black.png" },
        { logo: "/partnersLogo/yes-bank-black.png" },
        { logo: "/partnersLogo/tata-capital-black.png" },
        { logo: "/partnersLogo/baroda-bank-black.png" },
    ];

    return (
        <div
            style={{
                display: "flex",
                width: "335px",
                maxWidth: "100%",
                padding: "20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                borderRadius: "calc(var(--corner-radius-medium, 12)*1px)",
                border:
                    "calc(var(--border-width-width-1, 1)*1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                background:
                    "var(--ui-color-surface-neutral-neutral-light-10, #ffffff)",
                margin: "40px auto",
            }}
        >
            {/* HEADER */}
            <div
                style={{
                    display: "flex",
                    width: "237px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                }}
            >
                <h2
                    style={{
                        width: "222.656px",
                        color:
                            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-p40, #4c2399)",
                        textAlign: "center",
                        fontFamily:
                            "var(--typogrraphy-heading-h4-inter-font-family, inter)",
                        fontSize:
                            "calc(var(--typogrraphy-heading-h4-small-size)*1px)",
                        fontWeight: 600,
                        lineHeight:
                            "calc(var(--typogrraphy-heading-h4-small-line-height)*1px)",
                        letterSpacing:
                            "var(--typogrraphy-heading-h4-small-letter-spacing, -0.48px)",
                    }}
                >
                    Work with Top-tier Banks & NBFCs
                </h2>

                <p
                    style={{
                        color:
                            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                        textAlign: "center",
                        fontFamily:
                            "var(--typogrraphy-paragraph-inter-font-family, inter)",
                        fontSize:
                            "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
                        lineHeight:
                            "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
                    }}
                >
                    Get access to top banks and NBFCs in one place
                </p>
            </div>

            {/* LOGOS SCROLL (INFINITE) */}
            <div
                style={{
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <div
                    className="logo-track"
                    style={{
                        display: "flex",
                        gap: "17.73px",
                        alignItems: "center",
                        width: "max-content",
                    }}
                >
                    {[...banksLogo, ...banksLogo].map((bank, index) => (
                        <div
                            key={index}
                            style={{
                                flexShrink: 0,
                                display: "flex",
                                padding: "5.91px 7.092px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "5.91px",
                                mixBlendMode: "multiply",
                            }}
                        >
                            <Image
                                src={bank.logo}
                                width={117}
                                height={42}
                                alt="bank logo"
                                style={{
                                    width: "90.126px",
                                    height: "32.505px",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                .logo-track {
                    animation: scroll-left 15s linear infinite;
                }

                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

export default MobLenderScroll;
