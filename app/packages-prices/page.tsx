import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackagesPricesHero from "@/components/pages/packages/PackagesPricesHero";
import Subscriptions from "@/components/pages/packages/Subscriptions";
import BuiltForSMEs from "@/components/pages/packages/BuiltForSMEs";
import BuyASlot from "@/components/pages/packages/BuyASlot";

export const metadata = {
  title: "Packages & Prices | ad.here",
  description: "Stay longer, pay less - then check out right here. Lock any screen or bundle into a 3, 6, or 12-month term for a bigger discount.",
};

export default function PackagesPricesPage() {
  return (
    <>
      <Header />
      <main>
        <PackagesPricesHero />
        <Subscriptions />
        <BuiltForSMEs />
        <BuyASlot />
      </main>
      <Footer />
    </>
  );
}
