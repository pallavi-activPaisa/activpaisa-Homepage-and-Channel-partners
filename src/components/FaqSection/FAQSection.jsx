"use client";

import FAQContent from "./FAQContent";
import FAQImage from "./FAQImage";
import "./faq.css";

const FAQSection = () => {
  return (
    <div style={{ width: "100%", marginTop: "72px" }}>
      {/* OUTSIDE CONTENT */}
      <div style={{ width: "100%", textAlign: "center", marginBottom: "32px" }}>
        <h3 className="faq-heading">Frequently Asked Questions</h3>

        <p className="subheading">
          Got questions? We’ve got answers. Find everything you need to know
          about our loan services and application process
        </p>
      </div>

      {/* INSIDE 1260 CONTAINER */}
      <div
        style={{
          display: "flex",
          width: "1260px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
          margin: "0 auto",
        }}
      >
        <FAQContent />
        <FAQImage />
      </div>
    </div>
  );
};

export default FAQSection;
