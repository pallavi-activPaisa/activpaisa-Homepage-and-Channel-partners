"use client";
import React, { useState } from 'react';
import SignupLeftPanel from '../../signup/SignupLeftPanel';
import SignupHeader from '../../signup/SignupHeader';
import SignupFooter from '../../signup/SignupFooter';
import LoginOTP from './LoginOTP';
import LoginForm from './loginform';
import { useRouter } from 'next/navigation';

const PartnerLogin = () => {
    const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' or 'email'
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState('input'); // 'input' | 'otp'
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleGetOtp = (method, identifier, pwd) => {
        setErrors({});
        setIsLoading(true);

        if (method === 'phone') {
            if (identifier !== '7310249234') {
                setErrors({ phone: 'Invalid Phone Number. Please enter the registered mobile number.' });
                setIsLoading(false);
                return;
            }
            // Simulate API call
            setTimeout(() => {
                console.log(`Sending OTP to ${method}: ${identifier}`);
                setStep('otp');
                setIsLoading(false);
            }, 2000);
        } else if (method === 'email') {
            // Simulate Email Login
            setTimeout(() => {
                if (identifier !== 'abc@gmail.com') {
                    setErrors({ email: 'User not found with this email ID.' });
                } else if (pwd === 'New@1234') {
                    handleLoginSuccess({ email: identifier });
                } else {
                    setErrors({ password: 'Invalid Credentials.' });
                }
                setIsLoading(false);
            }, 2000);
        }
    };

    const handleLoginSuccess = (data) => {
        console.log("Login Successful:", data);
        // Redirect to dashboard or appropriate page
        router.push('/partner/dashboard');
    };

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
            {/* Left Panel - Reused from Signup */}
            <SignupLeftPanel />

            {/* Right Panel - Login Form */}
            <div className="flex-1 h-full flex flex-col bg-white overflow-y-auto relative">
                <SignupHeader />

                {step === 'input' ? (
                    <LoginForm
                        loginMethod={loginMethod}
                        setLoginMethod={setLoginMethod}
                        phone={phone}
                        setPhone={setPhone}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        onSubmit={handleGetOtp}
                        errors={errors}
                        isLoading={isLoading}
                    />
                ) : (
                    <LoginOTP
                        mode={loginMethod}
                        identifier={loginMethod === 'phone' ? phone : email}
                        onBack={() => setStep('input')}
                        onConfirm={handleLoginSuccess}
                    />
                )}

                <SignupFooter />
            </div>
        </div>
    );
};

export default PartnerLogin;
