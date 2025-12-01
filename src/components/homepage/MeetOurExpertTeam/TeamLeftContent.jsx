import TeamCheckItem from "./TeamCheckItem";

const teamPoints = [
  "Certified Financial Advisors (CFA)",
  "Former Senior Bankers",
  "Credit Risk & Policy Specialists",
];

export default function TeamLeftContent() {
  return (
    <div className="text-white space-y-6 w-[673px] ">
      {/* Title */}
      <h2
        style={{
          color: "var(--ui-color-on-surface-on-gradient---1, #FFF)",
          fontFamily: "var(--typogrraphy-Heading-H3-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-Heading-H3-large-size, 32) * 1px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight:
            "calc(var(--typogrraphy-Heading-H3-large-line-height, 40) * 1px)",
          letterSpacing:
            "var(--typogrraphy-Heading-H3-large-letter-spacing, -0.64px)",
        }}
      >
        Meet Our Expert Team
      </h2>
      {/* Description */}
      <p
        style={{
          color: "var(--ui-color-on-surface-on-gradient---1, #FFF)",
          fontFamily: "var(--typogrraphy-Paragraph-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-Paragraph-para-2-size, 16) * 1px)",
          fontStyle: "normal",
          fontWeight: 400,
          letterSpacing: "var(--typogrraphy-Paragraph-letter-spacing, 0)",
          textAlign: "start", // or "center" if you want
        }}
      >
        Our team includes certified financial advisors, ex-bankers, and risk
        specialists with decades of lending experience
      </p>
      {/* Bullet Points */}
      <div className="space-y-3">
        {teamPoints.map((point, i) => (
          <TeamCheckItem key={i} text={point} />
        ))}
      </div>
      {/* Button */}
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          padding: "var(--Spacing-sp-10, 10px) var(--Spacing-sp-16, 16px)",
          borderRadius: "var(--Corner-Radius-2xsmall, 8px)",
          border:
            "var(--Border-Width-width-1, 1px) solid var(--UI-Color-Border-neutral-10, #E5E7EB)",
          background:
            "var(--ui-Color-Surface-Container-Neutral-neutral-00, #FFF)",
          boxShadow:
            "0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04))",
          color: "var(--UI-Color-On-Surface-on-neutral-00---1, #374151)",
          textAlign: "center",
          fontFamily: "var(--Typogrraphy-Label-inter-font-family, Inter)",
          fontSize: "calc(var(--Typogrraphy-Label-L-2-size, 14) * 1px)",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight:
            "calc(var(--typogrraphy-Label-L-2-line-height, 16) * 1px)",
          letterSpacing: "var(--typogrraphy-Label-letter-spacing, 0)",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = 0.9)}
        onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
      >
        Schedule a Free Consultation
      </button>
    </div>
  );
}
