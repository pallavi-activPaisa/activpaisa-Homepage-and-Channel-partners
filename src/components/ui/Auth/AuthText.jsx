import React from "react";

const AuthText = ({ children, style, ...props }) => {
  return (
    <p
      style={{
        margin: 0,
        color:
          "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
        textAlign: "center",

        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
        fontSize: "calc(var(--typogrraphy-paragraph-para-2-size, 16px) * 1px)",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight:
          "calc(var(--typogrraphy-paragraph-para-2-line-height, 24px) * 1px)",
        letterSpacing:
          "calc(var(--typogrraphy-paragraph-letter-spacing, 0) * 1px)",

        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default AuthText;
