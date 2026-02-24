"use client";

import Image from "next/image";

export default function Founder() {
  return (
    <section id="about" className="bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Eyebrow */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d9b76]">
          About Us
        </p>
        <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "#C4783A" }}>
          The heart behind Bloom & Grow
        </h2>

        <div className="mt-8 flex flex-col items-start gap-8 md:flex-row md:items-center">
          {/* Photo */}
          <div className="relative shrink-0 overflow-hidden rounded-2xl shadow-md"
            style={{ aspectRatio: "3/4", width: "100%", maxWidth: 240 }}>
            <Image
              src="/images/founder.jpg"
              alt="Carol and Pooja, co-founders of Bloom & Grow"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 240px"
              priority
            />
            {/* Name tag overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
              <p className="text-base font-bold text-white">Carol & Pooja</p>
              <p className="text-xs text-white/80">Co-founders, Bloom & Grow</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="space-y-4 text-base leading-relaxed text-[#6b7280]">
              <p>
                Bloom & Grow was born from a simple belief: the best team experiences
                aren&apos;t just fun — they&apos;re meaningful. We started in 2013 with a
                single workshop in Bangalore, and discovered something powerful along the
                way. When people create together, they connect differently.
              </p>
              <p>
                Today we work with teams across 20+ cities, designing experiences that
                range from canvas painting to terrarium building, festival celebrations to
                mindful art sessions — all guided by the same principle: make it personal,
                make it memorable, make it something people talk about long after.
              </p>
              <p className="font-medium" style={{ color: "#2C2C2C" }}>
                If you can&apos;t imagine your team doing something creative together —
                you&apos;re exactly who we designed this for.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
