// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import AuthHeading from "@/components/ui/Auth/AuthHeading";
// import AuthText from "@/components/ui/Auth/AuthText";
// import AuthLabel from "@/components/ui/Auth/AuthLabel";
// import PhoneInput from "@/components/ui/Auth/PhoneInput";
// import AuthButton from "@/components/ui/Auth/AuthButton";
// import AuthInputError from "@/components/ui/Auth/AuthInputError";
// import AuthCheckbox from "@/components/ui/Auth/AuthCheckbox";

// import SignupOTP from "./SignupOTP";
// import SignupPAN from "./SignupPAN";
// import SignupPassword from "./SignupPassword";
// import SignupBusinessDetails from "./SignupBusinessDetails";
// import SignupSuccess from "./SignupSuccess";
// import { sendOTP } from "@/lib/api";

// const SignupForm = () => {
//   const [step, setStep] = useState("PHONE"); // PHONE | OTP | PAN | PASSWORD
//   const [signupType, setSignupType] = useState("individual"); // individual | entity
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState(""); // Shared email state
//   const [error, setError] = useState("");
//   const [otpError, setOtpError] = useState("");
//   const [isTermsAccepted, setIsTermsAccepted] = useState(false);

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value) && value.length <= 10) {
//       setPhone(value);
//       if (error) setError("");
//     }
//   };

//   const handleBlur = () => {
//     // Optional blur validation
//   };

//   const handleGetOtp = () => {
//     // Validation logic requested by user
//     if (phone === "7310249234") {
//       setError("");
//       setOtpError("");
//       setStep("OTP");
//     } else {
//       setError("Verify and enter the correct phone number");
//     }
//   };

//   const handleConfirmOtp = (otp) => {
//     // TESTING ONLY: 1234 is correct
//     if (otp === "1234") {
//       console.log("OTP Verified!");
//       setOtpError("");
//       setStep("PAN");
//     } else {
//       setOtpError("Incorrect OTP. Please try again.");
//     }
//   };

//   // Button enables for ANY 10-digit number AND terms accepted
//   const isButtonEnabled = phone.length === 10 && isTermsAccepted;

//   if (step === "OTP") {
//     return (
//       <SignupOTP
//         phone={phone}
//         error={otpError}
//         onBack={() => setStep("PHONE")}
//         onConfirm={handleConfirmOtp}
//       />
//     );
//   }

//   if (step === "PAN") {
//     return (
//       <SignupPAN
//         onComplete={(data, type) => {
//           setSignupType(type);
//           setEmail(data);
//           if (type === "entity") {
//             setStep("BUSINESS_DETAILS");
//           } else {
//             setStep("PASSWORD");
//           }
//         }}
//       />
//     );
//   }

//   if (step === "BUSINESS_DETAILS") {
//     return (
//       <SignupBusinessDetails
//         onComplete={() => {
//           // Email is NOT set here for Entity flow, allow user to enter it in next step
//           setStep("PASSWORD");
//         }}
//       />
//     );
//   }

//   if (step === "PASSWORD") {
//     return (
//       <SignupPassword
//         email={email}
//         // Email is now pre-filled from PAN step for both flows, so it should be read-only (undefined onEmailChange)
//         onComplete={() => {
//           setStep("SUCCESS");
//         }}
//       />
//     );
//   }

//   if (step === "SUCCESS") {
//     return (
//       <SignupSuccess
//         onFinish={() => console.log("Finish Verification")}
//         onJoinCommunity={() => console.log("Join WhatsApp")}
//       />
//     );
//   }

//   return (
//     <div
//       style={{
//         width: "100%",
//         padding: "0 calc(160 * 1px)",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       {/* CONTENT COLUMN */}
//       <div
//         style={{
//           width: "calc(400 * 1px)",

//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "calc(32 * 1px)", // Figma main vertical gap
//         }}
//       >
//         {/* HEADING */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "calc(8 * 1px)",
//             alignSelf: "stretch",
//           }}
//         >
//           <AuthHeading>Become a Channel Partner</AuthHeading>

//           <AuthText>Start by verifying your phone number</AuthText>
//         </div>

//         {/* FORM */}
//         <form
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "calc(24 * 1px)",
//             alignSelf: "stretch",
//           }}
//         >
//           {/* PHONE */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "calc(8 * 1px)",
//               alignSelf: "stretch",
//             }}
//           >
//             <AuthLabel>Phone Number</AuthLabel>

//             <PhoneInput
//               value={phone}
//               onChange={handlePhoneChange}
//               onBlur={handleBlur}
//               placeholder="Enter your 10-digit Phone number"
//               error={!!error}
//             />
//             {error && <AuthInputError>{error}</AuthInputError>}
//           </div>

//           {/* OTP BUTTON */}
//           <AuthButton
//             type="button"
//             disabled={!isButtonEnabled}
//             onClick={handleGetOtp}
//           >
//             Get OTP
//           </AuthButton>

//           {/* TERMS */}
//           <div style={{ width: "100%" }}>
//             <AuthCheckbox
//               checked={isTermsAccepted}
//               onChange={(e) => setIsTermsAccepted(e.target.checked)}
//               label={
//                 <span>
//                   I have read and accept the{" "}
//                   <Link
//                     href="/terms"
//                     style={{
//                       color:
//                         "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
//                       textDecoration: "none",
//                     }}
//                   >
//                     Terms of Service
//                   </Link>{" "}
//                   and{" "}
//                   <Link
//                     href="/privacy"
//                     style={{
//                       color:
//                         "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-p40, #4c2399)",
//                       textDecoration: "none",
//                     }}
//                   >
//                     <br /> Privacy Policy
//                   </Link>
//                 </span>
//               }
//             />
//           </div>
//         </form>
//         {/* FOOTER */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "calc(20 * 1px)", // Figma: 20px between note & login
//             alignSelf: "stretch",
//             alignItems: "center",
//           }}
//         >
//           {/* INFO NOTE */}
//           <div
//             style={{
//               display: "flex",
//               width: "calc(400 * 1px)",
//               padding: "calc(6 * 1px) calc(8 * 1px)",
//               flexDirection: "column",
//               gap: "calc(16 * 1px)",
//               borderRadius: "calc(8 * 1px)",
//               background:
//                 "var(--ui-color-surface-warning-warning-medium-20, #fef3c7)",
//             }}
//           >
//             <AuthText
//               style={{
//                 color:
//                   "var(--ui-color-on-surface-warning-medium-20-on-warning-medium-20, #d97706)",
//                 fontSize:
//                   "calc(var(--typogrraphy-paragraph-para-4-size) * 1px)",
//                 lineHeight:
//                   "calc(var(--typogrraphy-paragraph-para-4-line-height) * 1px)",
//               }}
//             >
//               Registering as an entity? Use the mobile number <br /> and PAN of
//               any one director or owner
//             </AuthText>
//           </div>
//           {/* LOGIN */}
//           <div
//             style={{
//               margin: 0,
//               textAlign: "center",
//               color:
//                 "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
//               fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
//               fontSize: "calc(var(--typogrraphy-label-l-3-size, 12) * 1px)",
//               fontStyle: "normal",
//               fontWeight: 400,
//               lineHeight:
//                 "calc(var(--typogrraphy-label-l-3-line-height, 14) * 1px)",
//               letterSpacing:
//                 "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
//             }}
//           >
//             Already a Partner?{" "}
//             <Link
//               href="/login"
//               style={{
//                 color:
//                   "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-p40, #4c2399)",
//                 fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
//                 fontSize: "calc(var(--typogrraphy-label-l-3-size, 12) * 1px)",
//                 fontStyle: "normal",
//                 fontWeight: 400,
//                 lineHeight:
//                   "calc(var(--typogrraphy-label-l-3-line-height, 14) * 1px)",
//                 letterSpacing:
//                   "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
//                 textDecoration: "none",
//               }}
//             >
//               Log in
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

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

import { sendOTP } from "../../lib/api.js"; // ⭐ ADDED

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

  // ... BUSINESS_DETAILS ...

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
