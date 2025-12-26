"use client";
import React, { useState } from 'react';
import SignupLeftPanel from '../../signup/SignupLeftPanel';
import SignupHeader from '../../signup/SignupHeader';
import SignupFooter from '../../signup/SignupFooter';
import ResetInput from './ResetInput';
import ResetOTP from './ResetOTP';
import ResetNewPassword from './ResetNewPassword';
import { sendOTP } from "../../../lib/api";

const ResetPassword = () => {
    const [step, setStep] = useState('input'); // 'input' | 'otp' | 'password'
    const [resetMethod, setResetMethod] = useState('phone'); // 'phone' | 'email'
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Auth Data
    const [authData, setAuthData] = useState({ userId: '', token: '' });

    const handleGetOtp = async (method, identifier) => {
        setError('');
        if (method === 'phone') {
            if (identifier.length !== 10) {
                setError('Please enter a valid 10-digit number');
                return;
            }
        } else {
            if (!identifier || !/\S+@\S+\.\S+/.test(identifier)) {
                setError('Please enter a valid email address');
                return;
            }
        }

        setIsLoading(true);
        // Simulate sending OTP for testing with dummy data
        setTimeout(() => {
            console.log(`Sending OTP to ${method}: ${identifier}`);
            setStep('otp');
            setIsLoading(false);
        }, 1000);
    };

    const handleOtpConfirm = (data) => {
        console.log("OTP Verification Successful:", data);
        setAuthData({ userId: data.userId, token: data.token });
        setStep('password');
    };

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
            {/* Left Panel - Reused from Signup */}
            <SignupLeftPanel />

            {/* Right Panel - Reset Form */}
            <div className="flex-1 h-full flex flex-col bg-white overflow-y-auto relative">
                <SignupHeader />

                {step === 'input' && (
                    <ResetInput
                        resetMethod={resetMethod}
                        setResetMethod={setResetMethod}
                        phone={phone}
                        setPhone={setPhone}
                        email={email}
                        setEmail={setEmail}
                        onSubmit={handleGetOtp}
                        error={error}
                        isLoading={isLoading}
                    />
                )}

                {step === 'otp' && (
                    <ResetOTP
                        mode={resetMethod}
                        identifier={resetMethod === 'phone' ? phone : email}
                        onBack={() => setStep('input')}
                        onConfirm={handleOtpConfirm}
                    />
                )}

                {step === 'password' && (
                    <ResetNewPassword
                        userId={authData.userId}
                        token={authData.token}
                        email={email}
                    />
                )}

                <SignupFooter />
            </div>
        </div>
    );
};

export default ResetPassword;
