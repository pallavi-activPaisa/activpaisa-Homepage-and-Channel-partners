"use client";
import Image from "next/image";

const BottomSubHeading = () => {
  const boxStyle = {
    display: "flex",
    padding: "12px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    color: "#374151",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    width: "fit-content",
  };

  const iconRow = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        width: "1260px",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {/* Box 1 */}
      <div style={boxStyle}>
        <div style={iconRow}>
          <Image
            src="/Icons/Check box.svg"
            alt="Check icon"
            width={20}
            height={20}
          />
          <p>Quick approval in 24–48 hours</p>
          <div
            style={{
              borderRight: "1px",
              width: "1px",
              height: "20px",
              background: "#E5E7EB",
            }}
          ></div>
          <Image
            src="/Icons/Check box.svg"
            alt="Check icon"
            width={20}
            height={20}
          />
          <p> Competitive interest rates</p>

          <div
            style={{
              borderRight: "1px",
              width: "1px",
              height: "20px",
              background: "#E5E7EB",
            }}
          ></div>
          <Image
            src="/Icons/Check box.svg"
            alt="Check icon"
            width={20}
            height={20}
          />
          <p>Expert guidance</p>
        </div>
      </div>
    </div>
  );
};

export default BottomSubHeading;
