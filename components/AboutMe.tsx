"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
// Adjust the path to wherever your data file lives:
import { PortfolioData, Reel, Teaser, TraditionalFilm, Film } from "@/data/portfolioData";

type BasePortfolioItem = Reel | Teaser | TraditionalFilm | Film;

type PortfolioCategory = "ALL" | "REELS" | "TEASERS" | "FILMS";

type PortfolioItem = BasePortfolioItem & {
  categoryKey: keyof typeof PortfolioData;
  categoryLabel: string;
};

const CATEGORY_MAP: Record<keyof typeof PortfolioData, { label: string; tab: PortfolioCategory }> = {
  reels: { label: "Reel", tab: "REELS" },
  teasers: { label: "Teaser", tab: "TEASERS" },
  traditionalFilms: { label: "Traditional Film", tab: "FILMS" },
  films: { label: "Film", tab: "FILMS" },
};

/* Helper to convert YouTube URL to embed format */
const getEmbedUrl = (url: string) => {
  if (!url) return "";
  if (url.includes("shorts/")) {
    const id = url.split("shorts/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }
  return url;
};

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>("ALL");
  const [activeVideo, setActiveVideo] = useState<PortfolioItem | null>(null);

  // Dynamically flatten every array directly out of the PortfolioData object
  const allItems: PortfolioItem[] = useMemo(() => {
    return Object.entries(PortfolioData).flatMap(([key, items]) => {
      const config = CATEGORY_MAP[key as keyof typeof PortfolioData];
      return (items as BasePortfolioItem[]).map((item) => ({
        ...item,
        categoryKey: key as keyof typeof PortfolioData,
        categoryLabel: config?.label ?? key,
      }));
    });
  }, []);

  // Filter based on active tab
  const filteredItems = useMemo(() => {
    if (activeTab === "ALL") return allItems;
    return allItems.filter((item) => {
      const targetTab = CATEGORY_MAP[item.categoryKey]?.tab;
      return targetTab === activeTab;
    });
  }, [allItems, activeTab]);

  return (
    <main className="min-h-screen bg-[var(--color-bg-white)] text-[var(--color-foreground)] antialiased selection:bg-black selection:text-white">
      {/* 1. INTRO / ABOUT SECTION */}
      <section className="border-b-4 border-black px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest shadow-[var(--shadow-brutal-sm)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Aspiring Cinematographer &amp; Visual Storyteller</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <h1 className="font-[family-name:var(--font-heading)] text-5xl uppercase tracking-tight sm:text-7xl lg:text-8xl leading-none">
                Swapnil <br />
                <span className="text-prism">Vishwakarma</span>
              </h1>

              <p className="font-[family-name:var(--font-body)] text-xl sm:text-2xl leading-relaxed text-neutral-800">
                &quot;New to the industry, but aspiring to create some of India&apos;s finest wedding films. Currently looking for opportunities to collaborate and create.&quot;
              </p>

              <div className="flex flex-wrap gap-2 pt-2 font-[family-name:var(--font-mono)] text-xs">
                <span className="border-2 border-black bg-black px-3 py-1.5 font-bold text-white shadow-[var(--shadow-brutal-sm)]">
                  Cinematic Weddings
                </span>
                <span className="border-2 border-black bg-white px-3 py-1.5 font-bold text-black shadow-[var(--shadow-brutal-sm)]">
                  Davinci Resolve
                </span>
                <span className="border-2 border-black bg-white px-3 py-1.5 font-bold text-black shadow-[var(--shadow-brutal-sm)]">
                  Photography
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-5">
              <div className="border-2 border-black bg-white p-6 shadow-[var(--shadow-brutal)]">
                <span className="font-[family-name:var(--font-mono)] text-xs text-neutral-500 uppercase tracking-wider block">
                  Focus
                </span>
                <p className="font-[family-name:var(--font-heading)] text-3xl mt-1 uppercase">
                  Wedding Films
                </p>
                <p className="font-[family-name:var(--font-subHeading)] text-sm text-neutral-600 mt-2">
                  Seeking collaborations to create unscripted, deeply cinematic wedding documentaries.
                </p>
              </div>

              <div className="border-2 border-black bg-white p-6 shadow-[var(--shadow-brutal)]">
                <span className="font-[family-name:var(--font-mono)] text-xs text-neutral-500 uppercase tracking-wider block">
                  Goal
                </span>
                <p className="font-[family-name:var(--font-heading)] text-3xl mt-1 uppercase">
                  Vision &amp; Direction
                </p>
                <p className="font-[family-name:var(--font-subHeading)] text-sm text-neutral-600 mt-2">
                  To become one of India&apos;s leading documentary wedding directors, crafting timeless, emotionally resonant cinema.
                </p>
              </div>

              <div className="col-span-full border-2 border-black bg-prism p-0.5 shadow-[var(--shadow-brutal)]">
                <div className="bg-white p-6">
                  <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-neutral-500 block">
                    Available For
                  </span>
                  <p className="font-[family-name:var(--font-subHeading)] font-bold text-lg mt-1">
                    Wedding Teaser Editing, Event Photography, Reels &amp; Short Film Volunteer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO SECTION */}
      <section className="px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-neutral-500 mb-2">
                Portfolio
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl uppercase tracking-tight sm:text-6xl">
                Early Works &amp; Experiments
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 font-[family-name:var(--font-mono)] text-xs uppercase">
              {(["ALL", "REELS", "TEASERS", "FILMS"] as PortfolioCategory[]).map((cat) => {
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`border-2 border-black px-4 py-2 font-bold transition-all ${
                      isActive
                        ? "bg-black text-white shadow-none translate-x-0.5 translate-y-0.5"
                        : "bg-white text-black shadow-[var(--shadow-brutal-sm)] hover:bg-neutral-100"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="border-2 border-dashed border-black p-12 text-center font-[family-name:var(--font-mono)] text-neutral-500">
              No projects found under this category yet.
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col border-2 border-black bg-white shadow-[var(--shadow-brutal)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-brutal-lg)]"
                >
                  <div
                    onClick={() => setActiveVideo(item)}
                    className="relative aspect-video w-full cursor-pointer overflow-hidden border-b-2 border-black bg-black"
                  >
                    <Image
                      src={item.thumbnailUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />

                    <div className="absolute top-3 left-3 flex gap-1 font-[family-name:var(--font-mono)] text-[10px] font-bold">
                      <span className="border border-black bg-white px-2 py-0.5 shadow-[1px_1px_0px_#000]">
                        {item.type}
                      </span>
                      <span className="border border-black bg-black px-2 py-0.5 text-white">
                        {item.year}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white shadow-[var(--shadow-brutal-sm)]">
                        <svg className="h-5 w-5 fill-black translate-x-0.5" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-neutral-500">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-[family-name:var(--font-subHeading)] font-extrabold text-xl leading-snug mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. MODAL VIDEO PLAYER */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl border-4 border-black bg-white shadow-[8px_8px_0px_#000]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-black bg-neutral-100 px-4 py-3">
              <div>
                <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase text-neutral-500 mr-2">
                  {activeVideo.categoryLabel} &bull; {activeVideo.year}
                </span>
                <span className="font-[family-name:var(--font-subHeading)] font-bold text-sm">
                  {activeVideo.title}
                </span>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="border-2 border-black bg-white px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs font-bold shadow-[2px_2px_0px_#000] hover:bg-black hover:text-white"
              >
                CLOSE [X]
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={getEmbedUrl(activeVideo.ytUrl)}
                title={activeVideo.title}
                className="h-full w-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}