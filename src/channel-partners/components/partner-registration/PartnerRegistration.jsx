import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import StepCard from "./StepCard";

const PartnerRegistration = () => {
  const stepCardData = [
    {
      id: 1,
      stepNumber: 1,
      title: "Enter Your Details",
      description:
        "Share your basic information to begin your registration. It only takes a minute to get started",
    },

    {
      id: 2,
      stepNumber: 2,
      title: "Complete Your KYC",
      description:
        "Submit your KYC documents for quick verification so we can activate your partner account",
    },

    {
      id: 3,
      stepNumber: 3,
      title: "You're officially a partner!",
      description:
        "Once approved, access your partner dashboard and start earning by referring customers",
    },
  ];
  return (
    <div className="w-[1440px] mt-[72px] flex flex-col justify-center items-center ">
      <Heading heading="How to Register as a Partner with ActivPaisa?" />
      <SubHeading subHeading="Start in three simple steps" />

      <div className="w-[1260px] mt-[24px] flex justify-between relative  items-center ">
        {/* line */}

        <div
          className="w-full h-[2px]  absolute z-0"
          style={{
            background:
              "var(--ui-color-surface-brand-primary-strong-10, #4C2399)",
          }}
        ></div>
        {/* step cards */}
        {stepCardData.map((item) => (
          <StepCard
            key={item.id}
            stepNumber={item.stepNumber}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerRegistration;
