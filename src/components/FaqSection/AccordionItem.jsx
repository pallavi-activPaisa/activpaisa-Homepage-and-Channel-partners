"use client";
import Image from "next/image";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      style={{
        display: "flex",
        width: "715px",
        padding: "24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        borderRadius: "8px",
        border: "1px solid #E5E7EB",
        background: "#FFF",
        boxShadow:
          "0 1px 2px rgba(17, 24, 39, 0.04), 0 1px 2px rgba(17, 24, 39, 0.04)",
        cursor: "pointer",
        transition: "0.3s ease",
      }}
    >
      {/* Question Row */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#374151",
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        {question}

        <span
          style={{
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/Icons/arrow-down.svg"
            alt="Toggle Icon"
            width={24}
            height={24}
          />
        </span>
      </div>

      {/* Divider */}
      {isOpen && (
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#E5E7EB",
            margin: "8px 0",
          }}
        />
      )}

      {/* Answer */}
      {isOpen && (
        <p
          style={{
            color: "#6B7280",
            fontFamily: "Inter",
            fontSize: "14px",
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
