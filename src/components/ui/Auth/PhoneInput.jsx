import React, { useState } from "react";

const PhoneInput = ({
  value,
  onChange,
  placeholder,
  style,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const baseBorder =
    "var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)";
  const hoverBorder =
    "var(--ui-color-border-default-bd-neutral-dark-20, #9CA3AF)";
  const focusColor = "var(--ui-color-border-primary-light-10, #6D28D9)";
  const errorColor = "var(--ui-color-border-error-medium-20, #DC2626)";

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        height: "48px",
        width: "100%",
        background: "#fff",

        /* Base + Hover + Error border */
        border: `1px solid ${error ? errorColor : isHover ? hoverBorder : baseBorder}`,
        borderRadius: "8px",

        transition: "border-color 0.15s ease",
        ...style,
      }}
    >
      {/* COUNTRY CODE */}
      <span
        style={{
          width: "56px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          borderRight: `1px solid ${error ? errorColor : baseBorder}`,

          color:
            "var(--ui-color-on-surface-neutral-light-20-on-neutral-light-20-n40, #374151)",
          fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-label-l-2-size, 14) * 1px)",
        }}
      >
        +91
      </span>

      {/* INPUT FOCUS ZONE */}
      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",

          /* ✅ Figma focus border + glow + Error handling */
          border:
            isFocused && error
              ? `0px solid ${errorColor}`
              : `1px solid ${focusColor}`,
          boxShadow: isFocused
            ? `0 0 0 3px ${error ? "rgba(220, 38, 38, 0.12)" : "rgba(109, 40, 217, 0.12)"}`
            : "none",

          /* ❗ flat on left, rounded on right */
          borderRadius: "0 8px 8px 0",

          margin: "-1px", // aligns perfectly with outer border
          transition: "border 0.15s ease, box-shadow 0.15s ease",
        }}
      >
        <input
          type="tel"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            if (props.onBlur) props.onBlur(e);
          }}
          style={{
            flex: 1,
            height: "100%",
            border: "none",
            outline: "none",
            background: "transparent",
            padding: "0 12px",

            caretColor: error ? errorColor : focusColor,

            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-paragraph-para-3-size) * 1px)",
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
          }}
          maxLength={10}
          {...props}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
