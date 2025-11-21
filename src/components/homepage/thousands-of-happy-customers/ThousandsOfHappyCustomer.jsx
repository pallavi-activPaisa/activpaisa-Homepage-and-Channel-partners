import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Button from "@/components/ui/button/Button";
import Image from "next/image";

const ThousandsOfHappyCustomers = () => {
  return (
    <div className="w-full mt-[40px]  flex  px-[90px]">
      <div
        className="w-[1260px]  gap-[40px]  flex flex-col items-start"
        style={{
          padding: "24px 71px",
          borderRadius: "calc(var(--corner-radius-large) * 1px)",
          border:
            "calc(var(--border-width-width-1) * 1px) solid var(--ui-color-border-neutral-10, #e5e7eb)",
          background:
            "var(--ui-color-surface-container-neutral-neutral-00, #fff)",
        }}
      >
        <div className="w-full  flex flex-col items-center gap-[8px]">
          <Heading heading="Join Thousands of Happy Customers" />
          <SubHeading subHeading="Experience the ActivPaisa difference and see why our customers consistency rate us 4.8/5 stars" />
        </div>

        {/* test */}
        <div className="w-full  flex justify-center items-center ">
          <div
            className="flex justify-center items-center gap-[16px] "
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid var(--ui-color-border-neutral-10, #e5e7eb)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "205px",
                height: "20px",
                color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                textAlign: "center",
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight:
                  "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
              }}
            >
              <Image
                className="mb-[3px]"
                src="/Icons/star100.svg"
                alt="Partner Banks"
                width={24}
                height={24}
              />

              <span
                style={{
                  marginLeft: "8px",
                  color:
                    "var(--ui-color-on-surface-on-neutral-00---8, #f59e0b)",
                  textAlign: "center",
                  fontFamily:
                    "var(--typogrraphy-label-inter-font-family, Inter)",
                  fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight:
                    "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                }}
              >
                4.8/5
              </span>

              {/* second span */}
              <span
                style={{
                  marginLeft: "4px",
                  color:
                    "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
                  fontFamily:
                    "var(--typogrraphy-label-inter-font-family, Inter)",
                  fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight:
                    "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                }}
              >
                {" "}
                Google Reviews
              </span>
            </div>

            {/* line */}
            <div
              style={{
                background: "var(--ui-color-border-neutral-10, #e5e7eb)",
                width: "1px",
                height: "20px",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "205px",
                height: "20px",
                color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                textAlign: "center",
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight:
                  "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
              }}
            >
              <Image
                className="mb-[3px]"
                src="/Icons/star100.svg"
                alt="Partner Banks"
                width={24}
                height={24}
              />

              {/* first span */}
              <span
                style={{
                  marginLeft: "8px",
                  color:
                    "var(--ui-color-on-surface-on-neutral-00---8, #f59e0b)",
                  textAlign: "center",
                  fontFamily:
                    "var(--typogrraphy-label-inter-font-family, Inter)",
                  fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight:
                    "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                }}
              >
                4.9/5
              </span>

              {/* second span */}
              <span
                style={{
                  marginLeft: "4px",
                  color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                  fontFamily:
                    "var(--typogrraphy-label-inter-font-family, inter)",
                  fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight:
                    "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                }}
              >
                {" "}
                App Store
              </span>
            </div>

            <div
              style={{
                background: "var(--ui-color-border-neutral-10, #e5e7eb)",
                width: "1px",
                height: "20px",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "205px",
                height: "20px",
                color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                textAlign: "center",
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight:
                  "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
              }}
            >
              <Image
                className="mb-[3px]"
                src="/Icons/star100.svg"
                alt="TrustPilot"
                width={24}
                height={24}
              />

              {/* first span */}
              <span
                style={{
                  marginLeft: "8px",
                  color:
                    "var(--ui-color-on-surface-on-neutral-00---8, #f59e0b)",
                  textAlign: "center",
                  fontFamily:
                    "var(--typogrraphy-label-inter-font-family, Inter)",
                  fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight:
                    "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                }}
              >
                4.7/5
              </span>

              {/* second span */}
              <span
                style={{
                  marginLeft: "4px",
                  color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                  fontFamily:
                    "var(--typogrraphy-label-inter-font-family, inter)",
                  fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight:
                    "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                }}
              >
                {" "}
                TrustPilot
              </span>
            </div>
          </div>
        </div>

        <div className=" flex justify-center w-full">
          <Button label="Check Free Offers" size="small" />
        </div>
      </div>
    </div>
  );
};

export default ThousandsOfHappyCustomers;
