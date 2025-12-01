"use client";

import TeamLeftContent from "./TeamLeftContent";
import TeamRightBoxes from "./TeamRightBoxes";

export default function ExpertTeam() {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        style={{
          // ⭐ Correct converted gradient (from your Figma variables)
          // background:
          //   "var(--Gradients-G1, linear-gradient(45deg, var(--Surface-Container-Gradients-G1, #BD8668) 0%, var(--Surface-Container-Gradients-G2, #5D51AF) 50%, var(--Surface-Container-Gradients-G3, #3437C8) 100%))",

          borderRadius: "var(--Corner-Radius-large, 24px)",
          background:
            "var(--Gradients-G1, linear-gradient(45deg, var(--Surface-Container-Gradients-G1, #BD8668) 0%, var(--Surface-Container-Gradients-G2, #5D51AF) 50%, var(--Surface-Container-Gradients-G3, #3437C8) 100%))",
          padding: "74px 48px",
          marginTop: "40px",
          width: "1260px",
          marginRight: "17px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <TeamLeftContent />
          <TeamRightBoxes />
        </div>
      </div>
    </div>
  );
}
