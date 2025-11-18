import React from 'react'
import Heading from './Heading'
import SubHeading from './Sub-heading'
import Card from './Card'
const ExpertGuidance = () => {

    const guidanceData = [
        {
            id : 1,
            title : "Dedicated Relationship Manager",
            description : "Get personalised assistance from experienced loan advisors throughout your journey",
            points : {
                point1 : "Personal consultation",
                point2 : "24/7 Support",
                point3 : "Expert recommendations"
            }
        },

        {
            id : 2,
            title : "Free Financial Consultation",
            description : "Update your financial options and make informed decisions with our expert guidance",
            points : {
                point1 : "Credit score analysis",
                point2 : "Loan structuring",
                point3 : "Repayment planning"
            }
        },

        {
            id : 3,
            title : "Educational Resources",
            description : "Access comprehensive guides, calculators and tools to improve your financial literacy",
            points : {
                point1 : "Loan calculators",
                point2 : "Financial guides",
                point3 : "Video tutorials"
            }
        },

        {
            id : 4,
            title : "Credit Improvement Program",
            description : "Get expert help to improve your credit score and qualify for better loan terms",
            points : {
                point1 : "Credit monitoring",
                point2 : "Account management",
                point3 : "Refinancing options"
            }
        }
        
    ]
  return (
    <div className='w-full '>
       
         {/*heading  */}
      <div className='w-full  mt-[72px] gap-[8px]'>
      <Heading heading="Expert Guidance Every Step of the Way"/>
      <SubHeading subHeading="Beyond just connecting you with lenders, we provide comprehensive support and expert guidance to ensure you make the best financial decision"/>
      </div>

      {/* parent box for cards */}

      <div className='w-[1260px] h-fit flex flex-wrap gap-[20px] mt-[24px]'>
        {guidanceData.map((guidance) => (
            <Card 
            key={guidance.id}
            title={guidance.title}
            description={guidance.description}
            points={guidance.points}
            />
        ))}
      </div>
    </div>
  )
}

export default ExpertGuidance
