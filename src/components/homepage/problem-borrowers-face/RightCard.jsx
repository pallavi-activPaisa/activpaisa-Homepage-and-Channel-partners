import Image from "next/image";
import React from "react";

const RightCard = () => {
  return (
    <div
      className="w-[600px] h-[276px]  flex gap-[32px] items-center justify-center "
      style={{
        padding: "48px 24px",
        borderRadius: "calc(var(--corner-radius-large, 24px)*1px)",
        background:
          "var(--ui-color-surface-container-brand-primary-00, #f2effc)",
      }}
    >
      <div className="w-full h-fit flex justify-center items-center ">
        <Image
          src="/Images/laptopInDesk.png"
          alt="Description"
          width={237}
          height={182}
        />
      </div>

      <div className="h-[182px]  flex flex-col justify-center items-center ">
        {/* title */}
        <div
          className="w-[283px] h-[64px] flex justify-center items-center "
          style={{
            color: "var(--ui-color-on-surface-on-primary-00---2, #4c2399)",
            textAlign: "center",
            fontFamily: "var(--typography-heading-h5-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
            fontStyle: "normal",
            fontWeight: 600,
            //  lineHeight: "calc(var(--typography-heading-h5-large-line-height) * 1px)",
            letterSpacing:
              "calc(var(--typography-heading-h5-large-letter-spacing) * 1px)",
          }}
        >
          There’s a Smarter <br /> Way Forward
        </div>

        {/* description */}
        <div
          className="w-[283px] h-[72px] mt-[8px] flex justify-center items-center  text-center"
          style={{
            color: "var(--ui-color-on-surface-on-primary-00---3, #6b7280)",
            textAlign: "center",
            fontFamily: "var(--typography-paragraph-inter-font-family, Inter)",
            fontSize: "calc(var(--typography-paragraph-para-2-size) * 1px)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight:
              "calc(var(--typography-paragraph-para-2-line-height) * 1px)",
            letterSpacing:
              "calc(var(--typography-paragraph-letter-spacing) * 1px)",
          }}
        >
          ActivPaisa helps you borrow <br /> without the delays, confusion,{" "}
          <br /> or hidden surprises.
        </div>
      </div>
    </div>
  );
};

export default RightCard;
