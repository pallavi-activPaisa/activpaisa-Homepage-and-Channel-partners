import React from 'react';
import InfoItem from '../../../Components/UI/InfoItem';
import { CheckCircle } from 'lucide-react';

const PaymentAccountInformation = () => {
    return (
        <div style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            borderRadius: "calc(var(--corner-radius-medium, 16) * 1px)",
            border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
            backgroundColor: "var(--ui-color-background-bg-neutral-bg-neutral-light-10, #FFF)",
            boxShadow: "0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04))"
        }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", height: "100%" }}>
                <div className="flex items-center justify-between">
                    <h4 style={{
                        color: "var(--UI-Color-On-Surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
                        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                        fontSize: "var(--typogrraphy-label-L-1-size, 16px)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "var(--typogrraphy-label-L-1-line-height, 18px)",
                        letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)"
                    }}>Payment Account Information</h4>
                </div>

                {/* Payouts Enabled Disclaimer */}
                <div style={{
                    display: "flex",
                    padding: "12px 16px",
                    alignItems: "center",
                    gap: "12px",
                    borderRadius: "8px",
                    background: "var(--ui-color-background-bg-neutral-bg-neutral-light-20, #F9FAFB)"
                }}>
                    <div style={{
                        width: "20px", height: "20px",
                        backgroundColor: "#F3F4F6",
                        borderRadius: "4px"
                    }} />
                    <span style={{
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #6b7280)",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "20px"
                    }}>Payouts will be enabled after verification.</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                    <InfoItem label="Bank Name" value="HDFC Bank" />
                    <InfoItem label="IFSC Code" value="HDFC0001234" />
                    <InfoItem label="Account Number" value="•••••••••9912" />
                    <InfoItem
                        label="Verification PAN"
                        value={
                            <div className="flex flex-col">
                                <span>ABCDE1234F</span>
                                <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '400' }}>Matches Business PAN</span>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentAccountInformation;
