import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TokenomicsSection from "@/components/tokenomics-section";
import DistributionSection from "@/components/distribution-section";
import WhitepaperSection from "@/components/whitepaper-section";
import CommunitySection from "@/components/community-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-lingo-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <DistributionSection />
      <WhitepaperSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
