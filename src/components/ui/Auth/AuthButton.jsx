// import React, { useState } from "react";

// const AuthButton = ({ children, style, disabled, ...props }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Define base colors
//   const disabledBg =
//     "var(--ui-color-state-disabled-dis-neutral-light-30, #f3f4f6)";
//   const activeBg = "var(--ui-color-surface-brand-primary-strong-10, #4c2399)"; // Using the purple from the image/tokens
//   const activeHoverBg = "var(--ui-color-fill-primary-primary-p50, #4c2399)"; // A slightly darker purple for hover

//   const disabledText =
//     "var(--ui-color-state-on-disabled-neutral-light-30-on-dis-neutral-light-30-n10, #d1d5db)";
//   const activeText = "#ffffff";

//   const currentBg = disabled
//     ? disabledBg
//     : isHovered
//       ? activeHoverBg
//       : activeBg;
//   const currentText = disabled ? disabledText : activeText;
//   const loadingText = disabled === "loading" ? activeText : disabledText;
//   const currentCursor = disabled ? "not-allowed" : "pointer";

//   return (
//     <button
//       type="button"
//       disabled={disabled}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         display: "flex",
//         height: "calc(44 * 1px)",
//         width: "400px", // Ensure full width
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "calc(8 * 1px)",
//         borderRadius: "calc(var(--corner-radius-2xsmall) * 1px)",
//         background: currentBg,
//         boxShadow: disabled
//           ? "none"
//           : "0 calc(1 * 1px) calc(2 * 1px) rgba(17, 24, 39, 0.04)",
//         cursor: currentCursor,
//         border: "none",
//         transition: "background-color 0.2s ease", // Smooth transition
//         ...style, // Allow overrides
//       }}
//       {...props}
//     >
//       <span
//         style={{
//           color: style?.color || loadingText || currentText, // Use style color if provided (for Outline buttons), else default
//           //   color:
//           //     "var(--ui-color-state-on-disabled-neutral-light-30-on-dis-neutral-light-30-n10, #d1d5db)",
//           textAlign: "center",

//           fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
//           fontSize: "calc(var(--typogrraphy-label-l-1-size, 16px) * 1px)",
//           fontStyle: "normal",
//           fontWeight: "500",
//           lineHeight:
//             "calc(var(--typogrraphy-label-l-1-line-height, 18px) * 1px)",
//           letterSpacing:
//             "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
//         }}
//       >
//         {children}
//       </span>
//     </button>
//   );
// };

// export default AuthButton;

import React, { useState } from "react";

const AuthButton = ({ children, style, disabled, isLoading, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Tokens (Unmodified)
  const disabledBg =
    "var(--ui-color-state-disabled-dis-neutral-light-30, #f3f4f6)";
  const activeBg = "var(--ui-color-surface-brand-primary-strong-10, #4c2399)";
  const activeHoverBg = "var(--ui-color-fill-primary-primary-p50, #4c2399)";
  const disabledText =
    "var(--ui-color-state-on-disabled-neutral-light-30-on-dis-neutral-light-30-n10, #d1d5db)";
  const activeText = "#ffffff";

  // LOGIC FIX:
  // If isLoading is true, we want the "active" look (purple) but "disabled" behavior.
  const currentBg =
    disabled && !isLoading ? disabledBg : isHovered ? activeHoverBg : activeBg;

  const currentText = disabled && !isLoading ? disabledText : activeText;
  const currentCursor = disabled || isLoading ? "not-allowed" : "pointer";

  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        height: "calc(44 * 1px)",
        width: "400px",
        justifyContent: "center",
        alignItems: "center",
        gap: "calc(8 * 1px)",
        borderRadius: "calc(var(--corner-radius-2xsmall) * 1px)",
        background: currentBg,
        boxShadow:
          disabled && !isLoading
            ? "none"
            : "0 calc(1 * 1px) calc(2 * 1px) rgba(17, 24, 39, 0.04)",
        cursor: currentCursor,
        border: "none",
        transition: "background-color 0.2s ease",
        ...style,
      }}
      {...props}
    >
      <span
        style={{
          color: style?.color || currentText,
          textAlign: "center",
          fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
          fontSize: "calc(var(--typogrraphy-label-l-1-size, 16px) * 1px)",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight:
            "calc(var(--typogrraphy-label-l-1-line-height, 18px) * 1px)",
          letterSpacing:
            "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {isLoading ? (
          <>
            Redirecting...
            {/* You can insert your SVG spinner here to match the image */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              style={{ animation: "spin 1s linear infinite" }}
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                strokeWidth="4"
                style={{ opacity: 0.25 }}
              />
              <path
                d="M4 12a8 8 0 018-8"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </>
        ) : (
          children
        )}
      </span>
    </button>
  );
};

export default AuthButton;
