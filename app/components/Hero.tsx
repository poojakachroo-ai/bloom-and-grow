"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero-abstract.svg",
    isAbstract: true,
    headline: "Where Co-creation Brings Teams Together",
    subtext: "Team Building & Corporate Events",
  },
  {
    image: "/images/service-festival.jpg",
    isAbstract: false,
    headline: "Unforgettable Team Experiences, Beautifully Crafted",
    subtext: "Festivals · Women's Day · Diwali · Christmas",
  },
  {
    image: "/images/hero1.jpg",
    isAbstract: false,
    headline: "Green Hands, Happy Teams",
    subtext: "Wellness & CSR Engagement",
  },
];

const SWIPE_THRESHOLD = 50;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX === null) return;
      const endX = e.changedTouches[0].clientX;
      const diff = touchStartX - endX;
      if (Math.abs(diff) >= SWIPE_THRESHOLD) {
        if (diff > 0) goNext();
        else goPrev();
      }
      setTouchStartX(null);
    },
    [touchStartX, goNext, goPrev]
  );

  const slide = slides[currentIndex];

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {slide.isAbstract ? (
          /* SVG abstract illustration — rendered as plain img so filters/gradients work */
          <img
            src={slide.image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover object-center"
            priority={currentIndex === 0}
            sizes="100vw"
            quality={90}
          />
        )}
      </div>

      {/* Dark gradient overlay — lighter for the abstract slide (already dark) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: slide.isAbstract
            ? "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%)"
            : "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Desktop arrow buttons */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 md:left-4 md:block"
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 md:right-4 md:block"
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content block — centred vertically in the hero */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 md:px-16">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-widest md:text-sm"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          {slide.subtext}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {slide.headline}
        </h1>
        {/* CTA */}
        <a
          href="https://wa.me/917259280949?text=Hi%2C%20I%27d%20like%20to%20plan%20an%20event%20with%20Bloom%20%26%20Grow"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full px-7 py-3 text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "#C4783A", color: "white" }}
        >
          Connect
        </a>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === currentIndex ? "2rem" : "0.5rem",
                backgroundColor: i === currentIndex ? "white" : "rgba(255,255,255,0.45)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
