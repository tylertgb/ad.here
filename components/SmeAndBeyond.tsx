import SectionHeading from "./SectionHeading";

const SME_CARDS = [
  {
    title: "No big-budget minimum",
    body: "Single-mall Starter packages are priced for a first-time advertiser, not just national brands.",
  },
  {
    title: "Pay the way you already pay",
    body: "Mobile money and card payment are built in from day one — MTN MoMo, Paystack, bank transfer.",
  },
  {
    title: "Consultancy, not just screen time",
    body: "If you've never run an out-of-home campaign before, our team helps shape the creative and pick the right mall and daypart.",
  },
];

const BEYOND = [
  {
    tag: "Outdoor portal",
    title: "Traditional & digital outdoor sites",
    body: "Our original outdoor marketplace continues alongside the mall network — for brands that want street-level reach in addition to indoor placement.",
  },
  {
    tag: "LED supply",
    title: "Screens sourced & supplied",
    body: "Beyond running our own network, Ad.here sources and supplies indoor LED displays to other Ghanaian businesses looking to install their own screens.",
  },
];

export default function SmeAndBeyond() {
  return (
    <>
      <section className="wrap pb-20 sm:pb-28">
        <div className="grid sm:grid-cols-3 gap-x-10 gap-y-10">
          {SME_CARDS.map((c) => (
            <div key={c.title}>
              <h4 className="text-lg md:text-xl font-semibold text-off-white">{c.title}</h4>
              <p className="mt-2.5 text-[15px] text-muted-navy leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper text-ink py-20 sm:py-28">
        <div className="wrap grid lg:grid-cols-[0.6fr_1.4fr] gap-10 lg:gap-16">
          <div className="max-w-3xl w-full mb-4 sm:mb-0">
            <SectionHeading title="Beyond the mall" />
            <h2 className="text-3xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
              Two more ways we work with brands and partners.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {BEYOND.map((b) => (
              <div key={b.tag}>
                <p className="text-xs md:text-lg font-bold uppercase tracking-wide text-coral-dim">
                  {b.tag}
                </p>
                <h4 className="mt-2 text-lg md:text-2xl font-semibold text-ink">
                  {b.title}
                </h4>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
