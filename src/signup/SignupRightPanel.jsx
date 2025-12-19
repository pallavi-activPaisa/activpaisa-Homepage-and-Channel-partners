import React from "react";
import SignupHeader from "./SignupHeader";
import SignupForm from "./SignupForm";
import SignupFooter from "./SignupFooter";

const SignupRightPanel = () => {
  return (
    <div className="w-[720px] h-[695px] flex-1 flex flex-col  overflow-y-auto bg-white relative">
      <SignupHeader />

      <div className="flex-1 flex items-center justify-center w-full">
        <SignupForm />
      </div>

      <SignupFooter />
    </div>
  );
};

export default SignupRightPanel;
