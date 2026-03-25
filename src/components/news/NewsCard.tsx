"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, Share2, Bookmark, Clock, Eye } from "lucide-react";
import { Article } from "@/types";
import { formatDate, formatNumber, getCategoryBadgeClass } from "@/lib/utils";
import { useState } from "react";

interface NewsCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
}

export default function NewsCard({ article, variant = "default" }: NewsCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likes);

  function handleLike(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  }

  function handleBookmark(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setBookmarked(!bookmarked);
  }

  function handleShare(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ title: article.title, url: `/article/${article.slug}` });
    }
  }

  if (variant === "featured") {
    return (
      <Link href={`/article/${article.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-surface dark:bg-dark-surface-secondary card-hover">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${getCategoryBadgeClass(article.category)}`}>
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </span>
                {article.isTrending && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-red text-text-inverse">
                    Trending
                  </span>
                )}
                {article.isSponsored && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-yellow text-text-inverse">
                    Sponsored
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-inverse leading-tight mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-text-inverse/80 line-clamp-2 mb-3 max-w-2xl">{article.summary}</p>
              <div className="flex items-center gap-4 text-xs text-text-inverse/70">
                <span>{article.author}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{article.readTime} min read</span>
                <span className="flex items-center gap-1"><Eye size={12} />{formatNumber(article.views)}</span>
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/article/${article.slug}`} className="group flex gap-3 py-3 border-b border-border-light dark:border-dark-border last:border-0">
        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full ${getCategoryBadgeClass(article.category)} mb-1`}>
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
          <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-1 block">{formatDate(article.publishedAt)}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <article className="bg-surface dark:bg-dark-surface-secondary rounded-xl overflow-hidden card-hover border border-border-light dark:border-dark-border">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {article.isSponsored && (
            <span className="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-yellow text-text-inverse">
              Sponsored
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${getCategoryBadgeClass(article.category)}`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary flex items-center gap-1">
              <Clock size={12} />{article.readTime} min
            </span>
          </div>
          <h3 className="text-base font-bold text-text-primary dark:text-dark-text-primary leading-snug mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary line-clamp-2 mb-3">
            {article.summary}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-border-light dark:border-dark-border">
            <div className="flex items-center gap-2 text-xs text-text-tertiary dark:text-dark-text-tertiary">
              <span className="font-medium">{article.author}</span>
              <span>&middot;</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleLike}
                className={`p-1.5 rounded-full transition-colors ${liked ? "text-accent-red" : "text-text-tertiary hover:text-accent-red dark:text-dark-text-tertiary"}`}
              >
                <Heart size={16} fill={liked ? "currentColor" : "none"} />
              </button>
              <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary">{formatNumber(likeCount)}</span>
              <button className="p-1.5 rounded-full text-text-tertiary hover:text-primary dark:text-dark-text-tertiary ml-1">
                <MessageCircle size={16} />
              </button>
              <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary">{article.comments}</span>
              <button onClick={handleShare} className="p-1.5 rounded-full text-text-tertiary hover:text-primary dark:text-dark-text-tertiary ml-1">
                <Share2 size={16} />
              </button>
              <button
                onClick={handleBookmark}
                className={`p-1.5 rounded-full transition-colors ml-1 ${bookmarked ? "text-primary" : "text-text-tertiary hover:text-primary dark:text-dark-text-tertiary"}`}
              >
                <Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
