import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import Packages from "@/components/Packages";
import TenantAdvantage from "@/components/TenantAdvantage";
import Locate from "@/components/Locate";
import Locations from "@/components/Locations";
import WhyAdhere from "@/components/WhyAdhere";
import SmeAndBeyond from "@/components/SmeAndBeyond";
import FounderCta from "@/components/FounderCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <HowItWorks />
        <WhatYouGet />
        <Packages />
        <TenantAdvantage />
        <Locate />
        <Locations />
        <WhyAdhere />
        <SmeAndBeyond />
        <FounderCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
