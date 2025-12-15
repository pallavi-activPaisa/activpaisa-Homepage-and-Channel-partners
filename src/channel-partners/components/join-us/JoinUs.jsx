import Icon from "@/components/ui/Icons/Icon";
import React from "react";
import SmallCard from "./SmallCard";
import StepCard from "./StepCard";

const JoinUs = () => {
  const smallCardData = [
    {
      id: 1,
      icon: "/Icons/Business-Deal-Handshake.svg",
      title: "10,000+",
      subTitle: "Active Partners",
    },
    {
      id: 2,
      icon: "/Icons/Cash-Payment-Coin-Stash.svg",
      title: "₹500+ Cr",
      subTitle: "Loans Facilitated",
    },

    {
      id: 3,
      icon: "/Icons/Multiple-Woman-2.svg",
      title: "100+",
      subTitle: "Lender Partners",
    },
  ];

  const stepCardData = [
    {
      id: 1,
      stepNumber: 1,
      title: "No Investment Required",
      description:
        "Start your business immediately - no upfront cost, no setup fee",
    },

    {
      id: 2,
      stepNumber: 2,
      title: "Flexible Working Hours",
      description:
        "Work from anywhere, anytime – perfect for part-time or full-time earning ",
    },

    {
      id: 3,
      stepNumber: 3,
      title: "Unlimited Earning Potential",
      description:
        "Top performers earn ₹1,00,000+ monthly with performance bonuses",
    },
  ];
  return (
    <div className="w-[1440px] mt-[72px] flex justify-center items-center ">
      <div
        className="w-[1260px] gap-[40px]  flex flex-col justify-center items-center"
        style={{
          padding: "48px 64px",
          borderRadius: "24px",
          border:
            "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
          background: "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",

          boxShadow:
            "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
        }}
      >
        {/* title */}
        <div className="w-[718px] flex flex-col justify-center items-center">
          {/* heading */}
          <div className="w-full h-[80px] ">
            <h3
              style={{
                color:
                  "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-p40, #4C2399)",
                textAlign: "center",
                fontFamily:
                  "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
                fontSize:
                  "calc(var(--typogrraphy-heading-h3-large-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight:
                  "calc(var(--typogrraphy-heading-h3-large-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-heading-h3-large-letter-spacing) * 1px)",
              }}
            >
              Join Us, We're
              <br />
              <span
                style={{
                  color:
                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-sw40, #f59e0b)",
                  fontFamily:
                    "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
                  fontSize:
                    "calc(var(--typogrraphy-heading-h3-large-size) * 1px)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight:
                    "calc(var(--typogrraphy-heading-h3-large-line-height) * 1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-heading-h3-large-letter-spacing) * 1px)",
                }}
              >
                {" "}
                Growing Fast!
              </span>
            </h3>
          </div>

          {/* sub-heading */}
          <p
            className="w-full h-[24px] mt-[8px]"
            style={{
              color:
                "var(--UI-Color-On-Surface-neutral-light-10-on-neutral-light-10-N30, #6B7280)",
              textAlign: "center",
              fontFamily:
                "var(--Typogrraphy-Paragraph-inter-font-family, Inter)",
              fontSize: "var(--Typogrraphy-Paragraph-para-2-size, 16px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight:
                "var(--Typogrraphy-Paragraph-para-2-line-height, 24px)",
              letterSpacing: "var(--Typogrraphy-Paragraph-letter-spacing, 0)",
            }}
          >
            Be part of India’s growing loan advisory network used by thousands
          </p>
        </div>

        {/* small cards */}
        <div className="flex justify-center gap-[40px]">
          {smallCardData.map((card) => (
            <SmallCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              subTitle={card.subTitle}
            />
          ))}
        </div>

        {/* gradiant box */}
        <div
          className="w-full h-[284px] flex flex-col justify-center items-center gap-[40px] "
          style={{
            padding: "64px 40px",
            borderRadius: "24px",
            background:
              "var(--gradients-g1, linear-gradient(45deg, var(--ui-color-gradients-g1-100, #BD8668) 0%, var(--ui-color-gradients-g1-200, #5D51AF) 50%, var(--ui-color-gradients-g1-300, #3437C8) 100%))",
          }}
        >
          <div>
            <h3
              className="w-full h-[40px] "
              style={{
                color:
                  "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #FFF)",
                textAlign: "center",
                fontFamily:
                  "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
                fontSize:
                  "calc(var(--typogrraphy-heading-h3-large-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight:
                  "calc(var(--typogrraphy-heading-h3-large-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-heading-h3-large-letter-spacing) * 1px)",
              }}
            >
              Start Your Own Business
            </h3>

            <p
              className="w-full h-[24px] mt-[8px]"
              style={{
                color:
                  "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #FFF)",
                textAlign: "center",
                fontFamily:
                  "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                fontSize:
                  "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight:
                  "calc(var(--typogrraphy-paragraph-para-2-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-paragraph-letter-spacing) * 1px)",
              }}
            >
              Join thousands of partners across India growing their advisory
              business
            </p>
          </div>

          {/* button */}

          <button
            style={{
              width: "171px",
              height: "44px",
              borderRadius: "8px", //token not working for radius that's why direct value
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
              textAlign: "center",
              background:
                "var(--ui-color-surface-container-neutral-neutral-00, #FFF)",
              // borderRadius: "calc(var(--corner-radius-2xsmall) * 1px)",
              border:
                "var(--border-width-width-1, 1px) solid var(--ui-color-border-neutral-10, #E5E7EB)",
              boxShadow:
                "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-label-L-1-size)*1px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "var(--typogrraphy-Label-l-1-line-height, 18px)",
              letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
            }}
          >
            Join as a Partner
          </button>
        </div>

        {/* step card parent container */}
        <div className="flex justify-start items-start gap-[64px]">
          {stepCardData.map((step) => (
            <StepCard
              key={step.id}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
