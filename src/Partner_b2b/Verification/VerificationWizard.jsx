'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Circle, ChevronRight, ChevronLeft, Upload, X, Shield, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';

const STEPS = [
    { id: 1, label: "Personal Details" },
    { id: 2, label: "Payout Details" },
    { id: 3, label: "Upload Documents" },
    { id: 4, label: "Sign Agreement" },
    { id: 5, label: "Review & Submit" },
];

import Button from '../Components/UI/Button';
import InputField from '../Components/UI/InputField';

const VerificationWizard = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isDigiLockerConnecting, setIsDigiLockerConnecting] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    const handleDigiLockerConnect = () => {
        setIsDigiLockerConnecting(true);
        // Simulate API call delay
        setTimeout(() => {
            setIsDigiLockerConnecting(false);
            setFetchedData({
                fullName: "Rahul Verma",
                dob: "12/05/1995",
                pan: "ABCDE1234F",
                address: "H.No 123, Sector 45, Gurgaon, Haryana"
            });
        }, 3000);
    };

    const nextStep = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setCurrentStep(prev => Math.min(prev + 1, 5));
        }, 800);
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const renderStepContent = () => {
        if (isDigiLockerConnecting) {
            return (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="relative">
                        <div className="h-16 w-16 rounded-full border-4 border-blue-100 animate-pulse"></div>
                        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
                        <Shield className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600" size={24} />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">Connecting to DigiLocker...</h3>
                    <p className="text-gray-500 text-sm mt-2">Please wait while we securely fetch your verified documents.</p>
                </div>
            )
        }

        switch (currentStep) {
            case 1:
                return fetchedData ? (
                    <ReviewFetchedDetails data={fetchedData} onNext={nextStep} onBack={() => setFetchedData(null)} />
                ) : (
                    <IdentityVerificationIntro onConnect={handleDigiLockerConnect} />
                );
            case 2:
                return <PayoutDetailsStep onNext={nextStep} onBack={prevStep} />;
            case 3:
                return <UploadDocumentsStep onNext={nextStep} onBack={prevStep} />;
            case 4:
                return <ReviewAndVerifyStep onNext={nextStep} onBack={prevStep} />; // Using this for simiplicity matching flow
            case 5:
                return <ReviewAndVerifyStep onNext={nextStep} onBack={prevStep} isFinal={true} />;
            default:
                return null;
        }
    };

    return (
        <div className="h-full flex flex-col bg-white w-[1252px]" style={{ margin: "auto" }}>
            <div style={{ padding: "16px 0" }}>
                <button
                    onClick={() => router.back()}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "999px",
                        backgroundColor: "var(--ui-color-background-bg-neutral-bg-neutral-light-10, #ffffff)",
                        border: "1px solid var(--ui-color-border-default-bd-neutral-medium-20, #E5E7EB)",
                        cursor: "pointer",
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                        transition: "background 0.2s ease"
                    }}
                >
                    <ChevronLeft size={18} strokeWidth={2.5} />
                </button>
            </div>
            <div className="w-full flex-1 flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden">
                {/* Header / Stepper */}
                <div className="bg-white border-b border-gray-100 p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">B</div>
                            <div>
                                <h1 className="text-sm font-bold text-gray-900">[Partner Type] Verification Application</h1>
                                <p className="text-xs text-gray-400">#APCP12568 • +91-9876543210 • bhawna@gmail.com</p>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg">
                        {STEPS.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <div className="flex items-center gap-2">
                                    {currentStep > step.id ? (
                                        <CheckCircle2 className="text-[#5D3EA8]" size={20} />
                                    ) : currentStep === step.id ? (
                                        <div className="h-5 w-5 rounded-full bg-[#5D3EA8] text-white flex items-center justify-center text-xs font-bold">{step.id}</div>
                                    ) : (
                                        <Circle className="text-gray-300" size={20} />
                                    )}
                                    <span className={`text-xs font-medium ${currentStep === step.id ? 'text-[#5D3EA8]' : 'text-gray-500'}`}>
                                        {step.label}
                                    </span>
                                </div>
                                {index < STEPS.length - 1 && (
                                    <ChevronRight className="text-gray-300 mx-2 md:mx-4" size={14} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-8 overflow-y-auto">
                    {renderStepContent()}
                </div>

            </div>
        </div>
    );
};

// --- Sub-Components for Steps ---

const IdentityVerificationIntro = ({ onConnect }) => (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
        <div className="w-full bg-[#007ACD] rounded-t-xl p-8 text-center text-white">
            <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-2xl font-bold">Let's verify your identity</h2>
            <p className="mt-2 text-blue-100 text-sm">This process is mandatory to activate payouts and takes about 5 minutes.</p>
        </div>

        <div className="w-full bg-white border border-gray-200 border-t-0 rounded-b-xl p-8">
            <div className="space-y-6">
                <StepItem number="1" title="Identity Verification" desc="We'll fetch your details securely via DigiLocker." />
                <StepItem number="2" title="Bank Details" desc="Add a savings or current account for payouts." />
                <StepItem number="3" title="Document Review" desc="Upload any missing documents and review profile." />
                <StepItem number="4" title="E-Agreement" desc="Sign the partner agreement digitally." />
            </div>

            <div className="mt-10 space-y-3">
                <Button
                    onClick={onConnect}
                    className="w-full justify-center"
                    variant="primary"
                >
                    Verify with DigiLocker <ArrowRight size={18} />
                </Button>
                <Button variant="outline" className="w-full justify-center">
                    Cancel and finish later
                </Button>
            </div>
        </div>
    </div>
);

const StepItem = ({ number, title, desc }) => (
    <div className="flex gap-4">
        <div className="h-6 w-6 rounded bg-blue-50 text-[#007ACD] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
            {number}
        </div>
        <div>
            <h4 className="text-sm font-bold text-gray-900">{title}</h4>
            <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
        </div>
    </div>
);

const ReviewFetchedDetails = ({ data, onNext, onBack }) => (
    <div className="max-w-xl mx-auto">
        <div className="mb-6">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Step 1 of 4</span>
            <h2 className="text-xl font-bold text-gray-900 mt-1">Review Fetched Details</h2>
            <p className="text-sm text-gray-500 mt-1">Please review the details fetched from DigiLocker before proceeding.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase">Fetched Personal Details</h4>
                <div className="flex items-center gap-1 text-blue-600 text-xs font-medium bg-blue-50 px-2 py-1 rounded">
                    <Shield size={12} /> From DigiLocker
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-6">
                <div>
                    <label className="block text-xs text-gray-500 mb-1">FULL NAME</label>
                    <p className="text-sm font-semibold text-gray-900">{data.fullName}</p>
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1">DATE OF BIRTH</label>
                    <p className="text-sm font-semibold text-gray-900">{data.dob}</p>
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1">PAN NUMBER</label>
                    <p className="text-sm font-semibold text-gray-900">{data.pan}</p>
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1">ADDRESS</label>
                    <p className="text-sm font-semibold text-gray-900">{data.address}</p>
                </div>
            </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Fetched Documents</h4>
            <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded border border-blue-100">
                    <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Aadhaar Card</p>
                        <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={10} /> Verified via DigiLocker</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded border border-blue-100">
                    <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900">PAN Card</p>
                        <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={10} /> Verified via DigiLocker</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={onBack}>Back</Button>
            <Button variant="secondary" onClick={onNext}>Continue</Button>
        </div>
    </div>
);

const PayoutDetailsStep = ({ onNext, onBack }) => (
    <div className="max-w-xl mx-auto">
        <div className="mb-6">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Step 2 of 4</span>
            <h2 className="text-xl font-bold text-gray-900 mt-1">Add Payment Account</h2>
            <p className="text-sm text-gray-500 mt-1">Provide the bank account where you want to receive payouts.</p>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg flex items-start gap-2 mb-6">
            <Shield className="text-blue-600 shrink-0 mt-0.5" size={16} />
            <p className="text-xs text-blue-800">Since you are an entity, please provide your business bank account details.</p>
        </div>

        <div className="space-y-4 mb-8">
            <InputField
                label="IFSC Code"
                defaultValue="SBIN0016622"
                helperText={<span className="text-green-600">✓ HDFC Bank, Mumbai Branch</span>}
            />
            <InputField
                label="Account Number"
                type="password"
                defaultValue="123456789"
            />
            <InputField
                label="Confirm Account Number"
                defaultValue="123456789"
            />
        </div>

        <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={onBack}>Back</Button>
            <Button variant="secondary" onClick={onNext}>Continue</Button>
        </div>
    </div>
);

const UploadDocumentsStep = ({ onNext, onBack }) => (
    <div className="max-w-xl mx-auto">
        <div className="mb-6">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Step 3 of 4</span>
            <h2 className="text-xl font-bold text-gray-900 mt-1">Upload Documents</h2>
            <p className="text-sm text-gray-500 mt-1">We found some verified documents. Please upload the missing ones.</p>
        </div>

        <div className="space-y-3 mb-8">
            <DocumentRow label="PAN Card" status="verified" />
            <DocumentRow label="Aadhaar Card" status="verified" />
            <DocumentRow label="Bank Passbook" status="required" />
            <DocumentRow label="Profile Photo" status="required" />
        </div>

        <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={onBack}>Back</Button>
            <Button variant="secondary" onClick={onNext}>Continue</Button>
        </div>
    </div>
);

const DocumentRow = ({ label, status }) => (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
        <div className="flex items-center gap-3">
            <div className={`h-8 w-8 rounded flex items-center justify-center ${status === 'verified' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                {status === 'verified' ? <Shield size={16} /> : <Upload size={16} />}
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-900">{label}</p>
                <p className={`text-xs ${status === 'verified' ? 'text-green-600' : 'text-gray-400'}`}>
                    {status === 'verified' ? 'Verified via DigiLocker' : 'Ready to submit'}
                </p>
            </div>
        </div>
        {status === 'verified' ? (
            <CheckCircle2 className="text-green-500" size={20} />
        ) : (
            <button className="text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5 rounded hover:bg-gray-50">
                Upload
            </button>
        )}
    </div>
);

const ReviewAndVerifyStep = ({ onNext, onBack, isFinal }) => (
    <div className="max-w-xl mx-auto">
        <div className="mb-6">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{isFinal ? "Step 4 of 4" : "Step 4 of 4"}</span>
            <h2 className="text-xl font-bold text-gray-900 mt-1">Review & Verify</h2>
            <p className="text-sm text-gray-500 mt-1">Please ensure all details are correct before proceeding.</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-amber-100 rounded flex items-center justify-center text-amber-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900">Verify your email to continue</p>
                    <p className="text-xs text-gray-500">We sent a code to rahul.verma@fintech.com</p>
                </div>
            </div>
            <button className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded hover:bg-amber-200">
                Verify Now
            </button>
        </div>

        <div className="mb-8">
            <h4 className="text-xs font-bold text-gray-900 mb-2">Change • Check for Verification on Provided email</h4>
            <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <p className="text-sm text-gray-700 font-medium">If user want to change the email, provided during the onboarding flow, Make a flow for that</p>
            </div>
        </div>

        <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={onBack}>Back</Button>
            {!isFinal && <Button variant="secondary" onClick={onNext}>Continue</Button>}
        </div>
    </div>
);

export default VerificationWizard;

