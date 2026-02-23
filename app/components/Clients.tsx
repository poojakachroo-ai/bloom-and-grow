'use client'

const clients = [
  { name: "Deloitte", icon: "deloitte", color: "#86BC25" },
  { name: "Google", icon: "google", color: "#4285F4" },
  { name: "PwC", icon: "pwc", color: "#D04A02" },
  { name: "Goldman Sachs", icon: "goldmansachs", color: "#6495ED" },
  { name: "IKEA", icon: "ikea", color: "#0058A3" },
  { name: "Intuit", icon: "intuit", color: "#236cff" },
  { name: "Wipro", icon: "wipro", color: "#341C6A" },
  { name: "Walmart", icon: "walmart", color: "#0071CE" },
  { name: "Titan", icon: "titan", color: "#CC0000" },
  { name: "Urban Ladder", icon: "urbanladder", color: "#FF6B35" }
]

export default function Clients() {
  return (
    <section className="py-12 bg-white">
      <h2
        className="mb-1 text-center text-2xl font-bold uppercase tracking-wide sm:text-3xl"
        style={{ color: "#C4783A" }}
      >
        Trusted By
      </h2>
      <p className="mb-10 text-center text-sm text-[#6b7280]">
        Teams from India&apos;s leading companies
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-10 items-center">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center">
              <img
                src={`https://cdn.simpleicons.org/${client.icon}`}
                alt={client.name}
                className="h-8 w-8 object-contain"
                style={{ filter: 'grayscale(100%) opacity(60%)' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const sibling = e.currentTarget.nextElementSibling as HTMLElement
                  if (sibling) sibling.style.display = 'block'
                }}
              />
              <span className="text-xs text-gray-500 font-medium whitespace-nowrap hidden">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
