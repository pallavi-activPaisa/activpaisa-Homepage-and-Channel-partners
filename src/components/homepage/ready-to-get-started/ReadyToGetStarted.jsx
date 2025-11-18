import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Button from "@/components/ui/button/Button";

const ReadyToGetStarted = () => {
  return (
    <div
      className="w-full h-[230px] mt-[72px] flex flex-col items-start"
      style={{
        padding: "49px 239px",
        borderRadius: "calc(var(--corner-radius-large) * 1px)",
        background:
          "var(--ui-color-surface-container-brand-primary-00, #f2effc)",
      }}
    >
      <div className=" w-full  flex flex-col items-center gap-[8px]">
        <Heading heading="Ready to Get Started?" />
        <SubHeading subHeading="Join thousands of satisfied customers who have successfully secured their loans through ActivPaisa" />
      </div>

      <div className="mt-[32px] flex justify-center w-full">
        <Button label="Check Free Offers" size="small" />
      </div>
    </div>
  );
};

export default ReadyToGetStarted;
