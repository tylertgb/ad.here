"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#network", label: "Indoor Network" },
  { href: "#packages", label: "Packages" },
  { href: "#tenant-advantage", label: "Mall Brands" },
  { href: "#locate", label: "Locate" },
  { href: "#locations", label: "Locations" },
  { href: "#why", label: "Why Ad.here" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled
          ? "bg-navy/95 backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-navy"
      }`}
    >
      <div className="wrap flex items-center justify-between py-5">
        <a href="#top" className="shrink-0">
          <Image
            src="/logo-coral.png"
            alt="ad.here — Ads that stick, results that last"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-navy hover:text-off-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-navy hover:bg-coral-dim transition-colors"
          >
            Get a Proposal
          </a>
        </div>

        <button
          className="lg:hidden text-off-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-navy-soft overflow-hidden"
          >
            <nav className="wrap flex flex-col py-4 gap-1">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="py-2.5 text-sm text-muted-navy hover:text-off-white transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: LINKS.length * 0.05 + 0.1, duration: 0.3 }}
                className="mt-2 inline-flex justify-center rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-navy hover:bg-coral-dim transition-colors"
              >
                Get a Proposal
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
