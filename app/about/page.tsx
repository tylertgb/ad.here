import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 bg-navy overflow-hidden min-h-100">
          <Image
            src="/mall (7).jpg"
            alt="ad.here company"
            fill
            className="object-cover opacity-30"
          />
          <div className="wrap relative h-full flex items-center">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-wide text-gold font-semibold mb-4">
                About ad.here
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
                Where your ad sticks
              </h1>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="wrap py-20 sm:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
              The Story Behind ad.here
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p>
                Ghana's SMEs are dynamic, ambitious, and ready to grow. Yet access to intelligent, 
                affordable media buying has remained out of reach — locked behind expensive agencies, 
                manual processes, and fragmented platforms.
              </p>
              <p className="font-semibold text-navy">
                ad.here was built to change that.
              </p>
              <p>
                The name carries a double meaning: placing your <span className="font-semibold">ad here</span>, 
                right where your audience is, and the act of <span className="font-semibold">adhering</span> — 
                sticking to your audience with relevance, consistency, and precision.
              </p>
              <p>
                We are an AI-first platform that automates the full media buying journey: from brief 
                to live campaign in 35 minutes. No agency fees. No guesswork. No wasted spend.
              </p>
              <p className="text-xl font-semibold text-navy">
                ad.here is where Ghanaian businesses stop hoping their ads land, and start knowing they do.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-white py-20 sm:py-24">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-block px-4 py-2 bg-coral/10 text-coral font-semibold rounded-full mb-6">
                  Vision
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-navy mb-4">
                  Africa's Most Intelligent Media Buying Platform
                </h3>
                <p className="text-base lg:text-lg text-slate-700">
                  To be Africa's most intelligent media buying platform, empowering every business 
                  to compete and win with precision advertising.
                </p>
              </div>
              <div>
                <div className="inline-block px-4 py-2 bg-gold/20 text-navy font-semibold rounded-full mb-6">
                  Mission
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-navy mb-4">
                  Accessible & Affordable Media Placements
                </h3>
                <p className="text-base lg:text-lg text-slate-700">
                  To make effective media placements accessible and affordable for local businesses 
                  through automation, intelligence, and radical simplicity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="wrap py-20 sm:py-24 ">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4 text-center">
              Core Values
            </h2>
            <p className="text-base lg:text-lg text-slate-600 text-center mb-16">
              What we stand for
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold text-navy mb-3">Simplicity</h4>
                <p className="text-slate-700 text-sm">
                  Complex media strategy, made accessible. From brief to live in 35 minutes, 
                  for any business, any size.
                </p>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold text-navy mb-3">Transparency</h4>
                <p className="text-slate-700 text-sm">
                  Clear reporting, honest numbers. Clients always know where their money goes 
                  and what it achieved.
                </p>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold text-navy mb-3">Results</h4>
                <p className="text-slate-700 text-sm">
                  Performance over promise. We measure what matters and optimize relentlessly 
                  until campaigns deliver.
                </p>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold text-navy mb-3">Intelligence</h4>
                <p className="text-slate-700 text-sm">
                  Our platform thinks ahead, learns fast, and continuously improves every campaign.
                </p>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold text-navy mb-3">Precision</h4>
                <p className="text-slate-700 text-sm">
                  Every ad placed with intent. We target the right audience, channel, and moment. 
                  No waste, no guesswork.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Show Up */}
        <section className="bg-coral text-white py-20 sm:py-24">
          <div className="wrap">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center text-navy">
              How We Speak
            </h2>
            <p className="text-base lg:text-lg text-navy/70 text-center mb-16 max-w-2xl mx-auto">
              Our communication principles
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3 text-navy">Direct, not blunt</h4>
                <p className="text-navy/80 text-sm">
                  We say what we mean, clearly. We do not pad our words, but we are never cold.
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3 text-navy">Confident, not arrogant</h4>
                <p className="text-navy/80 text-sm">
                  We back every claim with proof. We let results do the talking, not hype.
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3 text-navy">Smart, not complex</h4>
                <p className="text-navy/80 text-sm">
                  We simplify the technical. If an SME owner cannot understand it, we have not done our job.
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3 text-white">Warm, not casual</h4>
                <p className="text-navy/80 text-sm">
                  We treat every client as a partner. Professional respect, human warmth.
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3 text-white">Driven</h4>
                <p className="text-navy/80 text-sm">
                  We are relentlessly focused on outcomes. Good enough is never the goal.
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3 text-white">Modern</h4>
                <p className="text-navy/80 text-sm">
                  We look and feel like the future of advertising in Africa — forward-thinking, digital-native.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
