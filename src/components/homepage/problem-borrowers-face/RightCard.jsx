import Image from 'next/image'
import React from 'react'

const RightCard = () => {
  return (
    <div 
    className='w-[600px] h-[524px]  flex flex-col items-center justify-center '
    style={{
      padding : "65px 48px",
      borderRadius: "calc(var(--corner-radius-large, 24px)*1px)",
      background: "var(--ui-color-surface-container-brand-primary-00, #f2effc)",

    }}
    >

      <div className='w-full h-fit flex justify-center items-center '>
        <Image src="/Images/readytogetstarted.png" alt="Description" width={375} height={250} />
      </div>
 
      {/* title */}
      <div
       className='w-full h-[32px] flex justify-center items-center mt-[32px]'
       style={{
         color: "var(--ui-color-on-surface-on-primary-00---2, #4c2399)",
         textAlign: "center",
         fontFamily: "var(--typography-heading-h5-inter-font-family, Inter)",
         fontSize: "calc(var(--typogrraphy-heading-h5-large-size) * 1px)",
         fontStyle: "normal",
         fontWeight: 600,
        //  lineHeight: "calc(var(--typography-heading-h5-large-line-height) * 1px)",
         letterSpacing: "calc(var(--typography-heading-h5-large-letter-spacing) * 1px)"
       }}
       >
          Ready to get Started?
      </div>

      {/* description */}
      <div
       className='w-full h-[72px] mt-[8px] flex justify-center items-center  text-center'
       style={{
          color: "var(--ui-color-on-surface-on-primary-00---3, #6b7280)",
          textAlign: "center",
          fontFamily: "var(--typography-paragraph-inter-font-family, Inter)",
          fontSize: "calc(var(--typography-paragraph-para-2-size) * 1px)",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "calc(var(--typography-paragraph-para-2-line-height) * 1px)",
          letterSpacing: "calc(var(--typography-paragraph-letter-spacing) * 1px)"
       }}
       >
          If you’ve experienced any of these frustrations, you’re not alone. That’s exactly why we built ActivPaisa - to solve these problems once and all for all
      </div>
      
    </div>
  )
}

export default RightCard
