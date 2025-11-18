import React from 'react'
import Heading from './Heading'
import SubHeading from './Sub-heading'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

const ProblemBorrowersFace = () => {

  const leftCardData = [
    {
      id: 1,
      title: "Lengthy Approval Process",
      description: "Traditional banks take weeks or months to approve loans, causing unnecessary delays"
    },

    {
      id: 2,
      title: "Excessive Documentation",
      description: "Overwhelming paperwork requirements make the loan application process complex"
    },

    {
      id: 3,
      title: "Hidden Charges & Fees",
      description: "Lack of transparency in fees and charges leads to unexpected costs and financial surprises"
    },

    {
      id: 4,
      title: "Limited Options ",
      description: "Borrowers often have limited access to compare different lenders and find the best deals"
    },
  ]
  return (
    <div 
    className='w-full   '>

      {/*heading  */}
      <div className='w-full  mt-[72px] gap-[8px]'>
      <Heading heading="Problems Borrowers Face"/>
      <SubHeading subHeading="We understand the challenges you face when seeking financial assistance. These common problems inspired us to create a better solution"/>
      </div>

      {/* parent box for cards */}
      <div 
      className='w-full  mt-[24px] flex gap-[40px]'
      >

        {/* left card */}
        <div 
        className='w-[620px] h-fit flex flex-wrap  gap-[20px]'
        >
       
          {leftCardData.map((card) => (
            <LeftCard key={card.id} title={card.title} description={card.description} />
          ))}
        
        </div>

        {/* right image */}
        <RightCard/>
        
      </div>
    </div>
  )
}

export default ProblemBorrowersFace
