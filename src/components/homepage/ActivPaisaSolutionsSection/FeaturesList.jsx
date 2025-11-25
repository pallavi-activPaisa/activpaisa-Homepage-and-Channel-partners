"use client";
import FeatureCard from "./FeatureCard";

export default function FeaturesList() {
  const features = [
    {
      title: "Lightning-Fast Approval ",
      desc: "Get quicker decisions with real-time evaluation that cuts down days of waiting",
      highlight: "Save weeks of waiting time",
    },
    {
      title: "100% Digital Process ",
      desc: "Complete your loan journey online with minimal documents and zero physical paperwork",
      highlight: "No lengthy paperwork",
    },
    {
      title: "Complete Transparency",
      desc: "All fees and terms are shown upfront, so you always know exactly what you’re agreeing to",
      highlight: "No surprises",
    },
    {
      title: "Multiple Options",
      desc: "Compare personalised offers from 50+ lenders and choose the one that fits your needs best",
      highlight: "Choose what works best for you",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {features.map((item, i) => (
        <FeatureCard key={i} {...item} />
      ))}
    </div>
  );
}
