"use client";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
        {/* Two speech bubbles — conversation / co-creation */}
        <path
          d="M8 10h20a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H14l-6 4v-4a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z"
          stroke="#C4783A" strokeWidth="2" strokeLinejoin="round"
        />
        <path
          d="M20 26v2a3 3 0 0 0 3 3h8l6 4v-4a3 3 0 0 0 3-3V18a3 3 0 0 0-3-3h-4"
          stroke="#1d9b76" strokeWidth="2" strokeLinejoin="round" strokeDasharray="3 2"
        />
        <circle cx="14" cy="17" r="1.5" fill="#C4783A" />
        <circle cx="19" cy="17" r="1.5" fill="#C4783A" />
        <circle cx="24" cy="17" r="1.5" fill="#C4783A" />
      </svg>
    ),
    heading: "We start by listening",
    body: "Every brief is different. We work closely with you to understand your people, your goals, and what success looks like — because no two events should feel the same.",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
        {/* Paintbrush + sparkle — expert design */}
        <path
          d="M10 38 L28 12"
          stroke="#C4783A" strokeWidth="3" strokeLinecap="round"
        />
        <path
          d="M28 12 C32 7 40 9 38 16 C36 20 30 19 28 12z"
          stroke="#C4783A" strokeWidth="2" fill="none" strokeLinejoin="round"
        />
        <path
          d="M7 38 C7 35 13 34 13 38 C13 41 7 41 7 38z"
          stroke="#1d9b76" strokeWidth="2" fill="none"
        />
        {/* Sparkles */}
        <path d="M35 28 L35 32 M33 30 L37 30" stroke="#1d9b76" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M40 20 L40 23 M38.5 21.5 L41.5 21.5" stroke="#C4783A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    heading: "Our experts design the experience",
    body: "From the activity format to the facilitation style, every detail is crafted for wide participation, genuine excitement, and a standard of quality that makes the experience feel effortless.",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden>
        {/* Hands holding a framed artwork — everyone leaves with something */}
        <rect x="13" y="10" width="22" height="18" rx="2" stroke="#C4783A" strokeWidth="2" />
        <rect x="16" y="13" width="16" height="12" rx="1" fill="#C4783A" fillOpacity="0.12" stroke="#C4783A" strokeWidth="1" />
        {/* Palette dots inside */}
        <circle cx="20" cy="17" r="1.5" fill="#C4783A" />
        <circle cx="24" cy="20" r="1.5" fill="#1d9b76" />
        <circle cx="28" cy="17" r="1.5" fill="#C4783A" fillOpacity="0.5" />
        {/* Two hands beneath */}
        <path
          d="M10 32 C10 29 14 28 16 30 L16 36 C16 38 10 38 10 36z"
          stroke="#1d9b76" strokeWidth="1.5" fill="none" strokeLinejoin="round"
        />
        <path
          d="M38 32 C38 29 34 28 32 30 L32 36 C32 38 38 38 38 36z"
          stroke="#1d9b76" strokeWidth="1.5" fill="none" strokeLinejoin="round"
        />
      </svg>
    ),
    heading: "Everyone leaves with something they made",
    body: "Not just a memory — a tangible piece they're proud of. Something they made with their own hands, in a room full of colleagues, that didn't exist before they walked in.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#FAF7F2] px-4 py-14 sm:px-6">
      {/* Heading */}
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#1d9b76]">
          Our Approach
        </p>
        <h2
          className="text-center text-2xl font-bold sm:text-3xl"
          style={{ color: "#C4783A" }}
        >
          How it works
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#6b7280]">
          Thoughtful from the first conversation to the last brushstroke.
        </p>
      </div>

      {/* Steps */}
      <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((step, i) => (
          <div key={step.number} className="relative flex flex-col items-start md:items-center md:text-center">
            {/* Connector line between steps (desktop only) */}
            {i < steps.length - 1 && (
              <div
                className="absolute left-6 top-6 hidden h-px md:block"
                style={{
                  right: "-50%",
                  backgroundColor: "#C4783A",
                  opacity: 0.18,
                  left: "calc(50% + 28px)",
                }}
              />
            )}

            {/* Icon bubble */}
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(196,120,58,0.08)", border: "1px solid rgba(196,120,58,0.2)" }}
            >
              {step.icon}
            </div>

            {/* Step number */}
            <p
              className="mt-4 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#C4783A", opacity: 0.5 }}
            >
              Step {step.number}
            </p>

            {/* Heading */}
            <h3
              className="mt-1 text-base font-bold leading-snug"
              style={{ color: "#2C2C2C" }}
            >
              {step.heading}
            </h3>

            {/* Body */}
            <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
