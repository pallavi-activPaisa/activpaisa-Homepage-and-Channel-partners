import Image from "next/image";

export default function TeamCheckItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      {/* Small bullet square */}
      {/* <span
        style={{
          width: "13px",
          height: "13px",
          borderRadius: "2px",
          backgroundColor: "var(--ui-color-on-surface-on-gradient---1, #FFF)",
          display: "inline-block",
        }}
      ></span> */}
      <div className="">
        <Image
          src="/Icons/Checkbox-right.svg"
          alt="right box"
          width={18}
          height={18}
        />
      </div>
      <p
        style={{
          color: "var(--ui-color-on-surface-on-gradient---1, #FFF)",
          fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
          fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14) * 1px)",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight:
            "calc(var(--typogrraphy-paragraph-para-3-line-height, 20) * 1px)",
          letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
        }}
      >
        {text}
      </p>
    </div>
  );
}
