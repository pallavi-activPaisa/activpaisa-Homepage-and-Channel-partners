import React from "react";

const AuthNote = ({ children, style, ...props }) => {
    return (
        <div
            style={{
                display: "flex",
                padding: "6px 8px",
                flexDirection: "column",
                gap: "16px",
                borderRadius: "8px",
                background: "var(--ui-color-surface-warning-warning-medium-20, #FEF3C7)",
                ...style
            }}
            {...props}
        >
            <span
                style={{
                    color: "var(--ui-color-on-surface-warning-medium-20-on-warning-medium-20, #D97706)",
                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                    fontSize: "calc(var(--typogrraphy-paragraph-para-4-size, 12) * 1px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "calc(var(--typogrraphy-paragraph-para-4-line-height, 16) * 1px)",
                    letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                    textAlign: "center"
                }}
            >
                {children}
            </span>
        </div>
    );
};

export default AuthNote;
