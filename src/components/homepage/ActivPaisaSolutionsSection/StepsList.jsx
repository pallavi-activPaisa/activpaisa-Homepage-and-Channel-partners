"use client";
import StepCard from "./StepCard";

export default function StepsList() {
  const steps = [
    {
      number: "1",
      title: "Apply Online",
      desc: "Fill out our simple online form in just 5 minutes",
    },
    {
      number: "2",
      title: "Get Matched",
      desc: "Our AI finds the best loan options from our Partners",
    },
    {
      number: "3",
      title: "Get Funded",
      desc: "Receive your loan amount directly in your bank account",
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
