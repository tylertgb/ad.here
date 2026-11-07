import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdOffersHero from "@/components/pages/ad-offers/AdOffersHero";
import BrandAdSpaces from "@/components/pages/ad-offers/BrandAdSpaces";

export const metadata = {
  title: "Ad Offers | ad.here",
  description: "Every way to get your brand — or your event — on screen. Ongoing visibility, a one-week event push, a screen for your venue, or one you own outright.",
};

export default function AdOffersPage() {
  return (
    <>
      <Header />
      <main>
        <AdOffersHero />
        <BrandAdSpaces />
        
        {/* Additional Ad Offers sections will be added here */}
      </main>
      <Footer />
    </>
  );
}
