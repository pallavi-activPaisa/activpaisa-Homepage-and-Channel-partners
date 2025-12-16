import React from "react";
import Image from "next/image";
const Card = ({ logo }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "7.673px 9.208px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        className=" object-cover"
        src={logo}
        width={117}
        height={42}
        alt="bank logo"
      />
    </div>
  );
};

export default Card;
