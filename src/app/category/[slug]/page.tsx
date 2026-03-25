import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { mockArticles } from "@/lib/mock-data";
import { CATEGORIES } from "@/types";
import NewsCard from "@/components/news/NewsCard";
import AdBanner from "@/components/ads/AdBanner";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  const articles = mockArticles.filter((a) => a.category === slug);

  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-4">Category Not Found</h1>
        <Link href="/" className="text-primary hover:text-primary-dark font-medium">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <Link href="/" className="flex items-center gap-1 text-sm text-text-tertiary hover:text-primary mb-3 transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <div className="flex items-center gap-3">
          <span className={`w-1.5 h-8 rounded-full ${category.color}`} />
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary">
            {category.name}
          </h1>
          <span className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
            {articles.length} articles
          </span>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className={`px-4 py-2 text-sm font-medium rounded-full shrink-0 transition-colors ${
              cat.slug === slug
                ? "text-text-inverse gradient-primary"
                : "text-text-secondary bg-surface dark:bg-dark-surface-secondary border border-border-light dark:border-dark-border hover:border-primary hover:text-primary"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <AdBanner slot="Category Header Banner" className="mb-6 hidden md:flex" />

      {articles.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-text-tertiary dark:text-dark-text-tertiary">
            No articles found in this category yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <div key={a.id}>
              {i === 0 ? (
                <div className="sm:col-span-2 lg:col-span-3">
                  <NewsCard article={a} variant="featured" />
                </div>
              ) : (
                <NewsCard article={a} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
