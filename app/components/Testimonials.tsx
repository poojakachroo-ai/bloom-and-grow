"use client";

import { content } from "../../content";

export default function Testimonials() {
  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16">
      <div className="px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold text-[#2C2C2C] sm:text-3xl">
          What people say
        </h2>
        <div className="flex flex-col gap-6">
          {content.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#FAF7F2] p-5 shadow-sm ring-1 ring-[#2C2C2C]/10 sm:p-6"
            >
              <blockquote className="text-[#2C2C2C]">
                <p className="text-base leading-relaxed sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-[#2C2C2C]">
                    {testimonial.author}
                  </span>
                  <span className="text-[#2C2C2C]/70"> — {testimonial.company}</span>
                </cite>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
