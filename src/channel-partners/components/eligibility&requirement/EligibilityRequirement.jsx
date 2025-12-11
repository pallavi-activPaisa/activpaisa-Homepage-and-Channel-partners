import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const EligibilityRequirement = () => {
  const cardData = [
    {
      id: 1,
      icon: "/Icons/blue-tick.svg",
      iconTitle: "Individuals",
      title: ["Documents", "Eligibility Criteria"],
      list1: [
        "PAN card",
        "Aadhaar card",
        "Active bank account details",
        "Recent photo",
      ],
      list2: [
        "Must be 18+",
        "Resident of India",
        "Fast and reliable internet access",
        "Basic financial understanding",
      ],
      styleIconTitle: {
        color:
          "var(--ui-color-on-surface-info-light-10-on-info-light-10-inf50, #004474)",
        textAlign: "center",

        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
        fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
        fontStyle: "normal",
        fontWeight: "600",
        // lineHeight: "var(--typogrraphy-label-l-2-line-height, 16px)",
        letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
      },

      styleBox: {
        borderRadius: "8px",
        background: "var(--ui-color-surface-infomation-info-light-10, #E5F5FF)",
      },
    },

    {
      id: 2,
      icon: "/Icons/green-tick.svg",
      iconTitle: "Registered Entity",
      title: ["Documents", "Eligibility Criteria"],
      list1: [
        "KYC of authorized signatory",
        "Business PAN",
        "GST (if applicable)",
        "Business address proof",
        "Business bank account details",
      ],
      list2: [
        "Legally registered business in India",
        "Authorized signatory 18+",
        "Valid office address & contact",
        "Active business bank account",
      ],

      styleIconTitle: {
        color: "var(--ui-color-on-surface-on-success-00---1, #15803D)",
        textAlign: "center",

        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
        fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
        fontStyle: "normal",
        fontWeight: "600",
        // lineHeight: "var(--typogrraphy-label-l-2-line-height, 16px)",
        letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
      },

      styleBox: {
        borderRadius: "8px",
        background: "var(--ui-color-surface-success-success-00, #F0FDF4)",
      },
    },
  ];
  return (
    <div className="w-[1440px]   mt-[72px] flex flex-col justify-center  items-center ">
      <Heading heading="Eligibility & Requirements" />
      <SubHeading subHeading="Simple criteria to get started" />

      {/* CARDS SECTION */}
      <div className="w-[1260px] flex gap-[20px] mt-[24px]">
        {/* card  */}
        {cardData.map((card) => (
          <div key={card.id} className="bg-white  ">
            <Card
              icon={card.icon}
              iconTitle={card.iconTitle}
              title={card.title}
              list1={card.list1}
              list2={card.list2}
              styleBox={card.styleBox}
              styleIconTitle={card.styleIconTitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EligibilityRequirement;
