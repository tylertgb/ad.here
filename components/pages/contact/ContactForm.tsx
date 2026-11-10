"use client";

import { useState } from "react";
import Select from "@/components/ui/Select";

const WHATSAPP_NUMBER = "233558607807";

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
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isFormValid = fullName.trim() !== "" && phone.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Please fill in your name and phone number.");
      return;
    }
    setError("");

    const wa_message = [
      `*Ad.here Enquiry*`,
      ``,
      `*Name:* ${fullName}`,
      businessName ? `*Business:* ${businessName}` : null,
      `*Phone:* ${phone}`,
      selectedInterest ? `*Interested in:* ${selectedInterest}` : null,
      message ? `*Message:* ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(wa_message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full name <span className="text-coral">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ama Owusu"
              className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Business name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Kesewaa Boutique"
              className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phone / WhatsApp <span className="text-coral">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 024 000 0000"
              className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
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
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What are you looking to advertise?
          </label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your brand, campaign timing, and budget range."
            className="w-full px-4 py-3 bg-white text-navy border border-gray-200 rounded-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral resize-none"
          />
        </div>

        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}

        <button
          type="submit"
          className="px-8 py-4 bg-coral text-white text-base font-semibold rounded-sm hover:bg-coral-dim transition-colors"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}
