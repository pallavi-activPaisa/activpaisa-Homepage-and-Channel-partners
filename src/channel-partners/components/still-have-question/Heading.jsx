import React from 'react'

const Heading = ({heading}) => {
  return (
    <div 
    style={{
      color: "var(--ui-color-on-surface-on-primary-00---2, #4c2399)",
      textAlign: "center",
      fontFamily: "var(--typogrraphy-heading-h5-inter-font-family, inter)",
      fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
      fontStyle: "normal",
      fontWeight: 600,
      // lineHeight: "calc(var(--typogrraphy-heading-h5-large-line-height) * 1px)",
      letterSpacing: "calc(var(--typogrraphy-heading-h5-large-letter-spacing) * 1px)",

    }}
    >
      {heading}
    </div>
  )
}

export default Heading