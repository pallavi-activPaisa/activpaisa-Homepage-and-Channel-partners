"use client";

import Image from "next/image";

export default function MobBecomeActivPaisaLoan() {
    return (
        <section
            style={{
                display: "flex",
                padding: "0 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                alignSelf: "stretch",
            }}
        >
            {/* MAIN BOX */}
            <div
                style={{
                    display: "flex",
                    width: "335px",
                    maxWidth: "100%",
                    height: "623px",
                    padding: "20px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                    justifyContent: "flex-start",
                    borderRadius: "16px",
                    background:
                        "var(--gradients-g1, linear-gradient(45deg, var( --ui-color-gradient-colors-gradient-g1-10) 0%, var(--ui-color-gradient-colors-gradient-g1-20) 50%, var(--ui-color-gradient-colors-gradient-g1-30) 100%))",
                    position: "relative",
                    overflow: "visible",

                    isolation: "isolate",
                    transform: "translateZ(0)",
                }}
            >
                {/* TEXT CONTENT */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        zIndex: 1,
                        width: "100%",
                    }}
                >
                    {/* H1 and P */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <h1
                            style={{
                                color:
                                    "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                                fontFamily:
                                    "var(--typography-heading-h2-inter-font-family, inter)",
                                fontSize: "24px",
                                fontWeight: 600,
                                lineHeight: "32px",
                                letterSpacing: "-0.48px",
                            }}
                        >
                            Earn up to ₹1 Lakh Monthly, <br />
                            <span style={{ color: "#e1d2fc" }}>
                                Become an ActivPaisa Loan Advisor
                            </span>
                        </h1>

                        <p
                            style={{
                                color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
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
                            Earn commissions on every successful disbursal by helping
                            customers get the right loans from top banks and NBFCs
                        </p>
                    </div>

                    {/* STATS ROW */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "12px",
                            marginTop: "0px",
                        }}
                    >
                        {/* 100+ */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                            }}
                        >
                            <div
                                style={{

                                    color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                                    textAlign: "center",
                                    alignSelf: "stretch",
                                    /* heading/h6/bold/small */
                                    fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-heading-h6-small-size)*1px)",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    lineHeight: "calc(var(--typogrraphy-heading-h6-small-line-height)*1px)",
                                    letterSpacing: "calc(var(--typogrraphy-heading-h6-small-letter-spacing, -0.36)*1px)",

                                }}
                            >
                                100+
                            </div>
                            <div
                                style={{
                                    color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                                    textAlign: "center",

                                    /* paragraph/para-3/regular */
                                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
                                    letterSpacing: "calc(var(--typogrraphy-paragraph-letter-spacing, 0)*1px)",

                                }}
                            >
                                Banks <br /> & NBFCs
                            </div>
                        </div>

                        {/* ₹500+ Cr */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                            }}
                        >
                            <div
                                style={{

                                    color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                                    textAlign: "center",
                                    alignSelf: "stretch",
                                    /* heading/h6/bold/small */
                                    fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-heading-h6-small-size)*1px)",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    lineHeight: "calc(var(--typogrraphy-heading-h6-small-line-height)*1px)",
                                    letterSpacing: "calc(var(--typogrraphy-heading-h6-small-letter-spacing, -0.36)*1px)",

                                }}
                            >
                                ₹500+ Cr
                            </div>
                            <div
                                style={{
                                    color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                                    textAlign: "center",

                                    /* paragraph/para-3/regular */
                                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
                                    letterSpacing: "calc(var(--typogrraphy-paragraph-letter-spacing, 0)*1px)",

                                }}
                            >
                                Loans <br /> Facilitated
                            </div>
                        </div>

                        {/* 1000+ */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                            }}
                        >
                            <div
                                style={{

                                    color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                                    textAlign: "center",
                                    alignSelf: "stretch",
                                    /* heading/h6/bold/small */
                                    fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-heading-h6-small-size)*1px)",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    lineHeight: "calc(var(--typogrraphy-heading-h6-small-line-height)*1px)",
                                    letterSpacing: "calc(var(--typogrraphy-heading-h6-small-letter-spacing, -0.36)*1px)",

                                }}
                            >
                                1000+
                            </div>
                            <div
                                style={{
                                    color: "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                                    textAlign: "center",

                                    /* paragraph/para-3/regular */
                                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
                                    letterSpacing: "calc(var(--typogrraphy-paragraph-letter-spacing, 0)*1px)",

                                }}
                            >
                                Partners <br /> across India
                            </div>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        style={{
                            display: "flex",
                            height: "44px",
                            width: "100%",
                            padding: "10px 16px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "8px",
                            border: "1px solid #E5E7EB",
                            background: "#FFF",
                            boxShadow:
                                "0 1px 2px 0 rgba(17, 24, 39, 0.04), 0 1px 2px 0 rgba(17, 24, 39, 0.04)",
                            color:
                                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                            fontFamily: "var(--typography-label-inter-font-family, inter)",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "18px",
                            cursor: "pointer",
                        }}
                    >
                        <span style={{ fontSize: "16px", fontWeight: 500 }}>
                            Join as a Partner
                        </span>
                    </button>
                </div>

                {/* IMAGE directly in main box */}
                <img
                    src="/Images/partner-hero.png"
                    alt="About ActivPaisa"
                    style={{
                        width: "232px",
                        height: "272px",
                        aspectRatio: "29/34",
                        position: "absolute",
                        left: "50px",
                        bottom: "-22.637px",
                    }}
                />
            </div>
        </section>
    );
}
