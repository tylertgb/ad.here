import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackagesPricesHero from "@/components/pages/packages/PackagesPricesHero";

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
        
        {/* Packages & Prices sections will be added here */}
      </main>
      <Footer />
    </>
  );
}
