import SectionHeading from "./SectionHeading";

const ROWS = [
  {
    label: "Audience type",
    adhere: "Captive shoppers, minutes of dwell time",
    billboard: "Passing traffic, seconds of glance time",
    vendor: "Varies — often passing traffic too",
  },
  {
    label: "Weather exposure",
    adhere: "None-fully indoor",
    billboard: "Full sun, rain, harmattan dust",
    vendor: "Depends on install location",
  },
  {
    label: "Entry point for SMEs",
    adhere: "Single-mall packages available",
    billboard: "Usually full-panel minimums",
    vendor: "Varies by vendor",
  },
  {
    label: "Payment flexibility",
    adhere: "Mobile money & card, flexible plans",
    billboard: "Typically bank transfer only",
    vendor: "Typically bank transfer only",
  },
  {
    label: "Proof of placement",
    adhere: "Play-out report per campaign",
    billboard: "Photo evidence, manually requested",
    vendor: "Varies by vendor",
  },
  {
    label: "Added shopper utility",
    adhere: "Doubles as mall wayfinding (Locate)",
    billboard: "None",
    vendor: "Rare",
  },
];

export default function WhyAdhere() {
  return (
    <section id="why" className="wrap py-20 sm:py-28">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-x-24 mb-14">
        <div className="max-w-4xl w-full mb-3 md:mb-14">
          <SectionHeading title="Why Ad.here" />
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Built for how Ghanaian brands actually spend.
          </h2>
        </div>
        <p className="text-muted-navy leading-relaxed">
          Not every business has a billboard-sized budget or a media-buying
          team. Ad.here was designed around that reality.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-170 text-sm border-collapse">
          <thead>
            <tr className="border-b border-navy-line">
              <th className="py-4 pr-4 text-left font-medium text-muted-navy-dim" />
              <th className="py-4 pr-6 text-sm uppercase text-left font-semibold text-coral">
                Ad.here indoor network
              </th>
              <th className="py-4 pr-6 text-sm uppercase text-left font-medium text-muted-navy-dim">
                Outdoor billboards
              </th>
              <th className="py-4 text-sm uppercase text-left font-medium text-muted-navy-dim">
                Typical signage vendor
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.label} className="border-b border-navy-line">
                <th className="py-4 pr-4 text-left font-medium text-muted-navy whitespace-nowrap">
                  {r.label}
                </th>
                <td className="py-4 pr-6 text-gold font-medium">
                  {r.adhere}
                </td>
                <td className="py-4 pr-6 text-muted-navy">{r.billboard}</td>
                <td className="py-4 text-muted-navy">{r.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
