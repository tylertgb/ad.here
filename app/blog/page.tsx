import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/pages/blog/BlogHero";
import FeaturedArticle from "@/components/pages/blog/FeaturedArticle";
import BlogPosts from "@/components/pages/blog/BlogPosts";
import NewsletterSignup from "@/components/pages/blog/NewsletterSignup";

export const metadata = {
  title: "Blog | ad.here",
  description: "Advertising guidance for Ghanaian SMEs - straight answers on budgeting, packages, and indoor mall advertising.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <FeaturedArticle />
        <BlogPosts />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
