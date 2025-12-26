import React from 'react';
import Link from 'next/link';
import AuthHeading from '../../components/ui/Auth/AuthHeading';
import AuthLabel from '../../components/ui/Auth/AuthLabel';
import PhoneInput from '../../components/ui/Auth/PhoneInput';
import AuthInput from '../../components/ui/Auth/AuthInput';
import AuthButton from '../../components/ui/Auth/AuthButton';
import AuthText from '../../components/ui/Auth/AuthText';
import AuthInputError from '../../components/ui/Auth/AuthInputError';

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

const LoginForm = ({ loginMethod, setLoginMethod, phone, setPhone, email, setEmail, password, setPassword, onSubmit, errors = {}, isLoading }) => {
    const [showPassword, setShowPassword] = React.useState(false);

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
                    <AuthHeading>Welcome Back!</AuthHeading>
                    <AuthText style={{ textAlign: "center" }}>
                        Log in to securely access your account
                    </AuthText>
                </div>
                {/* Tabs */}
                <div style={{ width: "100%", display: "flex" }}>
                    <button
                        type="button"
                        onClick={() => setLoginMethod("phone")}
                        suppressHydrationWarning={true}
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
                                display: "inline-block", // underline only to text width

                                color:
                                    loginMethod === "phone"
                                        ? "var(--UI-Color-Surface-Brand-primary-30, #4C2399)"
                                        : "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                                borderBottom:
                                    loginMethod === "phone"
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
                        onClick={() => setLoginMethod("email")}
                        suppressHydrationWarning={true}
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
                                    loginMethod === "email"
                                        ? "var(--UI-Color-Surface-Brand-primary-30, #4C2399)"
                                        : "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6B7280)",
                                borderBottom:
                                    loginMethod === "email"
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
                    {loginMethod === 'phone' ? (
                        <>
                            <AuthLabel>Phone Number</AuthLabel>
                            <PhoneInput
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your 10-digit Phone number"
                                style={{ width: "100%" }}
                                error={!!errors.phone}
                            />
                            {errors.phone && (
                                <AuthInputError>{errors.phone}</AuthInputError>
                            )}
                        </>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <AuthLabel>E-mail ID</AuthLabel>
                                <AuthInput
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ height: "48px" }}
                                    error={!!errors.email}
                                />
                                {errors.email && (
                                    <span style={{
                                        color: "#DC2626",
                                        fontFamily: "Inter",
                                        fontSize: "14px",
                                        lineHeight: "20px"
                                    }}>
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <AuthLabel> Password</AuthLabel>
                                <div style={{ position: "relative" }}>
                                    <AuthInput
                                        type={showPassword ? "text" : "password"}
                                        placeholder="********"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ height: "48px", paddingRight: "40px" }}
                                        error={!!errors.password}
                                    />
                                    <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }}>
                                        <EyeIcon visible={showPassword} onClick={() => setShowPassword(!showPassword)} />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                    <div style={{ flex: 1 }}>
                                        {errors.password && (
                                            <span style={{
                                                color: "#DC2626", // Red-600
                                                fontFamily: "Inter",
                                                fontSize: "14px",
                                                lineHeight: "20px"
                                            }}>
                                                {errors.password}
                                            </span>
                                        )}
                                    </div>
                                    <Link href="/partner/reset-password">    <span style={{
                                        color: "#6B7280",
                                        fontFamily: "Inter",
                                        fontSize: "14px",
                                        cursor: "pointer",
                                        whiteSpace: "nowrap",
                                        marginLeft: "12px",
                                        lineHeight: "20px"
                                    }}>
                                        Forgot password?
                                    </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Get OTP / Log In Button */}
                <AuthButton
                    disabled={
                        loginMethod === 'phone'
                            ? (!phone || phone.length !== 10)
                            : (!email || !/\S+@\S+\.\S+/.test(email) || !password)
                    }
                    style={{ width: "100%" }}
                    onClick={() => onSubmit(loginMethod, loginMethod === 'phone' ? phone : email, password)}
                    isLoading={isLoading}
                >
                    {loginMethod === 'phone' ? "Get OTP" : "Log In"}
                </AuthButton>

                {/* Footer Section: Security + Link */}
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
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

                    {/* Sign Up Link */}
                    <div style={{ textAlign: "center" }}>
                        <span
                            style={{
                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30)",
                                textAlign: "center",
                                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                                fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                                letterSpacing: "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                            }}
                        >
                            New here?
                            <Link
                                style={{
                                    color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-p40)",
                                    fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                                    fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight: "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                                    letterSpacing: "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
                                    marginLeft: "4px"
                                }}
                                href="/partners/signup"
                            >
                                {" "}
                                Join Us as Partner
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
