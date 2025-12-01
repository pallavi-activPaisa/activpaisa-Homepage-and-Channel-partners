"use client";

import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center mt-10 mb-[72px]">
      {/* OUTER HERO BOX */}
      <div
        className="w-[1260px] h-[452px] rounded-[32px] px-[40px] py-[64px] flex justify-between items-center"
        style={{
          borderRadius: "24px",
          background:
            "linear-gradient(45deg, #BD8668 0%, #745FA2 50%, #3236C9 100%)",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          <h2 className="text-white font-inter text-[32px] font-semibold leading-[40px]">
            ActivPaisa – Transparent Borrowing,
            <br />
            <span className="text-[#D0C6F6] font-inter">Done Right</span>
          </h2>

          <p className="text-white/80 mt-3 w-[650px] leading-[24px] text-[16px]">
            Empowering you to borrow confidently with expert guidance,
            intelligent technology, and complete transparency at every step.
          </p>

          {/* UPDATED TOKEN-BASED BUTTON */}
          <button
            className="
              mt-8 
              font-inter text-[14px]
              flex justify-center items-center
            "
            style={{
              width: "171px",
              height: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
              textAlign: "center",
              background:
                "var(--UI-Color-Surface-Container-Neutral-neutral-00, #FFF)",
              borderRadius: "var(--Corner-Radius-2xsmall, 8px)",
              border:
                "var(--Border-Width-width-1, 1px) solid var(--UI-Color-Border-neutral-10, #E5E7EB)",
              boxShadow:
                "0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04))",
              fontFamily: "var(--Typogrraphy-Label-inter-font-family, Inter)",
              fontSize: "var(--Typogrraphy-Label-L-1-size, 16px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "var(--Typogrraphy-Label-L-1-line-height, 18px)",
              letterSpacing: "var(--Typogrraphy-Label-letter-spacing, 0)",
            }}
          >
            Check Free Offers
          </button>

          {/* STATS */}
          <div className="flex gap-[56px] mt-[40px]">
            <div>
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
                ₹500 Cr+
              </h3>

              <p
                style={{
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

            <div>
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

            <div>
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
          className="w-[507px] h-[501px] relative rounded-[40px] flex justify-center items-center"
          aria-hidden="true"
        >
          <img
            src="/Images/about-hero.png"
            alt="About ActivPaisa"
            style={{
              position: "absolute",
              right: "20px",
              bottom: "51px",
              width: "507px",
              height: "501px",
              objectFit: "cover",
              transform: "rotate(-3deg)",
              filter: "drop-shadow(0px 12px 55px rgba(0,0,0,0.35))",
            }}
            className="select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
