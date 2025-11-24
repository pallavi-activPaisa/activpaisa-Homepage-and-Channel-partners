"use client";
import React from "react";
import Image from "next/image";
import BaseButton from "../ui/BaseButton/BaseButton";
import Button from "../ui/button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <Image
          src="/Brand/logo.svg"
          alt="Logo"
          width={138}
          height={27}
          priority
        />

        <div className={styles.navLinks}>
          <span className={styles.navItem}>
            Our Offerings
            <Image
              src="/Icons/arrow-down.svg"
              alt="arrow-down"
              width={20}
              height={20}
              className={styles.arrowIcon}
            />
          </span>

          <span className={styles.navHighlight}>Check Credit Score</span>

          <span className={styles.navItem}>About Us</span>
          <span className={styles.navItem}>Contact Us</span>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <BaseButton label="Log In" iconPosition="right" size="small" />
        <Button label="Check Free Offers" size="small" />
      </div>
    </nav>
  );
};

export default Navbar;
