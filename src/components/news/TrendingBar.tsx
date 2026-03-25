import Link from "next/link";
import { TrendingUp, Eye } from "lucide-react";
import { Article } from "@/types";
import { formatNumber } from "@/lib/utils";

interface TrendingBarProps {
  articles: Article[];
}

export default function TrendingBar({ articles }: TrendingBarProps) {
  return (
    <aside className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border p-5">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={20} className="text-accent-red" />
        <h2 className="text-base font-bold text-text-primary dark:text-dark-text-primary">Trending in Ghana</h2>
      </div>
      <div className="space-y-0">
        {articles.slice(0, 6).map((article, i) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="flex gap-3 py-3 border-b border-border-light dark:border-dark-border last:border-0 group"
          >
            <span className="text-2xl font-bold text-primary-200 dark:text-dark-surface-tertiary w-8 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-xs text-text-tertiary dark:text-dark-text-tertiary">
                <span className="flex items-center gap-1"><Eye size={12} />{formatNumber(article.views)} views</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
