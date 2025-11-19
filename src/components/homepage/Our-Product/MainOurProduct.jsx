// import CardOurProduct from "./CardOurProduct";
import OurProductList from "./OurProductList";

const MainOurProduct = () => {
  return (
    <div className="pt-[72px]  w-full pl-[97px] overflow-x-hidden ">
      <span
        style={{
          color: "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
          fontFamily: "var(--typography-heading-h3-inter-font-family, Inter)",
          fontSize: "var(--typography-heading-h3-large-size, 32px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "var(--typography-heading-h3-large-line-height, 40px)",
          letterSpacing:
            "var(--typography-heading-h3-large-letter-spacing, -0.64px)",
        }}
      >
        Our Product
      </span>

      <div>
        <span
          style={{
            alignSelf: "stretch",
            color: "var(--ui-color-on-surface-on-neutral-00---2, #6B7280)",
            fontFamily: "var(--typogrraphy-paragraph-inter-font-family, Inter)",
            fontSize: "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",

            fontStyle: "normal",
            fontWeight: 400,
            // lineHeight: "var(--typogrraphy-paragraph-para-2-line-height, 24px)",
            letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",
            paddingLeft: "2px",
          }}
        >
          We’ve revolutionized the lending experience with technology,
          transparency, and trust at the core of everything we do
        </span>
      </div>

      {/* <CardOurProduct /> */}
      <OurProductList />
    </div>
  );
};

export default MainOurProduct;
