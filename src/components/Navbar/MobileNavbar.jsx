"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./MobileNavbar.module.css";


const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOfferingsExpanded, setIsOfferingsExpanded] = useState(true);

    const closeMenu = () => setIsOpen(false);

    // Constant styles for consistency
    const mainMenuItemStyle = {
        display: "flex",
        width: "100%",
        height: "40px",
        padding: "8px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        background: "var(--ui-color-surface-neutral-neutral-light-20, #F9FAFB)",
        color: "var(--ui-color-on-surface-neutral-light-20-on-neutral-light-20-n40, #374151)",
        /* Label/L-2/Medium */
        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
        fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "calc(var(--typogrraphy-label-l-2-line-height)*1px)",
        letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
        textDecoration: "none"
    };

    const subMenuItemStyle = {
        display: "flex",
        padding: "6px 20px",
        alignItems: "center",
        gap: "12px",
        alignSelf: "stretch",
        borderRadius: "8px",
        textDecoration: "none"
    };

    const personalLoanTextStyle = {
        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
        /* Label/L-2/Medium */
        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
        fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "calc(var(--typogrraphy-label-l-2-line-height)*1px)",
        letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)"
    };

    const buttonsContainerStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "0 20px 24px",
    };


    const partnerLoginButtonStyle = {
        display: "flex",
        height: "44px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "44px",
        padding: "var(--Spacing-sp-10, 10px) var(--Spacing-sp-16, 16px)",
        gap: "var(--Spacing-sp-6, 6px)",
        alignSelf: "stretch",

        borderRadius: "var(--corner-radius-2xsmall, 8px)",
        border: "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
        background: "var(--ui-color-surface-neutral-neutral-light-10, #fff)",


        /* drop shadow/xsmall */
        boxShadow:
            "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",

        color: "var(--UI-Color-On-Surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
        fontWeight: 500,

        cursor: "not-allowed",

    };

    const joinPartnerButtonStyle = {
        display: "flex",
        height: "44px",
        padding: "var(--spacing-sp-10, 10px) var(--spacing-sp-16, 16px)",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--spacing-sp-6, 6px)",
        alignSelf: "stretch",
        borderRadius: "var(--corner-radius-2xsmall, 8px)",
        background: "var(--ui-color-surface-brand-primary-strong-10, #4C2399)",
        /* Drop Shadow/XSmall */
        boxShadow: "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
        color: "var(--ui-color-on-surface-brand-primary-strong-10-on-neutral-light-10-N40, #FFF)",
        width: "100%",
        border: "none",
        cursor: "pointer",
        fontWeight: 500
    };

    // Wrapper for submenu icon to match subMenuItemStyle requirements if needed, 
    // but the icon wrapper style was also inline. Let's keep that inline or make a const.
    const subMenuIconWrapperStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "6px",
        backgroundColor: "var(--ui-color-surface-neutral-neutral-light-20, #F9FAFB)", // Default placeholder bg
    };

    const footerSpacerStyle = {
        height: "88px"
    };

    const footerStyle = {
        marginTop: "auto",
        paddingTop: "24px",
        borderTop: "1px solid #f3f4f6",
        textAlign: "center",
        paddingBottom: "32px"
    };

    const copyrightTextStyle = {
        fontSize: "12px",
        color: "#9ca3af",
        lineHeight: "1.5",
        margin: "0"
    };

    const floatingCtaContainerStyle = {
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 45,
        width: "90%",
        maxWidth: "375px"
    };

    const floatingCtaBtnStyle = {
        display: "block",
        width: "100%",
        padding: "14px",
        borderRadius: "50px",
        backgroundColor: "var(--ui-color-state-highlighted-hgt-neutral-light-10-p10, #4c2399)",
        color: "#fff",
        textAlign: "center",
        fontWeight: 600,
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(76, 35, 153, 0.3)"
    };

    return (
        <>
            {/* 1. Static Header */}
            <div style={{
                display: "flex",
                height: "55.363px",
                padding: "0 20px",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                width: "100%",
                backgroundColor: "var(--ui-color-background-bg-neutral-bg-neutral-light-10, #ffffff)",
                borderBottom: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
            }}>
                <Link href="/" onClick={closeMenu} className={styles.logoLink}>
                    <Image
                        src="/Brand/logo.svg"
                        alt="ActivPaisa Logo"
                        width={100}
                        height={20}
                        priority
                    />
                </Link>
                <button
                    className={styles.hamburgerBtn}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <Image
                        src="/Icons/HamburgerMenu.svg"
                        alt="Open menu"
                        width={24}
                        height={24}
                    />
                </button>
            </div >

            {/* 2. Overlay */}
            {
                isOpen && (
                    <div className={styles.overlay} onClick={closeMenu} />
                )
            }

            {/* 3. Slide-in Drawer */}
            <div
                className={`${styles.drawer} ${isOpen ? styles.drawerOpen : styles.drawerClosed}`}
            >
                {/* 3.1 Drawer Header */}
                <div style={{
                    display: "flex",
                    height: "55.363px",
                    padding: "0 20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    width: "100%",
                    backgroundColor: "var(--ui-color-background-bg-neutral-bg-neutral-light-10, #ffffff)",
                    borderBottom: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
                }}>
                    <Link href="/" onClick={closeMenu} className={styles.headerLogoGroup}>
                        <Image
                            src="/Brand/logo.svg"
                            alt="ActivPaisa Logo"
                            width={100}
                            height={20}
                        />
                        <span className={styles.partnersTag}>
                            <span className={styles.partnersSeparator}></span>
                            Partners
                        </span>
                    </Link>
                    <button className={styles.closeBtn} onClick={closeMenu}>
                        <Image
                            src="/Icons/crossicons.svg"
                            alt="Close menu"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>

                {/* 3.2 Scrollable Content */}
                <div style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "8px 12px 32px 12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    alignSelf: "stretch",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0px",
                        gap: "12px",
                    }}>
                        {/* Offerings Section */}
                        <div>
                            <div
                                style={{ ...mainMenuItemStyle, cursor: "pointer" }}
                                onClick={() => setIsOfferingsExpanded(!isOfferingsExpanded)}
                            >
                                Our Offerings
                                <Image
                                    src="/Icons/arrow-down.svg"
                                    alt="Toggle Offerings"
                                    width={20}
                                    height={20}
                                    style={{
                                        transform: isOfferingsExpanded ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease"
                                    }}
                                />
                            </div>
                            {isOfferingsExpanded && (
                                <ul style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    gap: "12px",
                                    alignSelf: "stretch",
                                    listStyle: "none",
                                    padding: 0,
                                    margin: "12px 0 0 0"
                                }}>
                                    <li>
                                        <Link
                                            href="#"
                                            onClick={closeMenu}
                                            style={subMenuItemStyle}
                                        >
                                            <div style={subMenuIconWrapperStyle}>
                                                <div className={styles.iconSquare} />
                                            </div>
                                            <span style={personalLoanTextStyle}>Personal Loan</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            onClick={closeMenu}
                                            style={subMenuItemStyle}
                                        >
                                            <div style={subMenuIconWrapperStyle}>
                                                <div className={styles.iconSquare} />
                                            </div>
                                            <span style={personalLoanTextStyle}>Business Loan</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            onClick={closeMenu}
                                            style={subMenuItemStyle}
                                        >
                                            <div style={subMenuIconWrapperStyle}>
                                                <div className={styles.iconSquare} />
                                            </div>
                                            <span style={personalLoanTextStyle}>Home Loan</span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Check Credit Score */}
                        <div>
                            <Link
                                href="#"
                                onClick={closeMenu}
                                style={mainMenuItemStyle}
                            >
                                Check Credit Score
                            </Link>
                        </div>

                        {/* Learn Money */}
                        <div>
                            <Link
                                href="#"
                                onClick={closeMenu}
                                style={mainMenuItemStyle}
                            >
                                Learn Money
                            </Link>
                        </div>

                        {/* Resources */}
                        <div>
                            <div style={mainMenuItemStyle}>
                                Resources
                            </div>
                        </div>

                        {/* About Us */}
                        <div>
                            <div style={mainMenuItemStyle}>
                                About Us
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div style={buttonsContainerStyle}>
                            <Link href="#" onClick={closeMenu} style={{ width: "100%", display: "block" }}>
                                <button style={partnerLoginButtonStyle}>Partner Login</button>
                            </Link>

                            <Link href="#" onClick={closeMenu} style={{ width: "100%", display: "block" }}>
                                <button style={joinPartnerButtonStyle}>Join as a Partner</button>
                            </Link>
                        </div>

                    </div>





                    {/* Footer Copyright */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "16px",
                        alignSelf: "stretch",
                    }}>
                        <p style={{
                            color: "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-n20, #9ca3af)",

                            /* label/l-3/medium */
                            fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                            fontSize: "calc(var(--typogrraphy-label-l-3-size)*1px)",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "calc(var(--typogrraphy-label-l-3-line-height)*1px)",
                            letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",

                        }}>
                            Copyright © 2019 All Rights Reserved


                        </p>
                        <p style={{
                            color: "var(--ui-color-on-surface-primary-light-10-on-primary-light-10-n20, #9ca3af)",

                            /* label/l-3/medium */
                            fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                            fontSize: "calc(var(--typogrraphy-label-l-3-size)*1px)",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "calc(var(--typogrraphy-label-l-3-line-height)*1px)",
                            letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                        }}> Vaultify Marketing &amp; Consulting Private Limited</p>
                    </div>
                </div>
            </div >

            {/* Floating CTA */}
            {
                !isOpen && (
                    <div style={floatingCtaContainerStyle}>
                        <Link href="#" style={floatingCtaBtnStyle}>
                            Join as a Partner
                        </Link>
                    </div>
                )
            }
        </>
    );
};

export default MobileNavbar;
