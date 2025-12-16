import React from 'react'

const Heading = ({heading}) => {
  return (
    <div 
    
    style={{
        color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
        height : "40px",
        width : "1260px",
        /* heading/h3/semibold/large */
        fontFamily: "var(--typogrraphy-heading-h3-inter-font-family, inter)",
        fontSize: "calc(var(--typogrraphy-heading-h3-large-size) * 1px)",
        fontStyle: "normal",
        fontWeight: 600,
        // lineHeight: "var(--typogrraphy-heading-h3-large-line-height, 40px)",
        letterSpacing: "var(--typogrraphy-heading-h3-large-letter-spacing, -0.64px)",


    }}
    >
      {heading}
    </div>
  )
}

export default Heading