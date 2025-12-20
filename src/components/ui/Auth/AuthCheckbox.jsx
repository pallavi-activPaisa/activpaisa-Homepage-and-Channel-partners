import React from "react";

const AuthCheckbox = ({ checked, onChange, label, ...props }) => {
    return (
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                style={{
                    width: "16px",
                    height: "16px",
                    marginTop: "3px", // Align with text top
                    cursor: "pointer",
                    ...props.style
                }}
                {...props}
            />
            {label && (
                <div style={{
                    color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                    fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14) * 1px)",
                    lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height, 20) * 1px)",
                }}>
                    {label}
                </div>
            )}
        </div>
    );
};

export default AuthCheckbox;
