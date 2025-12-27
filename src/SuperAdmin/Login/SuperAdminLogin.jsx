import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthHeading from '../../components/ui/Auth/AuthHeading';
import AuthLabel from '../../components/ui/Auth/AuthLabel';
import AuthInput from '../../components/ui/Auth/AuthInput';
import AuthButton from '../../components/ui/Auth/AuthButton';
import AuthText from '../../components/ui/Auth/AuthText';
import AuthInputError from '../../components/ui/Auth/AuthInputError';
import Image from 'next/image';
import AdminNavbar from '../Components/AdminNavbar';
import SignupFooter from '@/signup/SignupFooter';
import Link from 'next/link';

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
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
                <path d="M9.16667 3.75C9.82971 3.75 10.4656 4.01339 10.9344 4.48223C11.4033 4.95107 11.6667 5.58696 11.6667 6.25C11.6667 6.91304 11.4033 7.54893 10.9344 8.01777C10.4656 8.48661 9.82971 8.75 9.16667 8.75C8.50363 8.75 7.86774 8.48661 7.3989 8.01777C6.93006 7.54893 6.66667 6.91304 6.66667 6.25C6.66667 5.58696 6.93006 4.95107 7.3989 4.48223C7.86774 4.01339 8.50363 3.75 9.16667 3.75ZM9.16667 0C13.3333 0 16.8917 2.59167 18.3333 6.25C16.8917 9.90833 13.3333 12.5 9.16667 12.5C5 12.5 1.44167 9.90833 0 6.25C1.44167 2.59167 5 0 9.16667 0ZM1.81667 6.25C2.49021 7.62526 3.53609 8.78396 4.8354 9.59438C6.13471 10.4048 7.63533 10.8344 9.16667 10.8344C10.698 10.8344 12.1986 10.4048 13.4979 9.59438C14.7972 8.78396 15.8431 7.62526 16.5167 6.25C15.8431 4.87474 14.7972 3.71604 13.4979 2.90562C12.1986 2.0952 10.698 1.66557 9.16667 1.66557C7.63533 1.66557 6.13471 2.0952 4.8354 2.90562C3.53609 3.71604 2.49021 4.87474 1.81667 6.25Z" fill="#6B7280" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1.66732 4.39159L2.73398 3.33325L16.6673 17.2666L15.609 18.3333L13.0423 15.7666C12.084 16.0833 11.0673 16.2499 10.0007 16.2499C5.83398 16.2499 2.27565 13.6583 0.833984 9.99992C1.40898 8.53325 2.32565 7.24159 3.49232 6.21659L1.66732 4.39159ZM10.0007 7.49992C10.6637 7.49992 11.2996 7.76331 11.7684 8.23215C12.2373 8.70099 12.5007 9.33688 12.5007 9.99992C12.5011 10.2837 12.4532 10.5655 12.359 10.8333L9.16732 7.64159C9.43504 7.5474 9.71685 7.4995 10.0007 7.49992ZM10.0007 3.74992C14.1673 3.74992 17.7257 6.34159 19.1673 9.99992C18.4868 11.7274 17.3311 13.2268 15.834 14.3249L14.6507 13.1333C15.8031 12.3361 16.7326 11.2575 17.3507 9.99992C16.677 8.62481 15.6311 7.46628 14.3318 6.65605C13.0325 5.84581 11.5319 5.41639 10.0007 5.41659C9.09232 5.41659 8.20065 5.56659 7.36732 5.83325L6.08398 4.55825C7.28398 4.04159 8.60898 3.74992 10.0007 3.74992ZM2.65065 9.99992C3.32427 11.375 4.3702 12.5336 5.66951 13.3438C6.96883 14.154 8.46941 14.5834 10.0007 14.5833C10.5757 14.5833 11.1423 14.5249 11.6673 14.4083L9.76732 12.4999C9.18745 12.4378 8.64634 12.179 8.23396 11.7666C7.82159 11.3542 7.56281 10.8131 7.50065 10.2333L4.66732 7.39158C3.84232 8.09992 3.15065 8.98325 2.65065 9.99992Z" fill="#6B7280" />
            </svg>
        )}
    </div>
);

const SuperAdminLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('admin@activpaisa.com');
    const [password, setPassword] = useState('Admin@123');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setErrors({});
        setIsLoading(true);

        setTimeout(() => {
            // Dummy logic for superadmin
            if (email !== 'admin@activpaisa.com') {
                setErrors({ email: 'Super Admin not found.' });
                setIsLoading(false);
                return;
            }

            if (password !== 'Admin@123') {
                setErrors({ password: 'Invalid Password.' });
                setIsLoading(false);
                return;
            }

            // Success
            router.push('/superadmin/dashboard');
        }, 1500);
    };

    return (

        <div className="flex flex-col min-h-screen bg-white">
            <AdminNavbar isLoggedIn={false} />

            <div className="flex-1 flex flex-col items-center justify-center p-4 pt-[80px]"> {/* Added padding top roughly for navbar height + extra */}
                <div style={{
                    width: '400px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    borderRadius: "16px",
                    border: "1px solid #E5E7EB",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04))"
                }}>

                    {/* Header */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <AuthHeading>Welcome Back!</AuthHeading>
                        <AuthText style={{ textAlign: "center" }}>
                            Log in to securely access your account
                        </AuthText>
                    </div>

                    {/* Form */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Email */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <AuthLabel>Email Address</AuthLabel>
                            <AuthInput
                                type="email"
                                placeholder="admin@activpaisa.com"
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

                        {/* Password */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <AuthLabel>Password</AuthLabel>
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
                            {/* Error and Forgot Password Row */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div style={{ flex: 1 }}>
                                    {errors.password && (
                                        <span style={{
                                            color: "#DC2626",
                                            fontFamily: "Inter",
                                            fontSize: "14px",
                                            lineHeight: "20px"
                                        }}>
                                            {errors.password}
                                        </span>
                                    )}
                                </div>
                                {/* Keep forgot password just in case, or remove if not needed? User said "basic same login". Usually superadmin might not have self-service forgot pass. I'll keep it for visual consistency but maybe disable it or link nowhere. */}
                                <Link href="/superadmin/reset-password">
                                    <span style={{
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

                        {/* Button */}
                        <AuthButton
                            disabled={!email || !password || isLoading}
                            style={{ width: "100%" }}
                            onClick={handleLogin}
                            isLoading={isLoading}
                        >
                            Log In
                        </AuthButton>
                    </div>
                </div>
            </div>

            <SignupFooter />
        </div>
    );
};

export default SuperAdminLogin;
