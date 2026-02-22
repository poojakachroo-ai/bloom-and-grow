import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Building & Corporate Events | Bloom & Grow",
  description:
    "Hands-on collaborative experiences that spark creativity and build real connections. Canvas art, mural painting, perfume blending, origami and more — for teams in Bangalore.",
};

const activities = [
  {
    image: "/images/tb-painting.jpg",
    title: "Canvas Painting Sessions",
    description:
      "No experience needed. We guide your team step-by-step to create their own canvas masterpiece — a colourful, energising session that sparks creativity and friendly competition.",
  },
  {
    image: "/images/tb-perfume.jpg",
    title: "Perfume Blending Workshop",
    description:
      "Participants explore fragrance notes and blend their own signature scent to take home. Intimate, sensory, and deeply personal — a conversation starter long after the event.",
  },
  {
    image: "/images/tb-origami.jpg",
    title: "Origami & Paper Craft",
    description:
      "A mindful, hands-on activity where teams fold, create, and collaborate. Great for all ages and group sizes — and a perfect icebreaker for mixed teams.",
  },
];

const highlights = [
  "Mural Painting",
  "Canvas Art",
  "Perfume Blending",
  "Origami & Paper Craft",
  "Collaborative Installations",
  "Sketch & Doodle Sessions",
];

export default function TeamBuildingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C]">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/tb-painting.jpg"
          alt="Team building canvas painting session"
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
            Team Building &amp; Corporate Events
          </p>
          <h1 className="mt-2 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Where Co-creation Brings Teams Together
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#C4783A" }}>
          Experiences your team will actually remember
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#6b7280]">
          We design hands-on, collaborative workshops that go beyond the typical offsite. Whether
          it&apos;s painting, crafting, or blending perfumes — every activity is structured to spark
          conversation, build trust, and send people home with something they made themselves.
        </p>
        {/* Highlight pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h}
              className="rounded-full px-3 py-1 text-sm font-medium text-white"
              style={{ backgroundColor: "#1d9b76" }}
            >
              {h}
            </span>
          ))}
        </div>
      </section>

      {/* Activities */}
      <section className="bg-white px-4 py-10 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-xl font-bold md:text-2xl" style={{ color: "#C4783A" }}>
            Popular Activities
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

      <CallToAction />
      <Footer />
    </div>
  );
}
