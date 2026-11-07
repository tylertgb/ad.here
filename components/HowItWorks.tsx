import { Upload, Zap, Monitor, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    label: "Choose",
    icon: Upload,
    title: "Pick an offer",
    description: "A screen, a bundle, an event week, or a term subscription on a single invoice."
  },
  {
    number: "02",
    label: "Create",
    icon: Zap,
    title: "Send your brand",
    description: "Your logo and offer, or your own 15s video. We turn it into a loop-ready spot."
  },
  {
    number: "03",
    label: "Schedule",
    icon: Monitor,
    title: "We make it move",
    description: "Your spot is placed in the loop at the entrance free motion visuals in month one."
  },
  {
    number: "04",
    label: "Report",
    icon: CheckCircle,
    title: "Go live",
    description: "Your brand, on screen, right here with a monthly play report to prove it."
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-gray-50">
      <div className="wrap">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <SectionHeading title="How It Works" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 leading-tight tracking-tight">
            Live in four easy moves.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No production house, no separate vendor, no guesswork on airtime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <span className="text-xs font-semibold text-coral uppercase tracking-wider">
                    {step.number} · {step.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#packages"
            className="inline-flex items-center px-7 py-3.5 bg-coral text-white text-base font-semibold rounded-full hover:bg-coral-dim transition-colors"
          >
            View Packages
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
