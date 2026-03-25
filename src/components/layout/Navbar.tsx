"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Bell, Moon, Sun, User, Bookmark } from "lucide-react";
import { CATEGORIES } from "@/types";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dark, setDark] = useState(false);

  function toggleDark() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border-light dark:bg-dark-surface dark:border-dark-border">
      {/* Top bar */}
      <div className="gradient-hero px-4 py-1.5 text-center">
        <p className="text-xs font-medium text-text-inverse tracking-wide">
          Breaking: Ghana&apos;s economy surpasses growth expectations in Q1 2026
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-text-inverse font-bold text-lg">G</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
                Ghana<span className="text-gradient">Pulse</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary rounded-lg hover:bg-primary-50 transition-colors dark:text-dark-text-secondary dark:hover:text-primary-light dark:hover:bg-dark-surface-secondary"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/stories"
              className="px-3 py-2 text-sm font-medium text-text-inverse bg-accent-red rounded-full hover:opacity-90 transition-opacity ml-1"
            >
              Stories
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search news..."
                  className="w-40 sm:w-56 h-9 px-3 text-sm rounded-lg border border-border-light bg-surface-secondary dark:bg-dark-surface-secondary dark:border-dark-border dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
                  autoFocus
                />
                <button type="button" onClick={() => setSearchOpen(false)} className="p-2 text-text-tertiary">
                  <X size={18} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-text-secondary hover:bg-surface-tertiary transition-colors dark:text-dark-text-secondary dark:hover:bg-dark-surface-secondary"
              >
                <Search size={20} />
              </button>
            )}

            <button className="p-2 rounded-lg text-text-secondary hover:bg-surface-tertiary transition-colors dark:text-dark-text-secondary dark:hover:bg-dark-surface-secondary hidden sm:block">
              <Bell size={20} />
            </button>

            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-text-secondary hover:bg-surface-tertiary transition-colors dark:text-dark-text-secondary dark:hover:bg-dark-surface-secondary"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              href="/bookmarks"
              className="p-2 rounded-lg text-text-secondary hover:bg-surface-tertiary transition-colors dark:text-dark-text-secondary dark:hover:bg-dark-surface-secondary hidden sm:block"
            >
              <Bookmark size={20} />
            </Link>

            <Link
              href="/auth/login"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-inverse gradient-primary rounded-lg hover:opacity-90 transition-opacity"
            >
              <User size={16} />
              Sign In
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-text-secondary hover:bg-surface-tertiary lg:hidden dark:text-dark-text-secondary"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border-light bg-surface dark:bg-dark-surface dark:border-dark-border animate-fade-in">
          <nav className="px-4 py-3 space-y-1">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-primary rounded-lg hover:bg-primary-50 dark:text-dark-text-secondary dark:hover:bg-dark-surface-secondary"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/stories"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-accent-red"
            >
              Stories Mode
            </Link>
            <hr className="border-border-light dark:border-dark-border" />
            <Link
              href="/bookmarks"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-text-secondary dark:text-dark-text-secondary"
            >
              Bookmarks
            </Link>
            <Link
              href="/auth/login"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-primary"
            >
              Sign In / Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
