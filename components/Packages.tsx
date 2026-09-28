import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PACKAGES = [
  {
    name: "Starter",
    tag: "One mall, full daily loop",
    amt: "1 mall",
    per: "per campaign",
    feats: [
      "Loop rotation, 12 hrs/day",
      "Static or short-motion creative",
      "Monthly proof-of-play report",
      "Mobile money or card payment",
    ],
    cta: "Request pricing",
    featured: false,
  },
  {
    name: "Network Bundle",
    tag: "3 malls, one invoice — most booked",
    amt: "Save up to 25%",
    per: "vs. single-mall rate",
    feats: [
      "Everything in Starter, per mall",
      "Priority dayparting (entrance + food court)",
      "Free creative resize across formats",
      "Dedicated account contact on WhatsApp",
    ],
    cta: "Request pricing",
    featured: true,
  },
  {
    name: "Full Network",
    tag: "All Phase 1 malls",
    amt: "Custom",
    per: "volume rate",
    feats: [
      "Every Phase 1 mall, synced scheduling",
      "Custom campaign strategy session",
      "Quarterly performance review",
      "First right of refusal on new mall sites",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 sm:py-28 bg-navy">
      <div className="wrap">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-x-20 mb-16">
          <div className="max-w-3xl w-full">
            <SectionHeading title="Packages & Bundles" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white">
              One rate card. As many malls as your campaign needs.
            </h2>
          </div>
          <p className="mt-2 lg:mt-5 text-gray-300 lg:text-right leading-relaxed max-w-[48ch] lg:max-w-none text-sm lg:text-base">
            Bundle pricing rewards brands that run across more than one mall —
            the more of the network you use, the lower your effective cost per
            screen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-14 items-start">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? "relative lg:-mt-6 flex flex-col gap-6 rounded-lg bg-white p-9 shadow-xl"
                  : "flex flex-col gap-6 rounded-lg p-9 bg-navy-soft border border-navy-line"
              }
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most booked
                </div>
              )}
              <div>
                <p
                  className={`text-lg font-semibold ${
                    p.featured ? "text-navy" : "text-white"
                  }`}
                >
                  {p.name}
                </p>
                <p className={`mt-1 text-sm ${p.featured ? "text-slate-600" : "text-gray-400"}`}>
                  {p.tag}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-semibold tracking-tight ${p.featured ? "text-coral" : "text-gold"}`}>
                  {p.amt}
                </span>
                <span className={`text-xs ${p.featured ? "text-slate-500" : "text-gray-400"}`}>
                  {p.per}
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {p.feats.map((f) => (
                  <li
                    key={f}
                    className={`flex gap-2.5 text-sm leading-snug ${p.featured ? "text-slate-700" : "text-gray-300"}`}
                  >
                    <Check size={16} className={`shrink-0 mt-0.5 ${p.featured ? "text-coral" : "text-gold"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-2 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  p.featured
                    ? "bg-coral text-white hover:bg-coral-dim"
                    : "border-2 border-gold/30 text-gold hover:border-gold hover:bg-gold/10"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-14 text-sm text-gray-400 max-w-[60ch]">
          All packages are quoted per campaign length and screen count — no
          reseller markup, no hidden production fees.
        </p>
      </div>
    </section>
  );
}
