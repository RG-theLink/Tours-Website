import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

/* ── Itinerary data ── */
const ITINERARIES = [
  {
    id: "sossusvlei",
    title: "Dunes & Dead Trees",
    subtitle: "Sossusvlei · Deadvlei · Sesriem Canyon",
    duration: "5 Days / 4 Nights",
    price: "From $4,200",
    groupSize: "Max 6 guests",
    highlights: [
      "First-light access to Dune 45 & Big Daddy",
      "Golden-hour shoot inside Deadvlei's clay pan",
      "Astrophotography session under Namib dark skies",
      "Sesriem Canyon sunrise & desert-adapted wildlife",
    ],
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
  },
  {
    id: "etosha",
    title: "Predators & Plains",
    subtitle: "Etosha National Park · Ongava Reserve",
    duration: "7 Days / 6 Nights",
    price: "From $5,800",
    groupSize: "Max 4 guests",
    highlights: [
      "Three waterhole hides with bean-bag mounts",
      "Night-lit waterhole photography at Okaukuejo",
      "Big-cat tracking at dawn with expert trackers",
      "Flamingo flocks on Fischer's Pan salt flats",
    ],
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    badge: "Best Wildlife",
  },
  {
    id: "skeleton",
    title: "Fog, Sand & Shipwrecks",
    subtitle: "Skeleton Coast · Damaraland · Twyfelfontein",
    duration: "6 Days / 5 Nights",
    price: "From $5,100",
    groupSize: "Max 5 guests",
    highlights: [
      "Aerial shoot over the Skeleton Coast shipwrecks",
      "Desert-adapted elephants at Hoanib River",
      "Ancient rock engravings at Twyfelfontein",
      "Coastal fog & seal colony at Cape Cross",
    ],
    image:
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=800&q=80",
    badge: null,
  },
  {
    id: "ultimate",
    title: "The Ultimate Namibia",
    subtitle: "Sossusvlei · Etosha · Skeleton Coast · Spitzkoppe",
    duration: "14 Days / 13 Nights",
    price: "From $9,500",
    groupSize: "Max 4 guests",
    highlights: [
      "Every iconic location in one grand expedition",
      "Private charter flights between regions",
      "Dedicated 1-on-1 photography mentor",
      "Luxury lodges & exclusive wilderness camps",
    ],
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=800&q=80",
    badge: "Grand Tour",
  },
];

/**
 * Itineraries section – showcases tour packages with imagery,
 * day counts, pricing, highlights and CTAs.
 */
export default function Itineraries() {
  return (
    <section id="itineraries" className="bg-clay py-14 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ── Section heading ── */}
        <ScrollReveal className="mb-10 text-center sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-ochre sm:text-sm">
            Our Expeditions
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-fog sm:mt-3 sm:text-4xl md:text-5xl">
            Curated Photographic Itineraries
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-fog-light sm:mt-4 sm:text-lg">
            Each expedition is meticulously crafted around the best light,
            the most dramatic landscapes, and intimate wildlife encounters.
          </p>
        </ScrollReveal>

        {/* ── Itinerary cards ── */}
        <div className="space-y-6 sm:space-y-10">
          {ITINERARIES.map((tour, idx) => (
            <ScrollReveal key={tour.id}>
              <div
                className={`group overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl lg:flex ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* ── Image side ── */}
                <div className="relative h-52 shrink-0 overflow-hidden sm:h-72 md:h-80 lg:h-auto lg:w-[45%]">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />

                  {/* Badge */}
                  {tour.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-ochre px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      {tour.badge}
                    </span>
                  )}
                </div>

                {/* ── Details side ── */}
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-8 lg:p-12">
                  {/* Meta chips */}
                  <div className="mb-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-clay px-3 py-1 text-xs font-medium text-fog">
                      <svg className="h-3.5 w-3.5 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-clay px-3 py-1 text-xs font-medium text-fog">
                      <svg className="h-3.5 w-3.5 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-4a4 4 0 10-8 0 4 4 0 008 0zm6 0a4 4 0 10-8 0 4 4 0 008 0z" />
                      </svg>
                      {tour.groupSize}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-ochre">
                    {tour.subtitle}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-fog sm:text-3xl">
                    {tour.title}
                  </h3>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2.5">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-fog-light">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-ochre" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-2xl font-bold text-fog">{tour.price}</p>
                      <p className="text-xs text-fog-light">per person · all-inclusive</p>
                    </div>
                    <a
                      href="#book"
                      className="inline-block rounded-full bg-ochre px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest text-white shadow transition-all duration-300 hover:bg-ochre-dark hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Reserve This Trip
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
