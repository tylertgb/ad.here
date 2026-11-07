import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  "Budgeting",
  "Packages",
  "Events",
  "How it works",
  "Tenant advantage",
  "Industry",
];

export default function BlogHero() {
  return (
    <section className="relative py-32 sm:py-40 bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/mall (8).jpg"
          alt="Blog"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="wrap relative z-10">
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-coral transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Blog</span>
          </nav>
        </div>

        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1.5 bg-gold/10 backdrop-blur-sm rounded-full">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold">
              Ad.here Blog
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
            Advertising guidance for Ghanaian SMEs, right here.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Straight answers on budgeting, packages, and indoor mall advertising - no agency jargon. Full articles publish as we launch; here's what's coming first.
          </p>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-3 mt-8">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
