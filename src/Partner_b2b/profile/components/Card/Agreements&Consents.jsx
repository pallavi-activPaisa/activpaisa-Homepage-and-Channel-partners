
import React from 'react';
import { Eye, Download, FileText, History } from 'lucide-react';

const AgreementsConsents = ({ businessType = "Individual", status }) => {
    return (
        <div style={{
            padding: "24px",
            backgroundColor: "var(--ui-color-background-bg-neutral-bg-neutral-light-10, #FFF)",
            borderRadius: "calc(var(--corner-radius-medium, 16) * 1px)",
            border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
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
                }}>Agreements & Consents</h4>
                <hr className="border-t border-gray-200 w-full" />

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    {/* Active Agreements Section - Only for Verified Entities */}
                    {businessType === 'Entity' && status === 'verified' && (
                        <div className="flex flex-col gap-3">
                            <h5 style={{
                                color: "var(--uI-color-on-surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
                                fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                                fontSize: "var(--Typogrraphy-Label-L-2-size, 14px)",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "var(--typogrraphy-label-L-2-line-height, 16px)",
                                letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                                display: "flex", alignItems: "center", gap: "8px"
                            }}>
                                <FileText size={20} color="#9CA3AF" />
                                Active Agreements
                            </h5>

                            <div style={{
                                borderRadius: "8px",
                                border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                                background: "var(--ui-color-background-bg-neutral-bg-neutral-light-20, #F9FAFB)",
                                padding: "16px",
                                display: "flex", justifyContent: "space-between", alignItems: "center"
                            }}>
                                <div className="flex flex-col gap-1">
                                    <span style={{
                                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n50, #111827)",
                                        fontSize: "14px", fontWeight: 500
                                    }}>Partner E-Agreement</span>
                                    <span style={{
                                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)",
                                        fontSize: "12px"
                                    }}>Signed on 14 Jan, 2024, 10:30 AM</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span style={{
                                        color: "var(--ui-color-surface-success-success-strong-20, #15803d)",
                                        fontSize: "12px", fontWeight: 600,
                                        backgroundColor: "var(--ui-color-surface-success-success-light-10, #f0fdf4)",
                                        padding: "2px 8px", borderRadius: "4px"
                                    }}>Signed</span>
                                    <div className="flex gap-2">
                                        <button className="hover:bg-gray-200 transition-colors" style={{
                                            width: "24px", height: "24px",
                                            backgroundColor: "#f3f4f6",
                                            borderRadius: "4px",
                                            display: "flex", alignItems: "center", justifyContent: "center"
                                        }}>
                                            <Eye size={14} color="#6B7280" />
                                        </button>
                                        <button className="hover:bg-gray-200 transition-colors" style={{
                                            width: "24px", height: "24px",
                                            backgroundColor: "#f3f4f6",
                                            borderRadius: "4px",
                                            display: "flex", alignItems: "center", justifyContent: "center"
                                        }}>
                                            <Download size={14} color="#6B7280" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <h5 style={{
                        color: "var(--uI-color-on-surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
                        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                        fontSize: "var(--Typogrraphy-Label-L-2-size, 14px)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "var(--typogrraphy-label-L-2-line-height, 16px); /* 114.286% */",
                        letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                        display: "flex", alignItems: "center", gap: "8px"
                    }}>
                        <History size={20} color="#9CA3AF" />
                        Consent History
                    </h5>

                    <div style={{
                        backgroundColor: "var(--color-generic-white, #ffffff)",
                        border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                        borderRadius: "calc(var(--corner-radius-2xsmall, 8) * 1px)",
                        overflow: "hidden"
                    }}>
                        <table className="w-full text-left" style={{ fontSize: "calc(var(--typogrraphy-paragraph-para-4-size, 12) * 1px)" }}>
                            <thead style={{
                                backgroundColor: "var(--ui-color-surface-neutral-neutral-light-20, #f9fafb)",
                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)",
                                borderBottom: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)"
                            }}>
                                <tr>
                                    <th className="px-4 py-3 font-medium">Type</th>
                                    <th className="px-4 py-3 font-medium">Timestamp</th>
                                    <th className="px-4 py-3 font-medium text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-4 py-3 font-medium" style={{ color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n50, #111827)" }}>PAN Verification</td>
                                    <td className="px-4 py-3" style={{ color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)" }}>12 Jan, 2024, 09:15 AM</td>
                                    <td className="px-4 py-3 text-right">
                                        <span style={{
                                            backgroundColor: "var(--ui-color-surface-success-success-light-10, #f0fdf4)",
                                            color: "var(--ui-color-surface-success-success-strong-20, #15803d)",
                                            padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "500",
                                            border: "1px solid var(--ui-color-surface-success-success-light-20, #dcfce7)"
                                        }}>
                                            Granted
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium" style={{ color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n50, #111827)" }}>GSTIN Verification</td>
                                    <td className="px-4 py-3" style={{ color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)" }}>12 Jan, 2024, 09:20 AM</td>
                                    <td className="px-4 py-3 text-right">
                                        <span style={{
                                            backgroundColor: "var(--ui-color-surface-success-success-light-10, #f0fdf4)",
                                            color: "var(--ui-color-surface-success-success-strong-20, #15803d)",
                                            padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "500",
                                            border: "1px solid var(--ui-color-surface-success-success-light-20, #dcfce7)"
                                        }}>
                                            Granted
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot style={{
                                backgroundColor: "var(--ui-color-surface-neutral-neutral-light-20, #f9fafb)",
                                borderTop: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)"
                            }}>
                                <tr>
                                    <td colSpan={3} className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px", opacity: 0.5 }} />
                                            <span style={{ color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)" }}>These consents were provided during verification.</span>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div></div>
            </div>
        </div>
    );
};

export default AgreementsConsents;
