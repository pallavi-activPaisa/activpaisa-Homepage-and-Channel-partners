import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const WhyChooseActivpaisa = () => {
  const cardData = [
    {
      id: 1,
      title: "Quick Approval ",
      description:
        "Get loan approval in as little as 24 hours with our streamlined digital process",
      icon: "/Icons/arrow-down.svg",
    },

    {
      id: 2,
      title: "Minimal Documentation",
      description:
        "Simple paperwork and digital documentation process for faster processing",
      icon: "/Icons/arrow-down.svg",
    },

    {
      id: 3,
      title: "Competitive Rates",
      description:
        "Access the best interest rates from our network of trusted lending partners",
      icon: "/Icons/arrow-down.svg",
    },

    {
      id: 4,
      title: "100% Transparent",
      description:
        "No hidden fees, clear terms, and complete transparency throughout the process",
      icon: "/Icons/arrow-down.svg",
    },
  ];
  return (
    <div
      className="w-full  flex flex-col justify-center pl-[90px]  "
      style={{
        marginBottom: "72px",
      }}
    >
      <Heading heading="Why Choose Activpaisa" />
      <SubHeading subHeading="We’ve revolutionized the lending experience with technology, transparency, and trust at the core of everything we do" />

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
