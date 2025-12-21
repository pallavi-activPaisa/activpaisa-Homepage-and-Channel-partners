"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../../styles/partners.module.css";
import { Pointer } from "lucide-react";

export default function PartnerNavbar() {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navbarPartner}>
        {/* LEFT SECTION */}
        <div className={styles.leftWrapper}>
          {/* Logo + Divider + Partners */}
          <Link href="/" className={styles.logoSection}>
            <Image
              src="/Brand/logo.svg"
              alt="ActivPaisa Logo"
              width={138}
              height={28}
              priority
            />
            <Image
              src="/partnerspage/Divider.svg"
              alt="Divider"
              width={11.172}
              height={26.069}
              className={styles.divider}
            />
            <span className={styles.partnerText}>Partners</span>
          </Link>

          {/* MENU ITEMS */}
          <div className={styles.menu}>
            <div className={styles.menuItem}>
              Loan Products
              <Image
                src="/Icons/arrow-down.svg"
                alt="Dropdown"
                width={18}
                height={18}
                className={styles.menuArrow}
              />
            </div>

            <div className={styles.menuItemActive}>Advisor Training</div>
            <div className={styles.menuItem}>How it Works?</div>

            <div className={styles.menuItem}>
              Resources
              <Image
                src="/Icons/arrow-down.svg"
                alt="Dropdown"
                width={18}
                height={18}
                className={styles.menuArrow}
              />
            </div>

            <div className={styles.menuItem}>
              About Us
              <Image
                src="/Icons/arrow-down.svg"
                alt="Dropdown"
                width={18}
                height={18}
                className={styles.menuArrow}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className={styles.rightButtons}>
          <button className={styles.loginBtn}>Partner Login</button>
          <Link className=" cursor-pointer" href="/partners/signup">
            <button style={{ cursor: Pointer }} className={styles.joinBtn}>
              Join as a Partner
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
