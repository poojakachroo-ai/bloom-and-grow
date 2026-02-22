"use client";

import { content } from "../../content";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="text-lg font-semibold text-white">
          {content.company.name}
        </span>
        <a
          href={content.company.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/80 underline underline-offset-2 hover:text-white"
        >
          Instagram
        </a>
      </div>
      <p className="mt-6 text-center text-sm text-white/60">
        © {currentYear} {content.company.name}. All rights reserved.
      </p>
    </footer>
  );
}
