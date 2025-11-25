import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const ProblemBorrowersFace = () => {
  const leftCardData = [
    {
      id: 1,
      title: "Slow Approvals",
      description: "Banks take days or weeks, leaving borrowers stuck waiting",
    },

    {
      id: 2,
      title: "Heavy Paperwork",
      description:
        "Endless documents make the process exhausting and difficult",
    },

    {
      id: 3,
      title: "Hidden Charges",
      description: "Unexpected fees and unclear terms lead to costly surprises",
    },

    {
      id: 4,
      title: "Limited Options ",
      description:
        "Borrowers rarely get access to the full range of lenders or offers",
    },
  ];
  return (
    <div className="w-full px-[90px]">
      {/*heading  */}
      <div className="w-full  mt-[72px] gap-[8px]">
        <Heading heading="Problems Borrowers Face" />
        <SubHeading subHeading="Borrowing often feels confusing, slow, and stressful. These are the issues most people run into" />
      </div>

      {/* parent box for cards */}
      <div className="w-full  mt-[24px] flex gap-[40px]">
        {/* left card */}
        <div className="w-[620px] h-fit flex flex-wrap  gap-[20px]">
          {leftCardData.map((card) => (
            <LeftCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* right image */}
        <RightCard />
      </div>
    </div>
  );
};

export default ProblemBorrowersFace;
