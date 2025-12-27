import React, { useState, useEffect, useRef, forwardRef } from "react";
import AuthHeading from "@/components/ui/Auth/AuthHeading";
import AuthText from "@/components/ui/Auth/AuthText";
import AuthButton from "@/components/ui/Auth/AuthButton";

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
          color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "16px",
          outline: "none",
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
OtpInputItem.displayName = "OtpInputItem";

const AdminOTP = ({ email, onBack, onConfirm, isLoading, error, onResend }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const inputRefs = useRef([]);
  // Back button hover state, if needed for custom styling, though standard button might be better.
  const [backHover, setBackHover] = useState(false);

  // --- TIMER ---
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // --- INPUT CHANGE ---
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value !== "" && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  // --- BACKSPACE FOCUS ---
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleConfirm = () => {
    const finalOtp = otp.join("");
    if (onConfirm) onConfirm(finalOtp);
  };

  const handleResend = () => {
    setTimeLeft(30);
    setOtp(["", "", "", ""]);
    if (inputRefs.current[0]) inputRefs.current[0].focus();
    if (onResend) onResend();
  }

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="w-full flex flex-col relative h-full justify-center items-center">

      {/* Back Button */}
      {/* Keeping visual style from previous file but ensuring functionality */}
      {/* <button
        className="absolute top-[16px] left-[16px] flex items-center justify-center gap-1 px-2 py-1 rounded text-sm font-medium text-gray-700 transition-colors"
        onClick={onBack}
        style={{ cursor: "pointer" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
           <path d="M-0.000154018 5.78362C-0.000788212 5.89329 0.0202327 6.00201 0.0617032 6.10354C0.103174 6.20507 0.164278 6.29742 0.241512 6.37529L5.24151 11.3753C5.39843 11.5322 5.61126 11.6204 5.83318 11.6204C6.0551 11.6204 6.26793 11.5322 6.42485 11.3753C6.58177 11.2184 6.66992 11.0055 6.66992 10.7836C6.66992 10.5617 6.58177 10.3489 6.42485 10.192L2.00818 5.78362L6.41651 1.37529C6.55303 1.21587 6.62437 1.0108 6.61627 0.801074C6.60817 0.591344 6.52123 0.392394 6.37281 0.243982C6.2244 0.0955706 6.02545 0.00862789 5.81572 0.000526428C5.60599 -0.00757408 5.40093 0.0637627 5.24151 0.200285L0.241512 5.20028C0.0875587 5.3555 0.000766277 5.565 -0.000154018 5.78362Z" fill="#374151"/>
        </svg>
        Back
      </button> */}
      {/* Assuming Layout handles generic Back logic or it's not strictly needed if in a modal-like card in center. Logic in images doesn't heavily show a back button in the card itself, maybe outside. But I'll leave the prop if needed. The referenced image doesn't show a back button inside the white card. */}

      <div style={{ width: "400px", padding: "0", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>

          {/* HEADING & SUBTEXT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignSelf: "stretch", textAlign: "center" }}>
            <AuthHeading style={{ textAlign: "center" }}>Almost there!<br />Enter your code</AuthHeading>
            <AuthText style={{ textAlign: "center", color: '#6B7280' }}>
              Enter the one-time password (OTP) sent to <br />
              <span className="font-medium text-gray-900">{email}</span>{' '}
              <span
                onClick={onBack}
                style={{
                  color: "var(--ui-color-surface-brand-primary-strong-10, #4c2399)",
                  cursor: "pointer",
                  fontWeight: 500,
                  marginLeft: '4px'
                }}
              >
                Change Email
              </span>
            </AuthText>
          </div>

          {/* OTP INPUTS */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              {otp.map((data, index) => (
                <OtpInputItem
                  key={index}
                  index={index}
                  value={data}
                  error={!!error}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={(e) => e.target.select()}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <p style={{ color: "#dc2626", fontSize: "14px", marginTop: "-12px" }}>
                {error}
              </p>
            )}

            {/* CONFIRM BUTTON */}
            <AuthButton
              type="button"
              disabled={!isOtpComplete || isLoading}
              onClick={handleConfirm}
              style={{ width: "100%" }}
              isLoading={isLoading}
            >
              Confirm
            </AuthButton>

            {/* TIMER / RESEND */}
            <div style={{ fontSize: "14px", color: "#6B7280" }}>
              {timeLeft > 0 ? (
                <>
                  Resend Code in <span style={{ color: "#4c2399", fontWeight: 500 }}>{timeLeft} sec</span>
                </>
              ) : (
                <span onClick={handleResend} style={{ color: "#4c2399", fontWeight: 500, cursor: "pointer" }}>
                  Resend Code
                </span>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOTP;
