"use client";
import FeaturesList from "./FeaturesList";
import StepsList from "./StepsList";

export default function ActivePaisaSolution() {
  return (
    <div className="w-full flex flex-col mt-[72px] px-[90px]">
      {/* Heading */}
      <h2
        style={{
          color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
          fontFamily: "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-heading-h3-large-size, 32) * 1px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight:
            "calc(var(--typogrraphy-heading-h3-large-line-height, 40) * 1px)",
          letterSpacing:
            "var(--typogrraphy-heading-h3-large-letter-spacing, -0.64px)",
          marginBottom: "16px",
        }}
      >
        The ActivPaisa Solution
      </h2>

      {/* Paragraph */}
      <p
        style={{
          color: "var(--ui-color-on-surface-on-neutral-00---2, #6B7280)",
          fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-paragraph-para-2-size, 16) * 1px)",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight:
            "calc(var(--typogrraphy-paragraph-para-2-line-height, 24) * 1px)",
          letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
          textAlign: "left",
          marginBottom: "24px",
        }}
      >
        We understand the challenges you face when seeking financial assistance.
        These common problems inspired us to create a better solution.
      </p>

      {/* Feature Cards */}
      <FeaturesList />
      {/* How It Works Section */}
      {/* How It Works Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "1260px",
          height: "400px",
          padding: "calc(24px) calc(71px)", // padding with calc
          borderRadius: "calc(var(--corner-radius-large,)*1px)", // border-radius with calc
          border:
            "calc(var(--border-width-width-1, )* 1px) solid var(--ui-color-border-neutral-10, #E5E7EB)",
          backgroundColor:
            "var(--ui-color-surface-container-neutral-neutral-00, #FFF)",
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            color: "var(--ui-color-on-surface-on-neutral-00---1, #4C2399)",
            fontFamily:
              "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
            fontSize:
              "calc(var(--typogrraphy-heading-h3-large-size, 28) * 1px)",
            fontWeight: 700,
            lineHeight:
              "calc(var(--typogrraphy-heading-h3-large-line-height, 36) * 1px)",
            letterSpacing:
              "var(--typogrraphy-heading-h3-large-letter-spacing, -0.64px)",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          How It Works
        </h2>

        <p
          style={{
            color: "var(--ui-color-on-surface-on-neutral-00---2, #6B7280)",
            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
            fontSize:
              "calc(var(--typogrraphy-paragraph-para-2-size, 16) * 1px)",
            fontWeight: 400,
            lineHeight:
              "calc(var(--typogrraphy-paragraph-para-2-line-height, 24) * 1px)",
            letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
            textAlign: "center",

            marginBottom: "40px",
          }}
        >
          Our streamlined 3-step process gets you from application to approval
          faster than ever before
        </p>

        <StepsList />
      </div>
    </div>
  );
}
