import React, { useState } from "react";
import AuthButton from "@/components/ui/Auth/AuthButton";
import AuthCheckbox from "@/components/ui/Auth/AuthCheckbox";
import AuthInput from "@/components/ui/Auth/AuthInput";
import AuthLabel from "@/components/ui/Auth/AuthLabel";
import AuthHeading from "@/components/ui/Auth/AuthHeading";
import AuthText from "@/components/ui/Auth/AuthText";
import "../app/build/css/tokens.css";

const SignupBusinessDetails = ({ onComplete }) => {
    const [hasGst, setHasGst] = useState(null);
    const [gstin, setGstin] = useState("");
    const [gstError, setGstError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFetched, setIsFetched] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Unified form data
    const [formData, setFormData] = useState({
        businessName: "",
        legalName: "",
        corporation: "", // Default empty
        address: ""
    });

    // Default GST for demo
    const DEFAULT_GST = "27ABCDE1234F1Z5";

    // Chevron for the pseudo-select / select
    const ChevronDown = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#6B7280" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Dummy fetch function
    const fetchGstDetails = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            // Prioritize valid format logic
            if (gstin.length >= 10) {
                setFormData({
                    businessName: "Mohak Enterprises",
                    legalName: "Mohak Enterprises Private Limited",
                    corporation: "Private Limited",
                    address: "2nd Floor, Plot No. 14, Andheri East, Mumbai, - 400069"
                });
                setIsFetched(true);
                setGstError("");
            } else {
                setGstError("Please enter a valid GST number");
                setIsFetched(false);
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleNext = () => {
        if (hasGst === true) {
            if (!isFetched) {
                // Step 1: Fetch details
                if (!gstin) {
                    setGstError("Please enter your GST number");
                } else {
                    fetchGstDetails();
                }
            } else {
                // Step 2: Proceed
                if (onComplete) onComplete();
            }
        } else if (hasGst === false) {
            // Step 2: Proceed (Manual Entry)
            // Optionally validate fields here
            if (onComplete) onComplete();
        }
    };

    // Determine if inputs should be read-only based on flow
    // ReadOnly ONLY if GST is Yes (hasGst === true).
    // If hasGst === false, they are writable.
    const isReadOnly = hasGst === true;

    // Show form if:
    // 1. GST is Yes AND Fetched
    // 2. GST is No (Immediate show)
    const showForm = (hasGst === true && isFetched) || hasGst === false;

    return (
        <div
            style={{
                width: "100%",
                padding: "0 calc(160 * 1px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "calc(88 * 1px)",
            }}
        >
            {/* INPUT FORM CONTAINER */}
            <div
                style={{
                    width: "calc(400 * 1px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "calc(24 * 1px)",
                }}
            >
                {/* HEADER SECTION */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(8 * 1px)",
                    }}
                >
                    <AuthHeading>Business Details</AuthHeading>
                    <AuthText>
                        Provide basic information about your <br /> business to proceed
                    </AuthText>
                </div>

                {/* FORM CONTENT */}
                <div style={{ display: "flex", flexDirection: "column", gap: "calc(24 * 1px)" }}>
                    {/* Question */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <label
                            style={{
                                color: "#374151",
                                fontFamily: "Inter",
                                fontSize: "14px",
                                fontWeight: 500,
                            }}
                        >
                            Does your business have a GST registration?
                        </label>

                        {/* Options Row */}
                        <div style={{ display: "flex", gap: "8px" }}>
                            <AuthCheckbox
                                checked={hasGst === true}
                                onChange={() => {
                                    setHasGst(true);
                                    setIsFetched(false);
                                    setFormData({ businessName: "", legalName: "", corporation: "", address: "" });
                                    setGstin(DEFAULT_GST); // Pre-fill default
                                    setGstError("");
                                }}
                                label="Yes"
                            />
                            <AuthCheckbox
                                checked={hasGst === false}
                                onChange={() => {
                                    setHasGst(false);
                                    setIsFetched(false);
                                    setFormData({ businessName: "", legalName: "", corporation: "", address: "" });
                                    setGstin("");
                                    setGstError("");
                                }}
                                label="No"
                            />
                        </div>
                    </div>

                    {/* GST Input (Show if Yes AND Not Fetched) */}
                    {hasGst === true && !isFetched && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "calc(8 * 1px)" }}>
                            <AuthLabel>GSTIN Number</AuthLabel>
                            <AuthInput
                                value={gstin}
                                onChange={(e) => {
                                    setGstin(e.target.value.toUpperCase());
                                    if (gstError) setGstError("");
                                }}
                                placeholder="Enter your 15-digit GST number"
                                error={!!gstError}
                            />
                            {gstError && (
                                <p style={{
                                    color: "var(--ui-color-border-error-medium-20, #DC2626)",
                                    fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    marginTop: "calc(8 * 1px)"
                                }}>
                                    {gstError}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Business Details Form (Fetched OR Manual done ) */}
                    {showForm && (
                        <>
                            <div style={{ display: "flex", flexDirection: "column", gap: "calc(8 * 1px)" }}>
                                <AuthLabel>Business Name</AuthLabel>
                                <AuthInput
                                    value={formData.businessName}
                                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    readOnly={isReadOnly}
                                    style={isReadOnly ? { background: "#F3F4F6", color: "#374151" } : {}}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "calc(8 * 1px)" }}>
                                <AuthLabel>Legal Name</AuthLabel>
                                <AuthInput
                                    value={formData.legalName}
                                    onChange={(e) => setFormData({ ...formData, legalName: e.target.value })}
                                    readOnly={isReadOnly}
                                    style={isReadOnly ? { background: "#F3F4F6", color: "#374151" } : {}}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "calc(8 * 1px)" }}>
                                <AuthLabel>Business Corporation</AuthLabel>
                                {isReadOnly ? (
                                    /* Read-only View */
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        height: "40px",
                                        width: "100%",
                                        background: "#F3F4F6",
                                        borderRadius: "8px",
                                        border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                                        padding: "8px 12px",
                                        color: "#6B7280",
                                        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                                        fontSize: "14px",
                                    }}>
                                        {formData.corporation}
                                        <ChevronDown />
                                    </div>
                                ) : (
                                    /* Manual Edit - Custom Dropdown */
                                    <div style={{ position: "relative" }}>
                                        <div
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                height: "40px",
                                                width: "100%",
                                                background: "#fff",
                                                border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                                                borderRadius: "8px",
                                                padding: "0 12px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <span style={{
                                                fontSize: "14px",
                                                color: formData.corporation ? "#374151" : "#9CA3AF"
                                            }}>
                                                {formData.corporation || "Enter your Business Corporation"}
                                            </span>
                                            <div style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                                                <ChevronDown />
                                            </div>
                                        </div>

                                        {/* Dropdown Menu */}
                                        {isDropdownOpen && (
                                            <div style={{
                                                position: "absolute",
                                                top: "100%",
                                                left: 0,
                                                width: "100%",
                                                background: "#fff",
                                                border: "1px solid #E5E7EB",
                                                borderRadius: "8px",
                                                marginTop: "4px",
                                                boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                                zIndex: 10,
                                                maxHeight: "200px",
                                                overflowY: "auto"
                                            }}>
                                                {[
                                                    "Private Limited",
                                                    "Sole Proprietorship",
                                                    "Partnership Firm",
                                                    "Limited Liability Partnership (LLP)",
                                                    "Public Limited Company",
                                                    "One Person Company (OPC)",
                                                    "HUF (Hindu Undivided Family)",
                                                    "Trust / Society"
                                                ].map((type) => (
                                                    <div
                                                        key={type}
                                                        onClick={() => {
                                                            setFormData(prev => ({ ...prev, corporation: type }));
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        style={{
                                                            padding: "10px 12px",
                                                            fontSize: "14px",
                                                            color: "#374151",
                                                            cursor: "pointer",
                                                            background: formData.corporation === type ? "#F3F4F6" : "transparent"
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.background = "#F9FAFB"}
                                                        onMouseLeave={(e) => e.target.style.background = formData.corporation === type ? "#F3F4F6" : "transparent"}
                                                    >
                                                        {type}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "calc(8 * 1px)" }}>
                                <AuthLabel>Business Address</AuthLabel>
                                <AuthInput
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    readOnly={isReadOnly}
                                    style={isReadOnly ? { background: "#F3F4F6", color: "#374151" } : {}}
                                />
                            </div>
                        </>
                    )}

                    {/* Action Button */}
                    <div>
                        <AuthButton
                            type="button"
                            onClick={handleNext}
                            disabled={hasGst === null || isLoading}
                        >
                            {isLoading ? "Fetching..." : (hasGst === true && !isFetched ? "Fetch Details" : "Next")}
                        </AuthButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupBusinessDetails;
