"use client";
import FeaturesList from "./FeaturesList";
import StepsList from "./StepsList";

export default function ActivePaisaSolution() {
  return (
    <div className="w-full flex flex-col mt-[72px] px-[90px]">
      <h2
        style={{
          color: "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
          fontFamily: "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-heading-h3-large-size) * 1px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight:
            "calc(var(--typogrraphy-heading-h3-large-line-height, 40) * 1px)",
          letterSpacing:
            "var(--typogrraphy-heading-h3-large-letter-spacing, -0.64px)",
          marginBottom: "8px",
        }}
      >
        How ActivPaisa Makes Borrowing Easier
      </h2>
      <p
        style={{
          color: "var(--ui-color-on-surface-on-neutral-00-2, #6B7280)",
          fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight:
            "calc(var(--typogrraphy-paragraph-para-2-line-height, 24) * 1px)",
          letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
          textAlign: "left",
          marginBottom: "24px",
        }}
      >
        We designed a borrowing experience that removes friction, saves time,
        and improves your chances of getting the right loan
      </p>

      <FeaturesList />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "1260px",
          height: "400px",
          padding: "calc(24px) calc(71px)",
          borderRadius: "calc(var(--corner-radius-large,)*1px)",
          border:
            "calc(var(--border-width-width-1, )* 1px) solid var(--ui-color-border-neutral-10, #E5E7EB)",
          backgroundColor:
            "var(--ui-color-surface-container-neutral-neutral-00, #FFF)",
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            color: "var(--ui-color-on-surface-on-neutral-00-3, #4c2399)",
            textAlign: "center",
            fontFamily:
              "var(--typogrraphy-heading-h5-inter-font-family, Inter)",
            fontSize:
              "calc(var(--typogrraphy-heading-h5-large-size, 24) * 1px)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight:
              "calc(var(--typogrraphy-heading-h5-large-line-height, 32) * 1px)",
            letterSpacing:
              "calc(var(--typogrraphy-heading-h5-large-letter-spacing, -0.48) * 1px)",
          }}
        >
          How It Works
        </h2>
        <p
          style={{
            color: "var(--ui-color-on-surface-on-neutral-00-2, #6B7280)",
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
          From application to approval, everything is designed to be quick and
          seamless
        </p>
        <StepsList />
      </div>
    </div>
  );
}
