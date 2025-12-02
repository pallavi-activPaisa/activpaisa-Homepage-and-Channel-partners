"use client";

import Image from "next/image";

const BottomSubHeading = () => {
  return (
    <div
      style={{
        width: "1260px",
        margin: "0 auto",
        marginTop: "16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "12px 24px",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          background: "#FFFFFF",
          fontFamily: "Inter",
        }}
      >
        {/* ITEM 1 */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image src="/Icons/Check box.svg" width={20} height={20} alt="icon" />
          <span
            style={{
              fontSize: "14px",
              color: "#374151",
              lineHeight: "20px",
            }}
          >
            Quick approval in 24–48 hours
          </span>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "#E5E7EB",
          }}
        />

        {/* ITEM 2 */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image src="/Icons/Check box.svg" width={20} height={20} alt="icon" />
          <span
            style={{
              fontSize: "14px",
              color: "#374151",
              lineHeight: "20px",
            }}
          >
            Competitive interest rates
          </span>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "#E5E7EB",
          }}
        />

        {/* ITEM 3 */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image src="/Icons/Check box.svg" width={20} height={20} alt="icon" />
          <span
            style={{
              fontSize: "14px",
              color: "#374151",
              lineHeight: "20px",
            }}
          >
            Expert guidance
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomSubHeading;
