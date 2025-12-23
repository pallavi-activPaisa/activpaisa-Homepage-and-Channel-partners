"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthHeading from "@/components/ui/Auth/AuthHeading";
import AuthText from "@/components/ui/Auth/AuthText";
import AuthLabel from "@/components/ui/Auth/AuthLabel";
import PhoneInput from "@/components/ui/Auth/PhoneInput";
import AuthButton from "@/components/ui/Auth/AuthButton";
import AuthInputError from "@/components/ui/Auth/AuthInputError";
import AuthCheckbox from "@/components/ui/Auth/AuthCheckbox";

import SignupOTP from "./SignupOTP";
import SignupPAN from "./SignupPAN";
import SignupPassword from "./SignupPassword";
import SignupBusinessDetails from "./SignupBusinessDetails";
import SignupSuccess from "./SignupSuccess";

import { sendOTP } from "../../lib/api.js";

const SignupForm = () => {
  const [authData, setAuthData] = useState({ userId: "", token: "" });
  const [step, setStep] = useState("PHONE");
  const [signupType, setSignupType] = useState("individual");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
      if (error) setError("");
    }
  };

  const handleGetOtp = async () => {
    if (phone.length !== 10) {
      setError("Enter valid mobile number");
      return;
    }

    try {
      setError("");

      const res = await sendOTP(phone);

      localStorage.setItem("mobile", phone);
      console.log(res);

      setStep("OTP");
    } catch (err) {
      setError(err.message);
    }
  };

  const isButtonEnabled = phone.length === 10 && isTermsAccepted;

  if (step === "OTP") {
    return (
      <SignupOTP
        phone={phone}
        error={otpError}
        onBack={() => setStep("PHONE")}
        onConfirm={(data) => {
          // data contains { ...res, token, userId } from SignupOTP
          setAuthData({ userId: data.userId, token: data.token });
          setStep("PAN");
        }}
      />
    );
  }

  if (step === "PAN") {
    return (
      <SignupPAN
        userId={authData.userId}
        token={authData.token}
        onComplete={(data, type) => {
          setSignupType(type);
          setEmail(data);
          if (type === "entity") {
            setStep("BUSINESS_DETAILS");
          } else {
            setStep("PASSWORD");
          }
        }}
      />
    );
  }

  if (step === "BUSINESS_DETAILS") {
    return (
      <SignupBusinessDetails
        userId={authData.userId}
        token={authData.token}
        onComplete={() => {
          setStep("PASSWORD");
        }}
      />
    );
  }

  if (step === "PASSWORD") {
    return (
      <SignupPassword
        email={email}
        userId={authData.userId}
        token={authData.token}
        onComplete={() => {
          setStep("SUCCESS");
        }}
      />
    );
  }

  if (step === "SUCCESS") {
    return (
      <SignupSuccess
        onFinish={() => console.log("Finish Verification")}
        onJoinCommunity={() => console.log("Join WhatsApp")}
      />
    );
  }

  return (
    <div
      style={{
        width: "100%",
        padding: "0 calc(160 * 1px)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "calc(400 * 1px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "calc(32 * 1px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "calc(8 * 1px)",
            alignSelf: "stretch",
          }}
        >
          <AuthHeading>Become a Channel Partner</AuthHeading>

          <AuthText>Start by verifying your phone number</AuthText>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "calc(24 * 1px)",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "calc(8 * 1px)",
              alignSelf: "stretch",
            }}
          >
            <AuthLabel>Phone Number</AuthLabel>

            <PhoneInput
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your 10-digit Phone number"
              error={!!error}
            />
            {error && <AuthInputError>{error}</AuthInputError>}
          </div>

          <AuthButton
            type="button"
            disabled={!isButtonEnabled}
            onClick={handleGetOtp}
          >
            Get OTP
          </AuthButton>

          <div style={{ width: "100%" }}>
            <AuthCheckbox
              checked={isTermsAccepted}
              onChange={(e) => setIsTermsAccepted(e.target.checked)}
              label={
                <span>
                  I have read and accept the{" "}
                  <Link href="/terms">Terms of Service</Link> and{" "}
                  <Link href="/privacy">Privacy Policy</Link>
                </span>
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
