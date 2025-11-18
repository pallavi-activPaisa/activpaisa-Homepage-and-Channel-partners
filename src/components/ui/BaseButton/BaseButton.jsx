"use client";
import React from "react";
import Image from "next/image";
import styles from "./BaseButton.module.css";

const BaseButton = ({
  label,
  icon,
  iconPosition = "right",
  size = "medium",
  onClick,
}) => {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  return (
    <button
      className={`${styles.baseButton} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <Image
          src={icon}
          alt={`${label}-icon`}
          width={20}
          height={20}
          className={styles.iconLeft}
        />
      )}

      <span>{label}</span>

      {icon && iconPosition === "right" && (
        <Image
          src={icon}
          alt={`${label}-icon`}
          width={20}
          height={20}
          className={styles.iconRight}
        />
      )}
    </button>
  );
};

export default BaseButton;
