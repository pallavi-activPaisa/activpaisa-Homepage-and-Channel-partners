import React from 'react';
import InfoItem from '../../../Components/UI/InfoItem';

const BusinessInformation = ({
    gstRegistered = false,
    gstin = "27AAAAA0000A1Z5",
    businessName = "Khanna FinServe Pvt Ltd",
    legalName = "Khanna Financial Services",
    corporation = "Private Limited Company",
    pan = "AAAAA0000A",
    address = "Unit 10, Business Bay, Lower Parel, Mumbai 400013",
    verifiedViaGstin = false,
    status = "pending"
}) => {
    const isVerified = status === 'verified';

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
                }}>Business Information</h4>
                <hr className="border-t border-gray-200 w-full" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Reordered for Verified State: Legal Name -> Trade Name */}
                    {isVerified ? (
                        <>
                            <InfoItem
                                label="Legal Name"
                                value={
                                    <div className="flex items-center justify-between">
                                        <span>{legalName}</span>
                                        <div className="flex items-center gap-2">
                                            {/* No edit icon for verified/legal name usually, but keeping consistency if needed. Image doesn't show edit icons strictly but implies read-only. */}
                                        </div>
                                    </div>
                                }
                            />
                            <InfoItem
                                label="Trade Name"
                                value={
                                    <div className="flex items-center justify-between">
                                        <span>{businessName}</span>
                                        <div className="flex items-center gap-2">
                                        </div>
                                    </div>
                                }
                            />
                        </>
                    ) : (
                        // Standard/Pending Order
                        <>
                            <InfoItem
                                label="Business Name"
                                value={
                                    <div className="flex items-center justify-between">
                                        <span>{businessName}</span>
                                        <div className="flex items-center gap-2">
                                            <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                        </div>
                                    </div>
                                }
                            />
                            <InfoItem
                                label="Legal Name"
                                value={
                                    <div className="flex items-center justify-between">
                                        <span>{legalName}</span>
                                        <div className="flex items-center gap-2">
                                            <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                        </div>
                                    </div>
                                }
                            />
                        </>
                    )}

                    <InfoItem
                        label="GST Registered"
                        value={
                            <div className="flex items-center justify-between">
                                <span>{gstRegistered ? "Yes" : "No"}</span>
                                <div className="flex items-center gap-2">
                                    {!isVerified && <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />}
                                </div>
                            </div>
                        }
                    />

                    {gstRegistered && (
                        <InfoItem
                            label="GSTIN"
                            value={
                                <div className="flex items-center justify-between">
                                    <span>{gstin}</span>
                                    <div className="flex items-center gap-2">
                                        {!isVerified && <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />}
                                    </div>
                                </div>
                            }
                        />
                    )}


                    <InfoItem
                        label="Business Corporation"
                        value={
                            <div className="flex items-center justify-between">
                                <span>{corporation}</span>
                                <div className="flex items-center gap-2">
                                    {!isVerified && <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />}
                                </div>
                            </div>
                        }
                    />

                    <InfoItem
                        label="Business PAN"
                        value={
                            <div className="flex items-center justify-between">
                                <span>{pan}</span>
                                <div className="flex items-center gap-2">
                                    {!isVerified && <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />}
                                </div>
                            </div>
                        }
                    />
                    <div className="sm:col-span-2">
                        <InfoItem
                            style={{ width: "100%" }}
                            label="Business Address"
                            value={
                                <div className="flex items-center justify-between w-full">
                                    <span>{address}</span>
                                    <div className="flex items-center gap-2">
                                        {!isVerified && <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />}
                                    </div>
                                </div>
                            }
                        />
                        {(verifiedViaGstin || isVerified) && (
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
                        )}
                    </div>
                </div>

                {isVerified && (
                    <>
                        <h4 style={{
                            color: "var(--UI-Color-On-Surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
                            fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                            fontSize: "var(--typogrraphy-label-L-1-size, 16px)",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "var(--typogrraphy-label-L-1-line-height, 18px)",
                            letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                            marginTop: "8px"
                        }}>Authorized Signatory</h4>
                        <div style={{
                            borderRadius: "8px",
                            border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                            background: "var(--ui-color-background-bg-neutral-bg-neutral-light-20, #F9FAFB)",
                            padding: "16px"
                        }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <InfoItem label="Name" value="Adit Khanna" />
                                <InfoItem
                                    label="Designation"
                                    value={
                                        <div className="flex items-center justify-between">
                                            <span>Director/ Owner</span>
                                            <div className="flex items-center gap-2">
                                                <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                            </div>
                                        </div>
                                    }
                                />
                                <InfoItem label="E-Mail ID" value="director@khannafin.com" />
                                <InfoItem label="Phone Number" value="+91 98765 43210" />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BusinessInformation;
