import React, { useState } from "react";
import AuthButton from "@/components/ui/Auth/AuthButton";
// Icons handled locally now to avoid dependency issues
import "../app/build/css/tokens.css";

const SignupSuccess = ({ onFinish, onJoinCommunity, onClose }) => {
    // State for copy feedback
    const [copied, setCopied] = useState(false);
    const partnerCode = "CP-9921-X42B";

    const handleCopy = () => {
        navigator.clipboard.writeText(partnerCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // --- Custom Icons for exact visual match ---

    const TopSuccessIcon = () => (
        <img
            src="/Icons/image 552.png"
            alt="Success"
            width={48}
            height={48}
            style={{ width: "48px", height: "48px", objectFit: "contain" }}
        />
    );

    // Stepper Icons
    const StepCheck = () => (
        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#4C2399", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );

    const StepActive = () => (
        <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #4C2399", display: "flex", alignItems: "center", justifyContent: "center", background: "white" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4C2399" }} />
        </div>
    );

    const StepPending = () => (
        <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #D1D5DB", background: "white" }} />
    );

    const StepLocked = () => (
        <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #D1D5DB", display: "flex", alignItems: "center", justifyContent: "center", background: "white", color: "#9CA3AF" }}>
            <Lock size={12} />
        </div>
    );


    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#FFFFFF", // Solid white background
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Inter, sans-serif",
            }}
        >
            <div
                style={{
                    width: "calc(571 * 1px)", // Exact Figma width
                    height: "auto", // Exact Figma height
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "32px", // Exact Figma padding
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "24px", // Updated to 24px as per latest Figma sidebar
                    boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
            >
                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "24px",
                        right: "24px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#6B7280"
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                {/* ... existing header logic ... */}

                {/* HEADER SECTION */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
                    <TopSuccessIcon />

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <h2 style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                            textAlign: "center",

                            fontFamily: "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
                            fontSize: "calc(var(--typogrraphy-heading-h3-large-size, 32) * 1px)",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "calc(var(--typogrraphy-heading-h3-large-line-height, 40) * 1px)",
                            letterSpacing: "calc(var(--typogrraphy-heading-h3-large-letter-spacing, -0.64) * 1px)"
                        }
                        }>
                            Partner Registration Successful
                        </h2>
                        <p style={{
                            margin: 0,
                            color: "#6B7280",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                        }}>
                            Complete the steps below to activate payouts. <br />
                            Most partners finish this in under 5 minutes.
                        </p>
                    </div>
                </div>

                {/* STEPPER SECTION */}
                <div style={{ width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", position: "relative", marginBottom: "8px" }}>
                        {/* Connecting Line (Background) */}
                        <div style={{
                            position: "absolute",
                            top: "12px",
                            left: "0",
                            height: "2px",
                            width: "100%",
                            background: "#E5E7EB",
                            zIndex: 0
                        }} />
                        {/* Connecting Line (Progress - Partial) */}
                        <div style={{
                            position: "absolute",
                            top: "12px",
                            left: "0",
                            height: "2px",
                            width: "25%", // Approx progress to second step
                            background: "#4C2399",
                            zIndex: 0
                        }} />

                        {/* Step 1 */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 1, cursor: "default" }}>
                            <StepCheck />
                            <span style={{ fontSize: "12px", fontWeight: 600, color: "#374151", textAlign: "center", lineHeight: "1.2" }}>Account<br />Created</span>
                        </div>
                        {/* Step 2 */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 1, cursor: "default" }}>
                            <StepActive />
                            <span style={{ fontSize: "12px", fontWeight: 600, color: "#374151", textAlign: "center", lineHeight: "1.2" }}>e-KYC<br />Verification</span>
                        </div>
                        {/* Step 3 */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 1, cursor: "default" }}>
                            <StepPending />
                            <span style={{ fontSize: "12px", fontWeight: 500, color: "#6B7280", textAlign: "center", lineHeight: "1.2" }}>Bank<br />Details</span>
                        </div>
                        {/* Step 4 */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 1, cursor: "default" }}>
                            <StepPending />
                            <span style={{ fontSize: "12px", fontWeight: 500, color: "#6B7280", textAlign: "center", lineHeight: "1.2" }}>Sign<br />Agreement</span>
                        </div>
                        {/* Step 5 */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 1, cursor: "default" }}>
                            <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #D1D5DB", display: "flex", alignItems: "center", justifyContent: "center", background: "white", color: "#9CA3AF" }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                            <span style={{ fontSize: "12px", fontWeight: 500, color: "#6B7280", textAlign: "center", lineHeight: "1.2" }}>Payouts<br />Enabled</span>
                        </div>
                    </div>
                </div>

                {/* PARTNER CODE CARD */}
                <div style={{
                    width: "100%",
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                            Partner Code
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: 700, color: "#1F2937" }}>
                            {partnerCode}
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: 400, color: "#9CA3AF" }}>
                            Required for support and payout queries
                        </span>
                    </div>
                    <button
                        onClick={handleCopy}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 16px",
                            background: "white",
                            border: "1px solid #E5E7EB",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#374151",
                            transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "#F3F4F6"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "white"}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>

                {/* MAIN ACTION */}
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                    <AuthButton onClick={onFinish} style={{ width: "100%" }}>
                        Complete Verification Now
                    </AuthButton>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#D97706" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        <span style={{ fontSize: "12px", fontWeight: 500 }}>
                            Payouts are disabled until verification is complete
                        </span>
                    </div>
                </div>

                {/* WHATSAPP LINK */}
                <button
                    onClick={onJoinCommunity}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#374151",
                        fontSize: "14px",
                        fontWeight: 500
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    Join WhatsApp Community
                </button>

            </div>
        </div>
    );
};

export default SignupSuccess;
