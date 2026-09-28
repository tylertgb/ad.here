import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Locate from "@/components/Locate";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import WhyAdhere from "@/components/WhyAdhere";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
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
              <div className="relative text-center bg-coral/10 py-12 px-8">
                <span className="absolute top-4 right-4 text-xs font-semibold text-coral/40">01</span>
                <div className="text-4xl lg:text-5xl font-semibold text-coral mb-2">35min</div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">Brief to Live Campaign</p>
                <span className="text-xs text-slate-400 mt-2 block">Speed</span>
              </div>
              <div className="relative text-center py-12 px-8">
                <span className="absolute top-4 right-4 text-xs font-semibold text-slate-300">02</span>
                <div className="text-4xl lg:text-5xl font-semibold text-gold mb-2">4+</div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">Premium Mall Locations</p>
                <span className="text-xs text-slate-400 mt-2 block">Coverage</span>
              </div>
              <div className="relative text-center py-12 px-8">
                <span className="absolute top-4 right-4 text-xs font-semibold text-slate-300">03</span>
                <div className="text-4xl lg:text-5xl font-semibold text-coral mb-2">24/7</div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">Performance Monitoring</p>
                <span className="text-xs text-slate-400 mt-2 block">Support</span>
              </div>
              <div className="relative text-center py-12 px-8">
                <span className="absolute top-4 right-4 text-xs font-semibold text-slate-300">04</span>
                <div className="text-4xl lg:text-5xl font-semibold text-gold mb-2">100%</div>
                <p className="text-sm lg:text-base text-slate-600 font-medium">Transparent Reporting</p>
                <span className="text-xs text-slate-400 mt-2 block">Trust</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Brand Showcase Section */}
        <section className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              <div>
                <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
                  <p className="text-xs uppercase tracking-widest text-navy font-semibold">
                    Platform Intelligence
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
                  Precision Advertising, Powered by AI
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our platform automates the entire media buying journey. From campaign brief to live 
                  placement in 35 minutes—no agency, no guesswork, no wasted budget.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-coral/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1 text-base">Instant Campaign Launch</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Go from brief to live in 35 minutes with AI-powered automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1 text-base">Full Transparency</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Real-time reporting shows exactly where your budget goes and what it achieves</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full">
                <div className="relative h-full rounded-xl overflow-hidden">
                  <Image
                    src="/brandguideimage-1.png"
                    alt="ad.here platform interface"
                    width={800}
                    height={1000}
                    className="w-full h-full"
                    quality={95}
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-coral/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        <Locate />
        
        <HowItWorks />
        
        {/* Indoor Network Section */}
        <section id="network" className="py-24 sm:py-32 bg-white">
          <div className="wrap">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
                <p className="text-xs uppercase tracking-widest text-navy font-semibold">
                  Indoor Network
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 leading-tight tracking-tight">
                Strategic Placement Across Ghana's Premier Malls
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our AI-powered platform places your ads exactly where they'll be seen. 
                Premium LED screens in high-traffic locations across Accra and Kumasi.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="relative h-90 rounded-lg overflow-hidden">
                  <Image
                    src="/mall (4).jpg"
                    alt="Mall entrance placement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">Entrance Zones</h3>
                    <p className="text-gray-200 text-sm">First impression, maximum visibility</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative h-90 rounded-lg overflow-hidden">
                  <Image
                    src="/mall (5).jpg"
                    alt="Food court placement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">Food Courts</h3>
                    <p className="text-gray-200 text-sm">Engaged audiences, extended dwell time</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative h-90 rounded-lg overflow-hidden">
                  <Image
                    src="/mall (6).jpg"
                    alt="Corridor placement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">Main Corridors</h3>
                    <p className="text-gray-200 text-sm">High foot traffic, consistent exposure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Locations />

        <Packages />
        
        <WhyAdhere />
        
        {/* Brand Guide Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/brandguideimage-2.png"
                    alt="ad.here brand communication"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    quality={95}
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
                  <p className="text-xs uppercase tracking-widest text-navy font-semibold">
                    How We Communicate
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
                  Direct. Confident. Results-Focused.
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We say what we mean, clearly. No marketing fluff. No complex jargon. 
                  Just honest communication backed by data and performance.
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center text-coral font-semibold text-lg hover:text-coral-dim transition-colors group"
                >
                  Learn about our approach
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
