import Icon from "@/components/ui/Icons/Icon";
import React from "react";

const Card = ({ title, description, points }) => {
  return (
    <div
      className="w-[620px] h-[220px] "
      style={{
        padding: "calc(var(--spacing-sp-24) * 1px)",
        borderRadius: "calc(var(--corner-radius-large)*1px)",
        border:
          "calc(var(--border-width-width-1)*1px) solid var(--ui-color-border-neutral-10, #e5e7eb)",
        // background: "var(--ui-color-surface-container-neutral-neutral-00, #fff)",
        boxShadow:
          "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
      }}
    >
      <div className="w-full flex gap-[24px] ">
        <Icon />

        <div className="w-[499px] ">
          <h4
            className="w-full "
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
              fontFamily:
                "var(--typogrraphy-heading-h5-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight:
                "calc(var(--typogrraphy-heading-h5-large-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-heading-h5-large-letter-spacing) * 1px)",
            }}
          >
            {title}
          </h4>
          <p
            style={{
              marginTop: "8px",
              marginBottom: "6px",
              color: "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
              fontFamily:
                "var(--typogrraphy-paragraph-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight:
                "calc(var(--typogrraphy-paragraph-para-2-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-paragraph-letter-spacing) * 1px)",
            }}
          >
            {description}
          </p>
          <ul
            className="list-disc ml-[20px] mt-[8px] space-y-[8px]"
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
              fontFamily:
                "var(--typogrraphy-paragraph-inter-font-family, Inter)",
              fontSize: "calc(var(--typogrraphy-paragraph-para-3-size) * 1px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight:
                "calc(var(--typogrraphy-paragraph-para-3-line-height) * 1px)",
              letterSpacing:
                "calc(var(--typogrraphy-paragraph-letter-spacing) * 1px)",
            }}
          >
            <li>{points.point1}</li>
            <li>{points.point2}</li>
            <li>{points.point3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
