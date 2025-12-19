import React from 'react';

const AuthLabel = ({ children, style, ...props }) => {
    return (
        <label
            style={{
                color:
                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                fontFamily:
                    "var(--typogrraphy-label-inter-font-family, Inter)",
                fontSize:
                    "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                fontWeight: 500,
                lineHeight:
                    "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                letterSpacing:
                    "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                ...style,
            }}
            {...props}
        >
            {children}
        </label>
    );
};

export default AuthLabel;
