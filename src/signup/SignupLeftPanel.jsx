import React from "react";

const SignupLeftPanel = () => {
    return (
        <div
            className="hidden md:flex flex-1 justify-center items-center h-full p-5 bg-white"
        >
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
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
