import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import WhyAdhere from "@/components/WhyAdhere";
import Locations from "@/components/Locations";
import ExploreAdhere from "@/components/ExploreAdhere";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        
        {/* Stats Section */}
        <section className="bg-gray-50">
          <div className="wrap">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="relative text-center py-12 px-8">
                <span className="absolute top-4 right-4 text-xs font-semibold text-slate-300">01</span>
                <div className="text-4xl lg:text-5xl font-semibold text-coral mb-2">2 <span className="text-slate-600 text-3xl">malls</span></div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">Atlantic Mall & Marina Mall, Accra</p>
              </div>
              <div className="relative text-center bg-coral/10 py-12 px-8">
                <span className="absolute top-4 right-4 text-xs font-semibold text-coral/40">02</span>
                <div className="text-4xl lg:text-5xl font-semibold mb-2">
                  <span className="text-slate-600">Up to </span><span className="text-coral">25%</span>
                </div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">Saved by bundling all three screens</p>
              </div>
              <div className="relative text-center py-12 px-8">
                <span className="absolute top-4 right-4 text-xs font-semibold text-slate-300">03</span>
                <div className="text-4xl lg:text-5xl font-semibold text-coral mb-2">360</div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">Ad plays per screen, per day</p>
              </div>
              <div className="relative text-center py-12 px-8">
                <span className="absolute top-4 right-4 text-xs font-semibold text-slate-300">04</span>
                <div className="text-4xl lg:text-5xl font-semibold text-coral mb-2">15<span className="text-slate-600 text-3xl">s</span></div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">Per spot - back on screen every 2 min</p>
              </div>
            </div>
          </div>
        </section>
      
        <HowItWorks />
        
        <WhatYouGet />
        
        <Locations />
        
        <WhyAdhere />
        
        <ExploreAdhere />
        
      </main>
      <Footer />
    </>
  );
}
