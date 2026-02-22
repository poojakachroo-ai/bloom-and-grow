"use client";

const stats = [
  { number: "Since 2013", label: "Over a decade of experience" },
  { number: "20+ Cities", label: "Across India" },
  { number: "500+ Events", label: "Delivered" },
];

export default function CredibilityBar() {
  return (
    <section
      className="border-y px-4 py-5"
      style={{ borderColor: "#1d9b76", backgroundColor: "white" }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-[#1d9b76]">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-4 text-center first:pl-0 last:pr-0"
          >
            <span
              className="text-3xl font-bold"
              style={{ color: "#C4783A" }}
            >
              {stat.number}
            </span>
            <span className="mt-1 text-sm text-[#6B7280]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
