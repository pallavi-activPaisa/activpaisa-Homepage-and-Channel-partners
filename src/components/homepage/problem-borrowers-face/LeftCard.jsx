import Icon from '@/components/ui/Icons/Icon'
import React from 'react'

const LeftCard = ({title="",description=""}) => {
  return (
    <div 
     className='w-[300px] h-[252px] '
     style={{
      padding : "calc(var(--spacing-sp-24)*1px)",
      borderRadius: "calc(var(--corner-radius-large, 24px)*1px)",
      border: "calc(var(--border-width-width-1, 1px)*1px) solid var(--ui-color-border-neutral-10, #e5e7eb)",
      background: "var(--ui-color-surface-container-neutral-neutral-00, #fff)",
      boxShadow: "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",

     }}
    >
      
      {/* icon */}
      <div className='w-full'>
        <Icon/>
      </div>

      {/* Heading */}
      <div 
      className='w-full h-[62px] mt-[24px]'
      style={{
        color: "var(--ui-color-on-surface-on-neutral-00-1, #374151)",
        fontFamily: "var(--typogrraphy-heading-h5-inter-font-family, inter)",
        fontSize: "calc(var(--typogrraphy-heading-h5-large-size)*1px)",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "calc(var(--typogrraphy-heading-h5-large-line-height)*1px)",
        letterSpacing: "calc(var(--typogrraphy-heading-h5-large-letter-spacing)*1px)",

      }}
      >
        {title}
      </div>

      {/* Description */}
      <div
       className='w-full h-[60px] mt-[8px]'
       style={{
        color: "var(--ui-color-on-surface-on-neutral-00---2, #6b7280)",
        fontFamily: "var(--typogrraphy-paragraph-inter-font-family, inter)",
        fontSize: "calc(var(--typogrraphy-paragraph-para-3-size)*1px)",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "calc(var(--typogrraphy-paragraph-para-3-line-height)*1px)",
        letterSpacing: "calc(var(--typogrraphy-paragraph-letter-spacing)*1px)",

       }}
       >
        {description}
      </div>
      
    </div>
  )
}

export default LeftCard
