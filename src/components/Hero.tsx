"use client";

import Image from "next/image";

/**
 * Full-screen hero section with dramatic Namibian dune imagery,
 * headline, subheadline and CTA.  A subtle parallax scroll effect
 * is achieved with a CSS `object-position` shift via `will-change`.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* ── Background image ── */}
      <Image
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=80"
        alt="Red sand dunes of Sossusvlei at golden hour"
        fill
        priority
        className="object-cover object-center scale-105 motion-safe:animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
        sizes="100vw"
      />

      {/* ── Dark overlay gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
        <h1 className="font-serif text-[2.25rem] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-[fade-in-up_1s_ease-out_both]">
          Chase the Light
          <br />
          <span className="text-ochre-light">in Namibia.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-xl animate-[fade-in-up_1s_ease-out_0.3s_both]">
          Exclusive photographic expeditions designed to capture the wild,
          untamed beauty of Africa.
        </p>

        <a
          href="#destinations"
          className="mt-8 inline-block rounded-full bg-ochre px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-ochre-dark hover:shadow-xl hover:-translate-y-0.5 sm:mt-10 sm:px-10 sm:py-4 sm:tracking-widest animate-[fade-in-up_1s_ease-out_0.6s_both]"
        >
          Explore Expeditions
        </a>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-8 w-8 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>

      {/* ── Keyframes injected via style tag (scoped to hero) ── */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slow-zoom {
          from {
            transform: scale(1.0);
          }
          to {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}
