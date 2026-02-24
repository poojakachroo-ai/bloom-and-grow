"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { content } from "../../content";

const whatsappUrl = `https://wa.me/${content.company.whatsapp.number}?text=${encodeURIComponent(content.company.whatsapp.message)}`;

const navLinks = [
  { label: "What We Do", href: "/#services" },
  { label: "About",      href: "/#about"    },
];

function WhatsAppIcon() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="flex items-center justify-center rounded-full p-1.5 text-[#25D366] transition-colors hover:bg-[#25D366]/10"
    >
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change / escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Smooth-scroll helper for same-page anchors
  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Bloom & Grow"
            width={160}
            height={43}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm font-medium text-[#2C2C2C] after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C4783A] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          {/* Phone — quiet tel link */}
          <a
            href={`tel:${content.company.phone.replace(/\s/g, "")}`}
            className="text-sm font-medium text-[#6b7280] transition-colors hover:text-[#C4783A]"
          >
            {content.company.phone}
          </a>

          <WhatsAppIcon />
        </nav>

        {/* Mobile: WhatsApp icon + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <WhatsAppIcon />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex items-center justify-center rounded-md p-2 text-[#2C2C2C] transition-colors hover:bg-[#FAF7F2]"
          >
            {menuOpen ? (
              /* X icon */
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-[#f0ebe3] bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#2C2C2C] hover:text-[#C4783A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${content.company.phone.replace(/\s/g, "")}`}
              className="text-base font-medium text-[#6b7280] hover:text-[#C4783A] transition-colors"
            >
              {content.company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
