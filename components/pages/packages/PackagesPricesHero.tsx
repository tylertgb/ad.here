import Link from "next/link";
import Image from "next/image";

export default function PackagesPricesHero() {
  return (
    <section className="relative py-32 sm:py-40 bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mall (1).jpg"
          alt="Packages & Prices"
          fill
          className="object-cover opacity-20"
          priority
          quality={90}
        />
      </div>

      <div className="wrap relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-coral transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Packages & Bundles</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-1.5 bg-gold/10 backdrop-blur-sm rounded-full">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold">
              Packages & Bundles
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
            Stay longer, pay less - then check out right here.
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Lock any screen or bundle from{" "}
            <Link href="/ad-offers" className="text-coral hover:text-coral-dim transition-colors font-semibold underline">
              Ad Offers
            </Link>{" "}
            into a 3, 6, or 12-month term for a bigger discount, then pay online below.
          </p>
        </div>
      </div>
    </section>
  );
}
