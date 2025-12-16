"use client";

import Image from "next/image";

const FAQImage = () => {
  return (
    <div
      style={{
        width: "418px",
        height: "600px",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "0px",

        flexShrink: 0,
        // aspectRatio: "38/67",
        // background:
        //   "url('/images/faq-partner.png') -475.044px 0px / 322.936% 100% no-repeat",
      }}
    >
      <Image
        src="/Images/faq-partner.png"
        width={418}
        height={600}
        alt="faq partner"
      />
    </div>
  );
};

export default FAQImage;
