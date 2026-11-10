import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const EXPLORE_CARDS = [
  {
    label: "AD OFFERS",
    title: "Brand spaces, event weeks, screen rental & screen purchase",
    description: "Every way onto an Ad.here screen — brand visibility, event weeks, screen rental, or buying your own.",
    linkText: "See all offers",
    linkHref: "/ad-offers",
  },
  {
    label: "PACKAGES & PRICES",
    title: "Compare subscription terms and check out",
    description: "3, 6, and 12-month terms with stacking discounts, plus live checkout — see your exact rate before you commit.",
    linkText: "See pricing",
    linkHref: "/packages-bundles",
  },
  {
    label: "BLOG",
    title: "Advertising guidance for Ghanaian SMEs",
    description: "Budgeting for your first campaign, picking a package, and what actually happens after you buy a slot.",
    linkText: "Read the blog",
    linkHref: "/blog",
  },
];

export default function ExploreAdhere() {
  return (
    <section className="relative bg-gray-50 overflow-visible">
      <div className="wrap relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              Explore Ad.here
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-tight tracking-tight">
            Three more places to look before you buy.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 md:max-w-3xl justify-center gap-6 relative z-5">
          {EXPLORE_CARDS.map((card) => (
            <div
              key={card.label}
              className="relative bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-5">
                <span className="text-xs font-semibold text-coral uppercase tracking-wider">
                  {card.label}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-navy mb-4 leading-snug">
                {card.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {card.description}
              </p>
              
              <Link
                href={card.linkHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-coral-dim transition-colors group"
              >
                {card.linkText}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Mascot Character - Enterprise Lady (positioned absolutely) */}
        <div className="hidden lg:block absolute bottom-0 -right-40 md:-right-10 w-80 lg:w-[40%] pointer-events-none z-0">
          <Image
            src="/play-callout.png"
            alt="ad.here enterprise mascot"
            width={484}
            height={484}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
