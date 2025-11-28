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
        {loanOptions.map((item, index) =>
          item.isDivider ? (
            // --------------------------
            // 🔥 Divider Image Here
            // --------------------------
            <Image
              key={index}
              src="/Icons/Rectangle 3464136.png"
              width={1}
              height={74}
              alt="divider"
              className={styles.divider}
            />
          ) : (
            // --------------------------
            // Normal Icon + Label
            // --------------------------
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
          )
        )}
      </div>
    </section>
  );
};

export default PersonalLoan;
