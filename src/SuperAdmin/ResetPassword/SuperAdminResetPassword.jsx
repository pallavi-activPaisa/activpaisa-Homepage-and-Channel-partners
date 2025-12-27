'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNavbar from '../Components/AdminNavbar';
import SignupFooter from '@/signup/SignupFooter';
import AdminOTP from './AdminOTP';
import AdminPassword from './AdminPassword';
import AdminEmail from './AdminEmail';

const SuperAdminResetPassword = () => {
    const router = useRouter();
    const [step, setStep] = useState('EMAIL'); // EMAIL, OTP, PASSWORD
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // --- HANDLERS ---

    // Step 1: Submit Email
    const handleEmailSubmit = () => {
        if (!email) {
            setError('Please enter your email address.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setIsLoading(true);

        // Simulate API call to send OTP
        setTimeout(() => {
            setIsLoading(false);
            setStep('OTP');
        }, 1500);
    };

    // Step 2: Submit OTP
    const handleOtpConfirm = (otp) => {
        setIsLoading(true);
        setError('');

        // Simulate API verification
        setTimeout(() => {
            if (otp === '1234') { // Dummy OTP
                setIsLoading(false);
                setStep('PASSWORD');
            } else {
                setError('Invalid OTP. Please try again.');
                setIsLoading(false);
            }
        }, 1500);
    };

    // Step 2: Resend OTP
    const handleOtpResend = () => {
        // Simulate resend
        console.log('Resending OTP to', email);
    };

    // Step 3: Set Password
    const handlePasswordSubmit = (password, confirmPassword) => {
        setIsLoading(true);

        // Simulate API call to set password
        setTimeout(() => {
            setIsLoading(false);
            // Redirect to Login
            router.push('/superadmin/internal-login');
        }, 2000);
    };


    // --- RENDER CONTENT BASED ON STEP ---
    const renderContent = () => {
        switch (step) {
            case 'EMAIL':
                return (
                    <AdminEmail
                        email={email}
                        onEmailChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                        }}
                        onSubmit={handleEmailSubmit}
                        isLoading={isLoading}
                        error={error}
                    />
                );

            case 'OTP':
                return (
                    <AdminOTP
                        email={email}
                        onBack={() => setStep('EMAIL')}
                        onConfirm={handleOtpConfirm}
                        isLoading={isLoading}
                        error={error}
                        onResend={handleOtpResend}
                    />
                );

            case 'PASSWORD':
                return (
                    <AdminPassword
                        email={email}
                        onSubmit={handlePasswordSubmit}
                        isLoading={isLoading}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            <AdminNavbar isLoggedIn={false} />

            <div className="flex-1 flex flex-col items-center justify-center p-4 pt-[80px]">
                <div style={{
                    padding: '32px',
                    borderRadius: "16px",
                    border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04))",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    {renderContent()}
                </div>
            </div>

            <SignupFooter />
        </div>
    );
};

export default SuperAdminResetPassword;
