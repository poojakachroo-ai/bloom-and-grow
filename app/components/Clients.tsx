"use client";

import { content } from "../../content";

export default function Clients() {
  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16">
      <div className="px-4 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-[#2C2C2C] sm:text-3xl">
          Trusted by
        </h2>
        <div className="-mx-4 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:gap-6 sm:px-6">
          {content.clients.map((client) => (
            <div
              key={client.name}
              className="flex min-w-[140px] flex-shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-[#d1d5db] px-4 py-6 sm:min-w-[160px] sm:py-8"
              title={client.name}
            >
              <span className="text-center text-sm font-medium text-[#4b5563] sm:text-base">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
