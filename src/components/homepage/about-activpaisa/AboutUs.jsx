"use client";
import React from "react";
import BottomSubHeading from "./BottomSubHeading";

const AboutUs = () => {
  return (
    <div>
      {/* OUTER BOX */}
      <div
        style={{
          width: "1260px",
          display: "flex",
          padding: "64px 40px",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(45deg, #BD8668 0%, #745FA2 50%, #3236C9 100%)",
          borderRadius: "28px",
          margin: "0 auto",
        }}
      >
        {/* INNER FLEX ROW */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT SECTION */}
          <div style={{ width: "50%" }}>
            <h2
              style={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "40px",
                letterSpacing: "-0.64px",
              }}
            >
              ActivPaisa – Transparent Borrowing,
              <br />
              <span
                style={{
                  color: "var(--ui-color-on-surface-on-gradient-3, #D0C6F6)",
                }}
              >
                Done Right
              </span>
            </h2>

            <p
              style={{
                marginTop: "8px",
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                width: "637px",
                opacity: 0.9,
              }}
            >
              Empowering you to borrow confidently with expert guidance,
              intelligent technology, and complete transparency at every step.
            </p>

            {/* UPDATED BUTTON (Your Design System Styles Applied) */}
            <button
              style={{
                display: "flex",
                height: "44px",
                padding: "10px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",

                borderRadius: "8px",
                border: "1px solid var(--UI-Color-Border-neutral-10, #E5E7EB)",
                background:
                  "var(--UI-Color-Surface-Container-Neutral-neutral-00, #FFF)",

                boxShadow:
                  "0 1px 2px 0 rgba(17, 24, 39, 0.04), 0 1px 2px 0 rgba(17, 24, 39, 0.04)",

                color: "var(--UI-Color-On-Surface-on-neutral-00---1, #374151)",
                textAlign: "center",

                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "18px",
                letterSpacing: "0",

                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              Check Free Offers
            </button>

            {/* STATS ROW */}
            <div
              style={{
                display: "flex",
                gap: "56px",
                marginTop: "40px",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "white",
                    fontSize: "22px",
                    marginBottom: "4px",
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  ₹500 Cr+
                </h3>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  Loans Disbursed
                </p>
              </div>

              <div>
                <h3
                  style={{
                    color: "white",
                    fontSize: "22px",
                    marginBottom: "4px",
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  50K+
                </h3>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  Happy Customers
                </p>
              </div>

              <div>
                <h3
                  style={{
                    color: "white",
                    fontSize: "22px",
                    marginBottom: "4px",
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  4.8/5
                </h3>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="/Images/aboutUs.png"
              alt="About ActivPaisa"
              style={{
                width: "426px",
                height: "324px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div style={{ marginTop: "24px", marginBottom: "72px" }}>
        <BottomSubHeading />
      </div>
    </div>
  );
};

export default AboutUs;
