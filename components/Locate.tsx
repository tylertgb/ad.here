import { Search } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ROWS = [
  { shop: "Find a store…", loc: null, tag: "Directory", search: true },
  { shop: "Nsroma Travel Desk", loc: "Level 2, Unit 14", tag: "2 min walk" },
  { shop: "Restrooms", loc: "Near Entrance C", tag: "0.5 min" },
];

const TICKS = [
  {
    strong: "Shoppers",
    rest: "search or scan a QR code to get walking directions to any store, restroom, or exit.",
  },
  {
    strong: "Mall management",
    rest: "gets a modern directory replacing static floor maps, at no build cost to them.",
  },
  {
    strong: "Advertisers",
    rest: "benefit from shoppers actively looking at the screen, not walking past it.",
  },
];

export default function Locate() {
  return (
    <section id="locate" className="wrap py-20 sm:py-28">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-36 items-center">
        <div className="order-2 lg:order-1 flex flex-col">
          {ROWS.map((r, i) => (
            <div
              key={r.shop}
              className={`flex items-center justify-between py-5 ${
                i > 0 ? "border-t border-navy-line" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                {r.search && <Search className="text-muted-navy text-2xl md:text-6xl" /> }
                <span>
                  <span className="block font-semibold text-off-white text-xl md:text-2xl">
                    {r.shop}
                  </span>
                  {r.loc && (
                    <span className="block text-xs text-muted-navy mt-0.5">
                      {r.loc}
                    </span>
                  )}
                </span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-gold">
                {r.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <div className="max-w-3xl w-full mb-10">
            <SectionHeading title="Ad.here Locate" />
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              The screen doubles as the mall&apos;s wayfinding system.
            </h2>
          </div>
          <p className="mt-5 text-muted-navy leading-relaxed max-w-[46ch]">
            Between ad loops, the same panel switches to a searchable store
            directory and mall map, the feature that gives mall management a
            genuine reason to host a screen, beyond the ad revenue share.
          </p>
        </div>
      </div>

      <ul className="grid lg:grid-cols-3 items-center gap-10 md:gap-24 mt-16 md:mt-24">
        {TICKS.map((t) => (
          <li
            key={t.strong}
            className="flex gap-3 text-[15px] leading-relaxed text-muted-navy"
          >
            <span className="text-coral font-bold shrink-0">—</span>
            <span>
              <strong className="text-off-white">{t.strong}</strong>{" "} <br />
              {t.rest}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
