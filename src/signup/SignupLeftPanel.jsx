import React from "react";

const SignupLeftPanel = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "720px",
        height: "695px",
        padding: "20px",


      }}
    >
      <div
        style={{
          display: "flex",
          width: "680px",
          height: "655px",
          padding: "64px 40px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "24px",
          background:
            "var(--gradients-g1, linear-gradient(45deg, var(--ui-color-gradient-colors-gradient-g1-10, #BD8668) 0%, var(--ui-color-gradient-colors-gradient-g1-20, #5D51AF) 50%, var(--ui-color-gradient-colors-gradient-g1-30, #3437C8) 100%))",
        }}
      ></div>
    </div>
  );
};

export default SignupLeftPanel;
