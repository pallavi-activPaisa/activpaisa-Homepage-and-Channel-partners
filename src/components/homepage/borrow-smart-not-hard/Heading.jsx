import React from 'react'

const Heading = ({heading}) => {
  return (
    <div 
    style={{
        color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
        

        /* heading/h1/semibold/large */
        fontFamily: "var(--typogrraphy-heading-h1-inter-font-family, inter)",
        fontSize: "calc(var(--typogrraphy-heading-h1-large-size) * 1px)",
        
        fontStyle: "normal",
        fontWeight: 600,
        
        letterSpacing: "var(--typogrraphy-heading-h1-larger-letter-spacing, -0.05rem)"

    }}
    >
      {heading}
    </div>
  )
}

export default Heading