"use client";

import Image from "next/image";

const FAQImage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "116px",
        background:
          "url(/Icons/image 471.png) lightgray 0px 0px / 100% 129.116% no-repeat",
      }}
    >
      <Image
        src="/Icons/image 471.png"
        alt="faq image"
        width={500}
        height={500}
        // alt="FAQ Illustration"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default FAQImage;
