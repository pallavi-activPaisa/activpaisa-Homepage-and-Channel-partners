"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignupHeader = () => {
  return (
    <header
      style={{
        display: "flex",
        width: "720px",
        height: "60px",
        padding: "0px 16px",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        background: "var(--ui-color-surface-neutral-neutral-light-10, #fff)",
      }}
    >
      {/* LEFT: LOGO */}
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/Brand/logo.svg"
          alt="ActivPaisa Logo"
          width={138}
          height={27}
          priority
        />
      </Link>

      {/* RIGHT: MENU */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Link
          href="/help"
          style={{
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
            fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
            fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
            fontWeight: 500,
            lineHeight: "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
            textDecoration: "none",
          }}
        >
          Help
        </Link>

        <Link
          href="/about"
          style={{
            color:
              "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
            fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
            fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
            fontWeight: 500,
            lineHeight: "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
            textDecoration: "none",
          }}
        >
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default SignupHeader;
