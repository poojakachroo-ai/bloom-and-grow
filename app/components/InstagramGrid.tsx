"use client";

import Image from "next/image";
import { content } from "../../content";

const posts = [
  { img: "/images/ig/ig-DU_L2utk68N.jpg",  url: "https://www.instagram.com/p/DU_L2utk68N/" },
  { img: "/images/ig/ig-DUsi-shkzWE.jpg",   url: "https://www.instagram.com/p/DUsi-shkzWE/" },
  { img: "/images/ig/ig-DTneypDk7ul.jpg",   url: "https://www.instagram.com/p/DTneypDk7ul/" },
  { img: "/images/ig/ig-DTFeVE9k426.jpg",   url: "https://www.instagram.com/p/DTFeVE9k426/" },
  { img: "/images/ig/ig-DREictFk8tH.jpg",   url: "https://www.instagram.com/p/DREictFk8tH/" },
  { img: "/images/ig/ig-DQCI2YUk0-_.jpg",   url: "https://www.instagram.com/p/DQCI2YUk0-_/" },
  { img: "/images/ig/ig-DP0QjxYEzFo.jpg",   url: "https://www.instagram.com/p/DP0QjxYEzFo/" },
  { img: "/images/ig/ig-DSmk1Cuk5NQ.jpg",   url: "https://www.instagram.com/p/DSmk1Cuk5NQ/" },
  { img: "/images/ig/ig-DScbgxSk1RV.jpg",   url: "https://www.instagram.com/p/DScbgxSk1RV/" },
  { img: "/images/ig/ig-DSCeWZOk9J3.jpg",   url: "https://www.instagram.com/p/DSCeWZOk9J3/" },
];

export default function InstagramGrid() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6">
      <h2
        className="mb-2 text-center text-2xl font-bold uppercase tracking-wide sm:text-3xl"
        style={{ color: "#C4783A" }}
      >
        Made With Heart
      </h2>
      <p className="mb-8 text-center text-sm text-[#6b7280]">
        Peek into our workshops — follow @bloomandgrowindia for more
      </p>

      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-1 sm:gap-2 md:grid-cols-5">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden"
          >
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 160px"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
              <svg
                className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={content.company.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#C4783A] hover:text-white hover:border-[#C4783A]"
          style={{ borderColor: "#C4783A", color: "#C4783A" }}
        >
          Follow Us on Instagram
        </a>
      </div>
    </section>
  );
}
