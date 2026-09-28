import { Zap, DollarSign, LineChart, Shield, Clock, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const BENEFITS = [
  {
    icon: Zap,
    title: "AI-Powered Speed",
    description: "From brief to live in 35 minutes. No agency delays, no back-and-forth negotiations."
  },
  {
    icon: DollarSign,
    title: "No Agency Fees",
    description: "Direct platform access means you keep more of your budget for actual advertising."
  },
  {
    icon: LineChart,
    title: "Full Transparency",
    description: "Real-time dashboards show exactly where your ads run and when. Complete proof-of-play reports."
  },
  {
    icon: Shield,
    title: "Indoor Protection",
    description: "Weather-proof screens in climate-controlled environments. No sun fade, rain damage, or dust."
  },
  {
    icon: Clock,
    title: "Captive Audience",
    description: "Shoppers spend minutes in front of your ads, not seconds passing by on a road."
  },
  {
    icon: Target,
    title: "SME-Friendly",
    description: "Start with one mall. Bundle packages available. Flexible payment options including mobile money."
  },
];

export default function WhyAdhere() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-white">
      <div className="wrap">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <SectionHeading title="Why Ad.here" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 leading-tight tracking-tight">
            Built for SMEs Who Need Results
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No agency fees. No guesswork. No wasted spend. Just intelligent advertising that works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-sm bg-coral/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-coral" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3.5 bg-navy text-white text-base font-semibold rounded-full hover:bg-navy-soft transition-colors"
          >
            Get Started Today
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
