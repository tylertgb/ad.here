const FEATURED_POST = {
  category: "Budgeting",
  readTime: "8 min read",
  title: "How much should an SME actually spend on mall advertising in Accra?",
  excerpt: "A practical first-budget breakdown - screen vs. bundle, when a 3-month term pays for itself, and the one question to ask before you commit a cedi.",
  status: "FULL ARTICLE PUBLISHING AT LAUNCH",
};

export default function FeaturedArticle() {
  return (
    <section id="featured" className="py-16 sm:py-20 bg-gray-900">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="inline-block px-6 py-3 border-2 border-gold/30 rounded-sm mb-4">
                <p className="text-xs uppercase tracking-widest text-gold font-bold">
                  Full Article
                </p>
                <p className="text-xs uppercase tracking-widest text-gold/70 font-semibold">
                  Publishing at Launch
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                {FEATURED_POST.category}
              </span>
              <span className="text-gray-500 mx-2">·</span>
              <span className="text-sm text-gray-400">{FEATURED_POST.readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {FEATURED_POST.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {FEATURED_POST.excerpt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
