import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, Calendar, ArrowLeft } from "lucide-react";
import { mockArticles, getCommentsByArticleId } from "@/lib/mock-data";
import { formatDate, formatNumber, getCategoryBadgeClass } from "@/lib/utils";
import NewsCard from "@/components/news/NewsCard";
import AdBanner from "@/components/ads/AdBanner";
import SocialShare from "@/components/article/SocialShare";
import CommentSection from "@/components/article/CommentSection";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockArticles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-4">Article Not Found</h1>
        <Link href="/" className="text-primary hover:text-primary-dark font-medium">
          Go back to homepage
        </Link>
      </div>
    );
  }

  const comments = getCommentsByArticleId(article.id);
  const related = mockArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <AdBanner slot="Article Header Banner - 728x90" className="mb-6 hidden md:flex" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main article */}
        <article className="lg:col-span-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <Link href="/" className="flex items-center gap-1 text-text-tertiary hover:text-primary transition-colors">
              <ArrowLeft size={14} />
              Home
            </Link>
            <span className="text-text-tertiary">/</span>
            <Link
              href={`/category/${article.category}`}
              className="text-primary hover:text-primary-dark font-medium capitalize"
            >
              {article.category}
            </Link>
          </div>

          {/* Category + badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryBadgeClass(article.category)}`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            {article.isTrending && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-red text-text-inverse">
                Trending
              </span>
            )}
            {article.isSponsored && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-yellow text-text-inverse">
                Sponsored
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary dark:text-dark-text-primary leading-tight mb-4">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary dark:text-dark-text-secondary mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-dark-surface-tertiary flex items-center justify-center">
                <span className="text-xs font-bold text-primary dark:text-primary-light">
                  {article.author.charAt(0)}
                </span>
              </div>
              <span className="font-medium">{article.author}</span>
            </div>
            <span className="flex items-center gap-1"><Calendar size={14} />{formatDate(article.publishedAt)}</span>
            <span className="flex items-center gap-1"><Clock size={14} />{article.readTime} min read</span>
            <span className="flex items-center gap-1"><Eye size={14} />{formatNumber(article.views)} views</span>
          </div>

          {/* Social share */}
          <div className="mb-6">
            <SocialShare title={article.title} slug={article.slug} />
          </div>

          {/* Featured image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image src={article.image} alt={article.title} fill className="object-cover" priority />
          </div>

          {/* Article content with inline ads */}
          <div className="prose prose-lg max-w-none text-text-secondary dark:text-dark-text-secondary">
            <div dangerouslySetInnerHTML={{ __html: article.content.split("</p>").slice(0, 2).join("</p>") + "</p>" }} />
          </div>

          <AdBanner slot="Inline Article Ad - 728x90" className="my-8" />

          <div className="prose prose-lg max-w-none text-text-secondary dark:text-dark-text-secondary">
            <div dangerouslySetInnerHTML={{ __html: article.content.split("</p>").slice(2).join("</p>") }} />
          </div>

          <AdBanner slot="Inline Article Ad - 728x90" className="my-8" />

          {/* Social share bottom */}
          <div className="py-6 border-t border-border-light dark:border-dark-border">
            <SocialShare title={article.title} slug={article.slug} />
          </div>

          {/* Comments */}
          <CommentSection comments={comments} articleId={article.id} />
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <AdBanner slot="Article Sidebar - 300x250" className="min-h-[250px]" />

          {/* Related articles */}
          {related.length > 0 && (
            <div className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border p-5">
              <h3 className="text-base font-bold text-text-primary dark:text-dark-text-primary mb-4">Related Articles</h3>
              <div>
                {related.map((a) => (
                  <NewsCard key={a.id} article={a} variant="compact" />
                ))}
              </div>
            </div>
          )}

          <AdBanner slot="Article Sidebar - 300x600" className="min-h-[600px]" />
        </aside>
      </div>
    </div>
  );
}
