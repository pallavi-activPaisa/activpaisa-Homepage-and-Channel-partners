import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";
const ExpertGuidance = () => {
  const guidanceData = [
    {
      id: 1,
      title: "Dedicated Relationship Manager",
      description: "Personal support from trained credit advisors",
      points: {
        point1: "One-on-one consultation",
        point2: "Ongoing guidance",
        point3: "Product recommendations",
      },
    },

    {
      id: 2,
      title: "Free Financial Consultation",
      description: "Expert advice on loans, structuring, and repayment",
      points: {
        point1: "Credit profile review",
        point2: "Loan structuring",
        point3: "Repayment planning",
      },
    },

    {
      id: 3,
      title: "Educational Resources",
      description: "Tools and guides to boost your financial knowledge",
      points: {
        point1: "Loan calculators",
        point2: "Financial guides",
        point3: "Short explainer videos",
      },
    },

    {
      id: 4,
      title: "Credit Improvement Program",
      description: "Strategies and tracking to improve your credit score",
      points: {
        point1: "Strategies and tracking to improve your credit score",
        point2: "Personalized improvement plan",
        point3: "Better loan eligibility",
      },
    },
  ];
  return (
    <div className="w-full px-[90px]">
      {/*heading  */}
      <div className="w-full  mt-[72px] gap-[8px]">
        <Heading heading="Expert Support Throughout Your Borrowing Journey" />
        <SubHeading subHeading="Beyond lender matching, our experts help you make smarter, well-informed financial decisions" />
      </div>

      {/* parent box for cards */}

      <div className="w-[1260px] h-fit flex flex-wrap gap-[20px] mt-[24px]">
        {guidanceData.map((guidance) => (
          <Card
            key={guidance.id}
            title={guidance.title}
            description={guidance.description}
            points={guidance.points}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertGuidance;
