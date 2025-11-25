"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./faq.css";

const AccordionItem = ({ question, title, answer, isFirst }) => {
  const [open, setOpen] = useState(false);

  // Open the first accordion automatically
  useEffect(() => {
    if (isFirst) {
      setOpen(true);
    }
  }, [isFirst]);

  return (
    <div
      onClick={() => setOpen(!open)}
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
      }}
    >
      {/* Question Row */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "var(--UI-Color-On-Surface-on-neutral-00---1, #374151)",
          fontFamily: "var(--Typogrraphy-Paragraph-inter-font-family, Inter)",
          fontSize: "var(--Typogrraphy-Paragraph-para-2-size, 16px)",
          fontWeight: 500,
          lineHeight: "var(--Typogrraphy-Paragraph-para-2-line-height, 24px)",
        }}
      >
        {question}

        {/* <span
          style={{
            transition: "0.3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <Image
            src="/Icons/fi_2722987.svg"
            alt="Toggle Icon"
            width={24}
            height={24}
          />
        </span> */}
        <span
          style={{
            transition: "0.3s",
          }}
        >
          <Image
            src={open ? "/Icons/fi_2722987.svg" : "/Icons/arrow-down.svg"}
            alt="Toggle Icon"
            width={24}
            height={24}
          />
        </span>
      </div>

      {/* Divider */}
      {open && (
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#E5E7EB",
            margin: "8px 0",
          }}
        />
      )}

      {/* Answer Section */}
      {open && (
        <div>
          <p
            style={{
              color: "var(--UI-Color-On-Surface-on-neutral-00---2, #6B7280)",
              fontFamily:
                "var(--Typogrraphy-Paragraph-inter-font-family, Inter)",
              fontSize: "var(--Typogrraphy-Paragraph-para-3-size, 14px)",
              fontWeight: 400,
              lineHeight:
                "var(--Typogrraphy-Paragraph-para-3-line-height, 20px)",
              marginBottom: "8px",
            }}
          >
            {title}
          </p>

          <p
            style={{
              color: "var(--UI-Color-On-Surface-on-neutral-00---2, #6B7280)",
              fontFamily:
                "var(--Typogrraphy-Paragraph-inter-font-family, Inter)",
              fontSize: "var(--Typogrraphy-Paragraph-para-3-size, 14px)",
              fontWeight: 400,
              lineHeight:
                "var(--Typogrraphy-Paragraph-para-3-line-height, 20px)",
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
