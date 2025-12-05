"use client";
import React from "react";
import CardAchievement from "./CardAchievement";
import { achievementsData } from "./achievementsData";
import "./ourachievment.css";

const AchievementsSection = () => {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{
        background:
          "var(--gradients-g1, linear-gradient(45deg, var(--ui-color-gradients-g1-100, #bd8668) 0%, var(--ui-color-gradients-g1-200, #5d51af) 50%, var(--ui-color-gradients-g1-300, #3437c8) 100%))",
        marginTop: "72px",
      }}
    >
      <div className="section-hero">
        <div className="hero-inner">
          {/* Heading */}
          <h2 className="achievements-heading">
            Our Achievements & Credibility
          </h2>

          {/* Subtext */}
          <p className="achievements-subtext">
            Numbers that speak for our commitment to excellence and the trust
            our customers place in us
          </p>

          {/* Cards Grid */}
          <div className="achievements-grid">
            {achievementsData.map((item, index) => (
              <CardAchievement key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
