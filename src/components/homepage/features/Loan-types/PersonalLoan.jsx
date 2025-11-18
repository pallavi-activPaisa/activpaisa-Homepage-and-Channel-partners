// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import styles from "./PersonalLoan.module.css";

// const PersonalLoan = () => {
//   // state with 6 identical items (you can later replace with real data)
//   const [icons] = useState([
//     "/Icons/Leading Icon.svg",
//     "/Icons/Leading Icon.svg",
//     "/Icons/Leading Icon.svg",
//     "/Icons/Leading Icon.svg",
//     "/Icons/Leading Icon.svg",
//     "/Icons/Leading Icon.svg",
//   ]);

//   return (
//     <section className={styles.personalLoanSection}>
//       <div className={styles.iconContainer}>
//         {icons.map((iconSrc, index) => (
//           <div key={index} className={styles.iconWrapper}>
//             <Image
//               src={iconSrc}
//               width={24}
//               height={24}
//               alt={`leading-icon-${index + 1}`}
//               className={styles.icon}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PersonalLoan;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./PersonalLoan.module.css";
import loanOptionsData from "../Content/loanOptions";

const PersonalLoan = () => {
  const [loanOptions] = useState(loanOptionsData);

  return (
    <section className={styles.personalLoanSection}>
      <div className={styles.iconContainer}>
        {loanOptions.map((item, index) => (
          <div key={index} className={styles.iconWrapper}>
            <Image
              src={item.icon}
              width={24}
              height={24}
              alt={item.label}
              className={styles.icon}
            />
            <span className={styles.loanLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalLoan;
