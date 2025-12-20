import React, { useState } from "react";

const AuthInput = ({ value, onChange, placeholder, style, error, type = "text", startIcon, endIcon, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const baseBorder =
        "var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)";
    const hoverBorder =
        "var(--ui-color-border-default-bd-neutral-dark-20, #9CA3AF)";
    const focusColor =
        "var(--ui-color-border-primary-light-10, #6D28D9)";
    const errorColor =
        "var(--ui-color-border-error-medium-20, #DC2626)";

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
                display: "flex",
                alignItems: "center",
                height: "40px", // Standard height for text inputs per SignupPAN design
                width: "100%",
                background: "#fff",

                /* Base + Hover + Error border */
                border: isFocused
                    ? `1px solid ${error ? errorColor : focusColor}`
                    : `1px solid ${error ? errorColor : (isHover ? hoverBorder : baseBorder)}`,

                borderRadius: "8px",

                /* Glow effect on focus */
                boxShadow: isFocused && !error
                    ? "0 0 0 3px rgba(109, 40, 217, 0.12)"
                    : "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",

                transition: "border 0.15s ease, box-shadow 0.15s ease",
                ...style,
            }}
        >
            {startIcon && (
                <div style={{ paddingLeft: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {startIcon}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    setIsFocused(false);
                    if (props.onBlur) props.onBlur(e);
                }}
                style={{
                    flex: 1,
                    height: "100%",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    // Padding logic:
                    // Default: 8px 12px
                    // StartIcon: Left 8px (icon has 12px padding left, so gap is handled) -> actually input needs less left padding if icon is there.
                    // Let's rely on flex layout. Icon has its own padding. Input just needs horizontal padding relative to icons.
                    padding: "8px 12px",
                    paddingLeft: startIcon ? "8px" : "12px",
                    paddingRight: endIcon ? "8px" : "12px",

                    caretColor: error ? errorColor : focusColor,

                    fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                    fontSize: "calc(var(--typogrraphy-label-l-2-size, 14) * 1px)", // 14px like SignupPAN
                    fontWeight: "400",
                    color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                }}
                {...props}
            />
            {endIcon && (
                <div style={{ paddingRight: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {endIcon}
                </div>
            )}
        </div>
    );
};

export default AuthInput;
