"use client";

import { content } from "../../content";

export default function Services() {
  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16">
      <div className="px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold text-[#2C2C2C] sm:text-3xl">
          What we do
        </h2>
        <div className="flex flex-col gap-6">
          {content.services.map((service) => (
            <a
              key={service.slug}
              href="#"
              className="group relative block min-h-[200px] w-full overflow-hidden rounded-xl sm:min-h-[240px]"
              aria-label={service.title}
            >
              {/* Placeholder gray background */}
              <div
                className="absolute inset-0 bg-[#9ca3af]"
                aria-hidden
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/55"
                aria-hidden
              />
              <div className="relative flex h-full min-h-[200px] flex-col justify-end p-5 text-white sm:min-h-[240px] sm:p-6">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/95 sm:text-base">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
