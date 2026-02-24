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
          className="mt-8 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "#C4783A", color: "white" }}
        >
          {/* WhatsApp icon */}
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
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
