"use client";

import Link from "next/link";
import { CATEGORIES } from "@/types";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-text-primary dark:bg-dark-surface-secondary mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-text-inverse font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-text-inverse">
                Ghana<span className="text-primary-light">Pulse</span>
              </span>
            </Link>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Your trusted source for breaking news, in-depth analysis, and trending stories from Ghana and beyond.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-text-inverse uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-text-tertiary hover:text-primary-light transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-inverse uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-text-tertiary">About Us</span></li>
              <li><span className="text-sm text-text-tertiary">Contact</span></li>
              <li><span className="text-sm text-text-tertiary">Careers</span></li>
              <li><span className="text-sm text-text-tertiary">Advertise</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-text-inverse uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-sm text-text-tertiary mb-3">Get the latest news delivered to your inbox.</p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="border-t border-dark-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-text-tertiary">
            &copy; 2026 GhanaPulse. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-text-tertiary">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
