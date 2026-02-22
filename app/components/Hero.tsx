"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero2.jpg",
    headline: "Where Co-creation Brings Teams Together",
    subtext: "Team Building & Corporate Events",
  },
  {
    image: "/images/hero3.jpg",
    headline: "Unforgettable Team Experiences, Beautifully Crafted",
    subtext: "Festivals · Women's Day · Diwali · Christmas",
  },
  {
    image: "/images/hero1.jpg",
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
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover object-center"
          priority={currentIndex === 0}
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
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

      {/* Content block: subtext → headline → dots (order top to bottom), well above browser chrome */}
      <div
        className="absolute bottom-24 left-0 right-0 z-10 flex flex-col gap-4 px-4 md:px-8"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
      >
        <p
          className="text-xs font-medium uppercase tracking-widest md:text-sm"
          style={{ color: "#1d9b76" }}
        >
          {slide.subtext}
        </p>
        <h1 className="max-w-2xl text-2xl font-bold leading-tight text-white line-clamp-2 sm:text-3xl md:text-4xl lg:text-5xl">
          {slide.headline}
        </h1>
        {/* Dot indicators - below headline */}
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className="h-2 w-2 rounded-full transition md:h-2.5 md:w-2.5"
              style={{
                backgroundColor: i === currentIndex ? "white" : "rgba(255,255,255,0.5)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
