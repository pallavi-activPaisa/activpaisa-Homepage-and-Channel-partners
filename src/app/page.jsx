import Herosection from "@/components/homepage/Herosection";
import AboutUs from "@/components/homepage/about-activpaisa/AboutUs";
import BorrowSmart from "@/components/homepage/borrow-smart-not-hard/BorrowSmart";

// import MainOurProduct from "@/components/homepage/Our-Product/MainOurProduct";
import CreditSolutions from "@/components/homepage/CreditSolutions/CreditSolutions";
import React from "react";
import ReadyToGetStarted from "@/components/homepage/ready-to-get-started/ReadyToGetStarted";
import OurLendingPartners from "@/components/homepage/our-lending-partners/OurLendingPartners";
import ProblemBorrowersFace from "@/components/homepage/problem-borrowers-face/ProblemBorrowersFace";

import AchievementsSection from "@/components/homepage/OurAchievements&Credibility/AchievementsSection";
import ActivePaisaSolution from "@/components/homepage/ActivPaisaSolutionsSection/ActivePaisaSolution";
import MeetOurExpertTeam from "@/components/homepage/MeetOurExpertTeam/ExpertTeam";
import WhatCustomersSays from "@/components/homepage/what-customers-says/WhatCustomersSays";
import ThousandsOfHappyCustomers from "@/components/homepage/thousands-of-happy-customers/ThousandsOfHappyCustomer";
import GetActivpaisaApp from "@/components/homepage/get-activpaisa-app/GetActivpaisaApp";
import StillHaveQuestion from "@/components/homepage/still-have-question/StillHaveQuestion";
import FAQSection from "@/components/FaqSection/FAQSection";
import Footer from "@/components/Footer/Footer";
import WhyChooseActivpaisa from "@/components/homepage/why-borrow-with-activpaisa/WhyChooseActivpaisa";
import ExpertGuidance from "@/components/homepage/expert-support-through-journey/ExpertGuidance";

function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <Herosection />
      <BorrowSmart />
      <AboutUs />
      <WhyChooseActivpaisa />
      {/* <MainOurProduct /> */}
      <CreditSolutions />
      <ReadyToGetStarted />
      <OurLendingPartners />
      <AchievementsSection />
      <ProblemBorrowersFace />
      <ActivePaisaSolution />
      <ExpertGuidance />
      <MeetOurExpertTeam />
      <WhatCustomersSays />
      <ThousandsOfHappyCustomers />
      <GetActivpaisaApp />
      <FAQSection />
      <StillHaveQuestion />
      <Footer />
    </div>
  );
}

export default Home;
