"use client";

import { Share2 } from "lucide-react";

const platforms = [
  {
    name: "WhatsApp",
    color: "bg-accent-green",
    getUrl: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  },
  {
    name: "Facebook",
    color: "bg-primary",
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "Twitter",
    color: "bg-text-primary",
    getUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
];

export default function SocialShare({ title, slug }: { title: string; slug: string }) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const url = `${baseUrl}/article/${slug}`;

  function handleCopy() {
    navigator.clipboard.writeText(url);
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary mr-1">Share:</span>
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.getUrl(url, title)}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-3 py-1.5 text-xs font-medium text-text-inverse rounded-full ${p.color} hover:opacity-90 transition-opacity`}
        >
          {p.name}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-text-secondary border border-border-light dark:border-dark-border rounded-full hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary transition-colors"
      >
        <Share2 size={12} />
        Copy Link
      </button>
    </div>
  );
}
