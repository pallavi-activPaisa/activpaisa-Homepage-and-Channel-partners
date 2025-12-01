"use client";

import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center mt-10">
      {/* OUTER HERO BOX */}
      <div
        className="w-[1260px] h-[452px] rounded-[32px] px-[40px] py-[64px] flex justify-between items-center"
        style={{
          background:
            "linear-gradient(135deg, #DDA66E 0%, #7A66AB 40%, #343CDA 100%)",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="w-[50%]">
          <h2 className="text-white font-inter text-[32px] font-semibold leading-[40px]">
            ActivPaisa – Transparent Borrowing,
            <br />
            <span className="text-[#D0C6F6] font-inter">Done Right</span>
          </h2>

          <p className="text-white/80 mt-3 w-[500px] leading-[24px] text-[16px]">
            Empowering you to borrow confidently with expert guidance,
            intelligent technology, and complete transparency at every step.
          </p>

          {/* BUTTON */}
          <button className="mt-8 bg-white text-[#374151] px-5 py-2.5 rounded-lg font-inter text-[14px] shadow-md border border-[#E5E7EB]">
            Check Free Offers
          </button>

          {/* STATS */}
          <div className="flex gap-[64px] mt-[40px]">
            <div>
              <h3 className="text-white text-[22px] font-semibold">₹500 Cr+</h3>
              <p className="text-white/90 text-[16px]">Loans Disbursed</p>
            </div>

            <div>
              <h3 className="text-white text-[22px] font-semibold">50K+</h3>
              <p className="text-white/90 text-[16px]">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-white text-[22px] font-semibold">4.8/5</h3>
              <p className="text-white/90 text-[16px]">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="w-[507px] h-[501px] flex justify-center items-center">
          <img
            src="/Images/about-hero.png"
            className="w-[507px] h-[501px] object-contain drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0px 12px 55px rgba(0, 0, 0, 0.35))",
            }}
          />
        </div>
      </div>
    </div>
  );
}
