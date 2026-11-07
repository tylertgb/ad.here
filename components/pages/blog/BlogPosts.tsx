const BLOG_POSTS = [
  {
    category: "Events",
    categoryColor: "coral",
    readTime: "6 min read",
    title: "Running a concert or church programme? Here's how event-week booking works",
    excerpt: "No monthly commitment - book by the week, send your visual, go live. The full flow.",
    status: "Publishing soon",
  },
  {
    category: "Packages",
    categoryColor: "coral",
    readTime: "5 min read",
    title: "Bundle vs. single screen: picking the right package for your launch",
    excerpt: "Double Up, Mall Hop, or All Here - matching a bundle to your campaign goal, not just your budget.",
    status: "Publishing soon",
  },
  {
    category: "How it works",
    categoryColor: "coral",
    readTime: "4 min read",
    title: "From logo to looping spot: what happens after you buy a slot",
    excerpt: "The four steps between checkout and your brand appearing on screen.",
    status: "Publishing soon",
  },
  {
    category: "Tenant advantage",
    categoryColor: "navy",
    readTime: "4 min read",
    title: "Mall tenant? Here's why your in-mall ad rate just dropped",
    excerpt: "How the tenant rate is calculated, and why it comes with a Featured Tenant Spotlight.",
    status: "Publishing soon",
  },
  {
    category: "Industry",
    categoryColor: "navy",
    readTime: "7 min read",
    title: "Why 'no skip button' still matters in 2026",
    excerpt: "Attention economics in Ghanaian retail spaces, and why dwell-time advertising beats digital fatigue.",
    status: "Publishing soon",
  },
  {
    category: "Budgeting",
    categoryColor: "coral",
    readTime: "5 min read",
    title: "Subscriptions explained: what you actually get for locking in 6 or 12 months",
    excerpt: "Beyond the discount - bonus spot time, visual refreshes, and rate-lock protection by term.",
    status: "Publishing soon",
  },
];

export default function BlogPosts() {
  return (
    <section id="all-posts" className="py-20 sm:py-28 bg-white">
      <div className="wrap">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  post.categoryColor === 'coral' ? 'text-coral' : 'text-navy'
                }`}>
                  {post.category}
                </span>
                <span className="text-slate-400 mx-2">·</span>
                <span className="text-sm text-slate-500">{post.readTime}</span>
              </div>

              <h3 className="text-lg font-semibold text-navy mb-3 leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <span className="text-xs text-slate-400 italic">
                {post.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
