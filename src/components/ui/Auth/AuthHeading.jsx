import React from "react";

const AuthHeading = ({ children, style, ...props }) => {
  return (
    <h1
      style={{
        margin: 0,

        color:
          "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
        textAlign: "center",

        fontFamily: "var(--typogrraphy-heading-h3-inter-font-family, inter)",
        fontSize: "calc(var(--typogrraphy-heading-h3-large-size, 32px) * 1px)",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight:
          "calc(var(--typogrraphy-heading-h3-large-line-height, 40px) * 1px) ",
        letterSpacing:
          "calc(var(--typogrraphy-heading-h3-large-letter-spacing, -0.64px) * 1px)",

        ...style,
      }}
      {...props}
    >
      {children}
    </h1>
  );
};

export default AuthHeading;
