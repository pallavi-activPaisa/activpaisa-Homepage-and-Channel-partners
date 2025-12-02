"use client";

import Image from "next/image";

export default function TeamRightBoxes() {
  return (
    <div className="w-[419px] h-[302px] mr-[57px]  mb-16 relative bottom-[34px]">
      {/* <div
        style={{
          position: "absolute",
          
          right: "0px",
          bottom: "0px",
          width: "419px",
          height: "302px",
          borderRadius: "24px",

          // ⭐ EXACT Figma background shorthand converted to React style:
          // background: url(<path-to-image>) lightgray 0px -59.972px / 100% 138.652% no-repeat;

          
          // backgroundColor: "lightgray",
          backgroundPosition: "0px -59.972px",
          backgroundSize: "100% 138.652%",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}
      <Image
        src="/Images/meetexpert.png"
        alt="expert team img"
        width={419}
        height={302}
        className=" "
      />
    </div>
  );
}
