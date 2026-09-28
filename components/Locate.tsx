import { Search } from "lucide-react";
import Image from "next/image";
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
    <section id="locate" className="relative py-20 sm:py-28 bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/brandguideimage-1.png"
          alt="Location interface"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/60 via-navy/40 to-navy" />
      </div>

      <div className="wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="order-2 lg:order-1 flex flex-col">
            {ROWS.map((r, i) => (
              <div
                key={r.shop}
                className={`flex items-center justify-between py-5 ${
                  i > 0 ? "border-t border-navy-line" : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  {r.search && <Search className="text-coral text-2xl md:text-3xl" strokeWidth={2.5} /> }
                  <span>
                    <span className="block font-semibold text-white text-lg md:text-xl">
                      {r.shop}
                    </span>
                    {r.loc && (
                      <span className="block text-xs text-gray-300 mt-1">
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
            <div className="max-w-3xl w-full mb-8">
              <SectionHeading title="Ad.here Locate" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white">
                The screen doubles as the mall&apos;s wayfinding system.
              </h2>
            </div>
            <p className="mt-5 text-gray-200 leading-relaxed max-w-[46ch] text-sm lg:text-base">
              Between ad loops, the same panel switches to a searchable store
              directory and mall map — the feature that gives mall management a
              genuine reason to host a screen, beyond the ad revenue share.
            </p>
          </div>
        </div>

        <ul className="grid lg:grid-cols-3 items-start gap-8 lg:gap-12 mt-16 md:mt-20">
          {TICKS.map((t) => (
            <li
              key={t.strong}
              className="flex gap-3 text-sm lg:text-[15px] leading-relaxed text-gray-200"
            >
              <span className="text-coral font-bold shrink-0 text-lg">—</span>
              <span>
                <strong className="text-white font-semibold">{t.strong}</strong>{" "}
                {t.rest}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
