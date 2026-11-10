import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdOffersHero from "@/components/pages/ad-offers/AdOffersHero";
import ScreensShowcase from "@/components/pages/ad-offers/ScreensShowcase";
import BrandAdSpaces from "@/components/pages/ad-offers/BrandAdSpaces";
import EventsAdSpaces from "@/components/pages/ad-offers/EventsAdSpaces";
import ScreenRental from "@/components/pages/ad-offers/ScreenRental";
import PurchaseLEDScreen from "@/components/pages/ad-offers/PurchaseLEDScreen";

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
        <ScreensShowcase />
        <BrandAdSpaces />
        <EventsAdSpaces />
        <ScreenRental />
        <PurchaseLEDScreen />
      </main>
      <Footer />
    </>
  );
}
