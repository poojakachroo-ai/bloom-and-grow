import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness & CSR Engagement | Bloom & Grow",
  description:
    "Purposeful activities that nurture employee wellbeing and give back to communities. Terrarium building, nature-based workshops, mindful art sessions, and CSR drives — aligned with your company values.",
};

const activities = [
  {
    image: "/images/hero1.jpg",
    title: "Terrarium & Planting Workshops",
    description:
      "Participants build their own terrariums or plant mini-gardens to take home. A calming, hands-on session that connects teams with nature and sparks conversation about sustainability.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Mindful Art & Stress Relief",
    description:
      "Guided dot mandala, zentangle, and intuitive painting sessions designed to slow down the mind, reduce stress, and restore focus. A true reset for busy teams.",
  },
  {
    image: "/images/tb-painting.jpg",
    title: "Go Green & Community Drives",
    description:
      "CSR-aligned activities like tree plantation, upcycling workshops, and community art projects that let your team contribute meaningfully to society while building bonds.",
  },
];

const offerings = [
  "Terrarium Building",
  "Nature Workshops",
  "Go Green Drives",
  "Mindful Art Sessions",
  "Dot Mandala",
  "Zentangle",
  "Upcycling Workshops",
  "Community Art Projects",
  "Holistic Health Sessions",
];

export default function WellnessCsrPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C]">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/hero1.jpg"
          alt="Wellness and CSR engagement activities"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <div className="absolute bottom-8 left-0 right-0 px-4 md:px-8">
          <p
            className="text-xs font-medium uppercase tracking-widest md:text-sm"
            style={{ color: "#1d9b76" }}
          >
            Wellness &amp; CSR Engagement
          </p>
          <h1 className="mt-2 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Green Hands, Happy Teams
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#C4783A" }}>
          Wellbeing that goes beyond the workplace
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#6b7280]">
          Our wellness and CSR experiences are designed with intention — to nurture the whole
          person, foster a culture of care, and connect your organisation to something larger than
          the everyday. Whether it's a mindful art session for stress relief or a community
          planting drive, every experience is rooted in purpose and beautifully facilitated.
        </p>
        {/* Offering pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {offerings.map((o) => (
            <span
              key={o}
              className="rounded-full px-3 py-1 text-sm font-medium text-white"
              style={{ backgroundColor: "#1d9b76" }}
            >
              {o}
            </span>
          ))}
        </div>
      </section>

      {/* Activities */}
      <section className="bg-white px-4 py-10 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-xl font-bold md:text-2xl" style={{ color: "#C4783A" }}>
            Popular Experiences
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {activities.map((activity) => (
              <article key={activity.title} className="overflow-hidden rounded-xl bg-[#FAF7F2]">
                <div className="relative h-56 w-full">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-[#2C2C2C]">{activity.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                    {activity.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h2 className="text-xl font-bold md:text-2xl" style={{ color: "#C4783A" }}>
          What your team takes away
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Reduced Stress",
              body: "Mindful, creative sessions help participants step away from screens and deadlines — returning refreshed and refocused.",
            },
            {
              title: "Deeper Connection",
              body: "Shared experiences in nature or art break down hierarchies and foster genuine human connection across teams.",
            },
            {
              title: "Purposeful Impact",
              body: "CSR activities give employees a sense of contribution — to the environment, to communities, and to something bigger than work.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-5 shadow-sm"
            >
              <h3 className="text-sm font-bold text-[#2C2C2C]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}
