import React from 'react'

const SubHeading = ({subHeading}) => {
  return (
    <div 
    style={{
      color: "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
      height : "24px",
      width : "1260px",
      marginTop : "8px",
      /* paragraph/para-2/regular */
      fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
      fontSize: "var(--typogrraphy-paragraph-para-2-size, 16px)",
      fontStyle: "normal",
      fontWeight: 400,
      // lineHeight: "var(--typogrraphy-paragraph-para-2-line-height, 24px)", /* 150% */
      letterSpacing: "var(--typogrraphy-paragraph-letter-spacing, 0)",


    }}
    >
      {subHeading}
    </div>
  )
}

export default SubHeading