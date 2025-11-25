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
        question="How does ActivPaisa make it easy for borrowers?"
        answer={
          <>
            <p>
              ActivPaisa offers you a vast number of loan options from trusted
              banks and NBFCs that allow you to compare various loan offers. Our
              process is fast, transparent, and customized to meet your
              financial needs, leaving no confusion and anxiety.
            </p>
          </>
        }
        isFirst={true} // First accordion open
      />

      <AccordionItem
        question="How does ActivPaisa help me avail the best loan deal?"
        answer={
          <>
            <p>
              We connect you to multiple lenders, and you get to compare rates
              of interest, terms and repayments. We are also offering our team
              expertise in getting you a cost-effective loan in meeting your
              personal financial objectives.
            </p>
          </>
        }
      />

      <AccordionItem
        question="Can ActivPaisa help me determine my loan eligibility?"
        answer={
          <>
            <p>
              Yes! Our platform and team determine your eligibility based on a
              profile assessment of your finances. This saves you much time and
              ensures you'll be applying for loans for which you are most likely
              to qualify. To quickly understand your eligibility, you can use
              our credit score checker and EMI calculator.
            </p>
          </>
        }
      />

      <AccordionItem
        question="How much loans can I get through ActivPaisa?"
        answer={
          <>
            <p>
              Starting from Rs. 1 lakh, you can get up to Rs. 1 crore through
              our platform depending on your income and eligibility.
            </p>
          </>
        }
      />

      <AccordionItem
        question="What if I'm not sure which loan option is right for me?"
        answer={
          <>
            <p>
              Our financial experts offer you personalized advice based on your
              needs and goals. Whether it's comparing rates or understanding
              loan terms, we guide you to make the best decision. Currently,
              this service is available for free for all active members of
              ActivPaisa.
            </p>
          </>
        }
      />
    </div>
  );
};

export default FAQContent;
