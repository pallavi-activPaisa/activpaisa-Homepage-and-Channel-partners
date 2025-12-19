import React from "react";
import "../app/build/css/tokens.css";
const SignupPAN = () => {
  return (
    <div className="w-[400px] h-[448px] ">
      <div>
        <h3
          className="w-full h-[40px]"
          style={{
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
            textAlign: "center",

            fontFamily:
              "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-heading-h3-large-size)*1px)",
            fontStyle: "normal",
            fontWeight: "600",
            //   lineHeight: "var(--typogrraphy-heading-h3-large-line-height, 40px)",
            letterSpacing:
              "var(--typogrraphy-heading-h3-large-letter-spacing, -0.64px)",
          }}
        >
          Finish your sign‑up
        </h3>
        <p
          className="w-full h-[24px] mt-[8px]"
          style={{
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
            textAlign: "center",

            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-paragraph-para-2-size)*1px)",
            fontStyle: "normal",
            fontWeight: "400",
            //   lineHeight: "var(--typogrraphy-paragraph-para-2-line-height, 24px)",
            letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
          }}
        >
          Tell us a few details to get started
        </p>
      </div>

      <div className="mt-[24px]">
        <h4
          className="w-full h-[16px]"
          style={{
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",

            fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
            fontStyle: "normal",
            fontWeight: "500",
            // lineHeight: "var(--typogrraphy-label-l-2-line-height, 16px)",
            letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
          }}
        >
          Business Type
        </h4>

        {/*indivuasl and entity btn  */}
        <div className="w-[202px] h-[36px] flex gap-[8px] mt-[8px]">
          <button
            className="w-[97px] h-[36px] "
            style={{
              display: "flex",
              width: "97px",
              padding: "calc(var(--spacing-sp-10) var(--spacing-sp-16)*1px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "calc(var(--spacing-sp-6)*1px)",
              borderRadius:
                "calc(var(--corner-radius-2xsmall) * 1px) 0 0 calc(var(--corner-radius-2xsmall) * 1px)",
              border:
                "calc(var(--border-width-width-1) * 1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
              background:
                "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",

              boxShadow:
                "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
            }}
          >
            <span
              style={{
                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                textAlign: "center",

                fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "var(--typogrraphy-label-l-2-line-height, 16px)",
                letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
              }}
            >
              Individual
            </span>
          </button>

          <button
            style={{
              display: "flex",
              width: "97px",
              padding:
                "calc(var(--spacing-sp-10) * 1px) calc(var(--spacing-sp-16) * 1px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "calc(var(--spacing-sp-6)*1px)",
              borderRadius:
                "0 calc(var(--corner-radius-2xsmall) * 1px) calc(var(--corner-radius-2xsmall) * 1px) 0",
              border:
                "calc(var(--border-width-width-1) * 1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
              background:
                "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",

              boxShadow:
                "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
            }}
          >
            <span
              style={{
                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                textAlign: "center",

                fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
                fontStyle: "normal",
                fontWeight: "500",
                // lineHeight: "var(--typogrraphy-label-l-2-line-height, 16px)",
                // letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
              }}
            >
              Entity
            </span>
          </button>
        </div>

        {/* input pan */}

        <div className="mt-[24px]">
          <p
            className="w-full h-[16px]"
            style={{
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",

              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-label-l-2-size, 14px) * 1px)",
              fontStyle: "normal",
              fontWeight: "500",
              //   lineHeight: "var(--typogrraphy-label-l-2-line-height, 16px)",
              letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
            }}
          >
            PAN Number
          </p>

          <input
            style={{
              marginTop: "8px",
              outline: "none",
              display: "flex",
              width: "100%",
              height: "40px",
              padding:
                "calc(var(--spacing-sp-8, 8px) * 1px) calc(var(--spacing-sp-12, 12px) * 1px)",
              justifyContent: "space-between",
              alignItems: "center",
              flex: "1 0 0",
              alignSelf: "stretch",
              borderRadius: "calc(var(--corner-radius-2xsmall, 8px) * 1px)",

              //   text
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9CA3AF)",

              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-label-l-2-size, 14px) * 1px)",
              fontStyle: "normal",
              fontWeight: "400",
              //   lineHeight: "var(--typogrraphy-label-l-2-line-height, 16px)",
              letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
              borderRadius: "var(--corner-radius-2xsmall, 8px)",
              border:
                "var(--border-width-width-1, 1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
              background:
                "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",

              boxShadow:
                "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
            }}
            type="text"
            placeholder="Enter your PAN number"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPAN;
