import React from 'react';

const AuthText = ({ children, style, ...props }) => {
    return (
        <p
            style={{
                margin: 0,
                textAlign: "center",
                color:
                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                fontFamily:
                    "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                fontSize:
                    "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",
                fontWeight: 400,
                lineHeight:
                    "calc(var(--typogrraphy-paragraph-para-2-line-height) * 1px)",
                letterSpacing:
                    "calc(var(--typogrraphy-paragraph-letter-spacing) * 1px)",
                ...style,
            }}
            {...props}
        >
            {children}
        </p>
    );
};

export default AuthText;
