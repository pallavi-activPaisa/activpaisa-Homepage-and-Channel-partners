import React from 'react'

const SubHeading = ({subHeading}) => {
  return (
    <div 
    style={{
       color: "var(--ui-color-on-surface-on-neutral-00-2, #6b7280)",
       fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
       fontSize: "calc(var(--typogrraphy-paragraph-para-2-size) * 1px)",
       fontStyle: "normal",
       fontWeight: 400,
      //  lineHeight: "calc(var(--typogrraphy-paragraph-para-2-line-height) * 1px)",
       letterSpacing: "calc(var(--typogrraphy-paragraph-letter-spacing) * 1px)",



    }}
    >
      {subHeading}
    </div>
  )
}

export default SubHeading