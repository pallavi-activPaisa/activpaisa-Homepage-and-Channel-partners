import React from 'react'

const Heading = ({heading}) => {
  return (
    <div 
    style={{
    color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
    fontFamily: "var(--typogrraphy-heading-h3-inter-font-family, inter)",
    fontSize: "calc(var(--typogrraphy-heading-h3-large-size) * 1px)",
    fontStyle: "normal",
    fontWeight: 600,
    // lineHeight: "calc(var(--typogrraphy-heading-h3-large-line-height) * 1px)",
    letterSpacing: "calc(var(--typogrraphy-heading-h3-large-letter-spacing) * 1px)",

    }}
    >
      {heading}
    </div>
  )
}

export default Heading