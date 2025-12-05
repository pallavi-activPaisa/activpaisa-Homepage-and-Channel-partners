import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const WhatCustomersSays = () => {
  const userReviews = [
    {
      id: 1,
      image: "/Images/AvatarBase.png",
      name: "Rajesh Kumar",
      location: "Mumbai",
      description:
        "ActivPaisa made securing my business loan surprisingly quick. What usually takes months with banks was done in just a few days. Their team supported me through every step.",
    },

    {
      id: 2,
      image: "/Icons/user.svg",
      name: "Aditi Rao",
      location: "Bengaluru",
      description:
        "The process was smooth and far easier than dealing with banks directly. ActivPaisa guided me clearly, helped me compare options, and I received approval much faster than expected.",
    },

    {
      id: 3,
      image: "/Icons/user.svg",
      name: "Hardik Arora",
      location: "Delhi",
      description:
        "I was unsure about my chances, but ActivPaisa matched me with the right lender and I got approved quickly. The entire experience was transparent, simple, and stress-free.",
    },

    {
      id: 4,
      image: "/Images/AvatarBase.png",
      name: "Rajesh Kumar",
      location: "Business Owner . Mumbai",
      description:
        "ActivPaisa made getting a business loan incredibly easy. What would have taken months with traditional banks was completed in just 3 days. Their team guided me through every step",
    },

    {
      id: 5,
      image: "/Images/AvatarBase.png",
      name: "Rajesh Kumar",
      location: "Business Owner . Mumbai",
      description:
        "ActivPaisa made getting a business loan incredibly easy. What would have taken months with traditional banks was completed in just 3 days. Their team guided me through every step",
    },
  ];
  return (
    <div className="w-[1440px] flex flex-col justify-center pl-[90px]   mt-[72px] overflow-x-hidden">
      {/* heading */}
      <Heading heading="What Our Customers Say" />
      <SubHeading subHeading="Don’t just take our word for it, Real stories from borrowers who chose ActivPaisa for a smoother experience" />

      {/* cards: show 3 at a time, horizontal scroll for more */}
      <div className="w-full flex justify-start mt-[24px] ">
        <div
          className="flex  gap-[20px] overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
          style={{ maxWidth: "1260px", WebkitOverflowScrolling: "touch" }}
        >
          {userReviews.map((review) => (
            <Card
              key={review.id}
              image={review.image}
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
