import Image from 'next/image'
import React from 'react'

const Card = ({ icon, title }) => {
  return (
    <div
    style={{
      
      display: 'flex',
      width: '197px',
      height: '150px',
      padding: '24px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
      flexShrink: 0,
    }}
    >
      
      {/* inner box */}
      <div 
      style={{
        display: "flex",
        width: "149px",
        height: "102px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
       flexShrink: 0,
      }}
      >

        {/* this is for logo */}
        <div className='  h-[40px]'>
          <Image src={icon} width={40} height={40} alt={title}/>
        </div>
       
        {/* this is for title */}
        <h4
        style={{
          
          width : "100%",
          height : "18px",
          color: "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
          textAlign: "center",
          fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
          fontSize: "calc(var(--typogrraphy-label-l-1-size) * 1px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "calc(var(--typogrraphy-label-l-1-line-height) * 1px)",
          letterSpacing: "calc(var(--typogrraphy-label-letter-spacing) * 1px)",

        }}
        >
          {title}
        </h4>
      </div>
      
    </div>
  )
}

export default Card
