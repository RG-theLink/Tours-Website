import ScrollReveal from "./ScrollReveal";

/**
 * Pre-footer call-to-action with warm ochre background.
 */
export default function PreFooterCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-ochre py-24 lg:py-32"
    >
      {/* Decorative grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Capture
            <br />
            the Magic?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Limited expeditions depart monthly during Namibia&apos;s prime
            photographic season. Secure your seat before the light fades.
          </p>
          <a
            href="#book"
            className="mt-10 inline-block rounded-full border-2 border-white bg-white px-10 py-4 text-sm font-semibold uppercase tracking-widest text-ochre shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:-translate-y-0.5"
          >
            Start Your Booking
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
