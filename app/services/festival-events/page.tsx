import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival & Theme-Based Activities | Bloom & Grow",
  description:
    "Make every celebration meaningful and participative. We design creative experiences around Diwali, Christmas, Women's Day, Independence Day and more — tailored to your team size and culture.",
};

const activities = [
  {
    image: "/images/service-festival.jpg",
    title: "Diwali Celebrations",
    description:
      "Bring the joy of Diwali alive with hands-on diya painting, rangoli making, and festive craft workshops. Meaningful, participative, and perfect for the whole office.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Women's Day Experiences",
    description:
      "Celebrate the women of your organisation with empowering, creative sessions — from expressive art workshops to storytelling circles that honour and inspire.",
  },
  {
    image: "/images/hero1.jpg",
    title: "Independence Day & Republic Day",
    description:
      "Mark national milestones with themed art installations, collaborative murals, and creative activities that build pride and collective identity.",
  },
];

const festivals = [
  "Diwali",
  "Christmas",
  "Women's Day",
  "Independence Day",
  "Republic Day",
  "Holi",
  "Eid",
  "Environment Day",
  "Children's Day",
  "Custom Themes",
];

export default function FestivalEventsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C]">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/service-festival.jpg"
          alt="Festival and theme-based activities"
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
            Festival &amp; Theme-Based Activities
          </p>
          <h1 className="mt-2 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Celebrate Every Moment, Meaningfully
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#C4783A" }}>
          Festivities your entire team participates in
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#6b7280]">
          We believe every celebration is an opportunity to bring people closer. Our festival
          and theme-based experiences go beyond decorations — they invite your team to create,
          reflect, and connect through hands-on, culturally rooted activities tailored to your
          organisation's calendar and values.
        </p>
        {/* Festival pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {festivals.map((f) => (
            <span
              key={f}
              className="rounded-full px-3 py-1 text-sm font-medium text-white"
              style={{ backgroundColor: "#1d9b76" }}
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Activities */}
      <section className="bg-white px-4 py-10 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-xl font-bold md:text-2xl" style={{ color: "#C4783A" }}>
            Popular Celebrations
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

      {/* Why it matters */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h2 className="text-xl font-bold md:text-2xl" style={{ color: "#C4783A" }}>
          Why themed experiences matter
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Cultural Inclusion",
              body: "Acknowledge and honour the diverse traditions within your team, making every employee feel seen and valued.",
            },
            {
              title: "Shared Memory",
              body: "A meaningful celebration creates stories people carry with them — building cohesion far beyond the event itself.",
            },
            {
              title: "Scalable for Any Size",
              body: "From intimate gatherings of 20 to company-wide events of 1000+, we design experiences that work at every scale.",
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
