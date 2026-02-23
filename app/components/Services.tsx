"use client";

import Image from "next/image";

const services = [
  {
    title: "Team Building & Corporate Events",
    description:
      "Hands-on collaborative experiences that spark creativity and build real connections. From mural painting to canvas art and collaborative installations — activities your team will actually remember.",
    highlights: [
      "Mural Painting",
      "Canvas Art",
      "Collaborative Installations",
      "Sketch & Doodle Sessions",
    ],
    image: "/images/hero2.jpg",
    link: "/services/team-building",
    bg: "#FAF7F2",
  },
  {
    title: "Festival & Theme-Based Activities",
    description:
      "Make every celebration meaningful and participative. We design creative experiences around Diwali, Christmas, Women's Day, Independence Day and more — tailored to your team size and culture.",
    highlights: ["Diwali", "Christmas", "Women's Day", "Independence Day"],
    image: "/images/service-festival.jpg",
    link: "/services/festival-events",
    bg: "#f0ebe3",
  },
  {
    title: "Wellness & CSR Engagement",
    description:
      "Purposeful activities that nurture wellbeing and give back. From terrarium building to nature-based workshops — experiences that align with your company's wellness and CSR goals.",
    highlights: [
      "Terrarium Building",
      "Nature Workshops",
      "Go Green Drives",
      "Mindful Art Sessions",
    ],
    image: "/images/hero1.jpg",
    link: "/services/wellness-csr",
    bg: "#FAF7F2",
  },
  {
    title: "Corporate Gifting & Branded Keepsakes",
    description:
      "Meaningful, handcrafted gifts that leave a lasting impression. From custom art kits to branded wellness hampers — thoughtfully curated for employees, clients, and events.",
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
    <section>
      <div className="px-4 pt-10 pb-4 sm:px-6 bg-[#FAF7F2]">
        <h2
          className="mx-auto max-w-max border-b border-[#1d9b76] mb-2 pb-1 text-2xl font-bold uppercase tracking-wide sm:text-3xl"
          style={{ color: "#C4783A" }}
        >
          What We Do
        </h2>
        <p className="mt-3 text-center text-base text-[#6b7280]">
          Experiential activities that bring teams together
        </p>
      </div>

      {services.map((service, index) => {
        const imageLeft = index % 2 === 0;
        return (
          <div
            key={service.title}
            style={{ backgroundColor: service.bg }}
            className="px-4 py-12 sm:px-6"
          >
            <div
              className={`mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center ${
                imageLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-md md:h-96 md:w-1/2 shrink-0">
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
                  className="text-2xl font-bold leading-snug md:text-3xl"
                  style={{ color: "#C4783A" }}
                >
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#6b7280]">
                  {service.description}
                </p>
                {/* Highlight pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: "#1d9b76" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href={service.link}
                  className="mt-6 inline-block rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#C4783A] hover:text-white"
                  style={{ borderColor: "#C4783A", color: "#C4783A" }}
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
