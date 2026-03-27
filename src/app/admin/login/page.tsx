"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn, AlertCircle } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Check if email matches admin email
      if (email !== "justicewalker09@gmail.com") {
        setError("Invalid admin credentials");
        setLoading(false);
        return;
      }

      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      
      // Store admin session
      localStorage.setItem("adminEmail", email);
      localStorage.setItem("isAdmin", "true");
      
      // Redirect to admin dashboard
      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-surface dark:bg-dark-surface rounded-2xl border border-border-light dark:border-dark-border shadow-elevated p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto">
              <span className="text-text-inverse font-bold text-2xl">G</span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
              Admin Login
            </h1>
            <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
              GhanaPulse Admin Dashboard
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="flex gap-3 p-3 bg-accent-red/10 border border-accent-red rounded-lg">
              <AlertCircle size={18} className="text-accent-red shrink-0 mt-0.5" />
              <p className="text-sm text-accent-red">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="justicewalker09@gmail.com"
                required
                className="w-full h-11 px-4 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-secondary text-text-primary dark:text-dark-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full h-11 px-4 text-sm rounded-lg border border-border-light dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-secondary text-text-primary dark:text-dark-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 flex items-center justify-center gap-2 text-sm font-semibold text-text-inverse gradient-primary rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogIn size={18} />
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer */}
          <div className="pt-4 border-t border-border-light dark:border-dark-border text-center">
            <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
              Not an admin?{" "}
              <Link href="/" className="text-primary hover:text-primary-light transition-colors font-medium">
                Back to site
              </Link>
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <p className="text-xs text-text-inverse text-center">
            Admin credentials are required to access the dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
