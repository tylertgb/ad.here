export default function NewsletterSignup() {
  return (
    <section id="updates" className="py-20 sm:py-28 bg-navy">
      <div className="wrap">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Get new posts when we publish
          </h2>
          <p className="text-gray-300 mb-8">
            No spam - just advertising guidance for Ghanaian SMEs, sent when a new article lands.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@brand.com"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coral"
            />
            <button className="px-8 py-3 bg-coral text-white font-semibold rounded-sm hover:bg-coral-dim transition-colors">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
