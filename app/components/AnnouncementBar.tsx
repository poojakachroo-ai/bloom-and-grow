"use client";

const items = [
  "Since 2013 — Over a Decade of Experience",
  "500+ Events Delivered Across India",
  "Fully Customised to Your Team & Culture",
];

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#1d9b76] px-4 py-2">
      <div className="mx-auto hidden max-w-5xl grid-cols-3 divide-x divide-white/30 md:grid">
        {items.map((item) => (
          <p
            key={item}
            className="px-4 text-center text-xs font-medium tracking-wide text-white"
          >
            {item}
          </p>
        ))}
      </div>
      {/* Mobile: single item */}
      <p className="text-center text-xs font-medium tracking-wide text-white md:hidden">
        Since 2013 · 500+ Events · 20+ Cities
      </p>
    </div>
  );
}
