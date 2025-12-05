import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const WhyChooseActivpaisa = () => {
  const cardData = [
    {
      id: 1,
      title: "Fast Approvals",
      description: "Get loan decisions quickly with our smooth digital process",
      icon: "/Icons/Workflow-Task-Management.svg",
    },

    {
      id: 2,
      title: "Minimal Documentation",
      description: "Minimal paperwork with guided support and automated checks",
      icon: "/Icons/Insurance-Document-Clipboard.svg",
    },

    {
      id: 3,
      title: "Smart Loan Offers",
      description:
        "Access lender offers at best interest tailored to your profile and goals",
      icon: "/Icons/Discount-Coupon.svg",
    },

    {
      id: 4,
      title: "Clear & Transparent",
      description: "No hidden fees or surprises - everything explained upfront",
      icon: "/Icons/Transparent-1.svg",
    },
  ];
  return (
    <div
      className="w-[1440px]  flex flex-col justify-center  pl-[90px]  "
      style={{
        marginBottom: "72px",
      }}
    >
      <Heading heading="Why Borrow with ActivPaisa" />
      <SubHeading subHeading="Unbiased expertise and precision-driven matching that protects your money, time, and financial future." />

      {/* cards section */}
      {cardData && (
        <div className="w-full   mt-[24px] flex flex-wrap gap-x-[20px]  justify-start ">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WhyChooseActivpaisa;
