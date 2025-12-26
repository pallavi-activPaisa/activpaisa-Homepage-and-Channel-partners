import React, { useState, useEffect, useRef, forwardRef } from "react";
import AuthHeading from "@/components/ui/Auth/AuthHeading";
import AuthText from "@/components/ui/Auth/AuthText";
import AuthButton from "@/components/ui/Auth/AuthButton";
import { verifyOTP, sendOTP } from "../../../lib/api.js";

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
          border: `1px solid ${error
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

const LoginOTP = ({ mode = 'phone', identifier, onBack, onConfirm, error }) => {
  // --- STATE from Working Code ---
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const [backHover, setBackHover] = useState(false);

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
      // DUMMY OTP CHECK - 1234
      // DUMMY OTP CHECK - 1234 for specific test user
      if (identifier === '7310249234') {
        if (finalOtp === "1234") {
          console.log("Dummy OTP verified");
          // Simulate API response delay
          await new Promise(resolve => setTimeout(resolve, 1000));

          const mockData = {
            token: "dummy-token-123",
            userId: "dummy-user-456",
            message: "Login successful"
          };

          localStorage.setItem("token", mockData.token);
          localStorage.setItem("userId", mockData.userId);
          if (mode === 'phone') {
            localStorage.setItem("mobile", identifier);
          } else {
            localStorage.setItem("email", identifier);
          }

          onConfirm(mockData);
          setLoading(false);
          return;
        } else {
          throw new Error("Invalid OTP. Please enter 1234.");
        }
      }

      // NOTE: Using identifier as mobile for both cases for now, assuming backend handles it or structure is similar
      const res = await verifyOTP(identifier, finalOtp);
      console.log("OTP Verify Response:", res);

      // Extract token and userId safely
      const token = res.token || res.data?.token;
      const userId =
        res.userId || res.data?.userId || res.data?.id || res.data?.user?.id;

      console.log("Extracted Auth Data:", { token, userId });

      if (token && userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        if (mode === 'phone') {
          localStorage.setItem("mobile", identifier);
        } else {
          localStorage.setItem("email", identifier);
        }
      }

      // Pass normalized data + original response
      onConfirm({ ...res, token, userId });
    } catch (err) {
      console.error("OTP Verification Error:", err);
      // For demo purposes, we still default to error if not 1234
      setApiError(err.message);
    }

    setLoading(false);
  };

  // --- RESEND OTP (Working Logic) ---
  const handleResendOtp = async () => {
    setLoading(true);
    setApiError("");

    try {
      await sendOTP(identifier);
      setOtp(["", "", "", ""]);
      if (inputRefs.current[0]) inputRefs.current[0].focus();
      setTimeLeft(30);
    } catch (err) {
      setApiError(err.message);
    }

    setLoading(false);
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const displayIdentifier = mode === 'phone' ? `+91-${identifier}` : identifier;
  const changeText = mode === 'phone' ? "Change Phone number" : "Change Email Address";
  const verifyText = mode === 'phone' ? "Verify your number" : "Verify your email";

  return (
    <div className="w-full flex flex-col relative h-full justify-center items-center ">
      <button
        className="w-[81px] h-[36px] p-[8px] absolute top-[16px] left-[16px] flex justify-center items-center   gap-[4px]"
        style={{
          backgroundColor: backHover
            ? "var(--ui-color-surface-neutral-neutral-light-30, #f3f4f6)"
            : "white",
          color:
            "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",

          fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
          fontSize: "calc(var(--typogrraphy-label-l-2-size, 14px) * 1px)",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight:
            "calc(var(--typogrraphy-label-l-2-line-height, 16px) * 1px)",
          letterSpacing:
            "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
          borderRadius: "calc(var(--corner-radius-2xsmall, 8px) * 1px)",
          cursor: "Pointer",
        }}
        onClick={onBack}
        onMouseEnter={() => setBackHover(true)}
        onMouseLeave={() => setBackHover(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
        >
          <path
            d="M-0.000154018 5.78362C-0.000788212 5.89329 0.0202327 6.00201 0.0617032 6.10354C0.103174 6.20507 0.164278 6.29742 0.241512 6.37529L5.24151 11.3753C5.39843 11.5322 5.61126 11.6204 5.83318 11.6204C6.0551 11.6204 6.26793 11.5322 6.42485 11.3753C6.58177 11.2184 6.66992 11.0055 6.66992 10.7836C6.66992 10.5617 6.58177 10.3489 6.42485 10.192L2.00818 5.78362L6.41651 1.37529C6.55303 1.21587 6.62437 1.0108 6.61627 0.801074C6.60817 0.591344 6.52123 0.392394 6.37281 0.243982C6.2244 0.0955706 6.02545 0.00862789 5.81572 0.000526428C5.60599 -0.00757408 5.40093 0.0637627 5.24151 0.200285L0.241512 5.20028C0.0875587 5.3555 0.000766277 5.565 -0.000154018 5.78362Z"
            fill="#374151"
          />
        </svg>
        Back
      </button>
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
              {verifyText}
            </AuthHeading>

            <AuthText style={{ textAlign: "center" }}>
              Enter the one-time password (OTP) sent to <br />
              {displayIdentifier}.{" "}
              <span
                onClick={onBack}
                style={{
                  color:
                    "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
                  cursor: "pointer",
                  fontWeight: 400,
                }}
              >
                {changeText}
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
    </div>
  );
};

export default LoginOTP;
