import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const MALLS = [
  { city: "Accra", name: "Marina Mall", status: "Lease in progress" },
  { city: "Accra", name: "West Hills Mall", status: "Phase 1 target" },
  { city: "Kumasi", name: "Kumasi Mall", status: "Phase 1 target" },
  { city: "Accra", name: "Achimota Mall", status: "Phase 1 target" },
];

export default function Locations() {
  return (
    <section id="locations" className="bg-paper text-ink py-20 sm:py-28">
      <div className="wrap grid lg:grid-cols-[0.6fr_1.4fr] gap-10 lg:gap-16">
        <div>
          <div className="max-w-3xl w-full mb-6 md:mb-14">
            <SectionHeading title="Phase 1 Locations" />
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Where the network rolls out first.
            </h2>
          </div>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-[36ch]">
            Installation begins mall by mall as screens arrive and lease
            terms are finalised.
          </p>
        </div>

        <div>
          {MALLS.map((m, i) => (
            <div
              key={m.name}
              className={`flex items-baseline justify-between gap-6 py-6 ${
                i > 0 ? "border-t border-paper-line" : ""
              }`}
            >
              <span className="flex flex-col md:flex-row items-baseline gap-1 md:gap-4">
                <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-ink-soft w-20 shrink-0">
                  <MapPin size={14} className="shrink-0" />
                  {m.city}
                </span>
                <span className="text-lg sm:text-2xl font-semibold text-ink">
                  {m.name}
                </span>
              </span>
              <span className="text-sm font-medium text-coral-dim whitespace-nowrap">
                {m.status}
              </span>
            </div>
          ))}

          <p className="mt-8 pt-6 border-t border-paper-line text-sm text-ink-soft">
            In early discussion for later phases: Accra Mall, A&amp;C Mall,
            and Palace Mall. Want your mall on the network?{" "}
            <a href="#contact" className="font-semibold text-coral-dim">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
