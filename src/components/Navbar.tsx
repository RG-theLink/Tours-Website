"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Destinations", href: "#destinations" },
  { label: "Our Guides", href: "#advantages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book a Tour", href: "#book" },
];

/**
 * Sticky navigation bar.
 * – Transparent with white text on load.
 * – Solid cream/blurred background after scrolling past 80 px.
 * – Mobile hamburger menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-clay/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4 lg:px-10">
        {/* ── Logo ── */}
        <a
          href="#"
          className={`font-serif text-xl font-bold tracking-wide transition-colors duration-300 sm:text-2xl ${
            scrolled ? "text-fog" : "text-white"
          }`}
        >
          WILDPULSE
        </a>

        {/* ── Desktop links ── */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-ochre ${
                  scrolled ? "text-fog" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className={`relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden`}
        >
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-300 ${
              menuOpen
                ? "translate-y-2 rotate-45 bg-fog"
                : scrolled
                ? "bg-fog"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-300 ${
              menuOpen
                ? "opacity-0"
                : scrolled
                ? "bg-fog"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-300 ${
              menuOpen
                ? "-translate-y-2 -rotate-45 bg-fog"
                : scrolled
                ? "bg-fog"
                : "bg-white"
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile overlay menu ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-clay/95 backdrop-blur-lg transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-3xl font-semibold text-fog transition-colors hover:text-ochre"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
