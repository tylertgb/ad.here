"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const TABS = [
  { id: "brand", label: "Brand Ad Spaces", href: "#brand-ad-spaces" },
  { id: "events", label: "Events Ad Spaces", href: "#events-ad-spaces" },
  { id: "rental", label: "Ad.here Screen Rental", href: "#screen-rental" },
  { id: "purchase", label: "Purchase LED Screen", href: "#purchase-screen" },
];

export default function AdOffersHero() {
  const [activeTab, setActiveTab] = useState("brand");

  return (
    <section className="relative py-32 sm:py-40 bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mall (7).jpg"
          alt="Ad Offers"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/85 to-navy/75" />
      </div>

      <div className="wrap relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-coral transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Ad Offers</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-1.5 bg-gold/10 backdrop-blur-sm rounded-full">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold">
              Ad Offers
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
            Every way to get your brand, or your event on screen.
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
            Ongoing visibility, a one-week event push, a screen for your venue, or one you own outright. Pick what fits below.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3">
            {TABS.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-coral text-white"
                    : "bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
