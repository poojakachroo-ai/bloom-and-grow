import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Activation & Customer Engagement | Bloom & Grow",
  description:
    "Creative, hands-on brand experiences that leave a lasting impression. Interactive activations, product launch events, and customer engagement activities designed to connect your brand with people in meaningful ways — in Bangalore.",
};

const activities = [
  {
    image: "/images/tb-painting.jpg",
    title: "Live Art Demonstrations",
    description:
      "Turn your product launch or brand event into a spectacle. Our artists create live murals, canvas paintings, or interactive art pieces — drawing a crowd and giving your brand a story to tell.",
  },
  {
    image: "/images/tb-perfume.jpg",
    title: "Interactive Craft Workshops",
    description:
      "Invite customers into the experience. Hands-on craft sessions like perfume blending, pottery, or painting create genuine engagement and emotional connection with your brand.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Experiential Brand Activations",
    description:
      "We design multi-sensory pop-up experiences and activation booths that stop people in their tracks — turning passersby into engaged brand advocates with something tangible to take home.",
  },
];

const offerings = [
  "Brand Activation",
  "Product Launch Events",
  "Customer Engagement",
  "Experiential Marketing",
  "Live Art Demonstrations",
  "Interactive Workshops",
  "Pop-up Activations",
  "Craft Gifting Stations",
  "Mall & Retail Activations",
  "Exhibition Booths",
];

export default function BrandActivationPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C]">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/hero1.jpg"
          alt="Brand activation and customer engagement"
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
            Brand Activation &amp; Customer Engagement
          </p>
          <h1 className="mt-2 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Experiences That Make Your Brand Unforgettable
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#C4783A" }}>
          Turn moments into brand memories
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#6b7280]">
          We design hands-on, creative activations that bring your brand to life — not just in
          people&apos;s minds, but in their hands. Whether it&apos;s a product launch, a retail
          pop-up, or a customer appreciation event, we craft experiences that create genuine
          connection, spark conversation, and leave people with something they made themselves.
        </p>
        {/* Offering pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {offerings.map((o, i) => (
            <span
              key={o}
              className="rounded-full px-3 py-1 text-sm font-medium text-white"
              style={{ backgroundColor: i % 2 === 0 ? "#1d9b76" : "#C4783A" }}
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
            What We Offer
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
          Why brands choose us
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Memorable Impact",
              body: "People remember experiences far longer than ads. A hands-on moment with your brand creates emotional recall that no campaign can replicate.",
            },
            {
              title: "Genuine Engagement",
              body: "When customers create something themselves, they own the moment — and they share it. Our activations naturally generate word-of-mouth and social content.",
            },
            {
              title: "Fully Facilitated",
              body: "We handle everything — concept, setup, facilitation, and materials. You focus on your brand; we make the experience work seamlessly.",
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
