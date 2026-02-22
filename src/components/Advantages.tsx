import ScrollReveal from "./ScrollReveal";

/* ── Feature data ── */
const FEATURES = [
  {
    title: "Golden Hour Access",
    description:
      "We time every excursion to the magic hours — first light spilling over Sossusvlei's towering dunes and the burnished twilight falling across Etosha's salt pans.",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="24" cy="24" r="8" />
        <path d="M24 4v4M24 40v4M4 24h4M40 24h4M9.86 9.86l2.83 2.83M35.31 35.31l2.83 2.83M9.86 38.14l2.83-2.83M35.31 12.69l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Expert Photographer Guides",
    description:
      "Learn from award-winning wildlife and landscape photographers who know exactly where the light, composition and subjects align for that once-in-a-lifetime shot.",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="6" y="14" width="36" height="24" rx="3" />
        <circle cx="24" cy="26" r="7" />
        <circle cx="24" cy="26" r="3" />
        <path d="M16 14l2-4h12l2 4" />
      </svg>
    ),
  },
  {
    title: "Custom 4×4 Safari Vehicles",
    description:
      "Our specially modified Land Cruisers feature pop-top roofs, bean-bag mounts and charging stations — everything you need to shoot in rugged comfort.",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6 32h36M10 32V20a2 2 0 012-2h8l4-4h6a2 2 0 012 2v16M6 32a4 4 0 108 0M34 32a4 4 0 108 0" />
        <circle cx="10" cy="32" r="3" />
        <circle cx="38" cy="32" r="3" />
      </svg>
    ),
  },
];

/**
 * "The Wildpulse Advantage" — 3-column feature grid
 * with minimalist icons and descriptive copy.
 */
export default function Advantages() {
  return (
    <section id="advantages" className="bg-white py-14 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ── Section heading ── */}
        <ScrollReveal className="mb-10 text-center sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-ochre sm:text-sm">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-fog sm:mt-3 sm:text-4xl md:text-5xl">
            The Wildpulse Advantage
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-fog-light sm:mt-4 sm:text-lg">
            Every detail is crafted to place you in the right light, at the
            right moment, with the right tools.
          </p>
        </ScrollReveal>

        {/* ── Feature cards ── */}
        <ScrollReveal stagger className="grid gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-clay-dark bg-clay/60 p-5 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-ochre/10 text-ochre transition-colors group-hover:bg-ochre group-hover:text-white">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-fog">
                {f.title}
              </h3>
              <p className="mt-3 leading-relaxed text-fog-light">{f.description}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
