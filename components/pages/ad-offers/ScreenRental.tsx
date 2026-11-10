import Link from "next/link";
import { Monitor, Maximize2, Users, Clock } from "lucide-react";
import Select from "@/components/ui/Select";

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
    title: "Singular screens",
    description: "Each unit runs its own content, placed around the venue.",
    recommended: true,
  },
  {
    title: "Merged into one display",
    description: "Units are joined side-by-side into a single large screen.",
    recommended: false,
  },
];

export default function ScreenRental() {
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
                <h3 className="text-base font-semibold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
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
              <div
                key={option.title}
                className={`p-6 rounded-sm transition-all duration-300 ${
                  option.recommended
                    ? "bg-coral/5 border-2 border-coral"
                    : "bg-gray-50 border-2 border-transparent hover:border-slate-200"
                }`}
              >
                <h4 className="text-lg font-semibold text-navy mb-2">
                  {option.title}
                </h4>
                <p className="text-sm text-slate-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rental Form Card */}
        <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-linear-to-br from-navy to-navy-soft rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">
            Request a rental quote
          </h3>
          <p className="text-gray-300 mb-8">
            We'll confirm screen availability, setup logistics, and a quote within 24 hours.
          </p>

          <div className="space-y-6">
            {/* Your Details */}
            <div>
              <h4 className="text-sm font-semibold text-gold uppercase tracking-wide mb-4">
                Your Details
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ama Owusu"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Business / organisation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kesewaa Events"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="024 000 0000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h4 className="text-sm font-semibold text-gold uppercase tracking-wide mb-4">
                Event Details
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Setup location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. East Legon Events Centre, Accra"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Type of event
                  </label>
                  <Select
                    options={EVENT_TYPES}
                    placeholder="Select event type"
                    className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/10"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Event date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Number of days
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 2"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Duration (hours per day)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 6"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Number of screens
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 2"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h4 className="text-sm font-semibold text-gold uppercase tracking-wide mb-4">
                Anything else?
              </h4>
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Additional notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Venue power access, preferred setup time, content you'll be showing, etc."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full px-8 py-4 bg-coral text-white text-base font-semibold rounded-sm hover:bg-coral-dim transition-colors">
              Request a quote
            </button>
            <p className="text-sm text-gray-400 text-center mt-4">
              We'll confirm screen availability, setup logistics, and a quote within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
