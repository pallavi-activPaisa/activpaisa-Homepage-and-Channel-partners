import PartnerNavbar from "@/channel-partners/components/Navbar/PartnerNavbar";
import BecomeActivPaisaLoan from "@/channel-partners/components/HeroSection/BecomeActivPaisaLoan";
import WhoLoanAdvisor from "@/channel-partners/components/WhoLoanAdvisor/WhoLoanAdvisor";
import ExploreRangeCreditProducts from "@/channel-partners/components/ExploreRangeCreditProducts/ExploreRangeCreditProducts";
// import joinUs from "@/channel-partners/components/join-us/JoinUs";
export default function ChannelPartners() {
  return (
    <div>
      <PartnerNavbar />
      <BecomeActivPaisaLoan />
      <WhoLoanAdvisor />
      <ExploreRangeCreditProducts />
    </div>
  );
}
