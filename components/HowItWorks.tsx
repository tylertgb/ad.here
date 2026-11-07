import { Upload, Zap, Monitor, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    label: "Choose",
    icon: Upload,
    title: "Pick your malls & package",
    description: "Run in one mall or bundle several — Marina, West Hills, Kumasi, Achimota — on a single invoice."
  },
  {
    number: "02",
    label: "Create",
    icon: Zap,
    title: "Send us your creative",
    description: "Upload existing artwork, or use our in-house design support to build a loop-ready spot."
  },
  {
    number: "03",
    label: "Schedule",
    icon: Monitor,
    title: "We slot it into the loop",
    description: "Your spot is placed by daypart and dwell zone — entrance, food court, or anchor-store corridor."
  },
  {
    number: "04",
    label: "Report",
    icon: CheckCircle,
    title: "Get proof of play",
    description: "A play-out report confirms exactly when and where your ad ran, mailed by mail."
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="wrap">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <SectionHeading title="How It Works" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-5 leading-tight tracking-tight">
            From brief to on-screen, in four steps.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No production house, no separate billboard vendor, no guesswork on when your ad actually played.
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
