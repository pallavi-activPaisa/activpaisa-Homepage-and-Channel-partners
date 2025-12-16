import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const ToolsAndSupport = () => {
  const cardData = [
    {
      id: 1,
      title: "Advanced Portal",
      description:
        "Track leads, payouts, loan status, and  customer progress in real time",

      icon: "/Icons/Coding-App.svg",
    },

    {
      id: 2,
      title: "Performance Insights",
      description:
        "Monitor deal status, customer progress, and performance metrics",

      icon: "/Icons/Performance-Increase.svg",
    },

    {
      id: 3,
      title: "Marketing Toolkit",
      description:
        "Use ready-to-share digital assets to reach customers faster",

      icon: "/Icons/Customer-Relationship.svg",
    },

    {
      id: 4,
      title: "Training Resources",
      description: "Learn products, pitch styles, and onboarding workflows",

      icon: "/Icons/Google-Digital.svg",
    },

    {
      id: 5,
      title: "Priority Support",
      description:
        "Get quick assistance when deals get stuck or require escalation",

      icon: "/Icons/streamline-sharp.svg",
    },

    {
      id: 6,
      title: "Build Your Own Brand",
      description:
        "Use co-branded materials to strengthen identity and win customer trust",

      icon: "/Icons/material-symbols-.svg",
    },
  ];
  return (
    <div className="w-[1440px]   mt-[72px] flex flex-col justify-center  items-center  ">
      <Heading heading="Tools and Support Provided" />
      <SubHeading subHeading="Expert help and tools to support your business growth" />

      {/* card parent div */}
      <div className="w-[1258px] mt-[24px] flex flex-wrap gap-[20px] justify-center items-center">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsAndSupport;
