"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const FAQContent = () => {
  const [openIndex, setOpenIndex] = useState(0); // First accordion open

  const faqs = [
    {
      question: "How much can I earn as a loan advisor?",
      answer: `Your earnings depend on the number of customers you refer and the loan amounts they take. You earn commissions on every successful disbursal, and there’s no upper limit. `,
    },
    {
      question: "Do I need prior experience?",
      answer: `No. Anyone 18+ with basic KYC documents can start. We provide training, product knowledge, and ongoing support. `,
    },
    {
      question: "How do payouts work?",
      answer: `You earn once the loan is disbursed by the lender. All payout statuses - pending, approved, released - can be tracked live in your partner portal.`,
    },
    {
      question: "How long does verification take?",
      answer: `Verification is quick and usually completed within a short time once documents are submitted. You can start referring immediately after approval.`,
    },
    {
      question: "Which loan products can I offer?",
      answer: `You can offer personal loans, business loans, home loans, loan against property, and credit cards - all from top banks and NBFCs.`,
    },

    {
      question: "Do I need my own office?",
      answer: `No. You can work from anywhere using your phone or laptop.`,
    },

    {
      question: "Can a business entity register as a partner?",
      answer: `Yes. Individuals and registered businesses (proprietorship, partnership, LLP, Pvt Ltd) can join.`,
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
