import { Upload, Zap, Monitor, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    icon: Upload,
    title: "Submit Your Brief",
    description: "Tell us about your campaign goals, target audience, and preferred malls. Takes less than 5 minutes."
  },
  {
    number: "02",
    icon: Zap,
    title: "AI Placement & Scheduling",
    description: "Our platform automatically selects optimal screen locations and schedules based on your brief and traffic data."
  },
  {
    number: "03",
    icon: Monitor,
    title: "Go Live in 35 Minutes",
    description: "Your ad is deployed across selected screens. No agency middleman, no delays. Just results."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Track Performance",
    description: "Real-time dashboard shows exactly when and where your ads play, with full transparency and proof-of-play reports."
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="wrap">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <SectionHeading title="How It Works" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 leading-tight tracking-tight">
            From Brief to Live in 35 Minutes
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our AI-powered platform automates the entire media buying process.
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
                <span className="absolute top-4 right-4 text-xs font-semibold text-slate-300">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-sm bg-coral/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-coral" strokeWidth={2} />
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
