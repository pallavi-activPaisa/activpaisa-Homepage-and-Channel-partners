
import React, { useState } from "react";
import AuthButton from "@/components/ui/Auth/AuthButton";
import AuthInput from "@/components/ui/Auth/AuthInput";
import AuthLabel from "@/components/ui/Auth/AuthLabel";

const SignupPassword = ({ email, onComplete }) => {
    // Email is passed as prop now
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    // Regex: At least 8 chars, 1 lowercase, 1 uppercase, 1 number, 1 symbol
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    const calculateStrength = (pass) => {
        let score = 0;
        if (!pass) return 0;
        if (pass.length >= 8) score++;
        if (/[a-z]/.test(pass)) score++;
        if (/[A-Z]/.test(pass)) score++;
        if (/\d/.test(pass)) score++;
        if (/[!@#$%^&*]/.test(pass)) score++;
        return score; // Max 5
    };

    const strength = calculateStrength(password);

    const getStrengthColor = (score) => {
        if (score <= 2) return "var(--ui-color-border-error-medium-20, #DC2626)"; // Weak (Red)
        if (score <= 4) return "var(--ui-color-surface-warning-medium-20-on-warning-medium-20, #D97706)"; // Medium (Orange/Yellow)
        return "var(--ui-color-border-success-medium-20, #16A34A)"; // Strong (Green) -- assuming green var or hardcoded
    };

    const strengthColor = getStrengthColor(strength);
    // 5 criteria, so 20% per criteria.
    // Design might show 4 distinct bars or one continuous bar?
    // Image 'Typing State' shows a thin line. Let's do a continuous bar.
    const strengthWidth = `${(strength / 5) * 100}%`;

    const handleSetPassword = () => {
        let isValid = true;
        setPasswordError("");
        setConfirmError("");

        if (!PASSWORD_REGEX.test(password)) {
            // Use the specific requirements text as error or just generic?
            // Image 'Password Format' shows the text as the "error" state styling.
            setPasswordError("Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 symbol");
            isValid = false;
        }

        if (password !== confirmPassword) {
            setConfirmError("Passwords do not match. Please review and confirm both entries are exactly the same");
            isValid = false;
        }

        if (isValid) {
            console.log("Password set successfully!");
            if (onComplete) onComplete();
        }
    };

    const LockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12.6666 7.33333H3.33325C2.59687 7.33333 1.99992 7.93029 1.99992 8.66667V13.3333C1.99992 14.0697 2.59687 14.6667 3.33325 14.6667H12.6666C13.403 14.6667 13.9999 14.0697 13.9999 13.3333V8.66667C13.9999 7.93029 13.403 7.33333 12.6666 7.33333Z" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66659 7.33333V4.66667C4.66659 3.78261 5.01777 2.93476 5.6429 2.30964C6.26802 1.68452 7.11586 1.33333 7.99992 1.33333C8.88398 1.33333 9.73182 1.68452 10.3569 2.30964C10.9821 2.93476 11.3333 3.78261 11.3333 4.66667V7.33333" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99992 11V11.0067" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const EyeIcon = ({ visible, onClick }) => (
        <div onClick={onClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {visible ? (
                // Eye Open
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1.33325 8.00004C1.33325 8.00004 3.99992 2.66671 7.99992 2.66671C11.9999 2.66671 14.6666 8.00004 14.6666 8.00004C14.6666 8.00004 11.9999 13.3334 7.99992 13.3334C3.99992 13.3334 1.33325 8.00004 1.33325 8.00004Z" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                // Eye Closed (Simple representation or path from image)
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14.6666 8.00004C14.6666 8.00004 11.9999 13.3334 7.99992 13.3334C4.68525 13.3334 2.21725 9.71271 1.54725 8.35804" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.20874 3.20871C4.46941 2.84671 5.92274 2.66671 7.99991 2.66671C11.9999 2.66671 14.6666 8.00004 14.6666 8.00004" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.58529 6.58536C6.77090 6.39965 6.99128 6.25232 7.23380 6.15183C7.47632 6.05134 7.73623 5.99966 7.99862 5.99979C8.26102 5.99992 8.52075 6.05186 8.76295 6.15263C9.00516 6.25340 9.22509 6.40103 9.41014 6.58703C9.59518 6.77303 9.74175 6.99373 9.84130 7.23640C9.94084 7.47907 9.99140 7.73894 9.99009 8.00099C9.98877 8.26305 9.93561 8.52212 9.83363 8.76329C9.73165 9.00446 9.58285 9.22300 9.39581 9.40636L1.59581 1.60636L14.3958 14.4064" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </div>
    );

    return (
        // ROOT CONTAINER to match SignupPAN
        <div
            style={{
                width: "100%",
                padding: "0 calc(160 * 1px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "calc(88 * 1px)",
            }}
        >
            {/* INPUT FORM CONTAINER */}
            <div
                style={{
                    width: "calc(400 * 1px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "calc(24 * 1px)",
                }}
            >
                {/* HEADER SECTION */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(8 * 1px)",
                    }}
                >
                    <h3
                        className="w-full h-[40px]"
                        style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                            textAlign: "center",
                            fontFamily: "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
                            fontSize: "calc(var(--typogrraphy-heading-h3-large-size)*1px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            letterSpacing: "var(--typogrraphy-heading-h3-large-letter-spacing, -0.64px)",
                        }}
                    >
                        You’re Almost In!
                    </h3>
                    <p
                        className="w-full"
                        style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                            textAlign: "center",
                            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                            fontSize: "calc(var(--typogrraphy-paragraph-para-2-size)*1px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            height: "auto", // Allow wrapping if needed
                            letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
                        }}
                    >
                        Set a secure password to complete your account setup and get started
                        with ActivPaisa
                    </p>
                </div>

                {/* FORM CONTENT */}
                <div style={{ display: "flex", flexDirection: "column", gap: "calc(24 * 1px)" }}>
                    {/* E-mail ID */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "calc(8 * 1px)" }}>
                        <AuthLabel>E-mail ID</AuthLabel>
                        <AuthInput
                            value={email}
                            readOnly
                            style={{ background: "#F3F4F6", color: "#6B7280" }}
                        />
                    </div>

                    {/* New Password */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "calc(8 * 1px)" }}>
                        <AuthLabel>New Password</AuthLabel>
                        <AuthInput
                            value={password}
                            onChange={(e) => {
                                const val = e.target.value;
                                setPassword(val);
                                if (passwordError) setPasswordError("");

                                // Re-validate match if confirm password has value
                                if (confirmPassword && val !== confirmPassword) {
                                    setConfirmError("Passwords do not match. Please review and confirm both entries are exactly the same");
                                } else {
                                    setConfirmError("");
                                }
                            }}
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            error={!!passwordError}
                            startIcon={<LockIcon />}
                            endIcon={<EyeIcon visible={showPassword} onClick={() => setShowPassword(!showPassword)} />}
                        />

                        {/* STRENGTH GRAPH */}
                        {password.length > 0 && (
                            <div style={{ width: "100%", height: "4px", backgroundColor: "#E5E7EB", borderRadius: "2px", overflow: "hidden", marginTop: "4px" }}>
                                <div style={{ width: strengthWidth, height: "100%", backgroundColor: strengthColor, transition: "width 0.3s ease, background-color 0.3s ease" }} />
                            </div>
                        )}

                        {/* REQUIREMENTS TEXT */}
                        <p
                            style={{
                                color: !!passwordError ? "var(--ui-color-border-error-medium-20, #DC2626)" : "#6B7280",
                                fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                                fontSize: "12px",
                                fontWeight: "400",
                                marginTop: "4px",
                                lineHeight: "1.5"
                            }}
                        >
                            Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 symbol
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "calc(8 * 1px)" }}>
                        <AuthLabel>Confirm Password</AuthLabel>
                        <AuthInput
                            value={confirmPassword}
                            onChange={(e) => {
                                const val = e.target.value;
                                setConfirmPassword(val);
                                if (val && val !== password) {
                                    setConfirmError("Passwords do not match. Please review and confirm both entries are exactly the same");
                                } else {
                                    setConfirmError("");
                                }
                            }}
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="********"
                            error={!!confirmError}
                            startIcon={<LockIcon />}
                            endIcon={<EyeIcon visible={showConfirmPassword} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />}
                        />
                        {confirmError && (
                            <p style={{
                                color: "var(--ui-color-border-error-medium-20, #DC2626)",
                                fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                                fontSize: "12px",
                                fontWeight: "400",
                                marginTop: "calc(8 * 1px)"
                            }}>
                                {confirmError}
                            </p>
                        )}
                    </div>

                    {/* Action Button */}
                    <div>
                        <AuthButton
                            type="button"
                            onClick={handleSetPassword}
                            disabled={!PASSWORD_REGEX.test(password) || password !== confirmPassword}
                        >
                            Set New Password
                        </AuthButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPassword;
