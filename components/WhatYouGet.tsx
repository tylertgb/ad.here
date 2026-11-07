const FEATURES = [
  {
    number: "1",
    title: "Buying-mode visibility",
    description: "Metres from the shelf, at prime entrances — shoppers already reaching for their wallets.",
  },
  {
    number: "2",
    title: "Effortless ad creation",
    description: "Send a logo and an offer — we turn it into a screen-ready motion ad. No design software, no agency.",
  },
  {
    number: "3",
    title: "Pricing built for SMEs",
    description: "Single-screen packages from ₵3,500/month, event weeks from ₵950, mobile money payment, and no oversized minimum spend.",
  },
  {
    number: "4",
    title: "Bundle packaging",
    description: "Run across two or three screens on one invoice, up to 25% less than booking separately.",
  },
  {
    number: "5",
    title: "Book by the week, too",
    description: "Running an event? Skip the monthly commitment — weeks start at ₵950. See Ad Offers.",
  },
  {
    number: "6",
    title: "No skip, no scroll",
    description: "Bright motion that grabs eyes, 360 times a day. No skip button at a mall entrance.",
  },
];

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-24 sm:py-32 bg-white">
      <div className="wrap">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              What You Get
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
            Screen space that works as hard as your sales team.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every offer is built around one outcome — your brand seen, remembered, and easy to act on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.number}
              className="relative bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center mb-5">
                <span className="text-sm font-bold text-coral">{feature.number}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-navy mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
