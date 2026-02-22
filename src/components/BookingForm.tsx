"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const TOUR_OPTIONS = [
  "Dunes & Dead Trees — 5 Days",
  "Predators & Plains — 7 Days",
  "Fog, Sand & Shipwrecks — 6 Days",
  "The Ultimate Namibia — 14 Days",
];

const MONTHS = [
  "March 2026",
  "April 2026",
  "May 2026",
  "June 2026",
  "July 2026",
  "August 2026",
  "September 2026",
  "October 2026",
];

/**
 * Booking enquiry form with tour selection, date picker,
 * guest details and a prominent CTA.
 */
export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative overflow-hidden bg-fog py-14 sm:py-20 lg:py-32">
      {/* Decorative background image */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=30")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="lg:flex lg:gap-16">
          {/* ── Left — copy ── */}
          <ScrollReveal className="mb-12 lg:mb-0 lg:w-5/12 lg:flex lg:flex-col lg:justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-ochre">
              Start Your Journey
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-white sm:mt-3 sm:text-4xl md:text-5xl">
              Ready to Capture
              <br />
              the Magic?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
              Fill in the form and our expedition team will craft a personalised
              itinerary within 24 hours. Limited departures — secure your spot
              before it&apos;s gone.
            </p>

            {/* Trust indicators */}
            <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-10 sm:gap-6">
              {[
                { value: "500+", label: "Guests hosted" },
                { value: "98%", label: "Would return" },
                { value: "10yr", label: "Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-serif text-2xl font-bold text-ochre sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] text-white/50 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Right — form ── */}
          <ScrollReveal className="lg:w-7/12">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white/[0.06] p-12 text-center backdrop-blur-sm ring-1 ring-white/10">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-ochre/20">
                  <svg className="h-10 w-10 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl font-bold text-white">
                  Enquiry Received!
                </h3>
                <p className="mt-3 max-w-md text-white/60">
                  Our expedition team will be in touch within 24 hours with a
                  personalised itinerary and availability.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/[0.06] p-5 backdrop-blur-sm ring-1 ring-white/10 sm:rounded-3xl sm:p-8 md:p-10 lg:p-12"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/50">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl bg-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition-all focus:ring-ochre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/50">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-xl bg-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition-all focus:ring-ochre"
                    />
                  </div>

                  {/* Tour select */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/50">
                      Expedition
                    </label>
                    <select
                      required
                      className="w-full appearance-none rounded-xl bg-white/[0.08] px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 transition-all focus:ring-ochre"
                    >
                      <option value="" className="text-fog">
                        Select a tour…
                      </option>
                      {TOUR_OPTIONS.map((t) => (
                        <option key={t} value={t} className="text-fog">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Month select */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/50">
                      Preferred Month
                    </label>
                    <select
                      required
                      className="w-full appearance-none rounded-xl bg-white/[0.08] px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 transition-all focus:ring-ochre"
                    >
                      <option value="" className="text-fog">
                        Choose a month…
                      </option>
                      {MONTHS.map((m) => (
                        <option key={m} value={m} className="text-fog">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Group size */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/50">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={8}
                      required
                      placeholder="2"
                      className="w-full rounded-xl bg-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition-all focus:ring-ochre"
                    />
                  </div>

                  {/* Photography level */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/50">
                      Photography Level
                    </label>
                    <select
                      className="w-full appearance-none rounded-xl bg-white/[0.08] px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 transition-all focus:ring-ochre"
                    >
                      <option value="beginner" className="text-fog">Beginner</option>
                      <option value="intermediate" className="text-fog">Intermediate</option>
                      <option value="advanced" className="text-fog">Advanced</option>
                      <option value="professional" className="text-fog">Professional</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/50">
                    Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your photography goals, gear you'll bring, dietary needs…"
                    className="w-full resize-none rounded-xl bg-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition-all focus:ring-ochre"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-full bg-ochre py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-ochre-light hover:shadow-xl hover:-translate-y-0.5 sm:w-auto sm:px-14"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
