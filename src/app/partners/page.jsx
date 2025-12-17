import PartnerNavbar from "@/channel-partners/components/Navbar/PartnerNavbar";
import BecomeActivPaisaLoan from "@/channel-partners/components/HeroSection/BecomeActivPaisaLoan";
import WhoLoanAdvisor from "@/channel-partners/components/WhoLoanAdvisor/WhoLoanAdvisor";
import ExploreRangeCreditProducts from "@/channel-partners/components/ExploreRangeCreditProducts/ExploreRangeCreditProducts";
import LenderScroll from "@/channel-partners/components/lenders-scroll/LenderScroll";
import WhyActivpaisa from "@/channel-partners/components/why-activpaisa/WhyActivpaisa";
import ToolsAndSupport from "@/channel-partners/components/tools-and-support-provided/ToolsAndSupport";
import JoinUs from "@/channel-partners/components/join-us/JoinUs";
import BecomeAdvisor from "@/channel-partners/components/become-advisor/BecomeAdvisor";
import EligibilityRequirement from "@/channel-partners/components/eligibility&requirement/EligibilityRequirement";
import SupportThat from "@/channel-partners/components/support-that-help-succes/SupportThat";
import PartnerRegistration from "@/channel-partners/components/partner-registration/PartnerRegistration";
import PartnersReviews from "@/channel-partners/components/partners-reviews/PartnersReviews";

import FAQSection from "@/channel-partners/FaqSection/FAQSection";
import StillHaveQuestion from "@/channel-partners/components/still-have-question/StillHaveQuestion";
import Footer from "@/components/Footer/Footer";
// import joinUs from "@/channel-partners/components/join-us/JoinUs";
export default function ChannelPartners() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <PartnerNavbar />
      <BecomeActivPaisaLoan />
      <LenderScroll />
      <WhyActivpaisa />
      <WhoLoanAdvisor />
      <ExploreRangeCreditProducts />
      <BecomeAdvisor />
      <EligibilityRequirement />
      <ToolsAndSupport />
      <SupportThat />
      <PartnerRegistration />
      <JoinUs />
      <PartnersReviews />
      <FAQSection />
      <StillHaveQuestion />
      <Footer />
    </div>
  );
}
