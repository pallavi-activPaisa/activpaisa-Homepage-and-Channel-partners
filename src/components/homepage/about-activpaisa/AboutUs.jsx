"use client";

import React from "react";
import BottomSubHeading from "./BottomSubHeading";

export default function HeroSection() {
  return (
    <div className="w-full grid justify-center mt-10 mb-[72px]">
      {/* OUTER HERO BOX */}
      <div
        className="w-[1260px] h-[452px] px-[40px] py-[64px] gap-[40px] flex justify-between items-center"
        style={{
          borderRadius: "24px",
          background:
            "var(--Gradients-G1, linear-gradient(45deg, var(--UI-Color-Gradients-G1-100, #BD8668) 0%, var(--UI-Color-Gradients-G1-200, #5D51AF) 50%, var(--UI-Color-Gradients-G1-300, #3437C8) 100%))",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          <h2
            style={{
              color: "var(--ui-color-on-surface-on-gradient-1, #FFF)",
              fontFamily: "Inter",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "40px",
              letterSpacing: "-0.64px",
            }}
          >
            ActivPaisa – Transparent Borrowing,
            <br />
            <span
              style={{
                color: "var(--ui-Color-On-Surface-on-gradient-3, #D0C6F6)",
                fontFamily: "Inter",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "40px",
                letterSpacing: "-0.64px",
              }}
            >
              Done Right
            </span>
          </h2>

          <p className="text-white/80 mt-2 w-[650px] leading-[24px] text-[16px]">
            Empowering you to borrow confidently with expert guidance,
            intelligent technology, and complete transparency at every step.
          </p>

          {/* UPDATED TOKEN-BASED BUTTON */}
          <button
            className="mt-10"
            style={{
              width: "171px",
              height: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
              textAlign: "center",
              background:
                "var(--ui-color-surface-container-neutral-neutral-00, #FFF)",
              borderRadius: "var(--corner-radius-2xsmall, 8px)",
              border:
                "var(--border-width-width-1, 1px) solid var(--ui-color-border-neutral-10, #E5E7EB)",
              boxShadow:
                "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "var(--typogrraphy-label-L-1-size, 16px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "var(--typogrraphy-Label-l-1-line-height, 18px)",
              letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
            }}
          >
            Check Free Offers
          </button>

          {/* STATS */}
          <div className="flex gap-[56px] mt-[40px]">
            <div className="w-[183px] gap-[8px] ">
              <h3
                style={{
                  color: "var(--ui-color-on-surface-on-gradient-1, #FFF)",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px",
                  letterSpacing: "-0.48px",
                }}
              >
                ₹500 Cr+
              </h3>

              <p
                style={{
                  width: "183px",
                  color: "var(--UI-Color-On-Surface-on-gradient---1, #FFF)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  marginTop: "8px",
                }}
              >
                Loans Disbursed
              </p>
            </div>

            <div className="w-[183px] gap-[8px] ">
              <h3
                style={{
                  color: "var(--UI-Color-On-Surface-on-gradient---1, #FFF)",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px",
                  letterSpacing: "-0.48px",
                }}
              >
                50K+
              </h3>

              <p
                style={{
                  width: "183px",
                  color: "var(--UI-Color-On-Surface-on-gradient---1, #FFF)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  marginTop: "8px",
                }}
              >
                Happy Customers
              </p>
            </div>

            <div className="w-[183px] gap-[8px]">
              <h3
                style={{
                  color: "var(--UI-Color-On-Surface-on-gradient---1, #FFF)",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px",
                  letterSpacing: "-0.48px",
                }}
              >
                4.8/5
              </h3>

              <p
                style={{
                  width: "183px",
                  color: "var(--UI-Color-On-Surface-on-gradient---1, #FFF)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  marginTop: "8px",
                }}
              >
                Customer Rating
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div
          className="w-[507px]  h-[501px] relative rounded-[40px] flex justify-center items-center"
          aria-hidden="true"
        >
          <img
            src="/Images/about-hero.png"
            alt="About ActivPaisa"
            style={{
              position: "absolute",
              right: "20px",
              bottom: "40px",
              width: "537px",
              height: "515px",
              objectFit: "cover",
              transform: "rotate(-3deg)",
              filter: "drop-shadow(0px 12px 55px rgba(0,0,0,0.35))",
            }}
            className="select-none pointer-events-none"
          />
        </div>
      </div>
      <BottomSubHeading />
    </div>
  );
}
