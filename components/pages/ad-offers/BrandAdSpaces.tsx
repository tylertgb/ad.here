import Link from "next/link";
import { Check } from "lucide-react";

const SINGLE_SCREENS = [
  {
    title: "Atlantic Phase 1",
    location: "Ground floor · Panda Mart entrance",
    price: "₵3,500",
    features: [
      "One 15-second spot, looped 12 trading hours/day",
      "360 plays a day on this screen",
      "Monthly proof-of-play report",
    ],
  },
  {
    title: "Atlantic Phase 2",
    location: "1st floor · Game It Up entrance",
    price: "₵3,500",
    features: [
      "One 15-second spot, looped 12 trading hours/day",
      "360 plays a day on this screen",
      "Monthly proof-of-play report",
    ],
  },
  {
    title: "Marina Mall",
    location: "Airport City · Supermarket walkway",
    price: "₵4,500",
    features: [
      "One 15-second spot, looped 12 trading hours/day",
      "360 plays a day on this screen",
      "Monthly proof-of-play report",
    ],
  },
];

const BUNDLES = [
  {
    title: "Double Up",
    subtitle: "Atlantic Phase 1 + Phase 2",
    badge: "Save 15%",
    originalPrice: "₵7,000",
    price: "₵5,950",
    features: [
      "Both Atlantic entrances, one invoice",
      "720 combined plays a day",
      "Monthly proof-of-play report",
    ],
    highlighted: false,
  },
  {
    title: "Mall Hop",
    subtitle: "Atlantic (1 or 2) + Marina",
    badge: "Save 20%",
    label: "MOST BOOKED",
    originalPrice: "₵8,000",
    price: "₵6,400",
    features: [
      "One Atlantic entrance + Marina Mall",
      "Priority dayparting at both malls",
      "Dedicated contact on WhatsApp",
    ],
    highlighted: true,
  },
  {
    title: "All Here",
    subtitle: "Atlantic 1 + 2 + Marina",
    badge: "Save 25% - Best value",
    originalPrice: "₵11,500",
    price: "₵8,625",
    features: [
      "All three screens, synced scheduling",
      "1,080 combined plays a day",
      "Quarterly performance review",
    ],
    highlighted: false,
  },
];

export default function BrandAdSpaces() {
  return (
    <section id="brand-ad-spaces" className="py-24 sm:py-32 bg-white">
      <div className="wrap">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              01 · Brand Ad Spaces
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
            Ongoing visibility for your brand, month after month.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Single screens, bundles, and stacking term subscriptions across Atlantic and Marina. All prices tax inclusive, per month.
          </p>
        </div>

        {/* Tenant Rate Callout */}
        <div className="mb-8 p-6 border-l-4 border-gold bg-gray-50 rounded-r-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            Trading inside Atlantic or Marina Mall?{" "}
            <span className="font-semibold text-navy">Your rate is lower</span> - plus a rotating Featured Tenant Spotlight slot.
          </p>
          <Link
            href="#contact"
            className="shrink-0 px-5 py-2.5 bg-coral text-white text-sm font-semibold rounded-full hover:bg-coral-dim transition-colors"
          >
            Check my tenant rate
          </Link>
        </div>

        {/* Launch Offer Banner */}
        <div className="mb-16 p-8 bg-linear-to-br from-gold/20 to-gold/10 border border-gold/30 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-navy mb-1">
              Launch offer — first brands in: 20% off month one
            </h3>
            <p className="text-sm text-slate-600">
              Plus free motion visuals worth ₵900, made by us. Any package. Offer ends 30 November 2026.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-6 py-3 bg-coral text-white text-sm font-semibold rounded-full hover:bg-coral-dim transition-colors"
          >
            Claim the offer
          </Link>
        </div>

        {/* Single Screens */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-navy mb-8">
            Single screens <span className="text-slate-500 font-normal">- right here, one screen</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {SINGLE_SCREENS.map((screen) => (
              <div
                key={screen.title}
                className="relative bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-navy mb-1">
                  {screen.title}
                </h4>
                <p className="text-sm text-slate-500 mb-6">{screen.location}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-coral">{screen.price}</span>
                  <span className="text-sm text-slate-500 ml-2">per month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {screen.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={16} className="text-coral shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-coral text-white text-sm font-semibold rounded-full hover:bg-coral-dim transition-colors">
                  Buy this screen
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bundles */}
        <div>
          <h3 className="text-xl font-semibold text-navy mb-8">
            Bundles <span className="text-slate-500 font-normal">- more screens, less ₵</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {BUNDLES.map((bundle) => (
              <div
                key={bundle.title}
                className={`relative p-8 rounded-lg transition-all duration-300 ${
                  bundle.highlighted
                    ? "bg-coral/5 border-2 border-coral shadow-xl"
                    : "bg-gray-50 hover:shadow-lg"
                }`}
              >
                {bundle.label && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-coral text-white text-xs font-bold uppercase tracking-wide rounded-full">
                      {bundle.label}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gold/20 text-navy text-xs font-semibold rounded-full">
                    {bundle.badge}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-navy mb-1">
                  {bundle.title}
                </h4>
                <p className="text-sm text-slate-500 mb-6">{bundle.subtitle}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-lg text-slate-400 line-through">{bundle.originalPrice}</span>
                    <span className="text-4xl font-bold text-coral">{bundle.price}</span>
                  </div>
                  <span className="text-sm text-slate-500">per month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {bundle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={16} className="text-coral shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full px-6 py-3 text-sm font-semibold rounded-full transition-colors ${
                  bundle.highlighted 
                    ? "bg-coral text-white hover:bg-coral-dim" 
                    : "bg-coral text-white hover:bg-coral-dim"
                }`}>
                  Buy this bundle
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-600">
            All prices tax inclusive. Want to stretch your rate further with a 3, 6, or 12-month term? See{" "}
            <Link href="/packages-prices" className="text-coral hover:text-coral-dim transition-colors font-semibold">
              Packages & Prices →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
