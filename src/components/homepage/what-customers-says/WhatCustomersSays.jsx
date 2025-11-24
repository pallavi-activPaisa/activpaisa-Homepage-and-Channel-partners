import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const WhatCustomersSays = () => {
  const userReviews = [
    {
      id: 1,

      name: "Rajesh Kumar",
      location: "Business Owner . Mumbai",
      description:
        "ActivPaisa made getting a business loan incredibly easy. What would have taken months with traditional banks was completed in just 3 days. Their team guided me through every step",
    },

    {
      id: 2,

      name: "Aditi Rao",
      location: "Business Owner . Mumbai",
      description:
        "“ActivPaisa made getting a business loan incredibly easy. What would have taken months with traditional banks was completed in just 3 days. Their team guided me through every step”",
    },

    {
      id: 3,

      name: "Hardik Arora",
      location: "Business Owner . Mumbai",
      description:
        "“ActivPaisa made getting a business loan incredibly easy. What would have taken months with traditional banks was completed in just 3 days. Their team guided me through every step”",
    },

    {
      id: 4,

      name: "Rajesh Kumar",
      location: "Business Owner . Mumbai",
      description:
        "ActivPaisa made getting a business loan incredibly easy. What would have taken months with traditional banks was completed in just 3 days. Their team guided me through every step",
    },

    {
      id: 5,

      name: "Rajesh Kumar",
      location: "Business Owner . Mumbai",
      description:
        "ActivPaisa made getting a business loan incredibly easy. What would have taken months with traditional banks was completed in just 3 days. Their team guided me through every step",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center pl-[90px]   mt-[72px] overflow-x-hidden">
      {/* heading */}
      <Heading heading="What Our Customers Say" />
      <SubHeading subHeading="Don’t just take our word for it. Here’s what our satisfied customers have to say about their ActivPaisa experience" />

      {/* cards: show 3 at a time, horizontal scroll for more */}
      <div className="w-full flex justify-start mt-[24px] ">
        <div
          className="flex  gap-[20px] overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
          style={{ maxWidth: "1260px", WebkitOverflowScrolling: "touch" }}
        >
          {userReviews.map((review) => (
            <Card
              key={review.id}
              name={review.name}
              location={review.location}
              description={review.description}
            />
          ))}
        </div>
      </div>
      {/* local CSS to hide scrollbars only for this component */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default WhatCustomersSays;
