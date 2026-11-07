"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { 
    href: "/", 
    label: "Home",
    submenu: [
      { href: "/#top", label: "Top" },
      { href: "/#how-it-works", label: "How It Works" },
      { href: "/#what-you-get", label: "What You Get" },
      { href: "/#locations", label: "Mall Locations" },
      { href: "/#why", label: "Why Ad.here" },
      { href: "/#packages", label: "Launch Offer" },
    ]
  },
  { 
    href: "/ad-offers", 
    label: "Ad Offers",
    submenu: [
      { href: "/ad-offers#brand-ad-spaces", label: "Brand Ad Spaces" },
      { href: "/ad-offers#events-ad-spaces", label: "Events Ad Spaces" },
      { href: "/ad-offers#screen-rental", label: "Ad.here Screen Rental" },
      { href: "/ad-offers#purchase-screen", label: "Purchase LED Screen" },
    ]
  },
  { 
    href: "/packages-prices", 
    label: "Packages & Prices",
    submenu: [
      { href: "/packages-prices#subscriptions", label: "Subscriptions" },
      { href: "/packages-prices#built-for-smes", label: "Built for SMEs" },
      { href: "/#contact", label: "Buy a Slot" },
    ]
  },
  { 
    href: "/blog", 
    label: "Blog",
    submenu: [
      { href: "/blog#featured", label: "Featured Post" },
      { href: "/blog#all-posts", label: "All Posts" },
      { href: "/blog#updates", label: "Get Updates" },
    ]
  },
  { 
    href: "/#contact", 
    label: "Contact",
    submenu: [
      { href: "/#contact", label: "Enquiry Form" },
      { href: "/#contact", label: "Contact Details" },
    ]
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between py-5">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-coral.png"
            alt="ad.here — Ads that stick, results that last"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <div
              key={l.href}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(l.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={l.href}
                className="flex items-center gap-1 text-sm font-semibold text-muted-navy hover:text-off-white transition-colors"
              >
                {l.label}
                <ChevronDown size={14} className="opacity-60" />
              </Link>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === l.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-navy-soft/70 backdrop-blur-xl border border-white/10 rounded-sm shadow-xl overflow-hidden"
                  >
                    <div className="py-0">
                      {l.submenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-muted-navy hover:text-off-white hover:bg-white/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white hover:bg-coral-dim transition-colors"
          >
            Buy a Slot
          </Link>
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

      {/* Mobile Menu */}
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
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === l.label ? null : l.label)}
                    className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-muted-navy hover:text-off-white transition-colors"
                  >
                    {l.label}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${activeDropdown === l.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {activeDropdown === l.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-1">
                          {l.submenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-sm text-muted-navy hover:text-off-white transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: LINKS.length * 0.05 + 0.1, duration: 0.3 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex justify-center rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white hover:bg-coral-dim transition-colors"
                >
                  Buy a Slot
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
