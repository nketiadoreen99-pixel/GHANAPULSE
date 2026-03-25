"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Share2, Bookmark, ChevronUp, ChevronDown, X, Clock, Eye } from "lucide-react";
import { mockArticles } from "@/lib/mock-data";
import { formatDate, formatNumber, getCategoryBadgeClass } from "@/lib/utils";

export default function StoriesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const articles = mockArticles;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, articles.length - 1));
  }, [articles.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        window.location.href = "/";
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    let startY = 0;
    function handleTouchStart(e: TouchEvent) {
      startY = e.touches[0].clientY;
    }
    function handleTouchEnd(e: TouchEvent) {
      const diff = startY - e.changedTouches[0].clientY;
      if (diff > 50) goNext();
      else if (diff < -50) goPrev();
    }
    const el = containerRef.current;
    el?.addEventListener("touchstart", handleTouchStart);
    el?.addEventListener("touchend", handleTouchEnd);
    return () => {
      el?.removeEventListener("touchstart", handleTouchStart);
      el?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  const article = articles[currentIndex];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-text-primary flex items-center justify-center"
    >
      {/* Close button */}
      <Link
        href="/"
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-text-primary/50 text-text-inverse hover:bg-text-primary/70 transition-colors"
      >
        <X size={24} />
      </Link>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 flex gap-1 px-4 pt-2 z-40">
        {articles.map((_, i) => (
          <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-text-inverse/20">
            <div
              className="h-full gradient-primary transition-all duration-300"
              style={{ width: i < currentIndex ? "100%" : i === currentIndex ? "50%" : "0%" }}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="p-2 rounded-full bg-text-primary/50 text-text-inverse hover:bg-text-primary/70 disabled:opacity-30 transition"
        >
          <ChevronUp size={20} />
        </button>
        <button
          onClick={goNext}
          disabled={currentIndex === articles.length - 1}
          className="p-2 rounded-full bg-text-primary/50 text-text-inverse hover:bg-text-primary/70 disabled:opacity-30 transition"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Story card */}
      <div className="relative w-full max-w-lg h-full max-h-[90vh] mx-auto animate-fade-in" key={article.id}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-text-primary via-text-primary/50 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative h-full flex flex-col justify-end p-6 pb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${getCategoryBadgeClass(article.category)}`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            <span className="text-xs text-text-inverse/70 flex items-center gap-1">
              <Clock size={12} />{article.readTime} min
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-text-inverse leading-tight mb-3">
            {article.title}
          </h1>

          <p className="text-sm text-text-inverse/80 leading-relaxed mb-4 line-clamp-3">
            {article.summary}
          </p>

          <div className="flex items-center gap-3 text-xs text-text-inverse/60 mb-4">
            <span className="font-medium text-text-inverse/80">{article.author}</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span className="flex items-center gap-1"><Eye size={12} />{formatNumber(article.views)}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-text-inverse/20 text-text-inverse text-sm hover:bg-text-inverse/30 transition">
              <Heart size={16} /> {formatNumber(article.likes)}
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-text-inverse/20 text-text-inverse text-sm hover:bg-text-inverse/30 transition">
              <MessageCircle size={16} /> {article.comments}
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-text-inverse/20 text-text-inverse text-sm hover:bg-text-inverse/30 transition">
              <Share2 size={16} />
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-text-inverse/20 text-text-inverse text-sm hover:bg-text-inverse/30 transition">
              <Bookmark size={16} />
            </button>
          </div>

          {/* Read full */}
          <Link
            href={`/article/${article.slug}`}
            className="mt-4 block text-center py-3 text-sm font-semibold text-text-inverse gradient-primary rounded-xl hover:opacity-90 transition-opacity"
          >
            Read Full Article
          </Link>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-text-inverse/50">
        {currentIndex + 1} / {articles.length}
      </div>
    </div>
  );
}
