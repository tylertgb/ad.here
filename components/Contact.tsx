"use client";

import { Mail, MessageCircle, MapPin, Monitor } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Select from "./ui/Select";

const MALLS = [
  "Full Network Bundle",
  "Marina Mall",
  "West Hills Mall",
  "Kumasi Mall",
  "Achimota Mall",
  "Not sure yet",
];

const INFO = [
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:ad.hereghana@gmail.com" className="hover:text-coral-dim">
        ad.hereghana@gmail.com
      </a>
    ),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "Fastest way to reach the sales & marketing team directly.",
  },
  {
    icon: MapPin,
    title: "Based in",
    content: "Haatso, Accra, Ghana",
  },
  {
    icon: Monitor,
    title: "Currently live in",
    content: "Phase 1 rollout across 4 Accra & Kumasi malls",
  },
];

const fieldClass =
  "w-full rounded-lg border border-paper-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [selectedMall, setSelectedMall] = useState("");

  return (
    <section id="contact" className="bg-paper text-ink py-20 sm:py-28">
      <div className="wrap grid lg:grid-cols-[1.2fr_0.8fr] gap-16">
        <div>
          <div className="max-w-3xl w-full mb-6 md:mb-10">
            <SectionHeading title="Get in touch" />
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
               Tell us which malls you want to be seen in.
            </h2>
          </div>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-[48ch] mb-10">
            Send us a few details and we&apos;ll come back with mall
            availability, package pricing, and a proposed schedule.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-7 max-w-130"
          >
            <div className="grid sm:grid-cols-2 gap-7">
              <input
                aria-label="Full name"
                placeholder="Full name"
                className={fieldClass}
              />
              <input
                aria-label="Business name"
                placeholder="Business name"
                className={fieldClass}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-7">
              <input
                aria-label="Phone or WhatsApp"
                type="tel"
                placeholder="Phone / WhatsApp"
                className={fieldClass}
              />
              <Select
                options={MALLS}
                placeholder="Interested mall(s)"
                value={selectedMall}
                onChange={setSelectedMall}
                className={fieldClass}
                ariaLabel="Interested mall(s)"
              />
            </div>
            <textarea
              aria-label="What are you looking to advertise?"
              rows={3}
              placeholder="What are you looking to advertise?"
              className={`${fieldClass} resize-y`}
            />
            <button
              type="submit"
              className="self-start rounded-full bg-navy px-7 py-3.5 font-semibold text-off-white hover:bg-navy-soft transition-colors"
            >
              {sent ? "Enquiry sent" : "Send enquiry"}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-7 pt-2">
          {INFO.map(({ icon: Icon, title, content }, i) => (
            <div
              key={title}
              className={`flex gap-4 pt-7 ${
                i > 0 ? "border-t border-paper-line" : "pt-0"
              }`}
            >
              <Icon size={17} className="text-coral-dim shrink-0 mt-0.5 flex sm:hidden" />
              <Icon size={26} className="text-coral-dim shrink-0 mt-0.5 hidden sm:flex" />
              <div>
                <h4 className="text-sm md:text-2xl font-semibold text-ink">{title}</h4>
                <p className="mt-0.5 text-sm text-ink-soft">{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
