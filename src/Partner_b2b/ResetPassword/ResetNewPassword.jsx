import React, { useState, useEffect } from "react";
import AuthButton from "@/components/ui/Auth/AuthButton";
import AuthInput from "@/components/ui/Auth/AuthInput";
import AuthLabel from "@/components/ui/Auth/AuthLabel";
import { setPassword } from "../../../lib/api.js";
import AuthHeading from "@/components/ui/Auth/AuthHeading.jsx";
import AuthText from "@/components/ui/Auth/AuthText.jsx";
import { useRouter } from "next/navigation";

const ResetNewPassword = ({
    // email, We might not have email depending on flow, but user said "Take inputs at mobile"
    // If we have token and userId from OTP, we are good.
    userId,
    token,
    email,
    onComplete, // Or use router internally
}) => {
    const router = useRouter();

    // =================================================================
    // STATE & VARIABLES
    // =================================================================
    const [backHover, setBackHover] = useState(false);

    const [password, setPasswordState] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // =================================================================
    // PASSWORD STRENGTH LOGIC
    // =================================================================
    const PASSWORD_REGEX =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    const calculateStrength = (pass) => {
        if (!pass) return 0;
        let score = 0;
        if (pass.length >= 8) score++;
        if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score++;
        if (/\d/.test(pass)) score++;
        if (/[!@#$%^&*]/.test(pass)) score++;
        return score;
    };

    const strength = calculateStrength(password);

    const getSegmentColor = (index, currentStrength) => {
        if (!password) return "#E5E7EB";

        // If requirement met: Green
        if (index < currentStrength) return "#16A34A";

        // If this is the "next" requirement to be met: Red
        if (index === currentStrength && currentStrength < 4) return "#DC2626";

        // Otherwise: Gray
        return "#E5E7EB";
    };

    // =================================================================
    // HANDLERS
    // =================================================================
    const handleSetPassword = async () => {
        setPasswordError("");
        setConfirmError("");
        setSuccessMessage("");

        const isFormatValid = PASSWORD_REGEX.test(password);
        const isMatchValid = password === confirmPassword;

        if (!isFormatValid) {
            setPasswordError(
                "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 digit and 1 special character"
            );
        }

        if (!isMatchValid) {
            setConfirmError(
                "Passwords do not match. Please review and confirm both entries are exactly the same"
            );
        }

        if (!isFormatValid || !isMatchValid) return;

        // DUMMY DATA SIMULATION
        if (userId === "dummy-user-456" || userId === "test-user" || !userId) {
            setLoading(true);
            setTimeout(() => {
                setSuccessMessage("Password reset successfully! Redirecting to login...");
                setTimeout(() => {
                    router.push('/partner/login');
                }, 2000);
            }, 1500);
            return;
        }

        if (!userId || !token) {
            setPasswordError(
                "Missing user identification. Please try steps again."
            );
            return;
        }

        setLoading(true);
        try {
            await setPassword(userId, token, password, confirmPassword);
            setSuccessMessage("Password reset successfully! Redirecting to login...");
            setTimeout(() => {
                router.push('/partner/login');
            }, 2000);
        } catch (err) {
            setPasswordError(err.message || "Failed to set password");
            setLoading(false);
        }
    };

    // =================================================================
    // ICONS
    // =================================================================
    const LockIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                d="M12.6666 7.33333H3.33325C2.59687 7.33333 1.99992 7.93029 1.99992 8.66667V13.3333C1.99992 14.0697 2.59687 14.6667 3.33325 14.6667H12.6666C13.403 14.6667 13.9999 14.0697 13.9999 13.3333V8.66667C13.9999 7.93029 13.403 7.33333 12.6666 7.33333Z"
                stroke="#9CA3AF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.66659 7.33333V4.66667C4.66659 3.78261 5.01777 2.93476 5.6429 2.30964C6.26802 1.68452 7.11586 1.33333 7.99992 1.33333C8.88398 1.33333 9.73182 1.68452 10.3569 2.30964C10.9821 2.93476 11.3333 3.78261 11.3333 4.66667V7.33333"
                stroke="#9CA3AF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.99992 11V11.0067"
                stroke="#9CA3AF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const EyeIcon = ({ visible, onClick }) => (
        <div
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {visible ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                >
                    <path
                        d="M9.16667 3.75C9.82971 3.75 10.4656 4.01339 10.9344 4.48223C11.4033 4.95107 11.6667 5.58696 11.6667 6.25C11.6667 6.91304 11.4033 7.54893 10.9344 8.01777C10.4656 8.48661 9.82971 8.75 9.16667 8.75C8.50363 8.75 7.86774 8.48661 7.3989 8.01777C6.93006 7.54893 6.66667 6.91304 6.66667 6.25C6.66667 5.58696 6.93006 4.95107 7.3989 4.48223C7.86774 4.01339 8.50363 3.75 9.16667 3.75ZM9.16667 0C13.3333 0 16.8917 2.59167 18.3333 6.25C16.8917 9.90833 13.3333 12.5 9.16667 12.5C5 12.5 1.44167 9.90833 0 6.25C1.44167 2.59167 5 0 9.16667 0ZM1.81667 6.25C2.49021 7.62526 3.53609 8.78396 4.8354 9.59438C6.13471 10.4048 7.63533 10.8344 9.16667 10.8344C10.698 10.8344 12.1986 10.4048 13.4979 9.59438C14.7972 8.78396 15.8431 7.62526 16.5167 6.25C15.8431 4.87474 14.7972 3.71604 13.4979 2.90562C12.1986 2.0952 10.698 1.66557 9.16667 1.66557C7.63533 1.66557 6.13471 2.0952 4.8354 2.90562C3.53609 3.71604 2.49021 4.87474 1.81667 6.25Z"
                        fill="#6B7280"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M1.66732 4.39159L2.73398 3.33325L16.6673 17.2666L15.609 18.3333L13.0423 15.7666C12.084 16.0833 11.0673 16.2499 10.0007 16.2499C5.83398 16.2499 2.27565 13.6583 0.833984 9.99992C1.40898 8.53325 2.32565 7.24159 3.49232 6.21659L1.66732 4.39159ZM10.0007 7.49992C10.6637 7.49992 11.2996 7.76331 11.7684 8.23215C12.2373 8.70099 12.5007 9.33688 12.5007 9.99992C12.5011 10.2837 12.4532 10.5655 12.359 10.8333L9.16732 7.64159C9.43504 7.5474 9.71685 7.4995 10.0007 7.49992ZM10.0007 3.74992C14.1673 3.74992 17.7257 6.34159 19.1673 9.99992C18.4868 11.7274 17.3311 13.2268 15.834 14.3249L14.6507 13.1333C15.8031 12.3361 16.7326 11.2575 17.3507 9.99992C16.677 8.62481 15.6311 7.46628 14.3318 6.65605C13.0325 5.84581 11.5319 5.41639 10.0007 5.41659C9.09232 5.41659 8.20065 5.56659 7.36732 5.83325L6.08398 4.55825C7.28398 4.04159 8.60898 3.74992 10.0007 3.74992ZM2.65065 9.99992C3.32427 11.375 4.3702 12.5336 5.66951 13.3438C6.96883 14.154 8.46941 14.5834 10.0007 14.5833C10.5757 14.5833 11.1423 14.5249 11.6673 14.4083L9.76732 12.4999C9.18745 12.4378 8.64634 12.179 8.23396 11.7666C7.82159 11.3542 7.56281 10.8131 7.50065 10.2333L4.66732 7.39158C3.84232 8.09992 3.15065 8.98325 2.65065 9.99992Z"
                        fill="#6B7280"
                    />
                </svg>
            )}
        </div>
    );

    return (
        <div className="w-full flex flex-col relative h-full justify-center items-center ">
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
                <div
                    style={{
                        width: "calc(400 * 1px)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(24 * 1px)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "calc(8 * 1px)",
                        }}
                    >
                        <AuthHeading>You’re Almost In!</AuthHeading>
                        <AuthText>
                            Create a strong and unique password to get started
                        </AuthText>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "calc(24 * 1px)",
                        }}
                    >
                        {/* E-mail ID (Only shows if email is provided) */}
                        {email && (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "calc(8 * 1px)",
                                }}
                            >
                                <AuthLabel>E-mail ID</AuthLabel>
                                <AuthInput
                                    value={email}
                                    readOnly={true}
                                    style={{ background: "#F3F4F6", color: "#374151" }} // Disable style
                                />
                            </div>
                        )}

                        {/* New Password */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "calc(8 * 1px)",
                            }}
                        >
                            <AuthLabel>New Password</AuthLabel>
                            <AuthInput
                                value={password}
                                onChange={(e) => {
                                    setPasswordState(e.target.value);
                                    if (passwordError) setPasswordError("");
                                }}
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                error={!!passwordError}
                                startIcon={<LockIcon />}
                                endIcon={
                                    <EyeIcon
                                        visible={showPassword}
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                }
                            />

                            {/* PROGRESS BAR - GREEN COMPLETED, RED NEXT */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "4px",
                                    width: "100%",
                                    marginTop: "4px",
                                }}
                            >
                                {[0, 1, 2, 3].map((index) => (
                                    <div
                                        key={index}
                                        style={{
                                            flex: 1,
                                            height: "4px",
                                            borderRadius: "2px",
                                            backgroundColor: getSegmentColor(index, strength),
                                            transition: "background-color 0.3s ease",
                                        }}
                                    />
                                ))}
                            </div>

                            <p
                                style={{
                                    color: !!passwordError ? "#DC2626" : "#6B7280",
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    marginTop: "4px",
                                    lineHeight: "1.5",
                                }}
                            >
                                Password must be at least 8 characters, with 1 uppercase, 1
                                lowercase, 1 digit and 1 special character
                            </p>
                        </div>

                        {/* Confirm Password */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "calc(8 * 1px)",
                            }}
                        >
                            <AuthLabel>Confirm Password</AuthLabel>
                            <AuthInput
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    if (confirmError) setConfirmError("");
                                }}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="********"
                                error={!!confirmError}
                                startIcon={<LockIcon />}
                                endIcon={
                                    <EyeIcon
                                        visible={showConfirmPassword}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                }
                            />
                            {confirmError && (
                                <p
                                    style={{
                                        color: "#DC2626",
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        marginTop: "4px",
                                    }}
                                >
                                    {confirmError}
                                </p>
                            )}

                            {successMessage && (
                                <p
                                    style={{
                                        color: "#16A34A",
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        textAlign: "center",
                                        marginTop: "8px",
                                    }}
                                >
                                    {successMessage}
                                </p>
                            )}
                        </div>

                        <div>
                            <AuthButton
                                type="button"
                                onClick={handleSetPassword}
                                disabled={!password || !confirmPassword || loading}
                            >
                                {loading ? "Processing..." : "Set New Password"}
                            </AuthButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetNewPassword;
