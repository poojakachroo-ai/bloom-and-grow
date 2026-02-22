import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Gifting & Branded Keepsakes | Bloom & Grow",
  description:
    "Meaningful, handcrafted gifts that leave a lasting impression. Custom art kits, wellness hampers, and branded keepsakes — thoughtfully curated for employees, clients, and corporate events.",
};

const giftCategories = [
  {
    image: "/images/hero3.jpg",
    title: "Custom Art Kits",
    description:
      "Beautifully packaged art activity kits that employees or clients can use at home — dot mandala sets, watercolour kits, and more. A gift that keeps on giving long after the event.",
  },
  {
    image: "/images/tb-painting.jpg",
    title: "Wellness Hampers",
    description:
      "Thoughtfully curated hampers combining art, nature, and wellness — terrariums, scented candles, DIY craft sets, and calming accessories that reflect your care for people.",
  },
  {
    image: "/images/tb-perfume.jpg",
    title: "Branded Keepsakes",
    description:
      "Custom-branded mementos that blend artistry with your company identity. From hand-painted diyas for Diwali to personalised perfume bottles — gifts with a story.",
  },
];

const occasions = [
  "Employee Appreciation",
  "Client Gifting",
  "Diwali Hampers",
  "Onboarding Kits",
  "Event Giveaways",
  "Festive Season",
  "Milestones & Awards",
  "Bulk Orders",
];

export default function CorporateGiftingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C]">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/hero3.jpg"
          alt="Corporate gifting and branded keepsakes"
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
            Corporate Gifting &amp; Branded Keepsakes
          </p>
          <h1 className="mt-2 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Gifts That Tell a Story
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#C4783A" }}>
          Thoughtfully curated. Beautifully crafted.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#6b7280]">
          Generic gifts are forgotten. Meaningful ones are treasured. We design and curate
          handcrafted gifts that carry intention — from custom art kits that invite creativity to
          wellness hampers that say you genuinely care. Every piece is thoughtfully assembled to
          reflect your brand values and leave a lasting impression.
        </p>
        {/* Occasion pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {occasions.map((o) => (
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

      {/* Gift categories */}
      <section className="bg-white px-4 py-10 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-xl font-bold md:text-2xl" style={{ color: "#C4783A" }}>
            Our Gift Collections
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {giftCategories.map((category) => (
              <article key={category.title} className="overflow-hidden rounded-xl bg-[#FAF7F2]">
                <div className="relative h-56 w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-[#2C2C2C]">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h2 className="text-xl font-bold md:text-2xl" style={{ color: "#C4783A" }}>
          Why Bloom &amp; Grow gifts stand out
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Handcrafted Quality",
              body: "Every gift is made with care by skilled artists — no mass-produced, generic items. Quality you can feel the moment you hold it.",
            },
            {
              title: "Fully Customisable",
              body: "From branding and packaging to the contents inside — we tailor every detail to your occasion, audience, and budget.",
            },
            {
              title: "Bulk Order Ready",
              body: "Whether you need 50 or 5,000 gifts, we scale seamlessly without compromising on the craftsmanship that makes each piece special.",
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
