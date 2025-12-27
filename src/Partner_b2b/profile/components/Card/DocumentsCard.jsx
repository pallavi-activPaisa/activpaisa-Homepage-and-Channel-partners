import React from 'react';

const DocumentsCard = () => {
    const documents = [
        {
            type: "PAN Card",
            updated: "12 Jan, 2024",
            source: "DigiLocker",
            sourceType: "digilocker", // 'digilocker' | 'uploaded'
            status: "Verified"
        },
        {
            type: "Aadhaar Card",
            updated: "12 Jan, 2024",
            source: "DigiLocker",
            sourceType: "digilocker",
            status: "Verified"
        },
        {
            type: "Bank Passbook",
            updated: "13 Jan, 2024",
            source: "Uploaded",
            sourceType: "uploaded",
            status: "Verified"
        },
        {
            type: "Passport Photo",
            updated: "13 Jan, 2024",
            source: "Uploaded",
            sourceType: "uploaded",
            status: "Verified"
        },
        {
            type: "Signature",
            updated: "13 Jan, 2024",
            source: "Uploaded",
            sourceType: "uploaded",
            status: "Verified"
        }
    ];

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
                }}>Documents</h4>
                <hr className="border-t border-gray-200 w-full" />

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
                                <th className="px-4 py-3 font-medium">Source</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                                <th className="px-4 py-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {documents.map((doc, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-3">
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{
                                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n50, #111827)",
                                                fontWeight: 500
                                            }}>{doc.type}</span>
                                            <span style={{
                                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)",
                                                fontSize: "10px"
                                            }}>Updated: {doc.updated}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span style={{
                                            backgroundColor: doc.sourceType === 'digilocker'
                                                ? "var(--ui-color-surface-infomation-info-light-10, #e0f2fe)" // Light blue for DigiLocker
                                                : "var(--ui-color-surface-neutral-neutral-light-20, #f3f4f6)", // Gray for Uploaded
                                            color: doc.sourceType === 'digilocker'
                                                ? "var(--ui-color-surface-infomation-info-strong-10, #0369a1)"
                                                : "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                                            padding: "2px 8px",
                                            borderRadius: "4px",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "4px"
                                        }}>
                                            {/* Simulated icon placeholders */}
                                            <img src="/Icons/profilebox.svg" alt="" style={{ width: "12px", height: "12px", opacity: 0.5 }} />
                                            {doc.source}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-1.5">
                                            {/* Simulated checkbox/verified icon - using a placeholder image logic or svg */}
                                            <img src="/Icons/profilebox.svg" alt="" style={{ width: "16px", height: "16px", opacity: 0.2, filter: 'grayscale(100%)' /* Placeholder style */ }} />
                                            <span style={{ color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)" }}>{doc.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button style={{
                                                width: "24px", height: "24px",
                                                backgroundColor: "#f3f4f6",
                                                borderRadius: "4px",
                                                display: "flex", alignItems: "center", justifyContent: "center"
                                            }}>
                                                {/* Placeholder for Eye/View Icon */}
                                                <img src="/Icons/profilebox.svg" alt="" style={{ width: "14px", height: "14px", opacity: 0.5 }} />
                                            </button>
                                            <button style={{
                                                width: "24px", height: "24px",
                                                backgroundColor: "#f3f4f6",
                                                borderRadius: "4px",
                                                display: "flex", alignItems: "center", justifyContent: "center"
                                            }}>
                                                {/* Placeholder for Download Icon */}
                                                <img src="/Icons/profilebox.svg" alt="" style={{ width: "14px", height: "14px", opacity: 0.5 }} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DocumentsCard;
