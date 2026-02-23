"use client";

import { useState, useCallback } from "react";
import { content } from "../../content";

const SWIPE_THRESHOLD = 50;
const testimonials = content.testimonials;

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="#C4783A">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PolaroidCard({
  quote,
  author,
  company,
  rotation,
}: {
  quote: string;
  author: string;
  company: string;
  rotation: number;
}) {
  return (
    <article
      className="flex flex-col bg-white p-4 pb-6 shadow-lg"
      style={{
        transform: `rotate(${rotation}deg)`,
        maxWidth: 280,
      }}
    >
      {/* Polaroid photo area */}
      <div
        className="mb-4 h-36 w-full"
        style={{ backgroundColor: "#f0ebe3" }}
        aria-hidden
      >
        <div className="flex h-full items-center justify-center">
          <span
            className="font-serif text-7xl leading-none"
            style={{ color: "#C4783A", fontFamily: "Georgia, serif" }}
          >
            &ldquo;
          </span>
        </div>
      </div>

      <StarRating />
      <blockquote className="mt-3 flex-1">
        <p className="text-sm italic leading-relaxed text-[#2C2C2C]">{quote}</p>
      </blockquote>
      <footer className="mt-4">
        <p className="text-sm font-bold text-[#2C2C2C]">{author}</p>
        <p className="text-xs" style={{ color: "#1d9b76" }}>
          {company}
        </p>
      </footer>
    </article>
  );
}

const rotations = [-2, 1, -1.5];

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
    <section className="px-4 py-14" style={{ backgroundColor: "#C4783A" }}>
      <h2 className="mb-2 text-center text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
        What Our Clients Say
      </h2>
      <p className="mb-12 text-center text-sm text-white/80">
        Real experiences from real teams
      </p>

      {/* Mobile: single card swipeable */}
      <div
        className="md:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, width: "100%" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full shrink-0 flex justify-center px-4"
              >
                <PolaroidCard
                  quote={t.quote}
                  author={t.author}
                  company={t.company}
                  rotation={rotations[i % rotations.length]}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
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

      {/* Desktop: scattered polaroid layout */}
      <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-12 md:px-8">
        {testimonials.map((t, i) => (
          <PolaroidCard
            key={i}
            quote={t.quote}
            author={t.author}
            company={t.company}
            rotation={rotations[i % rotations.length]}
          />
        ))}
      </div>
    </section>
  );
}
