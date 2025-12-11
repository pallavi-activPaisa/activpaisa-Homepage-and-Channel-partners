import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";
import Image from "next/image";

const BecomeAdvisor = () => {
  const cardData = [
    {
      id: 1,
      title: "Existing DSA & Agents",
      description:
        "Expand your lender access and offer a wider range of products",
      // icon: "/Icons/blue-dot.svg",
    },

    {
      id: 2,
      title: "Finance Experts",
      description:
        "Use your network and industry expertise to earn additional income",
      // icon: "/Icons/blue-dot.svg",
    },

    {
      id: 3,
      title: "Business Owners",
      description:
        "Offer loan support to customers and add a new income stream",
      // icon: "/Icons/blue-dot.svg",
    },

    {
      id: 4,
      title: "Aspiring Advisors",
      description: "Begin your finance advisory journey with complete guidance",
      // icon: "/Icons/blue-dot.svg",
    },
  ];

  return (
    <div className="w-[1440px]   mt-[72px] flex flex-col justify-center  items-center  ">
      <Heading heading="Who Can Become Loan Advisor?" />
      <SubHeading subHeading="Anyone can earn by helping customers get loans" />

      <div className="w-[1260px] h-[362px]  mt-[24px] flex gap-[40px]">
        {/* left side */}
        <div
          className="w-[598px] h-[362px]"
          style={{
            borderRadius: "24px",
            // padding: "24px",
            background:
              "var(--ui-color-surface-brand-primary-light-10, #F2EFFC)",
          }}
        >
          <Image
            src="/Images/loan-advisor.png"
            width={598}
            height={362}
            alt="loan advisor"
          />
        </div>

        {/* right side */}
        <div
          style={{
            display: "flex",
            width: "622px",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              // icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecomeAdvisor;
