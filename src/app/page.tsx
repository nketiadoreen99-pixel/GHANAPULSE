import NewsCard from "@/components/news/NewsCard";
import TrendingBar from "@/components/news/TrendingBar";
import AdBanner from "@/components/ads/AdBanner";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { mockArticles, getTrendingArticles } from "@/lib/mock-data";
import Link from "next/link";
import { CATEGORIES } from "@/types";
import { ArrowRight, Zap } from "lucide-react";

export default function HomePage() {
  const featured = mockArticles[0];
  const trending = getTrendingArticles();
  const latest = mockArticles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Category pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4">
        <Link
          href="/"
          className="px-4 py-2 text-sm font-semibold text-text-inverse gradient-primary rounded-full shrink-0"
        >
          For You
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="px-4 py-2 text-sm font-medium text-text-secondary bg-surface dark:bg-dark-surface-secondary border border-border-light dark:border-dark-border rounded-full hover:border-primary hover:text-primary transition-colors shrink-0"
          >
            {cat.name}
          </Link>
        ))}
        <Link
          href="/stories"
          className="px-4 py-2 text-sm font-medium text-accent-red bg-surface dark:bg-dark-surface-secondary border border-accent-red/30 rounded-full hover:bg-accent-red hover:text-text-inverse transition-colors shrink-0 flex items-center gap-1"
        >
          <Zap size={14} />
          Stories
        </Link>
      </div>

      {/* Header ad */}
      <AdBanner slot="Header Banner - 728x90" className="mb-6 hidden md:flex" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Featured article */}
          <NewsCard article={featured} variant="featured" />

          {/* Latest header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">Latest News</h2>
            <Link
              href="/category/news"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          {/* News grid with in-feed ads every 3 posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {latest.slice(0, 2).map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>

          <AdBanner slot="In-Feed Ad - 728x90" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {latest.slice(2, 4).map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>

          <AdBanner slot="In-Feed Ad - 728x90" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {latest.slice(4, 6).map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>

          <AdBanner slot="In-Feed Ad - 728x90" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {latest.slice(6).map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>

          {/* Load more */}
          <div className="flex justify-center pt-4">
            <button className="px-8 py-3 text-sm font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-text-inverse transition-colors">
              Load More Stories
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <TrendingBar articles={trending} />

          <AdBanner slot="Sidebar Ad - 300x250" className="min-h-[250px]" />

          {/* Most Read Today */}
          <div className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border p-5">
            <h2 className="text-base font-bold text-text-primary dark:text-dark-text-primary mb-4">Most Read Today</h2>
            <div>
              {[...mockArticles]
                .sort((a, b) => b.views - a.views)
                .slice(0, 5)
                .map((a) => (
                  <NewsCard key={a.id} article={a} variant="compact" />
                ))}
            </div>
          </div>

          <AdBanner slot="Sidebar Ad - 300x600" className="min-h-[600px]" />

          {/* Newsletter */}
          <div className="gradient-hero rounded-xl p-5 text-center">
            <h3 className="text-base font-bold text-text-inverse mb-2">Stay Informed</h3>
            <p className="text-sm text-text-inverse/80 mb-4">Get breaking news delivered daily.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
