import React from "react";
import Heading from "./Heading";
import SubHeading from "./Sub-heading";
import Card from "./Card";
import Icon from "@/components/ui/Icons/Icon";
import Image from "next/image";

const GetActivpaisaApp = () => {
  const items = [
    {
      id: 1,
      icon: "",
      title: "Lightning Fast",
      subTitle: "Apply for loans in under 5 minutes",
    },

    {
      id: 2,
      icon: "",
      title: "Bank-Grade Security",
      subTitle: "Your data is protected with 256-bit encryption",
    },

    {
      id: 3,
      icon: "",
      title: "User Friendly",
      subTitle: "Intuitive design for seamless experience",
    },
  ];
  return (
    <div className="w-full mt-[72px] flex flex-col justify-center items-center px-[90px]">
      <div className="w-full ">
        <Heading heading="Get ActivPaisa Mobile App" />
        <SubHeading subHeading="Take control of your finance on the go. Apply for loans, track applications, and manage your account from anywhere, anytime" />
      </div>

      {/* parent box */}
      <div className="w-full h-[392px] flex gap-[40px]  mt-[24px]">
        {/* left box */}
        <div
          className="w-[452px] flex flex-col gap-[24px] h-full "
          style={{
            padding: "calc(var(--spacing-sp-24)*1px)",
            borderRadius: "calc(var(--corner-radius-large)*1px)",
            border:
              "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-neutral-10, #e5e7eb)",
            background:
              "var(--ui-color-surface-container-neutral-neutral-00, #fff)",
            boxShadow:
              "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
          }}
        >
          {/* card */}
          {items.map((item) => (
            <Card key={item.id} title={item.title} subTitle={item.subTitle} />
          ))}

          {/* just a line */}
          <div
            style={{
              width: "404px",
              height: "1px",
              background: "var(--ui-color-border-neutral-10, #e5e7eb)",
            }}
          ></div>

          {/* bottom  card left side */}
          <div className="w-full h-fit flex  gap-[20px]">
            <div
              className="w-[192px] h-[68px] "
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border:
                  "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-neutral-10, #e5e7eb)",
                background:
                  "var(--ui-color-surface-container-neutral-neutral-00, #fff)",
              }}
            >
              <div className="w-[168px] h-[52px] flex justify-center items-center gap-[24px]">
                {/* icon code */}

                <div
                  className="flex justify-center align-middle"
                  style={{
                    alignItems: "center",
                    width: "29px",
                    height: "29px",
                    padding: "calc(var(--spacing-sp-12)*1px)",
                    borderRadius: "6px",
                    background:
                      "var(--ui-color-surface-container-brand-primary-00, #f2effc)",
                  }}
                >
                  <div
                    className=" flex justify-center items-center"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <div
                      style={{
                        width: "12.8px",
                        height: "12.8px",
                        borderRadius: "2.4px",
                        background:
                          "var(--ui-color-on-surface-on-primary-00---4, #d0c6f6)",
                      }}
                    ></div>
                  </div>
                </div>
                {/* icon code fined */}
                <div className="w-[114px]">
                  <p
                    style={{
                      color:
                        "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                      fontFamily:
                        "var(--typography-label-inter-font-family, Inter)",
                      fontSize: "calc(var(--typography-label-l-2-size)* 1px)",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight:
                        "calc(var(--typography-label-l-2-line-height)*1px)",
                      letterSpacing:
                        "calc(var(--typography-label-letter-spacing)*1px)",
                    }}
                  >
                    Download on the
                  </p>
                  <h4
                    style={{
                      color:
                        "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
                      fontFamily:
                        "var(--typogrraphy-heading-h6-inter-font-family, Inter)",
                      fontSize:
                        "calc(var(--typogrraphy-heading-h6-small-size)*1px)",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight:
                        "calc(var(--typogrraphy-heading-h6-small-line-height)*1px)",
                      letterSpacing:
                        "calc(var(--typogrraphy-heading-h6-small-letter-spacing)*1px)",
                    }}
                  >
                    App Store
                  </h4>
                </div>
              </div>
            </div>

            {/* second card */}
            <div
              className="w-[192px] h-[68px] "
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border:
                  "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-neutral-10, #e5e7eb)",
                background:
                  "var(--ui-color-surface-container-neutral-neutral-00, #fff)",
              }}
            >
              <div className="w-[168px] h-[52px] flex justify-center items-center gap-[24px]">
                {/* icon code */}

                <div
                  className="flex justify-center align-middle"
                  style={{
                    alignItems: "center",
                    width: "29px",
                    height: "29px",
                    padding: "calc(var(--spacing-sp-12)*1px)",
                    borderRadius: "6px",
                    background:
                      "var(--ui-color-surface-container-brand-primary-00, #f2effc)",
                  }}
                >
                  <div
                    className=" flex justify-center items-center"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <div
                      style={{
                        width: "12.8px",
                        height: "12.8px",
                        borderRadius: "2.4px",
                        background:
                          "var(--ui-color-on-surface-on-primary-00---4, #d0c6f6)",
                      }}
                    ></div>
                  </div>
                </div>
                {/* icon code fined */}
                <div className="w-[114px]">
                  <p
                    style={{
                      color:
                        "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
                      fontFamily:
                        "var(--typogrraphy-label-inter-font-family, Inter)",
                      fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight:
                        "calc(var(--typogrraphy-label-l-2-line-height)*1px)",
                      letterSpacing:
                        "calc(var(--typogrraphy-label-letter-spacing)*1px)",
                    }}
                  >
                    Download on the
                  </p>
                  <h4
                    style={{
                      color:
                        "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
                      fontFamily:
                        "var(--typogrraphy-heading-h6-inter-font-family, Inter)",
                      fontSize:
                        "calc(var(--typogrraphy-heading-h6-small-size)*1px)",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight:
                        "calc(var(--typogrraphy-heading-h6-small-line-height)*1px)",
                      letterSpacing:
                        "calc(var(--typogrraphy-heading-h6-small-letter-spacing)*1px)",
                    }}
                  >
                    App Store
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right box */}
        <div
          className="w-[768px] h-full flex gap-[12px] "
          style={{
            padding: "52px 47px",
            borderRadius: "calc(var(--corner-radius-large)*1px)",
            background:
              "var(--gradients-g1, linear-gradient(45deg, var(--surface-container-gradients-g1, #bd8668) 0%, var(--surface-container-gradients-g2, #5d51af) 50%, var(--surface-container-gradients-g3, #3437c8) 100%))",
          }}
        >
          {/* left side */}
          <div className="w-[418px]  h-[279px] flex flex-col justify-center items-center">
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <h4
                className="w-full h-[32px]"
                style={{
                  color: "var(--ui-color-on-surface-on-gradient---1, #fff)",
                  textAlign: "center",
                  fontFamily:
                    "var(--typogrraphy-heading-h5-inter-font-family, Inter)",
                  fontSize:
                    "calc(var(--typogrraphy-heading-h5-large-size)*1px)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight:
                    "calc(var(--typogrraphy-heading-h5-large-line-height)*1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-heading-h5-large-letter-spacing)*1px)",
                }}
              >
                Mobile App Coming Soon
              </h4>

              <p
                style={{
                  marginTop: "18px",
                  color: "var(--ui-color-on-surface-on-gradient---1, #fff)",
                  textAlign: "center",
                  fontFamily:
                    "var(--typogrraphy-paragraph-inter-font-family, Inter)",
                  fontSize:
                    "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight:
                    "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
                  letterSpacing:
                    "calc(var(--typogrraphy-paragraph-letter-spacing)*1px)",
                }}
              >
                Be the first to know when our Mobile app launches. Get exclusive
                early access
              </p>

              <div
                className="w-[98px] h-[36px]  mt-[24px] flex justify-center items-center"
                style={{
                  //   padding: "10px 16px",

                  border:
                    "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-neutral-10, #e5e7eb)",
                  borderRadius: "8px",
                  background:
                    "var(--ui-color-surface-container-neutral-neutral-00, #fff)",
                  boxShadow:
                    "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
                }}
              >
                <button
                  className="w-[66px] h-[16px] cursor-pointer"
                  style={{
                    color:
                      "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
                    textAlign: "center",
                    fontFamily:
                      "var(--typogrraphy-label-inter-font-family, Inter)",
                    fontSize: "calc(var(--typogrraphy-label-l-2-size)*1px)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight:
                      "calc(var(--typogrraphy-label-l-2-line-height)*1px)",
                    letterSpacing:
                      "calc(var(--typogrraphy-label-letter-spacing)*1px)",
                  }}
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-[252px] h-[279px] ">
            <Image
              src="/Images/appImage.png"
              alt="app image"
              width={252}
              height={279}
            />
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="w-full h-[82px]  mt-[40px] flex justify-center items-center gap-[101px] ">
        {/* first box */}
        <div
          className="w-[306px] h-full  flex flex-col justify-center items-center"
          style={{
            padding: "12px 8px",
          }}
        >
          <h4
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---8, #F59E0B)",
              textAlign: "center",
              fontFamily:
                "var(--typography-heading-h5-inter-font-family, Inter)",
              // fontSize: "calc(var(--typography-heading-h5-large-size) * 1px)",
              fontSize: "var(--typography-heading-h5-large-size, 24px)",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight:
                "calc(var(--typography-heading-h5-large-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typography-heading-h5-large-letter-spacing) * 1px)",
            }}
          >
            1M+
          </h4>
          <p
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
              textAlign: "center",
              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-label-l-1-size, 16) * 1px)",
              // fontSize: "var(--typography-heading-h5-large-size, 24px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight:
                "calc(var(--typogrraphy-label-l-1-line-height, 18) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
            }}
          >
            App Downloads Expected
          </p>
        </div>

        {/* second box */}
        <div
          className="w-[306px] h-full  flex flex-col justify-center items-center"
          style={{
            padding: "12px 8px",
          }}
        >
          <h4
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---8, #F59E0B)",
              textAlign: "center",
              fontFamily:
                "var(--typography-heading-h5-inter-font-family, Inter)",
              // fontSize: "calc(var(--typography-heading-h5-large-size) * 1px)",
              fontSize: "var(--typography-heading-h5-large-size, 24px)",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight:
                "calc(var(--typography-heading-h5-large-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typography-heading-h5-large-letter-spacing) * 1px)",
            }}
          >
            5 Min
          </h4>
          <p
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
              textAlign: "center",
              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-label-l-1-size, 16) * 1px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight:
                "calc(var(--typogrraphy-label-l-1-line-height, 18) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
            }}
          >
            Average Application Time
          </p>
        </div>

        {/* third box */}
        <div
          className="w-[306px] h-full  flex flex-col justify-center items-center"
          style={{
            padding: "12px 8px",
          }}
        >
          <h4
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---8, #F59E0B)",
              textAlign: "center",
              fontFamily:
                "var(--typography-heading-h5-inter-font-family, Inter)",
              // fontSize: "calc(var(--typography-heading-h5-large-size) * 1px)",
              fontSize: "var(--typography-heading-h5-large-size, 24px)",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight:
                "calc(var(--typography-heading-h5-large-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typography-heading-h5-large-letter-spacing) * 1px)",
            }}
          >
            24/7
          </h4>
          <p
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
              textAlign: "center",
              fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-label-l-1-size, 16) * 1px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight:
                "calc(var(--typogrraphy-label-l-1-line-height, 18) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-label-letter-spacing, 0) * 1px)",
            }}
          >
            Support Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetActivpaisaApp;
