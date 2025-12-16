import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

const SupportThat = () => {
  const buttonData = [
    {
      id: 1,
      label: "Quick Chat Assistance",
    },

    {
      id: 2,
      label: "On-Demand Training Videos",
    },

    {
      id: 3,
      label: "Dedicated Account Manager",
    },

    {
      id: 4,
      label: "Business Growth Support",
    },
  ];
  return (
    <div className="w-[1440px] mt-[72px] flex flex-col justify-center items-center ">
      <div
        className="w-[1260px] h-[290px] flex flex-col justify-center items-center gap-[40px] "
        style={{
          padding: "64px 40px",
          borderRadius: "24px",
          background:
            "var(--gradients-g1, linear-gradient(45deg, var(--ui-color-gradients-g1-100, #BD8668) 0%, var(--ui-color-gradients-g1-200, #5D51AF) 50%, var(--ui-color-gradients-g1-300, #3437C8) 100%))",
        }}
      >
        <div>
          <h3
            className="w-full h-[40px] "
            style={{
              color:
                "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #FFF)",
              textAlign: "center",
              fontFamily:
                "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-heading-h3-large-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight:
                "calc(var(--typogrraphy-heading-h3-large-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-heading-h3-large-letter-spacing) * 1px)",
            }}
          >
            Support That Helps You Succeed
          </h3>

          <p
            className="w-full h-[24px] mt-[8px]"
            style={{
              color:
                "var(--ui-color-on-surface-specials-on-gradient-g1-n10, #FFF)",
              textAlign: "center",
              fontFamily:
                "var(--typogrraphy-paragraph-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight:
                "calc(var(--typogrraphy-paragraph-para-2-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-paragraph-letter-spacing) * 1px)",
            }}
          >
            Grow confidently and overcome challenges easily
          </p>
        </div>

        {/* button section*/}
        <div className="w-full flex justify-center items-center gap-[20px]">
          {buttonData.map((button) => (
            <Buttons key={button.id} label={button.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportThat;
