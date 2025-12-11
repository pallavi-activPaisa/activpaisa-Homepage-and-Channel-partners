"use client";

import Image from "next/image";

export default function BecomeActivPaisaLoan() {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#FFF",
        paddingTop: "72px",
        // paddingBottom: "72px",
        margin: "0 auto",
      }}
    >
      {/* MAIN BOX */}
      <div
        style={{
          width: "1260px",
          height: "452px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          padding: "64px 40px",
          borderRadius: "24px",
          background:
            "var(--gradients-g1, linear-gradient(45deg, var(--ui-color-gradients-g1-100, #BD8668) 0%, var(--ui-color-gradients-g1-200, #5D51AF) 50%, var(--ui-color-gradients-g1-300, #3437C8) 100%))",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* H1 and P with 8px gap */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h1
              style={{
                color:
                  "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                fontFamily:
                  "var(--typography-heading-h2-inter-font-family, inter)",
                fontSize: "var(--typography-heading-h2-small-size, 32px)",
                fontWeight: 600,
                lineHeight:
                  "var(--typography-heading-h2-small-line-height, 40px)",
                letterSpacing:
                  "var(--typography-heading-h2-small-letter-spacing, -0.64px)",
              }}
            >
              Become an ActivPaisa Loan Advisor, <br />
              <span style={{ color: "#e1d2fc" }}>
                Earn up to ₹1 Lakh Monthly
              </span>
            </h1>

            <p
              style={{
                maxWidth: "637px",
                color:
                  "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                fontFamily:
                  "var(--typography-paragraph-inter-font-family, inter)",
                fontSize: "var(--typography-paragraph-para-2-size, 16px)",
                fontWeight: 400,
                lineHeight:
                  "var(--typography-paragraph-para-2-line-height, 24px)",
                letterSpacing: "var(--typography-paragraph-letter-spacing, 0)",
              }}
            >
              Help people access the right loans from top banks and NBFCs, and
              earn commissions on every successful disbursal
            </p>
          </div>

          {/* STATS ROW + BUTTON with 40px gap */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            {/* STATS ROW */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "64px",
              }}
            >
              {/* 100+ */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    color:
                      "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                    fontFamily:
                      "var(--typography-heading-h5-inter-font-family, inter)",
                    fontSize: "var(--typography-heading-h5-large-size, 24px)",
                    fontWeight: 700,
                    lineHeight:
                      "var(--typography-heading-h5-large-line-height, 32px)",
                    letterSpacing:
                      "var(--typography-heading-h5-large-letter-spacing, -0.48px)",
                  }}
                >
                  100+
                </div>
                <div
                  style={{
                    color:
                      "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #e8e8e8)",
                    fontFamily:
                      "var(--typography-label-inter-font-family, inter)",
                    fontSize: "var(--typography-label-l-1-size, 16px)",
                    fontWeight: 400,
                    lineHeight: "var(--typography-label-l-1-line-height, 18px)",
                    letterSpacing: "var(--typography-label-letter-spacing, 0)",
                  }}
                >
                  Banks & NBFCs
                </div>
              </div>

              {/* ₹500+ Cr */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    color:
                      "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                    fontFamily:
                      "var(--typography-heading-h5-inter-font-family, inter)",
                    fontSize: "var(--typography-heading-h5-large-size, 24px)",
                    fontWeight: 700,
                    lineHeight:
                      "var(--typography-heading-h5-large-line-height, 32px)",
                    letterSpacing:
                      "var(--typography-heading-h5-large-letter-spacing, -0.48px)",
                  }}
                >
                  ₹500+ Cr
                </div>
                <div
                  style={{
                    color:
                      "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #e8e8e8)",
                    fontFamily:
                      "var(--typography-label-inter-font-family, inter)",
                    fontSize: "var(--typography-label-l-1-size, 16px)",
                    fontWeight: 400,
                    lineHeight: "var(--typography-label-l-1-line-height, 18px)",
                    letterSpacing: "var(--typography-label-letter-spacing, 0)",
                  }}
                >
                  Loans Facilitated
                </div>
              </div>

              {/* 1000+ */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    color:
                      "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #fff)",
                    fontFamily:
                      "var(--typography-heading-h5-inter-font-family, inter)",
                    fontSize: "var(--typography-heading-h5-large-size, 24px)",
                    fontWeight: 700,
                    lineHeight:
                      "var(--typography-heading-h5-large-line-height, 32px)",
                    letterSpacing:
                      "var(--typography-heading-h5-large-letter-spacing, -0.48px)",
                  }}
                >
                  1000+
                </div>
                <div
                  style={{
                    color:
                      "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #e8e8e8)",
                    fontFamily:
                      "var(--typography-label-inter-font-family, inter)",
                    fontSize: "var(--typography-label-l-1-size, 16px)",
                    fontWeight: 400,
                    lineHeight: "var(--typography-label-l-1-line-height, 18px)",
                    letterSpacing: "var(--typography-label-letter-spacing, 0)",
                  }}
                >
                  Partners across India
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button
              style={{
                display: "flex",
                height: "44px",
                width: "161px",
                // padding: "10px 16px", // fallback direct value
                // padding:
                // "var(--spacing-sp-10, 10px) var(--spacing-sp-16, 16px)",

                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "8px", // direct fallback
                border: "1px solid #E5E7EB",
                background: "#FFF",
                boxShadow:
                  "0 1px 2px 0 rgba(17, 24, 39, 0.04), 0 1px 2px 0 rgba(17, 24, 39, 0.04)",
                color: "#374151",
                textAlign: "center",
                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                textAlign: "center",
                fontFamily: "var(--typography-label-inter-font-family, inter)",
                fontSize: "var(--typography-label-l-1-size, 16px)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "var(--typography-label-l-1-line-height, 18px)",
                letterSpacing: "var(--typography-label-letter-spacing, 0)",

                cursor: "pointer",
              }}
            >
              Join as a Partner
            </button>
          </div>
        </div>

        {/* RIGHT BLUR BOX */}
        <div
          style={{
            width: "480px",
            height: "300px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(20px)",
          }}
        ></div>
      </div>
    </section>
  );
}
