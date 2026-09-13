"use client";

import Image from "next/image";
import { Film } from "@/data/film";
export default function FilmCard({
  film,
  onSelect,
}: {
  film: Film;
  onSelect: (film: Film) => void;
}) {
  return (
    <div className="group relative p-[2px] transition-all">
      <div className="absolute inset-0 bg-prism opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative border-2 border-[var(--color-foreground)] bg-[var(--color-bg-white)] p-5 shadow-brutal transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
        {/* Aspect-Ratio Viewfinder */}
        <div className="relative aspect-video w-full overflow-hidden border border-[var(--color-foreground)] bg-[var(--color-foreground)]">
          <Image
            src={film.thumbnailUrl}
            alt={film.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />

          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-2 font-[family-name:var(--font-mono)] text-[10px] text-white/90 drop-shadow">
            <div className="flex justify-between">
              <span>⌜ {film.aspectRatio}</span>
              <span>{film.runtime} ⌝</span>
            </div>
            <div className="flex justify-between">
              <span>⌞ {film.location}</span>
              <span>{film.year} ⌟</span>
            </div>
          </div>
        </div>

        {/* Card Metadata & Typography */}
        <div className="mt-4">
          <div className="flex items-center justify-between font-[family-name:var(--font-subHeading)] text-xs font-semibold uppercase tracking-wider">
            <span className="border border-[var(--color-foreground)]/10 bg-neutral-100 px-2 py-0.5 text-[var(--color-foreground)]">
              {film.category}
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[var(--color-foreground)]/60">
              {film.year}
            </span>
          </div>

          <h3 className="mt-2 font-[family-name:var(--font-heading)] text-3xl uppercase tracking-wide text-[var(--color-foreground)]">
            {film.title}
          </h3>

          <p className="mt-2 line-clamp-2 font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--color-foreground)]/80">
            {film.logline}
          </p>

          <button
            onClick={() => onSelect(film)}
            className="mt-4 inline-flex items-center gap-1 font-[family-name:var(--font-subHeading)] text-xs font-extrabold uppercase tracking-widest text-[var(--color-foreground)] hover:underline"
          >
            Inspect Record →
          </button>
        </div>
      </div>
    </div>
  );
}