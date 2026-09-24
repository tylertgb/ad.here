import SectionHeading from "./SectionHeading";

const BENEFITS = [
  {
    title: "Brand visibility that lasts",
    body: "Placed at entrances, food courts, and anchor corridors where shoppers slow down and look up, not where they glance and move on.",
  },
  {
    title: "Effortless ad creation",
    body: "Send a photo, a poster, or just your logo and offer our team turns it into a screen-ready ad. No design software, no agency, no waiting on a production house.",
  },
  {
    title: "Pricing built for SMEs",
    body: "Single-mall entry packages, mobile money payment, and no oversized minimum spend—advertising here doesn't require a national-brand budget.",
  },
  {
    title: "Bundle packaging",
    body: "Run one campaign across several malls on a single invoice, at a lower effective cost per mall than booking each one separately.",
  },
  {
    title: "Extra visibility, built in",
    body: "Your ad loop shares screen time with Ad.here Locate, the in-mall directory shoppers actively search—putting your brand in front of people looking at the screen, not walking past it.",
  },
  {
    title: "Weather is someone else's problem",
    body: "No harmattan dust, no rain streaking your creative, no faded print three weeks in—indoor placement means consistent visibility every day of the campaign.",
  },
];

export default function WhatYouGet() {
  return (
    <section id="network" className="bg-paper text-ink py-20 sm:py-28">
      <div className="wrap grid lg:grid-cols-[0.6fr_1.0fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-24 self-start">
          <SectionHeading title="What You Get" />
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Screen space that works as hard as your sales team.
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-[36ch]">
            Every Ad.here package is built around one outcome, that's your brand
            seen, remembered, and easy to act on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {BENEFITS.map((b) => (
            <div key={b.title}>
              <h4 className="font-semibold text-ink text-[17px]">
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
  );
}
