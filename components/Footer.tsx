import Image from "next/image";

const COLUMNS = [
  {
    title: "Network",
    links: [
      { label: "Indoor network", href: "#network" },
      { label: "Packages & bundles", href: "#packages" },
      { label: "Ad.here Locate", href: "#locate" },
      { label: "Mall locations", href: "#locations" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Mall brand advantage", href: "#tenant-advantage" },
      { label: "Why Ad.here", href: "#why" },
      { label: "LED supply", href: null },
      { label: "Outdoor portal", href: null },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Haatso, Accra, Ghana", href: null },
      { label: "ad.hereghana@gmail.com", href: "mailto:ad.hereghana@gmail.com" },
      { label: "Get a proposal", href: "#contact" },
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

      <div className="wrap pt-24 pb-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#top" className="inline-block mb-3.5">
              <Image
                src="/logo-navy.png"
                alt="ad.here"
                width={130}
                height={37}
                className="h-8 w-auto invert brightness-0 sepia-0"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p className="text-[13.5px] text-muted-navy-dim leading-relaxed max-w-[34ch] mt-2">
              Presence · Visibility · Immediacy indoor LED advertising
              across Ghana&apos;s malls.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs font-bold uppercase tracking-wide text-gold mb-3.5">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) =>
                  l.href ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-navy hover:text-off-white transition-colors"
                      >
                        {l.label}
                      </a>
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

        <div className="mt-11 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-navy-dim">
          <span>© 2026 Ad.here. Ads that stick, results that last.</span>
          <span>Concept site: Phase 1 rollout in progress.</span>
          <span>
            Built with love by{" "}
            <a
              href="https://brightgobka.onrender.com"
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
