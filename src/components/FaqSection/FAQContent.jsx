"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const FAQContent = () => {
  const [openIndex, setOpenIndex] = useState(0); // First accordion open

  const faqs = [
    {
      question: "How does ActivPaisa make it easy for borrowers?",
      answer: `ActivPaisa offers you a vast number of loan options from trusted banks and NBFCs that allow you to compare various loan offers. Our process is fast, transparent, and customized to meet your financial needs, leaving no confusion and anxiety.`,
    },
    {
      question: "How does ActivPaisa help me avail the best loan deal?",
      answer: `We connect you to multiple lenders, and you get to compare rates of interest, terms and repayments. We are also offering our team expertise in getting you a cost-effective loan in meeting your personal financial objectives.`,
    },
    {
      question: "Can ActivPaisa help me determine my loan eligibility?",
      answer: `Yes! Our platform and team determine your eligibility based on a profile assessment of your finances. This saves you much time and ensures you'll be applying for loans for which you are most likely to qualify. To quickly understand your eligibility, you can use our credit score checker and EMI calculator.`,
    },
    {
      question: "How much loans can I get through ActivPaisa?",
      answer: `Starting from Rs. 1 lakh, you can get up to Rs. 1 crore through our platform depending on your income and eligibility.`,
    },
    {
      question: "What if I'm not sure which loan option is right for me?",
      answer: `Our financial experts offer you personalized advice based on your needs and goals. Whether it's comparing rates or understanding loan terms, we guide you to make the best decision. Currently, this service is available for free for all active members of ActivPaisa.`,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {faqs.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default FAQContent;
