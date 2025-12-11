import Image from "next/image";
import React from "react";
import Card from "./Card";

const LenderScroll = () => {
  const BanksLogo = [
    { logo: "/partnersLogo/axis-bank-black.png" },
    { logo: "/partnersLogo/bajaj-finserv-black.png" },
    { logo: "/partnersLogo/baroda-bank-black.png" },
    { logo: "/partnersLogo/clx-bank-black.png" },
    { logo: "/partnersLogo/yes-bank-black.png" },
    { logo: "/partnersLogo/tata-capital-black.png" },
    { logo: "/partnersLogo/baroda-bank-black.png" },
  ];
  return (
    <div className="w-[1440px] h-[284px] flex justify-center items-center  mt-[72px]">
      <div className="w-[1260px] h-[284px]  flex justify-center items-center">
        <div
          style={{
            display: "flex",
            width: "1096.454px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // gap: "20px",
          }}
        >
          <h2
            className="w-[514px] h-[40px] flex justify-center items-center"
            style={{
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-p40, #4c2399)",
              textAlign: "center",
              fontFamily:
                "var(--typogrraphy-heading-h2-inter-font-family, inter)",
              fontSize: "calc(var(--typogrraphy-heading-h2-small-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight:
                "calc(var(--typogrraphy-heading-h2-small-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-heading-h2-small-letter-spacing) * 1px)",
            }}
          >
            Work with Top-tier Banks & NBFCs
          </h2>
          <p
            className="w-[369px] h-[24px] flex justify-center items-center "
            style={{
              marginTop: "8px",
              color:
                "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
              textAlign: "center",
              fontFamily:
                "var(--typogrraphy-paragraph-inter-font-family, inter)",
              fontSize: "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight:
                "calc(var(--typogrraphy-paragraph-para-2-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-paragraph-letter-spacing) * 1px)",
            }}
          >
            Get access to top banks and NBFCs in one place
          </p>

          {/* bank logos */}
          <div
            className="w-full h-[57px] mt-[20px] "
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* bank logos */}
            {BanksLogo.map((bank, index) => (
              <Card key={index} logo={bank.logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LenderScroll;
