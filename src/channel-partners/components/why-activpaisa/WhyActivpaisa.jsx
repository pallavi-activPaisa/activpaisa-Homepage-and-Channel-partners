import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const WhyActivpaisa = () => {
  const cardData = [
    {
      id: 1,
      title: "High Commissions ",
      description:
        "Earn competitive payouts on every disbursal. No limits, no hidden cuts",
      icon: "/Icons/High-Commissions.svg",
    },

    {
      id: 2,
      title: "Flexible Work Hours",
      description:
        "Operate full-time or part-time - your business, your schedule",
      icon: "/Icons/Baggage-Weight.svg",
    },

    {
      id: 3,
      title: "Wide Loan Portfolio",
      description:
        "Offer personal loans, business loans, home loans, LAP, and credit cards",
      icon: "/Icons/Tool-Box.svg",
    },

    {
      id: 4,
      title: "Fast Digital Process",
      description: "Fast applications, minimal paperwork, smooth approvals",
      icon: "/Icons/Icon.svg",
      width: 48,
      height: 11,
    },

    {
      id: 5,
      title: "Fast Digital Process",
      description:
        "We help you close deals, resolve issues, and grow your loan advisory business",
      icon: "/Icons/streamline-sharp.svg",
    },

    {
      id: 6,
      title: "Fast Digital Process",
      description:
        "Get practical training, sales guidance, and product knowledge",
      icon: "/Icons/Single-Man.svg",
    },
  ];
  return (
    <div className="w-[1440px] mt-[72px] flex flex-col justify-center  pl-[90px]  ">
      <Heading heading="Join ActivPaisa Partner Program" />
      <SubHeading subHeading="Get everything you need to start and grow your loan advisory business" />

      {/* cards section */}
      {cardData && (
        <div className="w-full   mt-[24px] flex flex-wrap gap-[20px]  justify-start ">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              width={card.width}
              height={card.height}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WhyActivpaisa;
