"use client";

import { motion } from "framer-motion";
import LedMatrix from "./LedMatrix";
import { SignalArcs } from "./SignalArcs";
import SectionHeading from "./SectionHeading";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <SignalArcs
        className="pointer-events-none absolute top-10 md:top-0 left-0 md:bottom-0 w-200 h-200 opacity-60"
      />

      <div className="wrap relative grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <SectionHeading title="Indoor LED Network, Accra Ghana" />
          <h1 className="text-[2.6rem] sm:text-6xl lg:text-[4rem] font-bold leading-[1.02] tracking-tight text-off-white max-w-[16ch]">
            Your brand, at eye level, inside the malls Accra already walks
            through.
          </h1>
          <p className="mt-8 text-lg text-muted-navy leading-relaxed max-w-[46ch]">
            Ad.here owns and operates indoor LED screens inside Ghana&apos;s
            busiest malls, sold as multi-mall bundles, discounted for the
            brands already trading inside those malls, and doubling as the
            directory shoppers use to find their way around.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#packages"
              className="inline-flex items-center rounded-full bg-coral px-7 py-3.5 font-semibold text-navy hover:bg-coral-dim transition-colors"
            >
              See packages &amp; bundles
            </a>
            <a
              href="#locations"
              className="inline-flex items-center rounded-full border-2 border-navy-line px-7 py-3 font-semibold text-off-white hover:border-gold hover:text-gold transition-colors"
            >
              View mall network
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <LedMatrix />
        </motion.div>
      </div>
    </section>
  );
}
