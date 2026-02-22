"use client";

import { useState, useCallback } from "react";
import { content } from "../../content";

const SWIPE_THRESHOLD = 50;
const testimonials = content.testimonials;

function TestimonialCard({
  quote,
  author,
  company,
}: {
  quote: string;
  author: string;
  company: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6">
      <span
        className="font-serif text-6xl leading-none"
        style={{ color: "#C4783A", fontFamily: "Georgia, serif" }}
        aria-hidden
      >
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1">
        <p
          className="text-base italic leading-relaxed"
          style={{ color: "#2C2C2C" }}
        >
          {quote}
        </p>
      </blockquote>
      <div
        className="my-4 h-px w-full shrink-0"
        style={{ backgroundColor: "#1d9b76" }}
        aria-hidden
      />
      <footer className="shrink-0">
        <p className="text-sm font-bold text-[#2C2C2C]">{author}</p>
        <p className="text-sm" style={{ color: "#1d9b76" }}>
          {company}
        </p>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
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

  return (
    <section
      className="px-4 py-10"
      style={{ backgroundColor: "#C4783A" }}
    >
      <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
        What Our Clients Say
      </h2>

      {/* Mobile: single card, swipeable */}
      <div
        className="md:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full shrink-0 px-1"
              >
                <TestimonialCard
                  quote={t.quote}
                  author={t.author}
                  company={t.company}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className="h-2 w-2 rounded-full transition"
              style={{
                backgroundColor: i === currentIndex ? "white" : "rgba(255,255,255,0.5)",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: 3 cards in a row */}
      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            quote={t.quote}
            author={t.author}
            company={t.company}
          />
        ))}
      </div>
    </section>
  );
}
