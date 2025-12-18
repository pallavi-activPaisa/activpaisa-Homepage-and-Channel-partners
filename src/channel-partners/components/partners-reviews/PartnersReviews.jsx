"use client";
import React, { useRef, useState } from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";
import "./partner.css";
import ArrowButton from "./ArrowButton";
const PartnersReviews = () => {
  const cardData = [
    {
      id: 1,
      message:
        " ActivPaisa made starting my loan advisory business simple. The entire loan process moved faster than traditional banks, and the support team guided me at every step.",
      name: "Karan Mehta",
      location: "New Delhi",
    },

    {
      id: 2,
      message:
        " Great platform, clear payouts, and excellent support. What usually takes weeks was done in a few days. ActivPaisa helped me serve customers smoothly.",
      name: "Chandan Verma",
      location: "Noida",
    },

    {
      id: 3,
      message:
        " Working with ActivPaisa has been seamless. The portal is easy to use, and their team helped me close deals quickly. It’s become a strong income stream for me.",
      name: "Vikas Kumar",
      location: "Bengaluru",
    },

    {
      id: 4,
      message:
        " ActivPaisa made starting my loan advisory business simple. The entire loan process moved faster than traditional banks, and the support team guided me at every step.",
      name: "Ravi Kumar",
      location: "Bengaluru, India",
    },
  ];

  const scrollRef = useRef(null);
  const CARD_WIDTH = 407 + 24;
  const MAX_INDEX = cardData.length - 3;

  const [index, setIndex] = useState(0);

  const scrollLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
      scrollRef.current.scrollLeft -= CARD_WIDTH;
    }
  };

  const scrollRight = () => {
    if (index < MAX_INDEX) {
      setIndex(index + 1);
      scrollRef.current.scrollLeft += CARD_WIDTH;
    }
  };
  return (
    <div className="w-[1440px] mt-[72px] flex flex-col justify-center items-center">
      <Heading heading="See How ActivPaisa is Changing Lives" />
      <SubHeading subHeading="What partners are saying about us" />

      {/* parent div for cards */}
      <div
        className="hide-scrollbar w-[1260px] mt-[24px]"
        style={{
          display: "flex",
          gap: "17px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
        ref={scrollRef}
      >
        {cardData.map((card) => (
          <Card
            key={card.id}
            message={card.message}
            name={card.name}
            location={card.location}
          />
        ))}
      </div>

      {/* button */}

      <div className="arrow-bottom-wrapper">
        <ArrowButton
          direction="left"
          disabled={index === 0}
          onClick={scrollLeft}
        />

        <div className="dots">
          <span className={`dot ${index === 0 ? "active" : ""}`} />
          <span className={`dot ${index === 1 ? "active" : ""}`} />
          <span className={`dot ${index === 2 ? "active" : ""}`} />
        </div>

        <ArrowButton
          direction="right"
          disabled={index === MAX_INDEX}
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default PartnersReviews;
