import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    title: "Ad Offers",
    links: [
      { label: "Brand ad spaces", href: "/ad-offers#brand-ad-spaces" },
      { label: "Events ad spaces", href: "/ad-offers#events-ad-spaces" },
      { label: "Ad.here screen rental", href: "/ad-offers#screen-rental" },
      { label: "Purchase LED screen", href: "/ad-offers#purchase-screen" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "What you get", href: "/#what-you-get" },
      { label: "Mall locations", href: "/#locations" },
      { label: "Why Ad.here", href: "/#why" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Packages & prices", href: "/packages-bundles" },
      { label: "Blog", href: "/blog" },
      { label: "adhereghana@gmail.com", href: "mailto:adhereghana@gmail.com" },
      { label: "055 860 7807", href: "tel:+233558607807" },
      { label: "Get a proposal", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-line bg-navy overflow-hidden">
      {/* Large watermark logo in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/logo-navy.png"
          alt=""
          width={800}
          height={228}
          className="w-150 sm:w-200 h-auto opacity-[0.03]"
          style={{ filter: "brightness(0) invert(1)" }}
          aria-hidden="true"
        />
      </div>

      <div className="wrap pt-28 pb-10 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo-navy.png"
                alt="ad.here"
                width={130}
                height={37}
                className="h-9 w-auto invert brightness-0 sepia-0"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-sm text-muted-navy leading-relaxed max-w-[34ch] mt-3">
              Presence · Visibility · Immediacy - indoor LED advertising at Atlantic Mall & Marina Mall, Accra.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs font-bold uppercase tracking-wide text-gold mb-5">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) =>
                  l.href ? (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-muted-navy hover:text-off-white transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.label} className="text-sm text-white">
                      {l.label}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-navy-dim border-t border-navy-line">
          <div className="flex flex-wrap gap-4">
            <span>© 2026 Ad.here. Ads that stick, results that last.</span>
            <Link href="/privacy" className="hover:text-coral transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-coral transition-colors">Terms of Service</Link>
          </div>
          <span>Concept site - 3 screens live across Atlantic Mall & Marina Mall.</span>
          <span>
            Built with love by{" "}
            <a
              href="https://brightgobka.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral hover:text-coral-dim transition-colors font-medium"
            >
              Tyler Bright
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
