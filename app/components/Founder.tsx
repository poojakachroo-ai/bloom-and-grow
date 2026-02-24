"use client";

import Image from "next/image";

export default function Founder() {
  return (
    <section id="about" className="bg-[#FAF7F2] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start">
        {/* Photo */}
        <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full shadow-lg ring-4 ring-[#1d9b76]/30 md:h-72 md:w-72">
          <Image
            src="/images/hero1.jpg"
            alt="Founder of Bloom & Grow"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 256px, 288px"
          />
        </div>

        {/* Text */}
        <div>
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#1d9b76" }}
          >
            Meet Our Founder
          </p>
          <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#C4783A" }}>
            The Heart Behind Bloom & Grow
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-[#6b7280]">
            <p>
              Bloom & Grow was born from a simple belief: that the best team experiences aren&apos;t
              just fun — they&apos;re meaningful. We started in 2013 with a single workshop in
              Bangalore, and what we discovered was something powerful. When people create together,
              they connect differently.
            </p>
            <p>
              Today we work with teams across 20+ cities, designing experiences that range from
              canvas painting to terrarium building, perfume blending to festival celebrations —
              all guided by the same principle: make it personal, make it memorable, make it
              something people talk about long after the event.
            </p>
            <p>
              If you can&apos;t imagine your team doing something creative together, you&apos;re
              exactly who we designed this for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
