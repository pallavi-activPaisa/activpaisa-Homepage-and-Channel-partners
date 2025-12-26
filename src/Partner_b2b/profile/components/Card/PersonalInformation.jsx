import React from 'react';
import InfoItem from '../../../Components/UI/InfoItem';

const PersonalInformation = ({ businessType = "Individual", status }) => {
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
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <h4 style={{
                    color: "var(--UI-Color-On-Surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
                    fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                    fontSize: "var(--typogrraphy-label-L-1-size, 16px)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "var(--typogrraphy-label-L-1-line-height, 18px)",
                    letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)"
                }}>Personal Information</h4>
                <hr />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InfoItem
                        label="Full Name (As per the PAN)"
                        value={
                            <div className="flex items-center justify-between">
                                <span>Adit Khanna</span>
                                <div className="flex items-center gap-2">
                                    <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                </div>
                            </div>
                        }
                    />
                    {(businessType === "Entity" && status === "verified") && (
                        <InfoItem label="Date of Birth" value="15 Aug 1988" />
                    )}

                    {(businessType === "Entity" && status === "verified") && (
                        <InfoItem label="Gender" value="Male" />
                    )}
                    <InfoItem
                        label="PAN Number"
                        value={
                            <div className="flex items-center justify-between">
                                <span>ABCDE1234F</span>
                                <div className="flex items-center gap-2">
                                    <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                </div>
                            </div>
                        }
                    />

                    {(businessType === "Entity" && status === "verified") && (
                        <InfoItem
                            label="Aadhar Number"
                            value={
                                <div className="flex items-center justify-between">
                                    <span>XXXX XXXX 9921</span>
                                    <div className="flex items-center gap-2">
                                        <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                    </div>
                                </div>
                            }
                        />
                    )}

                    <InfoItem label="Business Type" value={businessType} />

                    <div className={/* This ensures Highest Education spans correctly or sits in grid depending on layout */ ""}>
                        <InfoItem
                            label="Highest Education"
                            value={
                                (businessType === "Entity" && status === "verified") ?
                                    (
                                        <div className="flex items-center justify-between">
                                            <span>MBA - Finance</span>
                                            <div className="flex items-center gap-2">
                                                {/* Assuming chevron down is handled by value logic or just text for now, image shows chevron but it might be just text "MBA - Finance" with a dropdown look */}
                                                <img src="/Icons/chevron-down.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5, display: 'none' /* Using simple text as per previous code, or can add icon if needed */ }} />
                                            </div>
                                        </div>
                                    ) : "Adit Khanna"
                            }
                        />
                        {(businessType === "Entity" && status === "verified") && (
                            <div className="flex items-center justify-end" style={{ marginTop: '-24px', marginRight: '-4px' }}>
                                {/* Hacky alignment, better to just put the icon in value if needed */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                        )}

                    </div>


                    {(businessType === "Entity" && status === "verified") && (
                        <div className="sm:col-span-2">
                            <InfoItem
                                style={{ width: "100%" }}
                                label="Registered Address"
                                value={
                                    <div className="flex items-center justify-between w-full">
                                        <span>402, Lotus Park, Andheri East, Mumbai, Maharashtra - 400069</span>
                                        <div className="flex items-center gap-2">
                                            <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                        </div>
                                    </div>
                                }
                            />
                            <div style={{
                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)",
                                fontFamily: "Inter",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "16px",
                                marginTop: "4px"
                            }}>
                                Verified via GSTIN
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <hr />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <h4 style={{
                    color: "var(--UI-Color-On-Surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
                    fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                    fontSize: "var(--typogrraphy-label-L-1-size, 16px)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "var(--typogrraphy-label-L-1-line-height, 18px)",
                    letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)"
                }}>Contact Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InfoItem
                        label="Phone Number"
                        value={
                            <div className="flex items-center justify-between">
                                <span>+91 98765 43210</span>
                                <div className="flex items-center gap-2">
                                    <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                    <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                </div>
                            </div>
                        }
                    />
                    <div className="flex flex-col gap-1">
                        <InfoItem
                            label="E-Mail ID"
                            value={
                                <div className="flex items-center justify-between">
                                    <span>rahul.verma@fintech.com</span>
                                    <div className="flex items-center gap-2">
                                        <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                    </div>
                                </div>
                            }
                        />
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                            <span style={{
                                backgroundColor: "var(--ui-color-surface-error-error-light-10, #fef2f2)",
                                color: "var(--ui-color-surface-error-error-strong-10, #ef4444)",
                                fontSize: "10px", padding: "2px 6px", borderRadius: "4px"
                            }}>Not Verified</span>
                            <button style={{
                                color: "var(--ui-color-surface-infomation-info-strong-10, #0073c3)",
                                fontSize: "12px", fontWeight: "500",
                            }}>Verify new</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
