"use client";

import React, { useRef, useState } from "react";
import Card from "./Card";
import ArrowButton from "./ArrowButton";
import "./creditSolutions.css";

const cardsData = [
  {
    title: "Personal Loan",
    desc: "Standard loan with a structured application process and wider eligibility",
    link: "Check Offers",
  },
  {
    title: "Instant Personal Loan",
    desc: "Fast digital approval and quick access to funds with minimal documentation",
    link: "Apply Now",
  },
  {
    title: "Home Loan",
    desc: " Finance for buying a new house or property",
    link: "Explore Options",
  },
  {
    title: "Credit Cards",
    desc: "Explore cards with superior rewards, benefits, and quick approval",
    link: "Compare Cards",
  },
  {
    title: "Business Loans",
    desc: "Focus on growing your business while we handle your financing",
    link: "Check Eligibility",
  },
  {
    title: "Balance Transfer (PL)",
    desc: "Move your loan to a lower interest rate and reduce EMIs",
    link: "Check Savings",
  },
  {
    title: "Personal Overdraft",
    desc: "Withdraw funds when needed and pay only for what you use",
    link: "Explore Options",
  },
  {
    title: "Loan Against Properties",
    desc: "High-value loan secured against residential or commercial property",
    link: "Learn More",
  },
  {
    title: "Professional Loan",
    desc: "Access tailored loan options to power your professional growth",
    link: "Check Eligibility",
  },
];

const CreditSolutions = () => {
  const scrollRef = useRef(null);
  const CARD_WIDTH = 367 + 24;
  const MAX_INDEX = cardsData.length - 3;

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
    <div className="credit-wrapper">
      <h2 className="cs-title">Credit Solutions Tailored for You</h2>
      <p className="cs-subtitle">
        Find the loan or credit product that best fits your goals, financial
        profile, and borrowing needs
      </p>

      <div className="cards-container" ref={scrollRef}>
        {cardsData.map((c, i) => (
          <div
            key={i}
            className="card-wrapper"
            style={{
              width: i === cardsData.length - 1 ? "90px" : "367px",
            }}
          >
            <Card {...c} />
          </div>
        ))}
      </div>

      {/* ⬇️ ARROWS + DOTS CENTERED UNDER CARDS */}
      <div className="arrow-bottom-wrapper">
        <ArrowButton
          direction="left"
          disabled={index === 0}
          onClick={scrollLeft}
        />

        {/* Dots */}
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

export default CreditSolutions;
