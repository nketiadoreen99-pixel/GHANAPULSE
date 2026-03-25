"use client";

import { Bookmark } from "lucide-react";
import Link from "next/link";

export default function BookmarksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">Your Bookmarks</h1>
      <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-8">
        Articles you&apos;ve saved for later reading.
      </p>

      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-dark-surface-tertiary flex items-center justify-center mx-auto mb-4">
          <Bookmark size={28} className="text-primary dark:text-primary-light" />
        </div>
        <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-2">No bookmarks yet</h2>
        <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary mb-4">
          Sign in and start bookmarking articles to read later.
        </p>
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-text-inverse gradient-primary rounded-lg hover:opacity-90 transition-opacity"
        >
          Sign In to Get Started
        </Link>
      </div>
    </div>
  );
}
