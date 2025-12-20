import React from "react";
import SignupLeftPanel from "./SignupLeftPanel";
import SignupRightPanel from "./SignupRightPanel";

const All = () => {
  return (
    <div className="w-full h-screen flex bg-white overflow-hidden">
      <SignupLeftPanel />
      <SignupRightPanel />
    </div>
  );
};

export default All;
