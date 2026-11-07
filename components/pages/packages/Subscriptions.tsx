import Link from "next/link";
import { Check } from "lucide-react";

const SUBSCRIPTION_TIERS = [
  {
    duration: "3 months",
    subtitle: "On any single screen or bundle",
    discount: "-5%",
    discountText: "off your monthly rate",
    features: [
      "15-second spot",
      "1 free set of motion visuals",
      "Monthly proof-of-play report",
    ],
  },
  {
    duration: "6 months",
    subtitle: "On any single screen or bundle",
    discount: "-10%",
    discountText: "off your monthly rate",
    features: [
      "Bonus: up to 30-second spot",
      "2 free sets of motion visuals",
      "Rate locked for the term",
    ],
    highlighted: false,
  },
  {
    duration: "12 months",
    subtitle: "On any single screen or bundle",
    discount: "-15%",
    discountText: "off your monthly rate",
    features: [
      "Bonus: up to 45-second spot, 3x the time",
      "Fresh motion visuals every quarter",
      "Rate locked for the full year",
    ],
    highlighted: true,
  },
];

export default function Subscriptions() {
  return (
    <section id="subscriptions" className="py-24 sm:py-32 bg-white">
      <div className="wrap">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              Subscriptions
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
            Stay longer, pay less, play longer.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Applies on top of any single screen or bundle from Brand Ad Spaces. All prices tax inclusive.
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {SUBSCRIPTION_TIERS.map((tier) => (
            <div
              key={tier.duration}
              className={`relative p-8 rounded-lg transition-all duration-300 ${
                tier.highlighted
                  ? "bg-coral/5 border-2 border-coral shadow-xl"
                  : "bg-gray-50 hover:shadow-lg"
              }`}
            >
              <h3 className="text-xl font-bold text-navy mb-1">
                {tier.duration}
              </h3>
              <p className="text-sm text-slate-500 mb-6">{tier.subtitle}</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-coral mb-1">
                  {tier.discount}
                </div>
                <p className="text-sm text-slate-600">{tier.discountText}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check size={16} className="text-coral shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full px-6 py-3 text-sm font-semibold rounded-full transition-colors ${
                tier.highlighted
                  ? "bg-coral text-white hover:bg-coral-dim"
                  : "bg-coral text-white hover:bg-coral-dim"
              }`}>
                Choose this term
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-slate-600">
          Bonus-time spots are limited, first come first served. No reseller markup, no hidden fees. Running an event instead? See rates on{" "}
          <Link href="/ad-offers#events-ad-spaces" className="text-coral hover:text-coral-dim transition-colors font-semibold">
            Ad Offers →
          </Link>
        </p>
      </div>
    </section>
  );
}
