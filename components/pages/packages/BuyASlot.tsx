"use client";

import { useState, useEffect } from "react";
import { Check, AlertCircle } from "lucide-react";

const PAYSTACK_LINK = "https://paystack.shop/pay/ly70n531xq";

const SCREENS = [
  {
    id: "atlantic-1",
    name: "Atlantic Mall — Phase 1",
    location: "Ground floor · Panda Mart entrance · Atomic Roundabout",
    monthlyPrice: 3500,
    weeklyPrice: 950,
  },
  {
    id: "atlantic-2",
    name: "Atlantic Mall — Phase 2",
    location: "1st floor · Elevator entrance · Atomic Roundabout",
    monthlyPrice: 3500,
    weeklyPrice: 950,
  },
  {
    id: "marina",
    name: "Marina Mall",
    location: "Supermarket walkway entrance · Airport",
    monthlyPrice: 4500,
    weeklyPrice: 1050,
  },
];

const TERMS = [
  { id: "monthly", label: "Monthly", discount: 0, subtitle: "No discount" },
  { id: "3-months", label: "3 months", discount: 5, subtitle: "-5%" },
  { id: "6-months", label: "6 months", discount: 10, subtitle: "-10%" },
  { id: "12-months", label: "12 months", discount: 15, subtitle: "-15%" },
];

