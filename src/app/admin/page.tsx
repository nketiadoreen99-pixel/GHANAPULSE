"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3, FileText, MessageSquare, Users, Eye, TrendingUp,
  Plus, Edit, Trash2, Settings, LogOut, ChevronRight, Search,
  Image as ImageIcon,
} from "lucide-react";
import { mockArticles } from "@/lib/mock-data";
import { formatNumber, formatDate, getCategoryBadgeClass } from "@/lib/utils";
import { CATEGORIES } from "@/types";

const stats = [
  { label: "Total Views", value: "142.5K", change: "+12.3%", icon: Eye, color: "text-primary" },
  { label: "Total Articles", value: "12", change: "+3", icon: FileText, color: "text-accent-green" },
  { label: "Comments", value: "2.3K", change: "+8.1%", icon: MessageSquare, color: "text-accent-purple" },
  { label: "Subscribers", value: "8.4K", change: "+5.2%", icon: Users, color: "text-accent-orange" },
];

type Tab = "overview" | "articles" | "create" | "comments";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("news");
  const [newSummary, setNewSummary] = useState("");
  const [newContent, setNewContent] = useState("");

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "create", label: "Create", icon: Plus },
    { id: "comments", label: "Comments", icon: MessageSquare },
  ];

  function handleCreateArticle(e: React.FormEvent) {
    e.preventDefault();
    alert("Article created (demo mode). Connect Supabase for persistence.");
    setNewTitle("");
    setNewSummary("");
    setNewContent("");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="lg:w-56 shrink-0">
          <div className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border p-4">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-light dark:border-dark-border">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-text-inverse font-bold">A</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">Admin</p>
                <p className="text-xs text-text-tertiary">admin@ghanapulse.com</p>
              </div>
            </div>

            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "text-primary bg-primary-50 dark:bg-dark-surface-tertiary"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-tertiary dark:text-dark-text-secondary dark:hover:bg-dark-surface-tertiary"
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-border-light dark:border-dark-border space-y-1">
              <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-tertiary dark:text-dark-text-secondary dark:hover:bg-dark-surface-tertiary">
                <Settings size={18} /> Settings
              </button>
              <Link href="/" className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-tertiary dark:text-dark-text-secondary dark:hover:bg-dark-surface-tertiary">
                <LogOut size={18} /> Back to Site
              </Link>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h1 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">Dashboard Overview</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <stat.icon size={20} className={stat.color} />
                      <span className="text-xs font-medium text-accent-green">{stat.change}</span>
                    </div>
                    <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">{stat.value}</p>
                    <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Top articles */}
              <div className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border">
                <div className="p-4 border-b border-border-light dark:border-dark-border">
                  <h2 className="text-base font-bold text-text-primary dark:text-dark-text-primary flex items-center gap-2">
                    <TrendingUp size={18} className="text-accent-red" /> Top Performing Articles
                  </h2>
                </div>
                <div className="divide-y divide-border-light dark:divide-dark-border">
                  {[...mockArticles]
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 5)
                    .map((a, i) => (
                      <div key={a.id} className="flex items-center gap-3 px-4 py-3">
                        <span className="text-lg font-bold text-text-tertiary w-6">{i + 1}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary truncate">{a.title}</p>
                          <p className="text-xs text-text-tertiary">{formatDate(a.publishedAt)}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">{formatNumber(a.views)}</p>
                          <p className="text-xs text-text-tertiary">views</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Articles */}
          {activeTab === "articles" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">Manage Articles</h1>
                <button
                  onClick={() => setActiveTab("create")}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-text-inverse gradient-primary rounded-lg hover:opacity-90"
                >
                  <Plus size={16} /> New Article
                </button>
              </div>

              <div className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border overflow-hidden">
                <div className="p-3 border-b border-border-light dark:border-dark-border">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full h-9 pl-9 pr-4 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
                    />
                  </div>
                </div>
                <div className="divide-y divide-border-light dark:divide-dark-border">
                  {mockArticles.map((a) => (
                    <div key={a.id} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-secondary dark:hover:bg-dark-surface-tertiary transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${getCategoryBadgeClass(a.category)}`}>
                            {a.category}
                          </span>
                          {a.isSponsored && (
                            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-accent-yellow text-text-inverse">
                              Sponsored
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary truncate">{a.title}</p>
                        <div className="flex gap-3 text-xs text-text-tertiary mt-0.5">
                          <span>{formatDate(a.publishedAt)}</span>
                          <span>{formatNumber(a.views)} views</span>
                          <span>{a.comments} comments</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button className="p-2 rounded-lg text-text-tertiary hover:text-primary hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 rounded-lg text-text-tertiary hover:text-accent-red hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary transition-colors">
                          <Trash2 size={16} />
                        </button>
                        <Link href={`/article/${a.slug}`} className="p-2 rounded-lg text-text-tertiary hover:text-primary hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary transition-colors">
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Create */}
          {activeTab === "create" && (
            <div className="space-y-6">
              <h1 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">Create New Article</h1>

              <form onSubmit={handleCreateArticle} className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">Title</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter article title"
                    required
                    className="w-full h-11 px-4 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full h-11 px-4 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">Featured Image</label>
                  <div className="border-2 border-dashed border-border-light dark:border-dark-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <ImageIcon size={32} className="mx-auto text-text-tertiary mb-2" />
                    <p className="text-sm text-text-tertiary">Click to upload or drag and drop</p>
                    <p className="text-xs text-text-tertiary mt-1">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">Summary</label>
                  <textarea
                    value={newSummary}
                    onChange={(e) => setNewSummary(e.target.value)}
                    placeholder="Brief summary of the article"
                    rows={2}
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">Content (HTML)</label>
                  <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Write your article content here..."
                    rows={12}
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light resize-y font-mono"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-sm font-semibold text-text-inverse gradient-primary rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Publish Article
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2.5 text-sm font-medium text-text-secondary border border-border-light dark:border-dark-border rounded-lg hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary transition-colors"
                  >
                    Save as Draft
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Comments */}
          {activeTab === "comments" && (
            <div className="space-y-4">
              <h1 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">Moderate Comments</h1>
              <div className="bg-surface dark:bg-dark-surface-secondary rounded-xl border border-border-light dark:border-dark-border p-8 text-center">
                <MessageSquare size={40} className="mx-auto text-text-tertiary/30 mb-3" />
                <p className="text-sm text-text-tertiary">Comment moderation requires Supabase connection.</p>
                <p className="text-xs text-text-tertiary mt-1">Connect your database to manage comments.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
