"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SignupForm = () => {
    const [phone, setPhone] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Get OTP for:", phone);
        // Add logic to trigger OTP
    };

    return (
        <div className="w-full max-w-md mx-auto px-4 sm:px-0 mt-8 mb-8">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Become a Channel Partner</h1>
                <p className="text-gray-500">Start by verifying your phone number</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 bg-white">
                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm border-r border-gray-200 pr-3 bg-gray-50">+91</span>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="block flex-1 border-0 bg-transparent py-2.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Enter your 10-digit Phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-100 px-3 py-3 text-sm font-semibold text-gray-400 shadow-sm hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                // Add disabled state logic if needed
                >
                    Get OTP
                </button>

                <div className="flex items-start gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-600 border-gray-300 rounded"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="terms" className="text-gray-500">
                            I have read and accept the{' '}
                            <Link href="/terms" className="font-semibold text-indigo-600 hover:text-indigo-500">Terms of Service</Link>
                            {' '}and{' '}
                            <Link href="/privacy" className="font-semibold text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>
                        </label>
                    </div>
                </div>
            </form>

            <div className="mt-8">
                <div className="rounded-md bg-amber-50 p-4 border border-amber-100">
                    <div className="flex">
                        <div className="ml-3 flex-1 md:flex md:justify-between text-center md:text-left">
                            <p className="text-xs text-amber-800">
                                <span className="font-bold">Registering as an entity?</span> Use the mobile number and PAN of any one director or owner
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
                Already a Partner?{' '}
                <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Log in
                </Link>
            </p>
        </div>
    );
};

export default SignupForm;
