"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const SCREENS = [
  {
    id: "atlantic-1",
    name: "Atlantic Mall — Phase 1",
    location: "Panda Mart entrance",
    price: 3500,
  },
  {
    id: "atlantic-2",
    name: "Atlantic Mall — Phase 2",
    location: "Game It Up entrance",
    price: 3500,
  },
  {
    id: "marina",
    name: "Marina Mall",
    location: "Supermarket walkway entrance",
    price: 4500,
  },
];

const TERMS = [
  { id: "monthly", label: "Monthly", discount: 0, subtitle: "No discount" },
  { id: "3-months", label: "3 months", discount: 5, subtitle: "-5%" },
  { id: "6-months", label: "6 months", discount: 10, subtitle: "-10%" },
  { id: "12-months", label: "12 months", discount: 15, subtitle: "-15%" },
];

export default function BuyASlot() {
  const [selectedScreen, setSelectedScreen] = useState("atlantic-1");
  const [selectedTerm, setSelectedTerm] = useState("monthly");
  const [applyLaunchOffer, setApplyLaunchOffer] = useState(true);

  const screen = SCREENS.find((s) => s.id === selectedScreen);
  const term = TERMS.find((t) => t.id === selectedTerm);
  const monthlyRate = screen ? screen.price * (1 - (term?.discount || 0) / 100) : 0;
  const dueToday = applyLaunchOffer ? monthlyRate * 0.8 : monthlyRate;

  return (
    <section id="buy-a-slot" className="py-24 sm:py-32 bg-navy">
      <div className="wrap">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-gold/10 backdrop-blur-sm rounded-full">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold">
              Buy a Slot
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
            Build your package and check out - right here.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Pick your screen or bundle and term - your price updates instantly. Checkout runs on Mobile Money or card.
          </p>
        </div>

        {/* Checkout Layout */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* 1. Choose Your Screen(s) */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
              <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-6">
                1 · Choose Your Screen(s)
              </h3>
              <div className="space-y-3">
                {SCREENS.map((screen) => (
                  <label
                    key={screen.id}
                    className={`flex items-center justify-between p-4 rounded-sm cursor-pointer transition-all ${
                      selectedScreen === screen.id
                        ? "bg-coral/10 border border-coral/50"
                        : "bg-white/5 border border-transparent hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="screen"
                        value={screen.id}
                        checked={selectedScreen === screen.id}
                        onChange={(e) => setSelectedScreen(e.target.value)}
                        className="w-5 h-5 text-coral"
                      />
                      <div>
                        <div className="font-semibold text-white">{screen.name}</div>
                        <div className="text-sm text-gray-400">{screen.location}</div>
                      </div>
                    </div>
                    <div className="font-bold text-white">₵{screen.price.toLocaleString()}/mo</div>
                  </label>
                ))}
              </div>
            </div>

            {/* 2. Choose Your Term */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
              <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-6">
                2 · Choose Your Term
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {TERMS.map((term) => (
                  <button
                    key={term.id}
                    onClick={() => setSelectedTerm(term.id)}
                    className={`p-4 rounded-sm transition-all ${
                      selectedTerm === term.id
                        ? "bg-coral/50 border-2 border-coral/50"
                        : "bg-white/5 border-2 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="font-semibold text-white text-sm mb-1">{term.label}</div>
                    <div className="text-xs text-gray-400">{term.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Apply Launch Offer */}
            <label className="flex items-start gap-3 p-6 bg-gold/10 border border-gold/30 rounded-sm cursor-pointer">
              <input
                type="checkbox"
                checked={applyLaunchOffer}
                onChange={(e) => setApplyLaunchOffer(e.target.checked)}
                className="w-5 h-5 text-coral mt-0.5"
              />
              <div>
                <div className="font-semibold text-white mb-1">Apply launch offer</div>
                <div className="text-sm text-gray-300">
                  20% off month one + free motion visuals worth ₵900 - ends 30 Nov 2026
                </div>
              </div>
            </label>

            {/* 3. Your Details */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
              <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-6">
                3 · Your Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ama Owusu"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Business name</label>
                  <input
                    type="text"
                    placeholder="e.g. Kesewaa Boutique"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="024 000 0000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                After checkout, upload your 15s portrait video (320×960px) - or just send your logo and offer and we'll animate it.
              </p>
            </div>

            {/* 4. Pay With */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
              <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-6">
                4 · Pay With
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <button className="p-4 bg-coral border-2 border-coral rounded-sm text-white font-semibold hover:bg-coral-dim transition-colors">
                  <div>Mobile Money</div>
                  <div className="text-xs opacity-80">MTN MoMo</div>
                </button>
                <button className="p-4 bg-white/5 border-2 border-white/10 rounded-sm text-white font-semibold hover:border-white/20 transition-colors">
                  <div>Card</div>
                  <div className="text-xs opacity-80">via Paystack</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary (Sticky) */}
          <div className="lg:sticky lg:top-24">
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-coral/50 rounded-sm">
              <h3 className="text-base font-bold text-white mb-6">Order summary</h3>

              <div className="space-y-4 mb-6">
                <div className="pb-4 border-b border-white/10">
                  <div className="text-xs text-gray-400 mb-1">{screen?.name}</div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Plan</span>
                  <span className="text-white font-medium">{screen?.name}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Term</span>
                  <span className="text-white font-medium">
                    {term?.label}, {term?.discount === 0 ? "no commitment" : `${term?.discount}% off`}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Standard price</span>
                  <span className="text-white">₵{screen?.price.toLocaleString()}</span>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Monthly rate</span>
                    <span className="text-gold font-bold text-2xl">₵{monthlyRate.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold">
                  <span className="text-gray-400">Due today (month 1)</span>
                  <span className="text-coral">₵{dueToday.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full px-6 py-4 bg-coral text-white text-base font-semibold rounded-sm hover:bg-coral-dim transition-colors mb-3">
                Proceed to payment
              </button>

              <p className="text-xs text-center text-gray-400">
                Concept checkout - shows where Paystack & MTN MoMo payment will sit once the developer wires it up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
