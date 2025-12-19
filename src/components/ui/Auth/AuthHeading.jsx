import React from 'react';

const AuthHeading = ({ children, style, ...props }) => {
    return (
        <h1
            style={{
                margin: 0,
                textAlign: "center",
                color:
                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                fontFamily:
                    "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
                fontSize:
                    "calc(var(--typogrraphy-heading-h3-large-size) * 1px)",
                fontWeight: 600,
                lineHeight:
                    "calc(var(--typogrraphy-heading-h3-large-line-height) * 1px)",
                letterSpacing:
                    "calc(var(--typogrraphy-heading-h3-large-letter-spacing) * 1px)",
                ...style,
            }}
            {...props}
        >
            {children}
        </h1>
    );
};

export default AuthHeading;
