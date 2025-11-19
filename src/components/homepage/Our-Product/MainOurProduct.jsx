// import CardOurProduct from "./CardOurProduct";
import OurProductList from "./OurProductList";

const MainOurProduct = () => {
  return (
    <div className="pt-[72px]  w-full pl-[90px] overflow-x-hidden ">
      <div>
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
      </div>
      <div>
        <span>
          We’ve revolutionized the lending experience with technology,
          transparency, and trust at the core of everything we do{" "}
        </span>
      </div>

      {/* <CardOurProduct /> */}
      <OurProductList />
    </div>
  );
};

export default MainOurProduct;
