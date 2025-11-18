"use client";
import React from "react";
import clsx from "clsx";
import "./Button.css"; // 👈 local CSS file

const Button = ({
  label,
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "button-base00",
        `button-${variant}`,
        `button-${size}`,
        className
      )}
      {...props}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
