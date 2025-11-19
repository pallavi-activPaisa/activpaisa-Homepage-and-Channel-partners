import Herosection from "@/components/homepage/Herosection";
import AboutActivpaisa from "@/components/homepage/about-activpaisa/AboutActivpaisa";
import BorrowSmart from "@/components/homepage/borrow-smart-not-hard/BorrowSmart";
import WhyChooseActivpaisa from "@/components/homepage/why-choose-activpaisa/WhyChooseActivpaisa";
import MainOurProduct from "@/components/homepage/Our-Product/MainOurProduct";
import React from "react";
import ReadyToGetStarted from "@/components/homepage/ready-to-get-started/ReadyToGetStarted";
import OurLendingPartners from "@/components/homepage/our-lending-partners/OurLendingPartners";
import ProblemBorrowersFace from "@/components/homepage/problem-borrowers-face/ProblemBorrowersFace";
import ExpertGuidance from "@/components/homepage/expert-guidance/ExpertGuidance";
import AchievementsSection from "@/components/homepage/OurAchievements&Credibility/AchievementsSection";
import ActivePaisaSolution from "@/components/homepage/ActivPaisaSolutionsSection/ActivePaisaSolution";
import MeetOurExpertTeam from "@/components/homepage/MeetOurExpertTeam/ExpertTeam";

function Home() {
  return (
    <div >
      <Herosection />
      <BorrowSmart />
      <AboutActivpaisa />
      <WhyChooseActivpaisa />
      <MainOurProduct />
      <ReadyToGetStarted />
      <OurLendingPartners />
      <AchievementsSection />
      <ProblemBorrowersFace />
      <ActivePaisaSolution />
      <ExpertGuidance />
      <MeetOurExpertTeam />
    </div>
  );
}

export default Home;
