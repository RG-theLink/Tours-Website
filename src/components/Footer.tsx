"use client";

import { useState } from "react";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.77 1.153 4.92 4.92 0 011.153 1.772c.163.46.349 1.26.404 2.43.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.153 1.77 4.92 4.92 0 01-1.772 1.153c-.46.163-1.26.349-2.43.404-1.265.058-1.645.069-4.849.069s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.77-1.153 4.92 4.92 0 01-1.153-1.772c-.163-.46-.349-1.26-.404-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.92 4.92 0 013.79 2.95a4.92 4.92 0 011.772-1.153c.46-.163 1.26-.349 2.43-.404C9.256 2.175 9.636 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a6.88 6.88 0 00-2.49 1.62A6.88 6.88 0 00.63 4.74C.333 5.502.13 6.375.072 7.653.014 8.933 0 9.341 0 12.6c0 3.259.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912a6.88 6.88 0 001.62 2.49 6.88 6.88 0 002.49 1.62c.762.297 1.635.5 2.913.558C8.933 23.986 9.341 24 12 24s3.068-.014 4.348-.072c1.277-.058 2.15-.261 2.912-.558a6.88 6.88 0 002.49-1.62 6.88 6.88 0 001.62-2.49c.297-.762.5-1.635.558-2.913C23.986 15.068 24 14.66 24 12s-.014-3.068-.072-4.348c-.058-1.277-.261-2.15-.558-2.912a6.88 6.88 0 00-1.62-2.49A6.88 6.88 0 0019.26.63C18.498.333 17.625.13 16.347.072 15.067.014 14.659 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.016 3.016 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.016 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796v8.437C19.612 23.089 24 18.098 24 12.073z" />
      </svg>
    ),
  },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
];

/**
 * Minimalist footer with social links, newsletter signup & legal links.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-fog py-12 text-white/70 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
          {/* ── Brand & social ── */}
          <div>
            <p className="font-serif text-2xl font-bold tracking-wide text-white">
              WILDPULSE
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Luxury photographic safaris in the heart of Namibia. Capturing
              Africa&apos;s most extraordinary light since 2016.
            </p>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-ochre hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Newsletter ── */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Travel Inspiration
            </h4>
            <p className="mt-3 text-sm leading-relaxed">
              Subscribe for behind-the-lens stories, seasonal photography tips
              and exclusive early-access offers.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 rounded-full bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/20 transition-all focus:ring-ochre"
              />
              <button
                type="submit"
                className="rounded-full bg-ochre px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ochre-light"
              >
                {subscribed ? "Sent ✓" : "Join"}
              </button>
            </form>
          </div>

          {/* ── Quick links ── */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm md:text-right">
              <li>
                <a href="#destinations" className="transition-colors hover:text-ochre-light">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#advantages" className="transition-colors hover:text-ochre-light">
                  Our Guides
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-ochre-light">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#book" className="transition-colors hover:text-ochre-light">
                  Book a Tour
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs sm:mt-14 sm:flex-row sm:justify-between sm:pt-8">
          <p className="text-center">&copy; {new Date().getFullYear()} Wildpulse Photographic Tours. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-ochre-light"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
