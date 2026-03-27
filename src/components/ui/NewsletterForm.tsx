"use client";

export default function NewsletterForm({ variant }: { variant?: "sidebar" | "footer" }) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Subscribed! Thank you for subscribing to GhanaPulse.");
  }

  if (variant === "footer") {
    return (
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 h-10 px-3 text-sm rounded-lg bg-dark-surface-tertiary text-text-inverse border border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-light"
        />
        <button
          type="submit"
          className="h-10 px-4 text-sm font-medium text-text-inverse gradient-primary rounded-lg hover:opacity-90 transition-opacity shrink-0"
        >
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full h-10 px-3 text-sm rounded-lg bg-surface/20 text-text-inverse placeholder-text-inverse/60 border border-text-inverse/20 focus:outline-none focus:ring-2 focus:ring-text-inverse/50"
      />
      <button
        type="submit"
        className="w-full h-10 text-sm font-semibold text-primary bg-surface rounded-lg hover:bg-surface-secondary transition-colors"
      >
        Subscribe Now
      </button>
    </form>
  );
}
