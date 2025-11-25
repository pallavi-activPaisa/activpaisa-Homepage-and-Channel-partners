import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const AboutActivpaisa = () => {
  return (
    <div
      className="w-full  flex flex-col px-[90px]"
      style={{
        marginTop: "72px",
      }}
    >
      <Heading heading="About ActivPaisa" />
      <SubHeading subHeading="We’ve revolutionized the lending experience with technology, transparency, and trust at the core of everything we do" />
      <Card />
    </div>
  );
};

export default AboutActivpaisa;
