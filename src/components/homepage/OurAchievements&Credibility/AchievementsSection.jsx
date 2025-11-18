"use client";
import React from "react";
import CardAchievement from "./CardAchievement";
import { achievementsData } from "./achievementsData";
import "./ourachievment.css";

const AchievementsSection = () => {
  return (
    <div className="section-hero">
      <div className="hero-inner">
        {/* Heading */}
        <h2 className="achievements-heading">Our Achievements & Credibility</h2>

        {/* Subtext */}
        <p className="achievements-subtext">
          Numbers that speak for our commitment to excellence and the trust our
          customers place in us
        </p>

        {/* Cards Grid */}
        <div className="achievements-grid">
          {achievementsData.map((item, index) => (
            <CardAchievement key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
