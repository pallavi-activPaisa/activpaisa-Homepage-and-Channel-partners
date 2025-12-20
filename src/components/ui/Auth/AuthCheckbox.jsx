import React from "react";

const AuthCheckbox = ({ checked, onChange, label, ...props }) => {
    return (
        <label style={{ display: "flex", alignItems: "flex-start", gap: "4px", cursor: "pointer", position: "relative" }}>
            <input
                {...props}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                style={{
                    position: "absolute",
                    opacity: 0,
                    cursor: "pointer",
                    height: "18px",
                    width: "18px",
                    margin: 0,
                    padding: 0,
                    zIndex: 10,
                    appearance: "none",
                }}
            />
            {/* Custom Checkbox Visual */}
            <div style={{
                width: "18px",
                height: "18px",
                minWidth: "18px",
                borderRadius: "4px",
                backgroundColor: checked ? "var(--ui-color-surface-neutral-neutral-strong-10, #6b7280)" : "transparent",
                border: checked ? "none" : "1.5px solid var(--ui-color-border-default-bd-neutral-medium-20, #d1d5db)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1px", // Center with 20px line-height text
                transition: "all 0.2s ease",
                flexShrink: 0
            }}>
                {checked && (
                    <svg width="13.5" height="13.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>
            {label && (
                <div style={{
                    color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                    fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
                    fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14) * 1px)",
                    lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height, 20) * 1px)",
                    flex: 1
                }}>
                    {label}
                </div>
            )}
        </label>
    );
};

export default AuthCheckbox;
