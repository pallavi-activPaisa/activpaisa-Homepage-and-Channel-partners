import Image from "next/image";
import React from "react";

const Icon = ({ icon }) => {
  return (
    //  <div className='w-full h-[48px] '>
    <div
      className="flex justify-center  align-middle"
      style={{
        alignItems: "center",
        width: "48px",
        height: "48px",
        padding: "calc(var(--spacing-sp-12)*1px)",
        borderRadius: "6px",
        background:
          "var(--ui-color-surface-container-brand-primary-00, #f2effc)",
      }}
    >
      {/* <div
        className=" flex justify-center items-center"
        style={{
          width: "24px",
          height: "24px",
        }}
      > */}
      {/* <div
          style={{
            width: "12.8px",
            height: "12.8px",
            borderRadius: "2.4px",
            background: "var(--ui-color-on-surface-on-primary-00---4, #d0c6f6)",
          }}
        ></div> */}
      <Image src={icon} alt="icon" width={24} height={24} />
      {/* </div> */}
    </div>
    // </div>
  );
};

export default Icon;
