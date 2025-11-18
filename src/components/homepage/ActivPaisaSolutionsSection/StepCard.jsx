"use client";

export default function StepCard({ number, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <div
        className="rounded-full"
        style={{
          display: "flex",
          width: "36px",
          height: "36px",
          padding: "10px 0",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "24px",
          background:
            "var(--UI-Color-Surface-Container-Brand-primary-30, #4C2399)",
          color: "white",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        {number}
      </div>

      <h3
        style={{
          color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
          textAlign: "center",
          fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-heading-h6-small-size, 18) * 1px)",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight:
            "calc(var(--typogrraphy-heading-h6-small-line-height, 24) * 1px)",
          letterSpacing:
            "var(--typogrraphy-heading-h6-small-letter-spacing, -0.36px)",
          marginBottom: "8px", // optional spacing
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "var(--UI-Color-On-Surface-on-neutral-00---2, #6B7280)",
          textAlign: "center",
          fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14) * 1px)",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight:
            "calc(var(--typogrraphy-paragraph-para-3-line-height, 20) * 1px)",
          letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
