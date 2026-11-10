"use client";

import { useState } from "react";
import { Monitor, Maximize2, Users, Clock } from "lucide-react";
import Select from "@/components/ui/Select";

const WHATSAPP_NUMBER = "233558607807";

const EVENT_TYPES = [
  "Concert or show",
  "Church program",
  "Product launch",
  "Festival",
  "Corporate event/Conference",
  "Wedding/Private function",
  "Others",
];

const FEATURES = [
  {
    icon: Monitor,
    title: "Professional LED units",
    description: "High-resolution standalone screens, delivered and set up by our team.",
  },
  {
    icon: Maximize2,
    title: "Flexible display modes",
    description: "Run singular screens with individual content, or merge units into one large display.",
  },
  {
    icon: Users,
    title: "Perfect for events",
    description: "Private events, conferences, weddings, activations, and product launches.",
  },
  {
    icon: Clock,
    title: "Quick turnaround",
    description: "Tell us your event details and we'll confirm availability within 24 hours.",
  },
];

const DISPLAY_OPTIONS = [
  {
    id: "singular",
    title: "Singular screens",
    description: "Each unit runs its own content, placed around the venue.",
    recommended: true,
  },
  {
    id: "merged",
    title: "Merged into one display",
    description: "Units are joined side-by-side into a single large screen.",
    recommended: false,
  },
];

export default function ScreenRental() {
  const [fullName, setFullName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [screens, setScreens] = useState("");
  const [displayMode, setDisplayMode] = useState("singular");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const isFormValid =
    fullName.trim() !== "" &&
    phone.trim() !== "" &&
    location.trim() !== "" &&
    eventType !== "" &&
    eventDate !== "" &&
    screens.trim() !== "";

  const handleSubmit = () => {
    if (!isFormValid) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    const message = [
      `*Screen Rental Request*`,
      ``,
      `*Name:* ${fullName}`,
      business ? `*Business:* ${business}` : null,
      `*Phone:* ${phone}`,
      email ? `*Email:* ${email}` : null,
      ``,
      `*Event Details*`,
      `*Location:* ${location}`,
      `*Event type:* ${eventType}`,
      `*Event date:* ${eventDate}`,
      days ? `*Days:* ${days}` : null,
      hours ? `*Hours/day:* ${hours}` : null,
      `*Screens:* ${screens}`,
      `*Display mode:* ${displayMode === "singular" ? "Singular screens" : "Merged into one display"}`,
      notes ? `*Notes:* ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="screen-rental" className="py-24 sm:py-32 bg-white">
      <div className="wrap">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-navy/5 rounded-full">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold">
              03 · Ad.here Screen Rental
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 leading-tight tracking-tight">
            Bring an Ad.here LED screen to your own venue.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            We rent standalone LED units for private events, conferences, weddings, and activations - delivered, set up, and collected by our team.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-sm bg-coral/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-coral" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Setup Info Callout */}
        <div className="mb-16 p-6 border-l-4 border-gold bg-gray-50 rounded-r-lg">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-navy">Singular or merged:</span> our units can run solo, or merge side-by-side into one large display for bigger stages. Tell us your setup below.
          </p>
        </div>

        {/* Display Options */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-navy mb-6">Display mode</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {DISPLAY_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => setDisplayMode(option.id)}
                className={`p-6 rounded-sm text-left transition-all duration-300 ${
                  displayMode === option.id
                    ? "bg-coral/5 border-2 border-coral"
                    : "bg-gray-50 border-2 border-transparent hover:border-slate-200"
                }`}
              >
                <h4 className="text-lg font-semibold text-navy mb-2">{option.title}</h4>
                <p className="text-sm text-slate-600">{option.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Rental Form Card */}
        <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-navy to-navy-soft rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">Request a rental quote</h3>
          <p className="text-gray-300 mb-8">
            We'll confirm screen availability, setup logistics, and a quote within 24 hours.
          </p>

          <div className="space-y-6">
            {/* Your Details */}
            <div>
              <h4 className="text-sm font-semibold text-gold uppercase tracking-wide mb-4">Your Details</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full name <span className="text-coral">*</span></label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ama Owusu"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Business / organisation</label>
                  <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="e.g. Kesewaa Events"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone / WhatsApp <span className="text-coral">*</span></label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="024 000 0000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h4 className="text-sm font-semibold text-gold uppercase tracking-wide mb-4">Event Details</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Setup location <span className="text-coral">*</span></label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. East Legon Events Centre, Accra"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Type of event <span className="text-coral">*</span></label>
                  <Select
                    options={EVENT_TYPES}
                    placeholder="Select event type"
                    value={eventType}
                    onChange={setEventType}
                    className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/10"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Event date <span className="text-coral">*</span></label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Number of screens <span className="text-coral">*</span></label>
                  <input
                    type="number"
                    value={screens}
                    onChange={(e) => setScreens(e.target.value)}
                    placeholder="e.g. 2"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Number of days</label>
                  <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    placeholder="e.g. 2"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Duration (hours per day)</label>
                  <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="e.g. 6"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h4 className="text-sm font-semibold text-gold uppercase tracking-wide mb-4">Anything else?</h4>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Venue power access, preferred setup time, content you'll be showing, etc."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral resize-none"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-sm">
                <span className="text-xs text-red-400">{error}</span>
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-coral text-white text-base font-semibold rounded-sm hover:bg-coral-dim transition-colors"
            >
              Send via WhatsApp
            </button>
            <p className="text-sm text-gray-400 text-center">
              We'll confirm screen availability, setup logistics, and a quote within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
