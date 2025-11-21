import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import BaseButton from "@/components/ui/BaseButton";

const StillHaveQuestion = () => {
  return (
    <div className="w-full mt-[70px] flex justify-center items-center px-[90px]">
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
          <Heading heading="Still have Questions" />
          <SubHeading subHeading="Our expert team is here to help. Get personalised answers to your specific questions about loans and services" />
        </div>

        <div className=" flex justify-center w-full">
          <Button label="Check Free Offers" size="small" />
          <BaseButton
            label="Schedule Call"
            size="small"
            className="mr-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default StillHaveQuestion;
