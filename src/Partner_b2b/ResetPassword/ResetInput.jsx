import React, { useState } from 'react';
import AuthHeading from '../../components/ui/Auth/AuthHeading';
import AuthLabel from '../../components/ui/Auth/AuthLabel';
import PhoneInput from '../../components/ui/Auth/PhoneInput';
import AuthInput from '../../components/ui/Auth/AuthInput';
import AuthButton from '../../components/ui/Auth/AuthButton';
import AuthText from '../../components/ui/Auth/AuthText';
import AuthInputError from '../../components/ui/Auth/AuthInputError';
import Link from 'next/link';

const ResetInput = ({ resetMethod, setResetMethod, phone, setPhone, email, setEmail, onSubmit, error, isLoading }) => {
    return (
        <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "0 160px"
        }}>
            <div style={{
                display: "flex",
                width: "400px",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
            }}>
                {/* Header Text */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <AuthHeading>Create a new password</AuthHeading>
                    <AuthText style={{ textAlign: "center" }}>
                        Enter your registered email to receive a one-time password (OTP) and reset your password
                    </AuthText>
                </div>

                {/* Tabs */}
                <div style={{ width: "100%", display: "flex" }}>
                    <button
                        type="button"
                        onClick={() => setResetMethod("phone")}
                        style={{
                            flex: 1,
                            padding: "10px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                color:
                                    resetMethod === "phone"
                                        ? "var(--UI-Color-Surface-Brand-primary-30, #4C2399)"
                                        : "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                                borderBottom:
                                    resetMethod === "phone"
                                        ? "2px solid var(--UI-Color-Surface-Brand-primary-30, #4C2399)"
                                        : "2px solid transparent",
                                fontFamily: "var(--Typogrraphy-Label-inter-font-family, Inter)",
                                fontSize: "var(--Typogrraphy-Label-L-1-size, 16px)",
                                fontWeight: 500,
                                lineHeight: "var(--Typogrraphy-Label-L-1-line-height, 18px)",
                                letterSpacing: "var(--Typogrraphy-Label-letter-spacing, 0)",
                            }}
                        >
                            Phone Number
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setResetMethod("email")}
                        style={{
                            flex: 1,
                            padding: "10px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                paddingBottom: "10px",
                                color:
                                    resetMethod === "email"
                                        ? "var(--UI-Color-Surface-Brand-primary-30, #4C2399)"
                                        : "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                                borderBottom:
                                    resetMethod === "email"
                                        ? "2px solid var(--UI-Color-Surface-Brand-primary-30, #4C2399)"
                                        : "2px solid transparent",
                                fontFamily: "var(--Typogrraphy-Label-inter-font-family, Inter)",
                                fontSize: "var(--Typogrraphy-Label-L-1-size, 16px)",
                                fontWeight: 500,
                                lineHeight: "var(--Typogrraphy-Label-L-1-line-height, 18px)",
                                letterSpacing: "var(--Typogrraphy-Label-letter-spacing, 0)",
                            }}
                        >
                            Email Address
                        </span>
                    </button>
                </div>

                {/* Input Field */}
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {resetMethod === 'phone' ? (
                        <>
                            <AuthLabel>Phone Number</AuthLabel>
                            <PhoneInput
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your 10-digit Phone number"
                                style={{ width: "100%" }}
                                error={!!error}
                            />
                        </>
                    ) : (
                        <>
                            <AuthLabel>Email ID</AuthLabel>
                            <AuthInput
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your registered email"
                                style={{ height: "48px" }}
                                error={!!error}
                            />
                        </>
                    )}

                    {error && (
                        <AuthInputError>{error}</AuthInputError>
                    )}
                </div>

                {/* Get OTP Button */}
                <AuthButton
                    disabled={
                        resetMethod === 'phone'
                            ? (!phone || phone.length !== 10)
                            : (!email || !/\S+@\S+\.\S+/.test(email))
                    }
                    style={{ width: "100%" }}
                    onClick={() => onSubmit(resetMethod, resetMethod === 'phone' ? phone : email)}
                    isLoading={isLoading}
                >
                    Get OTP
                </AuthButton>

                {/* Security Disclaimer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", width: "100%" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 5H9V3.5C9 2.70435 8.68393 1.94129 8.12132 1.37868C7.55871 0.816071 6.79565 0.5 6 0.5C5.20435 0.5 4.44129 0.816071 3.87868 1.37868C3.31607 1.94129 3 2.70435 3 3.5V5H2.5C2.23478 5 1.98043 5.10536 1.79289 5.29289C1.60536 5.48043 1.5 5.73478 1.5 6V10.5C1.5 10.7652 1.60536 11.0196 1.79289 11.2071C1.98043 11.3946 2.23478 11.5 2.5 11.5H9.5C9.76522 11.5 10.0196 11.3946 10.2071 11.2071C10.3946 11.0196 10.5 10.7652 10.5 10.5V6C10.5 5.73478 10.3946 5.48043 10.2071 5.29289C10.0196 5.10536 9.76522 5 9.5 5ZM6 9.5C5.80222 9.5 5.6132 9.44135 5.44876 9.33147C5.28431 9.2216 5.15194 9.06558 5.07626 8.88285C5.00057 8.70013 4.98495 8.49883 5.03126 8.30485C5.07757 8.11087 5.1837 7.93295 5.32322 7.79342C5.46275 7.65389 5.64067 7.54776 5.83465 7.50145C6.02863 7.45514 6.22993 7.47076 6.41266 7.54645C6.59538 7.62214 6.7514 7.75451 6.86127 7.91896C6.97115 8.0834 7.0298 8.27242 7.0298 8.4702C7.0298 8.74332 6.92132 9.00522 6.72821 9.19833C6.53509 9.39145 6.27319 9.5 6 9.5ZM8 5H4V3.5C4 2.96957 4.21071 2.46086 4.58579 2.08579C4.96086 1.71071 5.46957 1.5 6 1.5C6.53043 1.5 7.03914 1.71071 7.41421 2.08579C7.78929 2.46086 8 2.96957 8 3.5V5Z" fill="#374151" />
                    </svg>
                    <span style={{
                        color: "#6B7280",
                        fontFamily: "Inter",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "16px"
                    }}>Your information is encrypted and kept safe</span>
                </div>

                {/* Back to Login -- Not present in user image but good UX? User's request is "need same as as login we have given the options for login", image doesn't show back button. But I will keep it for now as it's standard. */}
                <div style={{ textAlign: "center" }}>
                    <Link
                        style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-p40, #4c2399)",
                            fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                            fontSize: "calc(var(--typogrraphy-label-l-2-size, 14px) * 1px)",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "calc(var(--typogrraphy-label-l-2-line-height, 16px) * 1px)",
                            letterSpacing: "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
                            textDecoration: "none",
                            cursor: "pointer"
                        }}
                        href="/partner/login"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetInput;