export default function BuyASlot() {
  const [selectedScreens, setSelectedScreens] = useState<string[]>([]);
  const [billingPeriod, setBillingPeriod] = useState<"weekly" | "monthly">("monthly");
  const [selectedTerm, setSelectedTerm] = useState("monthly");
  const [applyLaunchOffer, setApplyLaunchOffer] = useState(true);

  // Pre-select term from URL param (e.g. from Subscriptions page)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const term = params.get("term");
    if (term && TERMS.find((t) => t.id === term)) {
      setSelectedTerm(term);
      setBillingPeriod("monthly");
    }
  }, []);

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const toggleScreen = (screenId: string) => {
    setSelectedScreens((prev) =>
      prev.includes(screenId)
        ? prev.filter((id) => id !== screenId)
        : [...prev, screenId]
    );
  };

  const term = TERMS.find((t) => t.id === selectedTerm);

  const basePrice = selectedScreens.reduce((total, screenId) => {
    const screen = SCREENS.find((s) => s.id === screenId);
    if (!screen) return total;
    return total + (billingPeriod === "weekly" ? screen.weeklyPrice : screen.monthlyPrice);
  }, 0);

  const discountedPrice =
    billingPeriod === "monthly"
      ? basePrice * (1 - (term?.discount || 0) / 100)
      : basePrice;

  const dueToday =
    applyLaunchOffer && billingPeriod === "monthly"
      ? discountedPrice * 0.8
      : discountedPrice;

  const selectedScreenData = SCREENS.filter((s) => selectedScreens.includes(s.id));
  const hasScreens = selectedScreens.length > 0;

  const isFormValid =
    hasScreens &&
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "";

  const handlePayment = () => {
    if (!isFormValid) return;

    // Paystack payment page link takes amount in actual currency (GHS), NOT pesewas
    const amount = Math.round(dueToday);

    // Build the pre-filled Paystack URL
    const params = new URLSearchParams({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      phone: phone.trim().replace(/^\+233/, "").replace(/^0/, ""),
      amount: amount.toString(),
      "read-only": "amount,email,first_name,last_name",
    });

    const paystackUrl = `${PAYSTACK_LINK}?${params.toString()}`;

    // Open in new tab
    window.open(paystackUrl, "_blank", "noopener,noreferrer");
  };

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
            Pick one or more screens, choose weekly or monthly, and your price updates instantly.
          </p>
        </div>

        {/* Checkout Layout */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">

            {/* 1. Billing Period */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
              <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-5">
                1 · Billing Period
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => { setBillingPeriod("weekly"); setSelectedTerm("monthly"); }}
                  className={`flex-1 py-3 px-6 rounded-sm font-semibold text-sm transition-all ${
                    billingPeriod === "weekly"
                      ? "bg-coral text-white"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-white/30"
                  }`}
                >
                  Weekly
                  <span className="block text-xs font-normal opacity-70 mt-0.5">Event weeks</span>
                </button>
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`flex-1 py-3 px-6 rounded-sm font-semibold text-sm transition-all ${
                    billingPeriod === "monthly"
                      ? "bg-coral text-white"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-white/30"
                  }`}
                >
                  Monthly
                  <span className="block text-xs font-normal opacity-70 mt-0.5">Brand campaigns</span>
                </button>
              </div>
            </div>

            {/* 2. Choose Screen(s) */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
              <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-2">
                2 · Choose Your Screen(s)
              </h3>
              <p className="text-xs text-gray-400 mb-5">Select one or more screens</p>
              <div className="space-y-3">
                {SCREENS.map((screen) => {
                  const isSelected = selectedScreens.includes(screen.id);
                  const price = billingPeriod === "weekly" ? screen.weeklyPrice : screen.monthlyPrice;
                  return (
                    <button
                      key={screen.id}
                      onClick={() => toggleScreen(screen.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-sm transition-all text-left ${
                        isSelected
                          ? "bg-coral/10 border border-coral"
                          : "bg-white/5 border border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center shrink-0 transition-all ${
                          isSelected ? "bg-coral border-coral" : "border-white/30"
                        }`}>
                          {isSelected && <Check size={12} className="text-white" strokeWidth={3} />}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{screen.name}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{screen.location}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <span className="text-white font-bold">₵{price.toLocaleString()}</span>
                        <span className="text-gray-400 text-xs">/{billingPeriod === "weekly" ? "wk" : "mo"}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Term (monthly only) */}
            {billingPeriod === "monthly" && (
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
                <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-6">
                  3 · Choose Your Term
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {TERMS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTerm(t.id)}
                      className={`p-4 rounded-sm transition-all ${
                        selectedTerm === t.id
                          ? "bg-coral/20 border-2 border-coral"
                          : "bg-white/5 border-2 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="font-semibold text-white text-sm mb-1">{t.label}</div>
                      <div className="text-xs text-gray-400">{t.subtitle}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Launch Offer (monthly only) */}
            {billingPeriod === "monthly" && (
              <label className="flex items-start gap-3 p-6 bg-gold/10 border border-gold/30 rounded-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={applyLaunchOffer}
                  onChange={(e) => setApplyLaunchOffer(e.target.checked)}
                  className="w-5 h-5 text-coral mt-0.5 shrink-0"
                />
                <div>
                  <div className="font-semibold text-white mb-1">Apply launch offer</div>
                  <div className="text-sm text-gray-300">
                    20% off month one + free motion visuals worth ₵900 - ends 30 Nov 2026
                  </div>
                </div>
              </label>
            )}

            {/* 4. Your Details */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
              <h3 className="text-base font-bold text-gold uppercase tracking-wide mb-2">
                {billingPeriod === "monthly" ? "4" : "3"} · Your Details
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                We'll pre-fill these on the Paystack page so you don't have to re-enter them.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">First name <span className="text-coral">*</span></label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="e.g. Ama"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Last name <span className="text-coral">*</span></label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="e.g. Owusu"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email address <span className="text-coral">*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone number <span className="text-coral">*</span></label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="024 000 0000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                After payment, send your 15s portrait video (320x960px) - or share your logo and offer and we'll animate it.
              </p>
            </div>
          </div>

          {/* Right Column - Order Summary (Sticky) */}
          <div className="lg:sticky lg:top-24">
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-coral/40 rounded-sm">
              <h3 className="text-base font-bold text-white mb-6">Order Summary</h3>

              {!hasScreens ? (
                <p className="text-sm text-gray-400 text-center py-6">
                  Select one or more screens to see your order summary.
                </p>
              ) : (
                <div className="space-y-4 mb-6">
                  {/* Selected screens */}
                  <div className="pb-4 border-b border-white/10 space-y-3">
                    {selectedScreenData.map((screen) => (
                      <div key={screen.id} className="flex justify-between items-start text-sm">
                        <div>
                          <div className="text-white font-medium">{screen.name}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{screen.location}</div>
                        </div>
                        <span className="text-gray-300 shrink-0 ml-4">
                          ₵{(billingPeriod === "weekly" ? screen.weeklyPrice : screen.monthlyPrice).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Billing period */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Billing</span>
                    <span className="text-white font-medium capitalize">{billingPeriod}</span>
                  </div>

                  {/* Term (monthly only) */}
                  {billingPeriod === "monthly" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Term</span>
                      <span className="text-white font-medium">
                        {term?.label}{term?.discount ? ` (-${term.discount}%)` : ""}
                      </span>
                    </div>
                  )}

                  {/* Subtotal */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">₵{basePrice.toLocaleString()}</span>
                  </div>

                  {/* Term discount */}
                  {billingPeriod === "monthly" && (term?.discount || 0) > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Term discount</span>
                      <span className="text-green-400">-₵{(basePrice - discountedPrice).toLocaleString()}</span>
                    </div>
                  )}

                  {/* Launch offer */}
                  {applyLaunchOffer && billingPeriod === "monthly" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Launch offer (20% off)</span>
                      <span className="text-green-400">-₵{(discountedPrice - dueToday).toLocaleString()}</span>
                    </div>
                  )}

                  {/* Total */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-semibold">
                        {billingPeriod === "weekly" ? "Total" : "Due today"}
                      </span>
                      <span className="text-coral font-bold text-3xl">
                        ₵{Math.round(dueToday).toLocaleString()}
                      </span>
                    </div>
                    {billingPeriod === "monthly" && (
                      <p className="text-xs text-gray-400 mt-1 text-right">
                        then ₵{Math.round(discountedPrice).toLocaleString()}/mo from month 2
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Validation hint */}
              {hasScreens && !isFormValid && (
                <div className="mb-4 flex items-start gap-2 p-3 bg-white/5 border border-white/10 rounded-sm">
                  <AlertCircle size={15} className="text-gold shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400">Fill in your details above to continue.</p>
                </div>
              )}

              {/* Pay button */}
              <button
                onClick={handlePayment}
                disabled={!isFormValid}
                className={`w-full flex flex-col items-center justify-center px-6 py-4 rounded-sm font-semibold text-base transition-all mb-3 ${
                  isFormValid
                    ? "bg-coral hover:bg-coral-dim text-white cursor-pointer"
                    : "bg-white/10 text-gray-500 cursor-not-allowed"
                }`}
              >
                Pay via Paystack
                <span className="text-xs font-normal opacity-80 mt-0.5">
                  MTN MoMo · VISA · Mastercard
                </span>
              </button>

              <p className="text-xs text-center text-gray-400">
                Secured by Paystack. Opens in a new tab to complete payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
