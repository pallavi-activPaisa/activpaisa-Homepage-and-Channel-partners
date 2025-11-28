"use client";
import StepCard from "./StepCard";

export default function StepsList() {
  const steps = [
    {
      number: "1",
      title: "Apply Online",
      desc: "Fill a short form in just a few minutes",
    },
    {
      number: "2",
      title: "Get Matched Instantly",
      desc: "We find the best loan options based on your profile",
    },
    {
      number: "3",
      title: "Receive Your Funds",
      desc: "Receive the approved amount directly in your bank account",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-[1100px]">
      {steps.map((item, i) => (
        <StepCard key={i} {...item} />
      ))}
    </div>
  );
}
