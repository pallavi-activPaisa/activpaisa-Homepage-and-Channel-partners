import React from "react";
import SignupHeader from "./SignupHeader";
import SignupForm from "./SignupForm";
import SignupFooter from "./SignupFooter";

const SignupRightPanel = () => {
  return (
    <div className="flex-1 h-full flex flex-col bg-white overflow-y-auto relative">
      <SignupHeader />

      <div className="flex-1 flex items-center justify-center w-full mt-[60px]">
        <SignupForm />
      </div>

      <SignupFooter />
    </div>
  );
};

export default SignupRightPanel;
