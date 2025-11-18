import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";

const OurLendingPartners = () => {
  const partnersData = [
    {
      id: 1,
      icon: "/partnersLogo/hdfc.png",
      title: "HDFC Bank",
    },
    {
      id: 2,
      icon: "/partnersLogo/icici.png",
      title: "ICIC Bank",
    },

    {
      id: 3,
      icon: "/partnersLogo/axis.png",
      title: "Axis Bank",
    },

    {
      id: 4,
      icon: "/partnersLogo/kotak.png",
      title: "Kotak Mahindra ",
    },

    {
      id: 5,
      icon: "/partnersLogo/bankOfBaroda.png",
      title: "Bank of Baroda",
    },

    {
      id: 6,
      icon: "/partnersLogo/sbi.png",
      title: "SBI",
    },
  ];
  return (
    <div className="w-full mt-[72px]">
      {/*heading  */}
      <div className="w-full gap-[8px]">
        <Heading heading="Our Lending Partners" />
        <SubHeading subHeading="We’ve partnered with India’s leading financial institutions to bring you the best loan options and competitive rates" />
      </div>

      {/* lending partners logos */}
      <div className="w-full mt-[24px] flex  justify-center gap-[20px] ">
        {partnersData.map((partner) => (
          <Card key={partner.id} icon={partner.icon} title={partner.title} />
        ))}
      </div>

      <div className="w-full mt-[24px] flex justify-center items-center ">
        <div
          className="flex justify-center items-center gap-[16px] "
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid var(--ui-color-border-neutral-10, #e5e7eb)",
          }}
        >
          <div
            style={{
              width: "205px",
              height: "20px",
              color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
              textAlign: "center",
              fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
              fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight:
                "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
            }}
          >
            50+
            <span
              style={{
                color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight:
                  "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
              }}
            >
              {" "}
              Partner Banks & NBFCs
            </span>
          </div>

          {/* line */}
          <div
            style={{
              background: "var(--ui-color-border-neutral-10, #e5e7eb)",
              width: "1px",
              height: "20px",
            }}
          ></div>

          <div
            style={{
              width: "205px",
              height: "20px",
              color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
              textAlign: "center",
              fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
              fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight:
                "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
            }}
          >
            10,000 Cr +
            <span
              style={{
                color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight:
                  "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
              }}
            >
              {" "}
              Loan Facilitated
            </span>
          </div>

          <div
            style={{
              background: "var(--ui-color-border-neutral-10, #e5e7eb)",
              width: "1px",
              height: "20px",
            }}
          ></div>

          <div
            style={{
              width: "205px",
              height: "20px",
              color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
              textAlign: "center",
              fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
              fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight:
                "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
            }}
          >
            5L +
            <span
              style={{
                color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "calc(var(--typogrraphy-label-l-2-size) * 1px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight:
                  "calc(var(--typogrraphy-label-l-2-line-height) * 1px)",
                letterSpacing:
                  "calc(var(--typogrraphy-label-letter-spacing) * 1px)",
              }}
            >
              {" "}
              Happy Customers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLendingPartners;
