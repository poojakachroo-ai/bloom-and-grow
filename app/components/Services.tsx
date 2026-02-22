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
    link: "#",
  },
  {
    title: "Festival & Theme-Based Activities",
    description:
      "Make every celebration meaningful and participative. We design creative experiences around Diwali, Christmas, Women's Day, Independence Day and more — tailored to your team size and culture.",
    highlights: ["Diwali", "Christmas", "Women's Day", "Independence Day"],
    image: "/images/hero3.jpg",
    link: "#",
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
    link: "#",
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
  },
];

export default function Services() {
  return (
    <section className="bg-[#FAF7F2] py-8">
      <div className="px-4 sm:px-6">
        <h2
          className="mx-auto max-w-max border-b border-[#1d9b76] mb-4 pb-1 text-2xl font-bold sm:text-3xl"
          style={{ color: "#C4783A" }}
        >
          What We Do
        </h2>
        <p className="mx-auto mt-3 text-center text-base text-[#6b7280]">
          Experiential activities that bring teams together
        </p>
        <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative h-[400px] w-full overflow-hidden rounded-xl"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                }}
                aria-hidden
              />
              {/* Card content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">
                  {service.description}
                </p>
                {/* Highlight pills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full px-2.5 py-1 text-xs font-medium text-white"
                      style={{ backgroundColor: "#1d9b76" }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <a
                  href={service.link}
                  className="mt-3 self-end text-xs font-medium"
                  style={{ color: "#1d9b76" }}
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
