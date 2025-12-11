"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BaseButton from "../ui/BaseButton/BaseButton";
import Button from "../ui/button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const refreshHome = () => {
    window.location.href = "/";
  };

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{
        borderBottom: "1px solid var(--ui-color-border-neutral-10, #e5e7eb)",
      }}
    >
      <nav className={styles.navbar}>
        <div className={styles.logoSection}>
          {/* Logo */}
          <Image
            src="/Brand/logo.svg"
            alt="ActivPaisa Logo"
            width={138}
            height={27}
            priority
            onClick={refreshHome}
            style={{ cursor: "pointer" }}
          />

          <div className={styles.navLinks}>
            <span className={styles.navItem}>
              Our Offerings
              <Image
                src="/Icons/arrow-down.svg"
                alt="Dropdown Arrow"
                width={20}
                height={20}
                className={styles.arrowIcon}
              />
            </span>

            <span
              style={{
                color:
                  "var(--ui-color-state-highlighted-hgt-neutral-light-10-p10, #4c2399)",
              }}
              className={styles.navHighlight}
            >
              Check Credit Score
            </span>
            <span className={styles.navItem}>Learn Money</span>

            <span className={styles.navItem}>
              Resources
              <Image
                src="/Icons/arrow-down.svg"
                alt="Dropdown Arrow"
                width={20}
                height={20}
                className={styles.arrowIcon}
              />
            </span>

            <span className={styles.navItem}>
              About Us
              <Image
                src="/Icons/arrow-down.svg"
                alt="Dropdown Arrow"
                width={20}
                height={20}
                className={styles.arrowIcon}
              />
            </span>

            {/* ⭐ ROUTE ADDED HERE */}
            <Link href="/Channel-partners" className={styles.navItem}>
              Become a Partner
            </Link>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <BaseButton label="Log In" iconPosition="right" size="small" />
          <Button label="Check Free Offers" size="small" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
