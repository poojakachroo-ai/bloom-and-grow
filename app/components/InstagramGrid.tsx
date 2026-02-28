"use client";

import Image from "next/image";
import { content } from "../../content";

// 7 unique posts — shown as a clean 3-column grid (desktop) / 2-column (mobile)
const posts = [
  { img: "/images/ig/ig-DU_L2utk68N.jpg",  url: "https://www.instagram.com/p/DU_L2utk68N/" },
  { img: "/images/ig/ig-DUsi-shkzWE.jpg",   url: "https://www.instagram.com/p/DUsi-shkzWE/" },
  { img: "/images/ig/ig-DTneypDk7ul.jpg",   url: "https://www.instagram.com/p/DTneypDk7ul/" },
  { img: "/images/ig/ig-DTFeVE9k426.jpg",   url: "https://www.instagram.com/p/DTFeVE9k426/" },
  { img: "/images/ig/ig-DQCI2YUk0-_.jpg",   url: "https://www.instagram.com/p/DQCI2YUk0-_/" },
  { img: "/images/ig/ig-DScbgxSk1RV.jpg",   url: "https://www.instagram.com/p/DScbgxSk1RV/" },
];

export default function InstagramGrid() {
  return (
    <section className="bg-white">
      {/* Section header */}
      <div className="px-6 pt-14 pb-8 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d9b76]">
          From Our Studio
        </p>
        <h2
          className="text-2xl font-bold sm:text-3xl"
          style={{ color: "#C4783A" }}
        >
          Made with heart
        </h2>
      </div>

      {/* Photo grid — 3 cols on md+, 2 cols on mobile, with gaps and padding */}
      <div className="mx-auto max-w-5xl px-6 pb-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={post.img}
                alt=""
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </a>
          ))}
        </div>
      </div>

      {/* @handle — centered below grid */}
      <div className="px-6 pb-10 pt-4 text-center">
        <a
          href={content.company.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] px-5 py-2.5 text-sm font-semibold text-[#6b7280] transition-colors hover:border-[#C4783A] hover:text-[#C4783A]"
        >
          {/* Instagram icon */}
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Follow @bloomandgrowindia
        </a>
      </div>
    </section>
  );
}
