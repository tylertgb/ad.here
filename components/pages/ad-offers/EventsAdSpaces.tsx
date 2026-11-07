import Link from "next/link";

const EVENT_LOCATIONS = [
  {
    name: "Atlantic Mall",
    description: "Phase 1 or Phase 2 · Panda Mart entrance / 1st floor elevator",
    price: "₵950",
    highlighted: false,
  },
  {
    name: "Marina Mall",
    description: "Supermarket walkway entrance",
    price: "₵1,050",
    highlighted: true,
    badge: "AIRPORT CITY",
  },
];

const RATE_COMPARISON = [
  {
    label: "Brand rate (1-month minimum)",
    atlantic: "₵3,500",
    marina: "₵4,500",
  },
  {
    label: "Event rate (book only the week you need)",
    atlantic: "₵950 / wk",
    atlanticHighlight: true,
    marina: "₵1,050 / wk",
    marinaHighlight: true,
  },
];

const USE_CASES = [
  "No monthly commitment",
  "Concerts & shows",
  "Church programmes",
  "Launches & festivals",
];

export default function EventsAdSpaces() {
  return (
    <section id="events-ad-spaces" className="py-24 sm:py-32 bg-gray-50">
      <div className="wrap">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              02 · Events Ad Spaces
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
            Your event. On screen. All week.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Concert, church programme, launch, or festival? Book by the week - no monthly commitment.
          </p>
        </div>

        {/* Event Locations */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {EVENT_LOCATIONS.map((location) => (
            <div
              key={location.name}
              className={`relative p-8 rounded-lg transition-all duration-300 ${
                location.highlighted
                  ? "bg-coral/5 border-2 border-coral shadow-lg"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              {location.badge && (
                <div className="absolute -top-3 left-8">
                  <span className="px-4 py-1 bg-coral text-white text-xs font-bold uppercase tracking-wide rounded-full">
                    {location.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-semibold text-navy mb-2">
                {location.name}
              </h3>
              <p className="text-sm text-slate-500 mb-6">{location.description}</p>

              <div className="mb-2">
                <span className="text-4xl font-bold text-coral">{location.price}</span>
              </div>
              <p className="text-sm text-slate-500">per week, per screen</p>
            </div>
          ))}
        </div>

        {/* Rate Comparison Table */}
        <div className="mb-12 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left px-6 py-4 text-sm font-semibold"></th>
                <th className="text-center px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                  Atlantic Mall
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                  Marina Mall
                </th>
              </tr>
            </thead>
            <tbody>
              {RATE_COMPARISON.map((row, idx) => (
                <tr key={idx} className="border-t border-slate-200 bg-white">
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-base font-semibold ${
                      row.atlanticHighlight ? "text-coral" : "text-slate-400 line-through"
                    }`}>
                      {row.atlantic}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-base font-semibold ${
                      row.marinaHighlight ? "text-coral" : "text-slate-400 line-through"
                    }`}>
                      {row.marina}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-base text-slate-600 mb-12">
          A week from ₵950, instead of a full month.
        </p>

        {/* Use Cases */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {USE_CASES.map((useCase) => (
            <span
              key={useCase}
              className="px-4 py-2 bg-white border border-slate-200 text-sm text-slate-600 font-medium rounded-full"
            >
              {useCase}
            </span>
          ))}
        </div>

        {/* Event Offer Banner */}
        <div className="p-8 bg-linear-to-br from-coral/10 to-coral/5 border border-coral/30 rounded-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="mb-3">
                <span className="px-3 py-1 bg-coral text-white text-xs font-bold uppercase tracking-wide rounded-full">
                  Event Offer · Now till 15 December 2026
                </span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">
                From ₵950 a week.
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl">
                Have your visual? Send a 15s portrait MP4 (320×960px) and go live. No visual? ₵900 per motion visual, made by us.
              </p>
              <p className="text-xs text-slate-500 mt-3">
                Per screen, per week. Ad visuals not included unless requested. Offer valid till 15 December 2026.
              </p>
            </div>
            <Link
              href="#contact"
              className="shrink-0 px-7 py-3.5 bg-coral text-white text-base font-semibold rounded-full hover:bg-coral-dim transition-colors"
            >
              Request your event week
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
