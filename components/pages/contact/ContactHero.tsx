import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="py-32 sm:py-40 bg-navy">
      <div className="wrap">
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-coral transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Contact</span>
          </nav>
        </div>

        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1.5 bg-gold/10 backdrop-blur-sm rounded-full">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold">
              Get in Touch
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
            Tell us which screen - or which offer - you want.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Send a few details and we'll reply with availability, pricing, and a schedule. Prefer to build your own package?{" "}
            <Link href="/packages-bundles#buy-a-slot" className="text-coral hover:text-coral-dim transition-colors font-semibold">
              Buy a slot directly →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}