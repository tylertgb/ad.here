import Link from "next/link";
import Select from "@/components/ui/Select";

const SCREEN_LOCATIONS = [
  "Retail store",
  "Restaurant/Cafe",
  "Hotel/Hospitality",
  "Office/Corporate",
  "Church/Religious center",
  "Event venue",
  "Outdoor/Public space",
  "Others",
];

const SCREEN_SIZES = [
  "Small - a compact display",
  "Medium - standard commercial size",
  "Large - full wall or stage display",
  "Custom - specific dimensions",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1 month",
  "Within 3 months",
  "Just exploring options",
];

const BUDGET_RANGES = [
  "Prefer not to say yet",
  "Under ₵10,000",
  "₵10,000 - ₵25,000",
  "₵25,000 - ₵50,000",
  "₵50,000+",
];

export default function PurchaseLEDScreen() {
  return (
    <section id="purchase-screen" className="py-24 sm:py-32 bg-gray-50">
      <div className="wrap">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              04 · Purchase LED Screen
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
            Want your own screen, not just a slot on ours?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            We also source and supply indoor LED displays to other Ghanaian businesses - sourced, shipped, and supported locally. Tell us what you need.
          </p>
        </div>

        {/* Purchase Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 lg:p-12 rounded-[28px] shadow-lg">
            <div className="space-y-8">
              {/* Your Details */}
              <div>
                <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-6">
                  Your Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kofi Mensah"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Business name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mensah Retail Group"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="024 000 0000"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@brand.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* What You're Looking For */}
              <div>
                <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-6">
                  What You're Looking For
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Where will it go?
                    </label>
                    <Select
                      options={SCREEN_LOCATIONS}
                      placeholder="Select location type"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Approximate size needed
                    </label>
                    <Select
                      options={SCREEN_SIZES}
                      placeholder="Select screen size"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Quantity needed
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 1"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Timeline
                    </label>
                    <Select
                      options={TIMELINES}
                      placeholder="When do you need it?"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Budget range (optional)
                    </label>
                    <Select
                      options={BUDGET_RANGES}
                      placeholder="Select budget range"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Anything Else? */}
              <div>
                <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-6">
                  Anything Else?
                </h3>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Additional notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Indoor or outdoor, installation help needed, existing setup you're replacing, etc."
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="w-full px-8 py-4 bg-coral text-white text-base font-semibold rounded-sm hover:bg-coral-dim transition-colors">
                  Request a quote
                </button>
                <p className="text-sm text-slate-500 text-center mt-4">
                  Our team will follow up with configuration options and pricing - no commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
