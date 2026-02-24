"use client";

const cases = [
  {
    company: "A global tech firm",
    logo: "/images/clients/google.svg",
    tag: "Team Building",
    tagColor: "#1d9b76",
    headline: "300 engineers, one canvas, zero experience needed",
    outcome: "98% participation. A 10-metre mural that now hangs in their Bangalore lobby.",
  },
  {
    company: "A leading FMCG brand",
    logo: "/images/clients/walmart.svg",
    tag: "Festival Event",
    tagColor: "#C4783A",
    headline: "Diwali done differently — 5 cities, one weekend",
    outcome: "Tie-dye kits, live facilitation, and a team that finally felt like one.",
  },
  {
    company: "A top-4 consulting firm",
    logo: "/images/clients/deloitte.svg",
    tag: "Wellness & CSR",
    tagColor: "#1d9b76",
    headline: "Terrarium workshops that became a quarterly ritual",
    outcome: "What started as a one-off became their most-anticipated event of the year.",
  },
  {
    company: "A fintech unicorn",
    logo: "/images/clients/intuit.svg",
    tag: "Corporate Gifting",
    tagColor: "#C4783A",
    headline: "2,000 custom art kits shipped in 10 days",
    outcome: "Branded keepsakes that felt personal, not corporate. Every one handmade.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#FAF7F2] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* Heading row */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d9b76]">
              Client Stories
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "#C4783A" }}>
              Work we're proud of
            </h2>
          </div>
          <p className="hidden text-sm text-[#6b7280] sm:block">
            Real briefs. Real teams. Real outcomes.
          </p>
        </div>

        {/* 4-col grid on desktop, 2-col on tablet, scroll on mobile */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {cases.map((c) => (
              <article
                key={c.headline}
                className="flex flex-col rounded-xl p-4"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(196,120,58,0.12)",
                }}
              >
                {/* Tag */}
                <span
                  className="mb-3 inline-block self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                  style={{ backgroundColor: c.tagColor }}
                >
                  {c.tag}
                </span>

                {/* Headline */}
                <h3
                  className="mb-2 text-sm font-bold leading-snug"
                  style={{ color: "#2C2C2C" }}
                >
                  {c.headline}
                </h3>

                {/* Outcome */}
                <p className="flex-1 text-xs leading-relaxed text-[#6b7280]">
                  {c.outcome}
                </p>

                {/* Footer */}
                <div
                  className="mt-4 flex items-center gap-2 border-t pt-3"
                  style={{ borderColor: "rgba(196,120,58,0.1)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.logo}
                    alt={c.company}
                    className="h-4 w-auto object-contain opacity-50"
                    style={{ maxWidth: 56 }}
                  />
                  <span className="text-[10px] text-[#9ca3af]">{c.company}</span>
                </div>
              </article>
            ))}
        </div>

      </div>
    </section>
  );
}
