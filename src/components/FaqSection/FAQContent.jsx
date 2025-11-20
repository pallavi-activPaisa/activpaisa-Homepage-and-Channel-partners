"use client";
import "./faq.css";
import AccordionItem from "./AccordionItem";

const FAQContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* Accordion List */}
      <AccordionItem
        question="How quickly can I get loan approval?"
        title="About the Bank:"
        answer={
          <>
            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>
            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>
          </>
        }
        isFirst={true} // First accordion open
      />

      <AccordionItem
        question="How quickly can I get loan approval?"
        title="About the Bank:"
        answer={
          <>
            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>

            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>
          </>
        }
      />

      <AccordionItem
        question="How quickly can I get loan approval?"
        title="About the Bank:"
        answer={
          <>
            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>

            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>
          </>
        }
      />

      <AccordionItem
        question="How quickly can I get loan approval?"
        title="About the Bank:"
        answer={
          <>
            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>

            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>
          </>
        }
      />

      <AccordionItem
        question="How quickly can I get loan approval?"
        title="About the Bank:"
        answer={
          <>
            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>

            <p>
              Dedicated support to guide you every step of the way of the loan
              application process. Dedicated support to guide you every step of
              the way of the loan. Dedicated support to guide you every step of
              the way of the loan.
            </p>
          </>
        }
      />

      <AccordionItem
        question="How can I check loan eligibility?"
        title="Eligibility:"
        answer="Eligibility can be checked instantly through our online loan pre-qualification system."
      />
    </div>
  );
};

export default FAQContent;
