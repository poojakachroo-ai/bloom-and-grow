'use client'

import Image from 'next/image'

const clients = [
  { name: "Google",        logo: "/images/clients/google.svg",        w: 272, h: 92  },
  { name: "IKEA",          logo: "/images/clients/ikea.svg",          w: 100, h: 40  },
  { name: "Wipro",         logo: "/images/clients/wipro.svg",         w: 377, h: 297 },
  { name: "PwC",           logo: "/images/clients/pwc.svg",           w: 200, h: 80  },
  { name: "Deloitte",      logo: "/images/clients/deloitte.svg",      w: 200, h: 60  },
  { name: "Goldman Sachs", logo: "/images/clients/goldman-sachs.svg", w: 240, h: 60  },
  { name: "Walmart",       logo: "/images/clients/walmart.svg",       w: 220, h: 60  },
  { name: "Intuit",        logo: "/images/clients/intuit.svg",        w: 160, h: 60  },
  { name: "Titan",         logo: "/images/clients/titan.svg",         w: 160, h: 60  },
  { name: "Urban Ladder",  logo: "/images/clients/urban-ladder.svg",  w: 200, h: 60  },
]

export default function Clients() {
  return (
    <section className="bg-white py-8 overflow-hidden">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#1d9b76]">
        Trusted by teams at
      </p>

      {/* Scrollable on mobile, single centred row on desktop */}
      <div className="overflow-x-auto scrollbar-none">
        <div
          className="flex items-center justify-start gap-8 px-8 md:justify-center"
          style={{ minWidth: 'max-content' }}
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="shrink-0 flex items-center justify-center"
              style={{ height: 44 }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.w}
                height={client.h}
                className="h-full w-auto object-contain"
                style={{ maxHeight: 44 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
