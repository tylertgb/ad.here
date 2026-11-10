import { DollarSign, CreditCard, HeadphonesIcon } from "lucide-react";

const FEATURES = [
  {
    icon: DollarSign,
    title: "No big-budget minimum",
    description: "Single screens start at ₵3,500/month, event weeks from ₵950 - priced for first-time advertisers too.",
  },
  {
    icon: CreditCard,
    title: "Pay the way you already pay",
    description: "Mobile money and card built in from day one - buy your slot online, no separate finance process.",
    badges: ["MTN MoMo", "Paystack", "Bank transfer"],
  },
  {
    icon: HeadphonesIcon,
    title: "Consultancy, not just screen time",
    description: "New to out-of-home? Our team helps shape the creative and pick the right screen and term.",
  },
];

export default function BuiltForSMEs() {
  return (
    <section id="built-for-smes" className="py-24 sm:py-32 bg-gray-50">
      <div className="wrap">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              Built for SMEs
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
            No big-budget minimum, no complicated finance process.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-sm bg-coral/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-coral" strokeWidth={2} />
                </div>

                <h3 className="text-lg font-semibold text-navy mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {feature.badges && (
                  <div className="flex flex-wrap gap-2">
                    {feature.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 bg-gray-50 border border-slate-200 text-xs text-slate-600 font-medium rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}