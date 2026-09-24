import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SignalArcs } from "./SignalArcs";

const PERKS = [
  "Launch-rate pricing locked for 12 months",
  "First pick of dayparts across Phase 1 malls",
  "Featured as a launch partner across our channels",
  "Direct line to our team on WhatsApp",
];

export default function FounderCta() {
  return (
    <section className="relative overflow-hidden bg-navy-soft py-20 sm:py-24">
      <SignalArcs
        className="pointer-events-none absolute -right-32 -top-32 w-230 h-230 opacity-40"
        stroke="var(--color-gold)"
      />
      <div className="wrap relative grid lg:grid-cols-[1.3fr_0.9fr] gap-12 items-center">
        <div>
          <div className="max-w-3xl w-full mb-6 md:mb-14">
            <SectionHeading title="Founding partner program" />
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
               Become a founding partner before the network goes live.
            </h2>
          </div>
          <p className="mt-5 text-muted-navy leading-relaxed max-w-[48ch]">
            Open to any brand ready to commit early from a single-mall SME
            package to a full network bundle. Sign on during installation and
            your campaign is scheduled from launch day, at launch-rate
            pricing.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center rounded-full bg-coral px-7 py-3.5 font-semibold text-navy hover:bg-coral-dim transition-colors"
          >
            Apply as a founding partner
          </a>
        </div>
        
        <ul className="flex flex-col gap-4">
          {PERKS.map((p, i) => (
            <li
              key={p}
              className={`flex items-start gap-3 text-sm sm:text-xl text-off-white pt-4 ${
                i > 0 ? "border-t border-navy-line" : ""
              }`}
            >
              <Star size={20} className="text-gold fill-gold shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
