"use client";

import Image from "next/image";

const services = [
  {
    title: "Team Building & Corporate Events",
    description:
      "Hands-on, guided workshops where your team creates something together — and leaves with something they made themselves. No experience needed, just a willingness to show up and try.",
    highlights: [
      "Canvas Painting",
      "T-Shirt Painting",
      "Pottery",
      "Dot Mandala",
      "String Art",
      "Fluid Art",
      "Tie & Dye",
      "Big Picture Mural",
      "Coaster Painting",
      "Block Printing",
      "Macrame",
      "Sand Art",
    ],
    image: "/images/hero2.jpg",
    link: "/services/team-building",
    bg: "#FAF7F2",
    youtubeLink: "https://www.youtube.com/playlist?list=PLpQYrFNWRFZFGRmTmb2jc6WbO1rAFLLd9",
  },
  {
    title: "Festival & Theme-Based Activities",
    description:
      "Turn every company milestone into a moment people look forward to. We bring the craft, the facilitation, and the energy — you just show up and celebrate.",
    highlights: ["Diwali", "Christmas", "Women's Day", "Independence Day"],
    image: "/images/service-festival.jpg",
    link: "/services/festival-events",
    bg: "#f0ebe3",
  },
  {
    title: "Brand Activation / Customer Engagement",
    description:
      "Creative, hands-on experiences that bring your brand to life. We design interactive activations and engagement activities that connect your brand with customers in meaningful, memorable ways.",
    highlights: [
      "Brand Activation",
      "Product Launch Events",
      "Customer Engagement",
      "Experiential Marketing",
      "Live Art Demonstrations",
      "Interactive Workshops",
    ],
    image: "/images/hero1.jpg",
    link: "/services/brand-activation",
    bg: "#FAF7F2",
  },
  {
    title: "Corporate Gifting & Branded Keepsakes",
    description:
      "Something they'll actually keep. We design gifts that feel personal and considered — not another pen or tote bag, but something made with intention.",
    highlights: [
      "Custom Art Kits",
      "Wellness Hampers",
      "Branded Keepsakes",
      "Bulk Orders",
    ],
    image: "/images/hero3.jpg",
    link: "/services/corporate-gifting",
    bg: "#f0ebe3",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="px-4 pt-14 pb-4 sm:px-6 bg-[#FAF7F2]">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d9b76]">
            What We Do
          </p>
          <h2
            className="text-2xl font-bold sm:text-3xl"
            style={{ color: "#C4783A" }}
          >
            Experiences that bring teams together
          </h2>
          <p className="mt-3 text-base text-[#6b7280]">
            Hands-on, guided activities — designed for everyone in the room.
          </p>
        </div>
      </div>

      {services.map((service, index) => {
        const imageLeft = index % 2 === 0;
        return (
          <div
            key={service.title}
            style={{ backgroundColor: service.bg }}
            className="px-4 py-8 sm:px-6"
          >
            <div
              className={`mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center ${
                imageLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden rounded-xl shadow-sm md:h-96 md:w-1/2 shrink-0" style={{ outline: "1px solid rgba(196,120,58,0.12)" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <h3
                  className="text-xl font-bold leading-snug md:text-2xl"
                  style={{ color: "#C4783A", letterSpacing: "-0.01em" }}
                >
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#6b7280]">
                  {service.description}
                </p>
                {/* Highlights */}
                {service.youtubeLink ? (
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {service.highlights.map((item, i) => (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 text-sm"
                        style={{ color: i % 2 === 0 ? "#1d9b76" : "#C4783A" }}
                      >
                        <span className="text-xs">●</span>
                        {item}
                      </span>
                    ))}
                    <a
                      href={service.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "#FF0000" }}
                    >
                      <span className="text-xs">▶</span>
                      Watch on YouTube
                    </a>
                  </div>
                ) : (
                  <div className="mt-5 flex items-start gap-3">
                    <div className="mt-1.5 h-px w-6 shrink-0" style={{ backgroundColor: "#1d9b76" }} />
                    <p className="text-sm leading-relaxed text-[#6b7280]">
                      {service.highlights.join(" · ")}
                    </p>
                  </div>
                )}
                <a
                  href={service.link}
                  className="mt-6 inline-block rounded-full border-2 border-[#C4783A] px-6 py-2.5 text-sm font-semibold text-[#C4783A] transition-colors hover:bg-[#C4783A] hover:text-white"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
