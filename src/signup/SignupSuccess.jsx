import React from "react";
import AuthButton from "@/components/ui/Auth/AuthButton";
import AuthHeading from "@/components/ui/Auth/AuthHeading";
import AuthText from "@/components/ui/Auth/AuthText";
import "../app/build/css/tokens.css";

const SignupSuccess = ({ onFinish, onJoinCommunity }) => {
    // Icons
    const ConfettiIcon = () => (
        <span style={{ fontSize: "24px" }}>🎉</span>
    );

    const LockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12.6666 7.33333H3.33325C2.59687 7.33333 1.99992 7.93029 1.99992 8.66667V13.3333C1.99992 14.0697 2.59687 14.6667 3.33325 14.6667H12.6666C13.403 14.6667 13.9999 14.0697 13.9999 13.3333V8.66667C13.9999 7.93029 13.403 7.33333 12.6666 7.33333Z" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66659 7.33333V4.66667C4.66659 3.78261 5.01777 2.93476 5.6429 2.30964C6.26802 1.68452 7.11586 1.33333 7.99992 1.33333C8.88398 1.33333 9.73182 1.68452 10.3569 2.30964C10.9821 2.93476 11.3333 3.78261 11.3333 4.66667V7.33333" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99992 11V11.0067" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const CheckIcon = ({ checked }) => (
        <div style={{
            width: "16px",
            height: "16px",
            borderRadius: "4px",
            border: checked ? "none" : "1px solid #D1D5DB",
            backgroundColor: checked ? "#6B7280" : "transparent", // Using gray for checked based on image
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px"
        }}>
            {checked && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L3.66667 6.66667L9 1.33333" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </div>
    );

    const CheckItem = ({ label, checked }) => (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <CheckIcon checked={checked} />
            <span style={{
                color: "#374151",
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: 400,
            }}>
                {label}
            </span>
        </div>
    );

    return (
        // FULL SCREEN OVERLAY
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#FFFFFF", // White background as requested
                zIndex: 9999, // Ensure it sits on top of everything
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* MODAL CARD */}
            <div
                style={{
                    width: "calc(698 * 1px)",
                    background: "#FFF",
                    borderRadius: "8px", // Matches Figma "8" corner
                    padding: "32px",
                    boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                {/* HEADER SECTION */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <ConfettiIcon />
                        <h3 style={{
                            color: "#4C2399", // Purple heading
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontWeight: 600,
                        }}>
                            Your Channel Partner Account Is Now Active!
                        </h3>
                    </div>

                    <p style={{
                        color: "#6B7280",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 400,
                    }}>
                        Welcome to ActivPaisa! Just a few quick steps to unlock payouts.
                    </p>
                </div>

                {/* CP CODE BOX */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "16px",
                    gap: "12px",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    background: "#FFF",
                }}>
                    <LockIcon />
                    <span style={{
                        color: "#4C2399",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 600
                    }}>
                        Your CP Code: CP-654321
                    </span>
                </div>

                {/* STATUS SECTION */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <CheckItem label="Personal details submitted" checked={true} />
                    <CheckItem label="Mobile number verified" checked={true} />

                    <p style={{
                        color: "#374151",
                        fontFamily: "Inter",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginTop: "16px",
                        marginBottom: "8px"
                    }}>
                        Next Steps: Verify your account to start earning payouts
                    </p>

                    <CheckItem label="Upload & Verify KYC" checked={false} />
                    <CheckItem label="Sign digital agreement" checked={false} />
                    <CheckItem label="Provide Bank details" checked={false} />
                </div>

                {/* ACTIONS */}
                <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                    <AuthButton
                        onClick={onFinish}
                        style={{ flex: 1 }}
                    >
                        Finish Verification Now
                    </AuthButton>

                    <AuthButton
                        onClick={onJoinCommunity}
                        style={{
                            flex: 1,
                            background: "white",
                            border: "1px solid #4C2399",
                            color: "#4C2399", // Ensure text is visible
                        }}
                    >
                        Join Our WhatsApp Community
                    </AuthButton>
                </div>

            </div>
        </div>
    );
};

export default SignupSuccess;
