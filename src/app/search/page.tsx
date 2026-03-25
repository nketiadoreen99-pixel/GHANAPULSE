"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { searchArticles, mockArticles } from "@/lib/mock-data";
import { CATEGORIES } from "@/types";
import NewsCard from "@/components/news/NewsCard";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [results, setResults] = useState(initialQuery ? searchArticles(initialQuery) : []);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      setResults(searchArticles(initialQuery));
    }
  }, [initialQuery]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    let r = query.trim() ? searchArticles(query.trim()) : mockArticles;
    if (selectedCategory !== "all") {
      r = r.filter((a) => a.category === selectedCategory);
    }
    setResults(r);
  }

  function handleCategoryFilter(cat: string) {
    setSelectedCategory(cat);
    let r = query.trim() ? searchArticles(query.trim()) : mockArticles;
    if (cat !== "all") {
      r = r.filter((a) => a.category === cat);
    }
    setResults(r);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-6">Search News</h1>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, or keywords..."
              className="w-full h-12 pl-10 pr-4 text-sm rounded-xl border border-border-light dark:border-dark-border bg-surface dark:bg-dark-surface-secondary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>
          <button
            type="submit"
            className="h-12 px-6 text-sm font-semibold text-text-inverse gradient-primary rounded-xl hover:opacity-90 transition-opacity"
          >
            Search
          </button>
        </div>
      </form>

      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-6">
        <SlidersHorizontal size={16} className="text-text-tertiary shrink-0" />
        <button
          onClick={() => handleCategoryFilter("all")}
          className={`px-3 py-1.5 text-sm font-medium rounded-full shrink-0 transition-colors ${
            selectedCategory === "all"
              ? "text-text-inverse gradient-primary"
              : "text-text-secondary bg-surface dark:bg-dark-surface-secondary border border-border-light dark:border-dark-border"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategoryFilter(cat.slug)}
            className={`px-3 py-1.5 text-sm font-medium rounded-full shrink-0 transition-colors ${
              selectedCategory === cat.slug
                ? "text-text-inverse gradient-primary"
                : "text-text-secondary bg-surface dark:bg-dark-surface-secondary border border-border-light dark:border-dark-border"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results */}
      <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary mb-4">
        {results.length} result{results.length !== 1 ? "s" : ""} found
        {query && ` for "${query}"`}
      </p>

      {results.length === 0 ? (
        <div className="text-center py-16">
          <Search size={48} className="mx-auto text-text-tertiary/30 mb-4" />
          <p className="text-lg text-text-tertiary dark:text-dark-text-tertiary">No results found.</p>
          <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary mt-1">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-8"><div className="skeleton h-12 w-full mb-6" /><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{[1,2,3].map(i => <div key={i} className="skeleton h-64" />)}</div></div>}>
      <SearchContent />
    </Suspense>
  );
}
