"use client";

import { useState } from "react";
import Select from "@/components/ui/Select";

const INTEREST_OPTIONS = [
  "All Here (all 3 screens)",
  "Mall Hop (2 screens)",
  "Double Up (Atlantic 1 + 2)",
  "Atlantic Phase 1",
  "Atlantic Phase 2",
  "Marina Mall",
  "Event week booking",
  "Screen rental",
  "Purchase LED screen",
  "Just browsing",
];

export default function ContactForm() {
  const [selectedInterest, setSelectedInterest] = useState("");

  return (
    <div>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="e.g. Ama Owusu"
              className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral"
            />
          </div>
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-2">
              Business name
            </label>
            <input
              type="text"
              id="businessName"
              placeholder="e.g. Kesewaa Boutique"
              className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="e.g. 024 000 0000"
              className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral"
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
              Interested in
            </label>
            <Select
              options={INTEREST_OPTIONS}
              placeholder="Select an option"
              value={selectedInterest}
              onChange={setSelectedInterest}
              className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            What are you looking to advertise?
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your brand, campaign timing, and budget range."
            className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral resize-none"
          />
        </div>

        <button
          type="submit"
          className="px-8 py-4 bg-coral text-white text-base font-semibold rounded-sm hover:bg-coral-dim transition-colors"
        >
          Send enquiry
        </button>
      </form>
    </div>
  );
}
