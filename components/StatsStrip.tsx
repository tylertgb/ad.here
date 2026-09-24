const STATS = [
  { num: "4", label: "malls in the Phase 1 rollout across Accra & Kumasi" },
  { num: "25%", prefix: "Up to ", label: "saved on average by bundling malls into one package" },
  { num: "12", suffix: " hrs", label: "of on-screen airtime per campaign, every day" },
  { num: "2", suffix: " networks", label: "indoor mall screens plus the outdoor portal" },
];

export default function StatsStrip() {
  return (
    <div className="wrap py-14 sm:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`py-6 sm:py-0 sm:px-8 ${
              i > 0 ? "sm:border-l border-navy-line" : ""
            } ${i === 0 ? "sm:pl-0" : ""}`}
          >
            <div className="text-4xl sm:text-5xl font-bold tracking-tight tabular-nums">
              {s.prefix && <span className="text-off-white">{s.prefix}</span>}
              <span className="text-gold">{s.num}</span>
              {s.suffix && <span className="text-off-white">{s.suffix}</span>}
            </div>
            <p className="mt-2.5 text-[15px] text-muted-navy leading-snug max-w-[24ch]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
