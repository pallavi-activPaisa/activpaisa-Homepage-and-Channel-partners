import React, { useState } from "react";
import Link from "next/link";
import "../app/build/css/tokens.css";
import AuthButton from "@/components/ui/Auth/AuthButton";
import AuthInput from "@/components/ui/Auth/AuthInput";
import AuthCheckbox from "@/components/ui/Auth/AuthCheckbox";
import AuthNote from "@/components/ui/Auth/AuthNote";
import AuthLabel from "@/components/ui/Auth/AuthLabel";
import { verifyPAN, submitEmail } from "../../lib/api.js";
import AuthHeading from "@/components/ui/Auth/AuthHeading";
import AuthText from "@/components/ui/Auth/AuthText";

const SignupPAN = ({ onComplete, userId: propUserId, token: propToken }) => {
  // Fallback to localStorage if props are missing
  const userId =
    propUserId ||
    (typeof window !== "undefined" ? localStorage.getItem("userId") : "");
  const token =
    propToken ||
    (typeof window !== "undefined" ? localStorage.getItem("token") : "");

  const [pan, setPan] = useState("");
  const [businessType, setBusinessType] = useState("individual");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [panError, setPanError] = useState("");
  const [loading, setLoading] = useState(false);

  // Regex for Indian PAN: 5 letters, 4 digits, 1 letter
  const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isPanVerified, setIsPanVerified] = useState(false);
  const [panDetails, setPanDetails] = useState({
    fullName: "",
    dateOfBirth: "",
  });

  // Enable button if terms are accepted (validation happens on click)
  // If verified, button relies on email being present (basic check)
  const isButtonEnabled = isPanVerified
    ? email.length > 0
    : isTermsAccepted && pan.length > 0;

  const handlePanChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 10) {
      setPan(value);
      if (panError) setPanError("");
    }
  };

  const handleContinue = async () => {
    setLoading(true);
    setPanError("");
    setEmailError("");

    if (!isPanVerified) {
      // Step 1: Verify PAN
      if (!PAN_REGEX.test(pan)) {
        setPanError("Invalid PAN format");
        setLoading(false);
        return;
      }

      try {
        const res = await verifyPAN(
          userId,
          token,
          pan,
          businessType.toUpperCase()
        );
        setPanDetails({
          fullName: res.fullName,
          dateOfBirth: res.dob || res.dateOfBirth,
        });
        setIsPanVerified(true);
      } catch (err) {
        setPanError(err.message);
      }
    } else {
      // Step 2: Submit Email
      if (!email || !email.includes("@")) {
        setEmailError("Please enter a valid email ID");
        setLoading(false);
        return;
      }

      try {
        await submitEmail(userId, token, email);
        if (onComplete) onComplete(email, businessType);
      } catch (err) {
        setEmailError(err.message);
      }
    }

    setLoading(false);
  };

  return (
    // ROOT CONTAINER (From Figma Screenshot 1)
    // padding: 0 160px
    // gap: 88px (Between Form Content and Bottom Copyright/Footer area)
    // display: flex, flexDirection: column, justifyContent: center, alignItems: center
    <div
      style={{
        width: "100%",
        padding: "0 calc(160 * 1px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "calc(88 * 1px)", // Gap between form and footer area
      }}
    >
      {/* INPUT FORM CONTAINER (From Figma Screenshot 2) */}
      {/* Width: 400px (Content Box) */}
      {/* Gap: 24px (Between sections) */}
      <div
        style={{
          width: "calc(400 * 1px)",
          display: "flex",
          flexDirection: "column",
          gap: "calc(24 * 1px)",
        }}
      >
        {/* HEADER SECTION */}
        {/* Helper text and Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "calc(8 * 1px)", // Gap between H3 and P
          }}
        >
          {/* Main Heading: Height 40px */}
          <AuthHeading>Finish your sign‑up</AuthHeading>
          {/* Subtitle: Height 24px */}
          <AuthText>Tell us a few details to get started</AuthText>
        </div>

        {/* FORM CONTENT CONTAINER */}
        {/* Flex Column, Gap 24px between distinct sections */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "calc(24 * 1px)",
          }}
        >
          {/* SECTION 1: BUSINESS TYPE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "calc(8 * 1px)",
            }}
          >
            <AuthLabel>Business Type</AuthLabel>

            {/* Selection Buttons */}
            {/* Width 202px, Height 36px, Gap 8px */}
            <div className="w-[202px] h-[36px] flex gap-[8px]">
              <button
                onClick={() => !isPanVerified && setBusinessType("individual")}
                disabled={isPanVerified || loading}
                className="w-[97px] h-[36px]"
                style={{
                  display: "flex",
                  width: "calc(97 * 1px)",
                  padding:
                    "calc(var(--spacing-sp-10) var(--spacing-sp-16)*1px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "calc(var(--spacing-sp-6)*1px)",
                  borderRadius: "8px 0 0 var(--Corner-Radius-2xsmall, 8px)",
                  border:
                    "calc(var(--border-width-width-1) * 1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                  background:
                    businessType === "individual"
                      ? "var(--ui-color-surface-brand-primary-strong-10, #4c2399)"
                      : "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",
                  boxShadow:
                    "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
                  cursor: isPanVerified ? "default" : "pointer",
                  opacity:
                    isPanVerified && businessType !== "individual" ? 0.6 : 1,
                }}
              >
                <span
                  style={{
                    color:
                      businessType === "individual"
                        ? "#FFF"
                        : "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                    textAlign: "center",
                    fontFamily:
                      "var(--typogrraphy-label-inter-font-family, Inter)",
                    fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--typogrraphy-label-l-2-line-height, 16px)",
                    letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                    borderRadius: "8px 0 0 var(--Corner-Radius-2xsmall, 8px)",
                  }}
                >
                  Individual
                </span>
              </button>

              <button
                onClick={() => !isPanVerified && setBusinessType("entity")}
                disabled={isPanVerified || loading}
                style={{
                  display: "flex",
                  width: "calc(97 * 1px)",
                  padding:
                    "calc(var(--spacing-sp-10) * 1px) calc(var(--spacing-sp-16) * 1px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "calc(var(--spacing-sp-6)*1px)",
                  borderRadius:
                    "0 calc(var(--corner-radius-2xsmall) * 1px) calc(var(--corner-radius-2xsmall) * 1px) 0",
                  border:
                    "calc(var(--border-width-width-1) * 1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                  background:
                    businessType === "entity"
                      ? "var(--ui-color-surface-brand-primary-strong-10, #4c2399)"
                      : "var(--ui-color-surface-neutral-neutral-light-10, #FFF)",
                  boxShadow:
                    "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
                  cursor: isPanVerified ? "default" : "pointer",
                  opacity: isPanVerified && businessType !== "entity" ? 0.6 : 1,
                }}
              >
                <span
                  style={{
                    color:
                      businessType === "entity"
                        ? "#FFF"
                        : "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                    textAlign: "center",
                    fontFamily:
                      "var(--typogrraphy-label-inter-font-family, Inter)",
                    fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
                    fontStyle: "normal",

                    fontWeight: "500",
                  }}
                >
                  Entity
                </span>
              </button>
            </div>
          </div>

          {/* SECTION 2: PAN NUMBER INPUT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "calc(8 * 1px)",
            }}
          >
            <AuthLabel>PAN Number</AuthLabel>

            <AuthInput
              value={pan}
              onChange={handlePanChange}
              type="text"
              placeholder="Enter your PAN number"
              error={!!panError}
              readOnly={isPanVerified}
              style={
                isPanVerified ? { background: "#F3F4F6", color: "#6B7280" } : {}
              }
            />
            {panError && !isPanVerified && (
              <p
                style={{
                  color: "var(--ui-color-border-error-medium-20, #DC2626)",
                  fontFamily:
                    "var(--typogrraphy-label-inter-font-family, Inter)",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {panError}
              </p>
            )}
          </div>

          {/* SECTION 3: VERIFICATION DETAILS (Shown Only After Verify) */}
          {isPanVerified && (
            <>
              {/* Name Field */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(8 * 1px)",
                }}
              >
                <AuthLabel>Name (As Per PAN)</AuthLabel>
                <AuthInput
                  value={panDetails.fullName}
                  readOnly
                  style={{
                    borderRadius: "calc(var(--corner-radius-2xsmall, 8) * 1px)",
                    border:
                      "calc(var(--border-width-width-1, 1) * 1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                    background:
                      "var(--ui-color-surface-neutral-neutral-light-30, #f3f4f6)",
                  }}
                />
              </div>

              {/* DOB Field */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(8 * 1px)",
                }}
              >
                <AuthLabel>Date of Birth (As Per PAN)</AuthLabel>
                <AuthInput
                  value={panDetails.dateOfBirth}
                  readOnly
                  style={{
                    borderRadius: "calc(var(--corner-radius-2xsmall, 8) * 1px)",
                    border:
                      "calc(var(--border-width-width-1, 1) * 1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                    background:
                      "var(--ui-color-surface-neutral-neutral-light-30, #f3f4f6)",
                  }}
                />
              </div>

              {/* Email Field */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(8 * 1px)",
                }}
              >
                <AuthLabel>E-mail ID</AuthLabel>
                <AuthInput
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  type="email"
                  placeholder="Enter your E-Mail ID"
                  error={!!emailError}
                />
                {emailError && (
                  <p
                    style={{
                      color: "var(--ui-color-border-error-medium-20, #DC2626)",
                      fontFamily:
                        "var(--typogrraphy-label-inter-font-family, Inter)",
                      fontSize: "14px",
                      fontWeight: "400",
                      marginTop: "calc(8 * 1px)",
                    }}
                  >
                    {emailError}
                  </p>
                )}
              </div>
            </>
          )}

          {/* SECTION 4: ACTION BUTTON */}
          <div>
            <AuthButton
              type="button"
              disabled={!isButtonEnabled || loading}
              onClick={handleContinue}
            >
              {loading ? "Loading..." : isPanVerified ? "Next" : "Continue"}
            </AuthButton>
          </div>

          {/* GROUPS TERMS & FOOTER NOTE TO CONTROL SPACING (20px) */}
          {!isPanVerified && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "calc(20 * 1px)",
              }}
            >
              {/* SECTION 5: TERMS */}
              <div>
                <AuthCheckbox
                  checked={isTermsAccepted}
                  onChange={(e) => setIsTermsAccepted(e.target.checked)}
                  label={
                    <span>
                      I have read and accept the{" "}
                      <Link
                        className=" hover:underline"
                        style={{
                          color:
                            "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",

                          fontFamily:
                            "var(--typogrraphy-paragraph-inter-font-family, inter)",
                          fontSize:
                            "calc(var(--typogrraphy-paragraph-para-3-size) * 1px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "calc(var(--typogrraphy-paragraph-para-3-line-height, 20px) * 1px)",
                          letterSpacing:
                            "calc(var(--typogrraphy-paragraph-letter-spacing, 0) * 1px)",
                        }}
                        href="/terms"
                      >
                        Terms of Service
                      </Link>{" "}
                      and <br />
                      <Link
                        className=" hover:underline"
                        style={{
                          color:
                            "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",

                          fontFamily:
                            "var(--typogrraphy-paragraph-inter-font-family, inter)",
                          fontSize:
                            "calc(var(--typogrraphy-paragraph-para-3-size) * 1px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "calc(var(--typogrraphy-paragraph-para-3-line-height, 20px) * 1px)",
                          letterSpacing:
                            "calc(var(--typogrraphy-paragraph-letter-spacing, 0) * 1px)",
                        }}
                        href="/privacy"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  }
                />
              </div>

              {/* SECTION 6: FOOTER NOTE */}
              <div>
                <AuthNote>
                  Registering as an entity? Use the mobile number <br />
                  and PAN of any one director or owner
                </AuthNote>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPAN;
