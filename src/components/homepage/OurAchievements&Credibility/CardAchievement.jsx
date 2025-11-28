// "use client";
// import React from "react";
// import Icon from "@/components/ui/Icons/Icon";

// const CardAchievement = ({ number, title, desc, icon: IconComp }) => {
//   return (
//     <div
//       className="bg-white rounded-2xl p-6 shadow-sm flex flex-col"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//       }}
//     >
//       {/* Icon — only if provided */}
//       {IconComp && (
//         <div
//           className="w-12 h-12 rounded-xl bg-[#F3EEFF] flex items-center justify-center"
//           style={{ marginBottom: "24px" }} // Icon → Number gap
//         >
//           <IconComp />
//         </div>
//       )}

//       {/* Number */}
//       <p
//         className="achievement-number"
//         style={{ marginBottom: title ? "8px" : "8px" }} // Number → Title/Description
//       >
//         {number}
//       </p>

//       {/* Title (optional) */}
//       {title && (
//         <p
//           className="achievement-title "
//           // Title → Description
//         >
//           {title}
//         </p>
//       )}

//       {/* Description */}
//       <p className="achievement-desc">{desc}</p>
//     </div>
//   );
// };

// export default CardAchievement;

"use client";
import React from "react";
import Icon from "@/components/ui/Icons/Icon";

const CardAchievement = ({ number, title, desc, icon: IconComp }) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm flex flex-col w-[300px]"
      style={{ alignItems: "flex-start" }}
    >
      {/* Icon — only if provided */}
      {IconComp && (
        <div
          className="w-12 h-12 rounded-xl bg-[#F3EEFF] flex items-center justify-center"
          style={{ marginBottom: "24px" }} // Icon → Number/Title gap
        >
          <Icon icon={IconComp} />
        </div>
      )}

      {/* Number */}
      {number && !title && (
        <p className="achievement-heading">{number}</p> // acts as heading if no title
      )}

      {/* Number for cards that also have title */}
      {number && title && <p className="achievement-number">{number}</p>}

      {/* Title */}
      {title && <p className="achievement-heading">{title}</p>}

      {/* Description */}
      {desc && <p className="achievement-desc">{desc}</p>}
    </div>
  );
};

export default CardAchievement;
