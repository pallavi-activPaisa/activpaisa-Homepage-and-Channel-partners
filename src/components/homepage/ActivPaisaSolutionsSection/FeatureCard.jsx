"use client";
import Image from "next/image";

export default function FeatureCard({ number, title, desc, highlight }) {
  return (
    <div className="bg-white rounded-[24px] border border-[#E6E6E6] p-6 shadow-sm w-[300px] flex flex-col items-center">
      {/* Number Badge */}
      {number && (
        <div
          style={{
            display: "flex",
            width: "36px",
            padding: "10px 0",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
            background:
              "var(--UI-Color-Surface-Container-Brand-primary-30, #4C2399)",
            color: "#fff",
            fontWeight: "bold",
            marginBottom: "12px",
            fontSize: "calc(var(--Typogrraphy-Label-L-2-size, 14) * 1px)",
            lineHeight:
              "calc(var(--Typogrraphy-Label-L-2-line-height, 16) * 1px)",
          }}
        >
          {number}
        </div>
      )}

      {/* Placeholder / Image Box */}
      <div
        style={{
          display: "flex",
          height: "252px",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          alignSelf: "stretch",
          borderRadius: "24px",
          opacity: 0.08,
          marginBottom: "12px",
          background: "var(--ui-color-on-surface-on-neutral-00---3, #4C2399)",
        }}
      ></div>

      {/* Title */}
      <h3
        style={{
          height: "64px",
          color: "var(--ui-color-on-surface-on-neutral-00---3, #4C2399)",
          textAlign: "center",
          fontFamily: "var(--typogrraphy-heading-h5-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-heading-h5-large-size, 24) * 1px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight:
            "calc(var(--typogrraphy-heading-h5-large-line-height, 32) * 1px)",
          letterSpacing:
            "var(--typogrraphy-heading-h5-large-letter-spacing, -0.48px)",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          marginTop: "8px",
          color: "var(--UI-Color-On-Surface-on-neutral-00---2, #6B7280)",
          textAlign: "center",
          fontFamily: "var(--Typogrraphy-Paragraph-inter-font-family, Inter)",
          fontSize: "calc(var(--Typogrraphy-Paragraph-para-3-size, 14) * 1px)",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight:
            "calc(var(--Typogrraphy-Paragraph-para-3-line-height, 20) * 1px)",
          letterSpacing: "var(--Typogrraphy-Paragraph-letter-spacing, 0)",
        }}
      >
        {desc}
      </p>

      {/* Highlight */}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "var(--ui-color-on-surface-on-neutral-00---6, #16A34A)",
          textAlign: "right",
          fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-label-L-2-size, 14) * 1px)",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight:
            "calc(var(--typogrraphy-label-L-2-line-height, 16) * 1px)",
          letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
        }}
      >
        <Image
          src="/Icons/cheveron-right-green.png"
          alt="Chevron Right"
          width={18}
          height={18}
        />
        {highlight}
      </div>
    </div>
  );
}
