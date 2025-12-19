import React from "react";
import SignupLeftPanel from "./SignupLeftPanel";
import SignupRightPanel from "./SignupRightPanel";

const All = () => {
  return (
    <div className="w-[1440px] h-[695px] flex bg-amber-300  justify-center items-center ">
      <SignupLeftPanel />
      <SignupRightPanel />
    </div>
  );
};

export default All;
