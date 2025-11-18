"use client";
import FeatureCard from "./FeatureCard";

export default function FeaturesList() {
  const features = [
    {
      title: "Lightning-Fast Approval",
      desc: "Get loan approval in just 24 hours with our AI-powered assessment system",
      highlight: "Save weeks of waiting time",
    },
    {
      title: "100% Digital Process",
      desc: "Complete your entire loan application from your smartphone with minimal documentation",
      highlight: "No physical paperwork required",
    },
    {
      title: "Complete Transparency",
      desc: "All fees, charges, and terms are clearly displayed upfront with no hidden surprises",
      highlight: "Know exactly what you're paying",
    },
    {
      title: "Multiple Options",
      desc: "Compare offers from 50+ lenders to find the best rates and terms for your needs",
      highlight: "Choose the perfect loan for you",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6   mt-6">
      {features.map((item, i) => (
        <FeatureCard key={i} {...item} />
      ))}
    </div>
  );
}
