"use client";

const steps = [
  {
    n: "01",
    heading: "Tell us what you need",
    body: "Share your team size, goals, and occasion. No brief is too vague — we'll ask the right questions.",
  },
  {
    n: "02",
    heading: "We design the experience",
    body: "Our experts craft an activity built for wide participation, genuine excitement and top-quality facilitation.",
  },
  {
    n: "03",
    heading: "Everyone makes something",
    body: "Your team shows up. They create. They leave with something they made with their own hands — and a story to tell.",
  },
];

export default function WhyUs() {
  return (
    <section style={{ backgroundColor: "#1A1A1A" }} className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#C4783A" }}>
            Our Approach
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Simple. Collaborative. Memorable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="relative overflow-hidden rounded-2xl p-7"
              style={{ backgroundColor: "#252525", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Big ghost number */}
              <span
                className="absolute -bottom-4 -right-2 select-none text-8xl font-black leading-none"
                style={{ color: "rgba(255,255,255,0.04)" }}
                aria-hidden
              >
                {step.n}
              </span>

              {/* Step number pill */}
              <span
                className="mb-5 inline-block rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(196,120,58,0.15)", color: "#C4783A" }}
              >
                Step {step.n}
              </span>

              <h3 className="mb-3 text-lg font-bold leading-snug text-white">
                {step.heading}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
