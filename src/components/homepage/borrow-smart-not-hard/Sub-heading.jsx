import React from 'react'

const SubHeading = ({subHeading}) => {
  return (
    <div 
    style={{
        color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
        // textAlign: "center",

        /* paragraph/para-2/medium */
        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
        fontSize: "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",
        fontStyle: "normal",
        fontWeight: 500,
        // lineHeight: "var(--typogrraphy-paragraph-para-2-line-height, 1.5rem)", /* 150% */
        letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",

    }}
    >
      {subHeading}
    </div>
  )
}

export default SubHeading