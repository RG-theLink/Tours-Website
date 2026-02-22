"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra classes merged onto the wrapper div */
  className?: string;
  /** When true, children animate with staggered delays */
  stagger?: boolean;
}

/**
 * Wraps children in a div that fades-in + slides-up when scrolled into view.
 * Uses IntersectionObserver for performance.
 */
export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}
    >
      {children}
    </div>
  );
}
