import React, { useState, useEffect } from "react";
import AuthHeading from "@/components/ui/Auth/AuthHeading";
import AuthText from "@/components/ui/Auth/AuthText";
import AuthButton from "@/components/ui/Auth/AuthButton";

const OtpInputItem = ({ value, onChange, onKeyDown, onFocus, error, index }) => {
    const [isHover, setIsHover] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const baseBorder = "var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)";
    const hoverBorder = "var(--ui-color-border-default-bd-neutral-dark-20, #9CA3AF)";
    const focusColor = "var(--ui-color-border-primary-light-10, #6D28D9)";
    const errorColor = "var(--ui-color-border-error-medium-20, #DC2626)";

    return (
        <input
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onFocus={(e) => {
                setIsFocused(true);
                if (onFocus) onFocus(e);
            }}
            onBlur={() => setIsFocused(false)}
            style={{
                width: "calc(64 * 1px)",
                height: "calc(64 * 1px)",
                borderRadius: "calc(12 * 1px)",
                background: "#FFF",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "600",
                color: "#111827",
                outline: "none",

                /* Interactive Border Logic */
                border: `1px solid ${error
                    ? errorColor
                    : isFocused
                        ? focusColor
                        : isHover
                            ? hoverBorder
                            : baseBorder
                    }`,

                boxShadow: isFocused
                    ? `0 0 0 3px ${error ? 'rgba(220, 38, 38, 0.12)' : 'rgba(109, 40, 217, 0.12)'}`
                    : "none",

                transition: "border-color 0.15s ease, box-shadow 0.15s ease",
            }}
        />
    );
};

const SignupOTP = ({ phone, onBack, onConfirm, error }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        }
    }, [timeLeft]);

    const handleResend = () => {
        setTimeLeft(30);
        console.log("Resending OTP...");
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (e.target.previousSibling && e.target.value === "") {
                e.target.previousSibling.focus();
            }
        }
    };

    const isOtpComplete = otp.every((digit) => digit !== "");

    return (
        <div
            style={{
                width: "100%",
                padding: "0 calc(160 * 1px)",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "calc(432 * 1px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "calc(32 * 1px)",
                }}
            >
                {/* HEADING & SUBTEXT */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(8 * 1px)",
                        alignSelf: "stretch",
                        textAlign: "center",
                    }}
                >
                    <AuthHeading style={{ textAlign: "center" }}>
                        Verify your number
                    </AuthHeading>

                    <AuthText style={{ textAlign: "center" }}>
                        Enter the one-time password (OTP) sent to <br />
                        +91-{phone}.{" "}
                        <span
                            onClick={onBack}
                            style={{
                                color:
                                    "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
                                cursor: "pointer",
                                fontWeight: 500,
                            }}
                        >
                            Change Phone number
                        </span>
                    </AuthText>
                </div>

                {/* OTP INPUTS */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "calc(16 * 1px)",
                        marginBottom: "calc(8 * 1px)",
                    }}>
                    <div
                        style={{
                            display: "flex",
                            gap: "calc(16 * 1px)",
                            justifyContent: "center",
                        }}
                    >
                        {otp.map((data, index) => (
                            <OtpInputItem
                                key={index}
                                index={index}
                                value={data}
                                error={!!error}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onFocus={(e) => e.target.select()}
                            />
                        ))}
                    </div>

                    {/* ERROR MESSAGE */}
                    {error && (
                        <p style={{
                            margin: 0,
                            color: "var(--ui-color-border-error-medium-20, #dc2626)",
                            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                            fontSize: "calc(var(--typogrraphy-paragraph-para-4-size, 12) * 1px)",
                            fontWeight: 400,
                            lineHeight: "calc(var(--typogrraphy-paragraph-para-4-line-height, 16) * 1px)",
                        }}>
                            {error}
                        </p>
                    )}
                </div>

                {/* CONFIRM BUTTON */}
                <AuthButton
                    type="button"
                    disabled={!isOtpComplete}
                    onClick={() => onConfirm(otp.join(""))}
                >
                    Confirm
                </AuthButton>

                {/* TIMER / RESEND */}
                <div
                    style={{
                        color:
                            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                        fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14) * 1px)",
                        lineHeight:
                            "calc(var(--typogrraphy-paragraph-para-3-line-height, 20) * 1px)",
                        display: "flex",
                        gap: "4px",
                        justifyContent: "center",
                    }}
                >
                    {timeLeft > 0 ? (
                        <>
                            Resend Code in{" "}
                            <span
                                style={{
                                    color:
                                        "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
                                    fontWeight: 500,
                                }}
                            >
                                {timeLeft} sec
                            </span>
                        </>
                    ) : (
                        <span
                            onClick={handleResend}
                            style={{
                                color:
                                    "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
                                fontWeight: 500,
                                cursor: "pointer",
                            }}
                        >
                            Resend Code
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignupOTP;
