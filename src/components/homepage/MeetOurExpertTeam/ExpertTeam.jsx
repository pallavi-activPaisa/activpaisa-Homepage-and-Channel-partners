// "use client";

// import TeamLeftContent from "./TeamLeftContent";
// import TeamRightBoxes from "./TeamRightBoxes";

// export default function ExpertTeam() {
//   return (
//     <section
//       className="w-full p-10 rounded-[24px] mt-[40px]"
//       style={{
//         background:
//           "linear-gradient(45deg, #BD8668 0%, #5D51AF 50%, #3437C8 100%)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <TeamLeftContent />
//         <TeamRightBoxes />
//       </div>
//     </section>
//   );
// }

"use client";

import TeamLeftContent from "./TeamLeftContent";
import TeamRightBoxes from "./TeamRightBoxes";

export default function ExpertTeam() {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        style={{
          background:
            "linear-gradient(45deg, #BD8668 0%, #5D51AF 50%, #3437C8 100%)",

          borderRadius: "24px",
          padding: "74px 48px",
          marginTop: "40px",
          // width: " 1260px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1260px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "10px",
            margin: "0 auto",
          }}
        >
          <TeamLeftContent />
          <TeamRightBoxes />
        </div>
      </div>
    </div>
  );
}
