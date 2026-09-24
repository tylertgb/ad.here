import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    idx: "01",
    title: "Choose your malls",
    body: "Run in one mall or bundle several, such as Marina, West Hills, Kumasi, Achimota on a single invoice.",
  },
  {
    idx: "02",
    title: "Send us your creative",
    body: "Upload existing artwork, or use our in-house design support to build a loop-ready spot.",
  },
  {
    idx: "03",
    title: "We slot it into the loop",
    body: "Your spot is placed by daypart and dwell zone, such as entrance, food court, or anchor-store corridor.",
  },
  {
    idx: "04",
    title: "Get proof of play",
    body: "A play-out report confirms exactly when and where your ad ran, mall by mall.",
  },
];

export default function HowItWorks() {
  return (
    <section className="wrap py-20 sm:py-28">
      <div className="grid lg:grid-cols-[0.6fr_1.0fr] gap-10 lg:gap-16">
        <div className="text-left">
          <SectionHeading title="How it works" />
         
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            From brief to on-screen, in four steps.
          </h2>
        </div>

        <ol className="relative flex flex-col">
          {STEPS.map((s, i) => (
            <li
              key={s.idx}
              className={`relative grid sm:grid-cols-[3rem_1fr] gap-4 sm:gap-8 py-7 ${
                i > 0 ? "border-t border-navy-line" : ""
              }`}
            >
              <span className="text-transparent text-sm md:text-5xl font-bold text-outline-coral tabular-nums">
                {s.idx}
              </span>
              <div>
                <h3 className="text-lg md:text-5xl font-semibold text-off-white">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[15px] text-muted-navy leading-relaxed max-w-[52ch]">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
