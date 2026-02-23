"use client";

import Image from "next/image";

const features = [
  {
    image: "/images/hero2.jpg",
    label: "Step-by-Step Guidance",
  },
  {
    image: "/images/service-festival.jpg",
    label: "Beginner Friendly",
  },
  {
    image: "/images/hero1.jpg",
    label: "All Materials Provided",
  },
  {
    image: "/images/hero3.jpg",
    label: "For All Group Sizes",
  },
  {
    image: "/images/tb-painting.jpg",
    label: "Fully Customised",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#FAF7F2] py-14 px-4">
      <h2
        className="mb-2 text-center text-2xl font-bold sm:text-3xl uppercase tracking-wide"
        style={{ color: "#C4783A" }}
      >
        Anyone Can Participate
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-sm text-[#6b7280]">
        We design experiences so engaging that even the most reluctant participant ends up
        creating something they&apos;re proud of.
      </p>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8">
        {features.map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-3" style={{ width: 140 }}>
            <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-md ring-4 ring-white">
              <Image
                src={f.image}
                alt={f.label}
                fill
                className="object-cover object-center"
                sizes="128px"
              />
            </div>
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]">
              {f.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
