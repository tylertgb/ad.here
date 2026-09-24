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
    <section id="packages" className="wrap py-20 sm:py-28">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-x-24 mb-16 sm:mb-24">
        <div className="max-w-3xl w-full">
          <SectionHeading title="Packages & Bundles" />
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            One rate card. As many malls as your campaign needs.
          </h2>
        </div>
        <p className="mt-2 lg:mt-5 text-muted-navy lg:text-right leading-relaxed max-w-[48ch] lg:max-w-none">
          Bundle pricing rewards brands that run across more than one mall —
          the more of the network you use, the lower your effective cost per
          screen.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-x-10 gap-y-14 items-start">
        {PACKAGES.map((p) => (
          <div
            key={p.name}
            className={
              p.featured
                ? "relative lg:-mt-6 flex flex-col gap-6 rounded-[28px] bg-navy-soft p-9"
                : "flex flex-col gap-6 rounded-[28px] p-9 border border-navy-line"
            }
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-navy text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                Most booked
              </div>
            )}
            <div>
              <p
                className={`text-lg font-bold ${
                  p.featured ? "text-off-white" : "text-off-white"
                }`}
              >
                {p.name}
              </p>
              <p className="mt-1 text-sm text-muted-navy">{p.tag}</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gold tracking-tight">
                {p.amt}
              </span>
              <span className="text-xs text-muted-navy-dim">{p.per}</span>
            </div>
            <ul className="flex flex-col gap-3">
              {p.feats.map((f) => (
                <li
                  key={f}
                  className="flex gap-2.5 text-sm text-muted-navy leading-snug"
                >
                  <Check size={16} className="text-gold shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-2 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                p.featured
                  ? "bg-coral text-navy hover:bg-coral-dim"
                  : "border-2 border-navy-line text-off-white hover:border-coral hover:text-coral"
              }`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-14 text-sm text-muted-navy-dim max-w-[60ch]">
        All packages are quoted per campaign length and screen count — no
        reseller markup, no hidden production fees.
      </p>
    </section>
  );
}
