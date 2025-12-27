"use client";

import Image from "next/image";
import React from "react";
import MobWhoLoanAdvisor from "./MobWhoLoanAdvisor";

export default function WhoLoanAdvisor() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0px", // Removed generic padding to handle mobile/desktop separately if needed, but inner divs handle it.
        background: "#FFF",
        width: "100%",
        flexDirection: "column"
      }}
    >
      <div className="block md:hidden w-full">
        <MobWhoLoanAdvisor />
      </div>

      <div
        className="hidden md:flex"
        style={{
          width: "1260px",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          margin: "72px auto"
        }}
      >
        {/* LEFT SIDE BOX */}
        <div
          style={{
            borderRadius: "24px",
            background:
              "var(--ui-color-surface-brand-primary-light-10, #F2EFFC)",
            display: "flex",
            width: "594px",
            // padding: "24px",
            flexDirection: "column",
            height: "524px",
          }}
        >
          {/* image */}

          <Image
            src="/Images/loan-advisor2.png"
            width={594}
            height={524}
            alt="loan advisor2"
          />
        </div>
        {/* RIGHT SIDE CONTENT */}
        <div
          style={{
            width: "627px",
            height: "524px",
            // backgroundColor: "red",
            padding: "24px",
            borderRadius: "24px",
            border:
              "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
            background:
              "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",

            boxShadow:
              "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "594px",
              //   height: "476px",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* TITLE + SUBHEADING (8px gap) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              {/* MAIN TITLE */}
              <span
                style={{
                  color:
                    "var(--ui-color-on-surface-neutral-light-10-n40, #374151)",
                  fontFamily:
                    "var(--typography-heading-h3-inter-font-family, Inter)",
                  fontSize: "var(--typography-heading-h3-small-size, 28px)",
                  fontWeight: 600,
                  lineHeight:
                    "var(--typography-heading-h3-small-line-height, 36px)",
                  letterSpacing:
                    "var(--typography-heading-h3-small-letter-spacing, -0.56px)",
                  margin: 0,
                }}
              >
                Who are Loan Advisors?
              </span>

              {/* SUBHEADING */}
              <p
                style={{
                  color:
                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                  fontFamily:
                    "var(--typography-paragraph-inter-font-family, Inter)",
                  fontSize: "var(--typography-paragraph-para-2-size, 16px)",
                  fontWeight: 400,
                  lineHeight:
                    "var(--typography-paragraph-para-2-line-height, 24px)",
                  letterSpacing:
                    "var(--typography-paragraph-letter-spacing, 0)",
                  margin: 0,
                }}
              >
                They help customers choose and apply for loans
              </p>
            </div>

            {/* GAP — 24px */}
            {/* <div style={{ height: "24px" }}></div> */}

            {/* FIRST PARAGRAPH */}
            <p
              style={{
                fontFamily:
                  "var(--typography-paragraph-inter-font-family, Inter)",
                fontSize: "var(--typography-paragraph-para-2-size, 16px)",
                fontWeight: 400,
                lineHeight:
                  "var(--typography-paragraph-para-2-line-height, 24px)",
                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                // margin: 0,
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              Loan advisors help customers find and apply for the right loans
              from trusted lenders. They understand customer needs, recommend
              suitable loan options, and assist in completing the application
              process. When a loan gets approved and disbursed, they earn a
              commission for that effort.
            </p>

            {/* GAP — 24px */}
            {/* <div style={{ height: "24px" }}></div> */}

            {/* SECOND PARAGRAPH */}
            <p
              style={{
                fontFamily:
                  "var(--typography-paragraph-inter-font-family, Inter)",
                fontSize: "var(--typography-paragraph-para-2-size, 16px)",
                fontWeight: 400,
                lineHeight:
                  "var(--typography-paragraph-para-2-line-height, 24px)",
                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                margin: 0,
              }}
            >
              At ActivPaisa, advisors work independently, without an office,
              investment, or prior experience. They simply connect customers to
              loan options and earn on every successful disbursal.
            </p>

            {/* SMALL TOKEN PARAGRAPH */}
            <p
              style={{
                marginTop: "24px",

                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",

                /* Paragraph / Para-2 / Regular (Small Token) */
                fontFamily:
                  "var(--typography-paragraph-inter-font-family, Inter)",
                fontSize: "var(--typography-paragraph-para-2-size, 16px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight:
                  "var(--typography-paragraph-para-2-line-height, 24px)", // NOT small, correct token
                letterSpacing: "var(--typography-paragraph-letter-spacing, 0)",

                // margin:,
              }}
            >
              Loan advisors play an important role in improving access to
              finance. Many individuals struggle to compare banks, understand
              eligibility, or complete paperwork. Advisors act as a bridge,
              simplifying the process, supporting customers, and ensuring they
              receive loans that actually match their needs.
            </p>
          </div>
          {/* BUTTON */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "10px",
              alignSelf: "stretch",
              width: "575px",
              height: "44px",
            }}
          >
            <button
              style={{
                marginTop: "24px",
                display: "flex",
                height: "44px",
                padding: "10px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "8px",
                border:
                  "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                background: "#FFF",
                boxShadow:
                  "0 1px 2px rgba(17, 24, 39, 0.04), 0 1px 2px rgba(17, 24, 39, 0.04)",
                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                fontFamily: "var(--typography-label-inter-font-family, Inter)",
                // fontSize: "16px",
                fontSize: "var(--typogrraphy-label-l-1-size, 16px)",

                fontWeight: 500,
                lineHeight: "18px",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
