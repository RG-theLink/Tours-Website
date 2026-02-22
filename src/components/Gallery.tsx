import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

/* ── Gallery items – photos interspersed with testimonials ── */
type GalleryItem =
  | { type: "photo"; src: string; alt: string; tall?: boolean }
  | { type: "testimonial"; quote: string; author: string; location: string };

const ITEMS: GalleryItem[] = [
  {
    type: "photo",
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80",
    alt: "Golden dunes at sunrise",
    tall: true,
  },
  {
    type: "testimonial",
    quote: "The light at Deadvlei was unlike anything I've ever photographed. Pure magic.",
    author: "Sarah L.",
    location: "London, UK",
  },
  {
    type: "photo",
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
    alt: "Elephants at Etosha waterhole",
  },
  {
    type: "photo",
    src: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=600&q=80",
    alt: "Oryx silhouette at sunset",
    tall: true,
  },
  {
    type: "testimonial",
    quote: "Our guide knew exactly where the cheetahs would be at dawn. We got the cover shot.",
    author: "Marcus W.",
    location: "Melbourne, AU",
  },
  {
    type: "photo",
    src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=600&q=80",
    alt: "Skeleton Coast shipwreck in mist",
  },
  {
    type: "photo",
    src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80",
    alt: "Deadvlei dead trees at golden hour",
  },
  {
    type: "testimonial",
    quote: "I came home with a 20-print gallery show. Wildpulse turned my hobby into art.",
    author: "Kenji T.",
    location: "Tokyo, JP",
  },
  {
    type: "photo",
    src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=600&q=80",
    alt: "Wildlife in Etosha",
    tall: true,
  },
];

/**
 * Masonry-style gallery grid mixing stunning "guest photos"
 * with short, impactful testimonials about the lighting & wildlife.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-14 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ── Section heading ── */}
        <ScrollReveal className="mb-10 text-center sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-ochre sm:text-sm">
            Through Their Lenses
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-fog sm:mt-3 sm:text-4xl md:text-5xl">
            Guest Gallery &amp; Stories
          </h2>
        </ScrollReveal>

        {/* ── Masonry grid ── */}
        <ScrollReveal>
          <div className="masonry">
            {ITEMS.map((item, i) =>
              item.type === "photo" ? (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-xl ${
                    item.tall ? "h-56 sm:h-80 md:h-96" : "h-40 sm:h-52 md:h-64"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                </div>
              ) : (
                <div
                  key={i}
                  className="flex flex-col justify-center rounded-xl bg-clay p-6 sm:p-8"
                >
                  <svg
                    className="mb-3 h-6 w-6 text-ochre/50"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.3 5.2C9 5.8 7.4 8 7.4 10.6c0 3 2.4 5.4 5.4 5.4h.2c-.8 1.6-2.3 2.8-4.2 3.2l.6 1.6c3.2-.8 5.6-3.6 5.6-7V10c0-2.6-1.8-4.8-4-4.8h.3zm-8 0C1 5.8-.6 8-.6 10.6c0 3 2.4 5.4 5.4 5.4h.2c-.8 1.6-2.3 2.8-4.2 3.2L1.4 21c3.2-.8 5.6-3.6 5.6-7V10c0-2.6-1.8-4.8-4-4.8h.3z" />
                  </svg>
                  <blockquote className="font-serif text-base italic leading-relaxed text-fog sm:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm font-semibold text-ochre">
                    {item.author}
                  </p>
                  <p className="text-xs text-fog-light">{item.location}</p>
                </div>
              )
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
