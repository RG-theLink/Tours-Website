import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

/* ── Destination data ── */
const DESTINATIONS = [
  {
    name: "Sossusvlei & Deadvlei",
    tagline: "Towering red dunes & ancient camel-thorn skeletons",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Skeleton Coast",
    tagline: "Shipwrecks, desert-adapted elephants & coastal fog",
    image:
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Etosha National Park",
    tagline: "Wildlife spectacles on shimmering salt-pan horizons",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Spitzkoppe",
    tagline: "Ancient granite peaks under infinite star-filled skies",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=900&q=80",
  },
];

/**
 * Destinations grid with hover-reveal gradient overlay.
 * Image scales up slightly on hover; a dark gradient fades in.
 */
export default function Destinations() {
  return (
    <section id="destinations" className="bg-clay py-14 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ── Section heading ── */}
        <ScrollReveal className="mb-10 text-center sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-ochre sm:text-sm">
            Where We Go
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-fog sm:mt-3 sm:text-4xl md:text-5xl">
            Iconic Namibian Destinations
          </h2>
        </ScrollReveal>

        {/* ── Cards ── */}
        <ScrollReveal stagger className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {DESTINATIONS.map((d) => (
            <div
              key={d.name}
              className="group relative h-56 overflow-hidden rounded-xl sm:h-80 sm:rounded-2xl lg:h-96 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              {/* Gradient overlay — always visible at bottom, intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

              {/* Text content — tagline always visible on mobile (no hover), hidden on desktop until hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 className="font-serif text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {d.name}
                </h3>
                <p className="mt-1.5 max-w-xs text-xs text-white/80 sm:mt-2 sm:text-sm sm:opacity-0 sm:translate-y-2 sm:transition-all sm:duration-500 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                  {d.tagline}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
