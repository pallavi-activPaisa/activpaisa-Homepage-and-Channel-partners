import React, { useState, useEffect, useRef, forwardRef } from "react";
import AuthHeading from "@/components/ui/Auth/AuthHeading";
import AuthText from "@/components/ui/Auth/AuthText";
import AuthButton from "@/components/ui/Auth/AuthButton";
import { verifyOTP, sendOTP } from "../../lib/api.js";

const OtpInputItem = forwardRef(
  ({ value, onChange, onKeyDown, onFocus, error, index }, ref) => {
    const [isHover, setIsHover] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const baseBorder = "var(--ui-color-border-default-bd-neutral-medium-10)";
    const hoverBorder =
      "var(--ui-color-border-default-bd-neutral-dark-20, #9CA3AF)";
    const focusColor = "var(--ui-color-border-primary-light-10, #6D28D9)";
    const errorColor = "var(--ui-color-border-error-medium-20, #DC2626)";

    return (
      <input
        ref={ref}
        type="text"
        inputMode="numeric"
        maxLength="1"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={(e) => {
          setIsFocused(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={() => setIsFocused(false)}
        style={{
          width: "calc(46 * 1px)",
          height: "calc(46 * 1px)",
          borderRadius: "calc(8 * 1px)",
          background: "#FFF",
          textAlign: "center",

          /* Typography Update */
          color:
            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40)",

          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "16px",

          outline: "none",

          /* Interactive Border Logic */
          border: `1px solid ${
            error
              ? errorColor
              : isFocused
                ? focusColor
                : isHover
                  ? hoverBorder
                  : baseBorder
          }`,

          boxShadow: isFocused
            ? `0 0 0 3px ${error ? "rgba(220, 38, 38, 0.12)" : "rgba(109, 40, 217, 0.12)"}`
            : "none",

          transition: "border-color 0.15s ease, box-shadow 0.15s ease",
        }}
      />
    );
  }
);

const SignupOTP = ({ phone, onBack, onConfirm, error }) => {
  // --- STATE from Working Code ---
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  // --- TIMER ---
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // --- INPUT CHANGE (Working Logic) ---
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    if (apiError) setApiError("");
  };

  // --- BACKSPACE FOCUS (Working Logic) ---
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // --- VERIFY OTP (Working Logic) ---
  const handleVerifyOtp = async () => {
    const finalOtp = otp.join("");
    setLoading(true);
    setApiError("");

    try {
      const res = await verifyOTP(phone, finalOtp);
      console.log("OTP Verify Response:", res);

      // Extract token and userId safely
      const token = res.token || res.data?.token;
      const userId =
        res.userId || res.data?.userId || res.data?.id || res.data?.user?.id;

      console.log("Extracted Auth Data:", { token, userId });

      if (token && userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("mobile", phone);
      }

      // Pass normalized data + original response
      onConfirm({ ...res, token, userId });
    } catch (err) {
      console.error("OTP Verification Error:", err);
      setApiError(err.message);
    }

    setLoading(false);
  };

  // --- RESEND OTP (Working Logic) ---
  const handleResendOtp = async () => {
    setLoading(true);
    setApiError("");

    try {
      await sendOTP(phone);
      setOtp(["", "", "", ""]);
      if (inputRefs.current[0]) inputRefs.current[0].focus();
      setTimeLeft(30);
    } catch (err) {
      setApiError(err.message);
    }

    setLoading(false);
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div
      style={{
        width: "400px",
        padding: "0 calc(160 * 1px)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "calc(432 * 1px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "calc(24 * 1px)",
        }}
      >
        {/* HEADING & SUBTEXT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "calc(8 * 1px)",
            alignSelf: "stretch",
            textAlign: "center",
          }}
        >
          <AuthHeading style={{ textAlign: "center" }}>
            Verify your number
          </AuthHeading>

          <AuthText style={{ textAlign: "center" }}>
            Enter the one-time password (OTP) sent to <br />
            +91-{phone}.{" "}
            <span
              onClick={onBack}
              style={{
                color:
                  "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
                cursor: "pointer",
                fontWeight: 400,
              }}
            >
              Change Phone number
            </span>
          </AuthText>
        </div>

        {/* OTP INPUTS */}
        <div
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "calc(8 * 1px)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "calc(8 * 1px)",
              justifyContent: "center",
            }}
          >
            {otp.map((data, index) => (
              <OtpInputItem
                key={index}
                index={index}
                value={data}
                error={!!apiError}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={(e) => e.target.select()}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>

          {/* ERROR MESSAGE */}
          {apiError && (
            <p
              style={{
                margin: 0,
                color: "var(--ui-color-border-error-medium-20, #dc2626)",
                fontFamily:
                  "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                fontSize:
                  "calc(var(--typogrraphy-paragraph-para-4-size, 12) * 1px)",
                fontWeight: 400,
                lineHeight:
                  "calc(var(--typogrraphy-paragraph-para-4-line-height, 16) * 1px)",
              }}
            >
              {apiError}
            </p>
          )}
        </div>

        {/* CONFIRM BUTTON */}
        <AuthButton
          type="button"
          disabled={!isOtpComplete || loading}
          onClick={handleVerifyOtp}
        >
          {loading ? "Verifying..." : "Confirm"}
        </AuthButton>

        {/* TIMER / RESEND */}
        <div
          style={{
            display: "flex",
            height: "20px",
            justifyContent: "flex-end",
            color:
              "var(--UI-Color-On-Surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "16px",
            alignItems: "center",
            gap: "var(--Spacing-sp-8, 8px)",
            flex: "1 0 0",
          }}
        >
          {timeLeft > 0 ? (
            <>
              Resend Code in{" "}
              <span
                style={{
                  color:
                    "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
                  fontWeight: 400,
                }}
              >
                {timeLeft} sec
              </span>
            </>
          ) : (
            <span
              onClick={handleResendOtp}
              style={{
                color:
                  "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
                fontWeight: 400,
                cursor: "pointer",
              }}
            >
              Resend Code
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupOTP;
