import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ROWS = [
  { shop: "Kesewaa Boutique", loc: "Level 1 · Marina Mall" },
  { shop: "Bite House Kitchen", loc: "Food Court · West Hills" },
  { shop: "Vibe Electronics", loc: "Ground Floor · Achimota" },
];

const TICKS = [
  {
    strong: "Preferential tenant rate",
    rest: "below our standard single-mall pricing, verified against your mall lease.",
  },
  {
    strong: "Featured Tenant Spotlight",
    rest: "a rotating highlight slot for in-mall businesses during peak footfall hours.",
  },
  {
    strong: "Cross-promotion with Ad.here Locate",
    rest: "your store listing links directly from the mall directory screen shoppers already use to find you.",
  },
];

export default function TenantAdvantage() {
  return (
    <section id="tenant-advantage" className="bg-paper text-ink py-20 sm:py-28">
      <div className="wrap">
        <div className="flex flex-col md:flex-row items-start justify-between gap-x-24 mb-4">
          <div className="max-w-3xl w-full mb-6 md:mb-14">
            <SectionHeading title="In-mall brand advantage" />
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Trading inside the mall already? Your rate just dropped.
            </h2>
          </div>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-[48ch]">
            If your store, kiosk, or restaurant leases space in a mall on the
            Ad.here network, you advertise on that mall&apos;s own screens at
            a preferential in-mall rate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <ul className="mt-8 flex flex-col gap-5">
              {TICKS.map((t) => (
                <li key={t.strong} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <ArrowRight size={24} className="text-coral-dim shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ink text-lg md:text-2xl">{t.strong}</strong> <br /> {t.rest}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-navy px-6 py-3.5 font-semibold text-off-white hover:bg-navy-soft transition-colors"
            >
              Check my mall&apos;s tenant rate
            </a>
          </div>

          <div className="flex flex-col">
            {ROWS.map((r, i) => (
              <div
                key={r.shop}
                className={`flex items-center justify-between py-5 ${
                  i > 0 ? "border-t border-paper-line" : ""
                }`}
              >
                <span>
                  <span className="block text-sm md:text-lg font-semibold text-ink">
                    {r.shop}
                  </span>
                  <span className="block text-sm text-ink-soft mt-0.5">
                    {r.loc}
                  </span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-coral-dim">
                  Tenant rate
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
