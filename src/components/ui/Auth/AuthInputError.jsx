import React from 'react';

const AuthInputError = ({ children, style, ...props }) => {
    return (
        <p
            style={{
                margin: 0,
                marginTop: "calc(6 * 1px)",
                color: "var(--ui-color-border-error-medium-20, #dc2626)",
                fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                fontSize: "calc(var(--typogrraphy-paragraph-para-4-size, 12) * 1px)",
                fontWeight: 400,
                lineHeight: "calc(var(--typogrraphy-paragraph-para-4-line-height, 16) * 1px)",
                ...style,
            }}
            {...props}
        >
            {children}
        </p>
    );
};

export default AuthInputError;
