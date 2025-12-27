"use client";

import React, { useRef, useState } from "react";
import ArrowButton from "@/channel-partners/ui/common/ArrowButton";
import MobExploreRangeCreditProducts from "./MobExploreRangeCreditProducts";

export default function ExploreRangeCreditProducts() {
  const cards = [
    {
      title: "Home Loan",
      desc: "Finance for buying a new house or property",
      img: "/partnerspage/House-3--Streamline-Ultimate.svg",
    },
    {
      title: "Personal Loan",
      desc: "Standard loan with a structured application process & wider eligibility",
      img: "/partnerspage/Cash-Payment-Bag--Streamline-Ultimate.svg",
    },
    {
      title: "Credit Cards",
      desc: "Explore cards with superior rewards, benefits, and quick approval",
      img: "/partnerspage/Credit-Card-1--Streamline-Ultimate.svg",
    },
    {
      title: "Instant Personal Loan",
      desc: "Fast digital approval and quick access to funds with minimal documentation",
      img: "/partnerspage/Video-Edit-Brightness-1--Streamline-Ultimate.svg",
    },
    {
      title: "Business Loans",
      desc: "Focus on growing your business while we handle your financing",
      img: "/partnerspage/Business-Deal-Cash-3--Streamline-Ultimate.svg",
    },
    {
      title: "Balance Transfer (PL)",
      desc: "Move your loan to a lower interest rate and reduce EMIs",
      img: "/partnerspage/Data-Transfer-Horizontal--Streamline-Ultimate.svg",
    },
    {
      title: "Personal Overdraft",
      desc: "Withdraw funds when needed and pay only for what you use",
      img: "/partnerspage/Accounting-Coins-Stack--Streamline-Ultimate.svg",
    },
    {
      title: "Loan Against Properties",
      desc: "High-value loan secured against residential or commercial property",
      img: "/partnerspage/Real-Estate-Action-House-Dollar--Streamline-Ultimate.svg",
    },
    {
      title: "Professional Loan",
      desc: "Access tailored loan options to power your professional growth",
      img: "/partnerspage/Single-Neutral-Briefcase--Streamline-Ultimate.svg",
    },
  ];

  const scrollRef = useRef(null);
  const totalBullets = Math.ceil(cards.length / 3); // 3 cards per page
  const [page, setPage] = useState(0);
  const cardWidthWithGap = 301 + 17; // width + gap
  const scrollStep = cardWidthWithGap * 3;

  const scrollToPage = (nextPage) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: nextPage * scrollStep,
        behavior: "smooth",
      });
      setPage(nextPage);
    }
  };

  return (
    <>
      <div className="block md:hidden">
        <MobExploreRangeCreditProducts />
      </div>
      <div className="hidden md:block">
        <div
          style={{
            width: "1260px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Heading */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h1
              style={{
                color: "#374151",
                fontSize: "32px",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Explore Our Range of Credit Products
            </h1>
            <p style={{ color: "#6B7280", fontSize: "16px", margin: 0 }}>
              Provide loans for various customer needs
            </p>
          </div>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="hide-scrollbar"
            style={{
              display: "flex",
              gap: "17px",
              overflowX: "auto",
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                style={{
                  minWidth: "301px",
                  height: "232px",
                  borderRadius: "24px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  background:
                    "linear-gradient(45deg, #BD8668 0%, #5D51AF 50%, #3437C8 100%)",
                  scrollSnapAlign: "start",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    padding: "12px",
                    background: "#F2EFFC",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <span style={{ fontSize: "20px", fontWeight: 600 }}>
                  {card.title}
                </span>
                <p style={{ fontSize: "14px", margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Arrows + Bullets */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <ArrowButton
              direction="left"
              disabled={page === 0}
              onClick={() => scrollToPage(page - 1)}
            />

            <div style={{ display: "flex", gap: "8px" }}>
              {Array.from({ length: totalBullets }).map((_, i) => (
                <div
                  key={i}
                  onClick={() => scrollToPage(i)}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    background: i === page ? "#0B0F19" : "#D1D5DB",
                  }}
                />
              ))}
            </div>

            <ArrowButton
              direction="right"
              disabled={page === totalBullets - 1}
              onClick={() => scrollToPage(page + 1)}
            />
          </div>

          <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
        </div>
      </div>
    </>
  );
}
