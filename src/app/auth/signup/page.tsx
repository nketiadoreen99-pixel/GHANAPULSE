"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Signup functionality requires Supabase connection. Demo mode.");
    }, 1000);
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-text-inverse font-bold text-2xl">G</span>
          </div>
          <h1 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">Create your account</h1>
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary mt-1">
            Join GhanaPulse and stay informed
          </p>
        </div>

        <div className="bg-surface dark:bg-dark-surface-secondary rounded-2xl border border-border-light dark:border-dark-border p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full h-11 pl-10 pr-4 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full h-11 pl-10 pr-4 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  required
                  minLength={8}
                  className="w-full h-11 pl-10 pr-10 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-tertiary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <p className="text-xs text-text-tertiary mt-1">Minimum 8 characters</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 flex items-center justify-center gap-2 text-sm font-semibold text-text-inverse gradient-primary rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Create Account"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:text-primary-dark font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
