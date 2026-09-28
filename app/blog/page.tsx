import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const BLOG_POSTS = [
  {
    slug: "ai-media-buying-ghana",
    title: "How AI is Transforming Media Buying in Ghana",
    excerpt: "Discover how artificial intelligence is making premium advertising accessible to SMEs across Ghana.",
    image: "/mall (1).jpg",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    slug: "indoor-vs-outdoor-advertising",
    title: "Indoor vs Outdoor: Why Mall Screens Win",
    excerpt: "A data-driven comparison of advertising effectiveness in controlled indoor environments.",
    image: "/mall (2).jpg",
    category: "Strategy",
    date: "March 10, 2024",
    readTime: "4 min read"
  },
  {
    slug: "sme-advertising-budget",
    title: "Making Every Cedi Count: SME Advertising Guide",
    excerpt: "Practical strategies for small businesses to maximize their advertising impact on limited budgets.",
    image: "/mall (3).jpg",
    category: "Business",
    date: "March 5, 2024",
    readTime: "6 min read"
  },
  {
    slug: "mall-advertising-benefits",
    title: "5 Reasons Mall Advertising Works for Local Brands",
    excerpt: "Why indoor mall screens deliver better ROI than traditional outdoor advertising.",
    image: "/mall (4).jpg",
    category: "Strategy",
    date: "February 28, 2024",
    readTime: "4 min read"
  },
  {
    slug: "campaign-automation",
    title: "From Brief to Live in 35 Minutes",
    excerpt: "How our AI platform automates the entire media buying process for speed and efficiency.",
    image: "/mall (5).jpg",
    category: "Platform",
    date: "February 20, 2024",
    readTime: "3 min read"
  },
  {
    slug: "transparent-reporting",
    title: "Advertising Without the Black Box",
    excerpt: "Why transparency matters and how we give SMEs full visibility into their ad spend.",
    image: "/mall (6).jpg",
    category: "Business",
    date: "February 15, 2024",
    readTime: "5 min read"
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden">
          <Image
            src="/mall (8).jpg"
            alt="Blog"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="wrap relative z-10">
            <p className="text-sm uppercase tracking-wide text-gold font-semibold mb-4">
              Insights & Updates
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold mb-5">
              ad.here Blog
            </h1>
            <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
              Industry insights, platform updates, and advertising strategies for Ghanaian businesses.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="wrap grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-coral transition-colors"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-600 mb-3">
                    <span className="text-coral font-semibold">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-semibold text-navy mb-2 group-hover:text-coral transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-coral font-semibold text-sm">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
