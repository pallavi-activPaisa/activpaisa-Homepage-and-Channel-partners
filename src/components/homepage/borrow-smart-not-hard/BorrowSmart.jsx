import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Button from "../../ui/button/Button"; // primary button
import BaseButton from "../../ui/BaseButton/BaseButton"; // secondary button

const BorrowSmart = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white pt-[40px] pb-[40px]">
      {/* Heading */}
      <Heading heading="Smarter Matches. Higher Approvals." />

      {/* Subheading */}
      <SubHeading
        subHeading="We match you with the right lenders based on your profile and needs - enabling faster approvals, better offers, and transparent guidance."
        className="text-center max-w-[720px] mt-4"
      />

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-[40px]">
        {/* Primary Button */}
        <Button label="Check Free Offers" size="large" />

        {/* Secondary Button */}
        <BaseButton label="Talk to Experts" size="large" />
      </div>
    </div>
  );
};

export default BorrowSmart;
