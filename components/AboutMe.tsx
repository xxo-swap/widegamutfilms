"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

/* =========================================================================
   Types & Interfaces (as provided)
   ========================================================================= */
export interface Reel {
  id: string;
  type: "Travel" | "Wedding" | "Short Film";
  title: string;
  year: string;
  ytUrl: string;
  igUrl: string;
  thumbnailUrl: string;
}

export interface Teaser {
  id: string;
  type: "Short Film" | "Wedding" | "Pre-Wedding";
  title: string;
  year: string;
  ytUrl: string;
  igUrl: string;
  thumbnailUrl: string;
}

export interface TraditionalFilm {
  id: string;
  type: "Wedding" | "Mehendi" | "Haldi " | "Reception";
  title: string;
  year: string;
  ytUrl: string;
  igUrl: string;
  thumbnailUrl: string;
}

export interface Film {
  id: string;
  type: "Wedding";
  title: string;
  year: string;
  ytUrl: string;
  igUrl: string;
  thumbnailUrl: string;
}

export interface PortfolioData {
  reels: Reel[];
  teasers: Teaser[];
  traditionalFilms: TraditionalFilm[];
  films: Film[];
}

/* =========================================================================
   Data
   ========================================================================= */
export const portfolioData: PortfolioData = {
  reels: [
    {
      id: "wed-01",
      type: "Wedding",
      title: "Wedding Reel",
      year: "2026",
      ytUrl: "https://youtu.be/2DeaUdMBtKU",
      igUrl: "https://www.instagram.com/p/example1/",
      thumbnailUrl: "https://img.youtube.com/vi/2DeaUdMBtKU/maxresdefault.jpg",
    },
    {
      id: "wed-02",
      type: "Wedding",
      title: "Haldi Reel",
      year: "2026",
      ytUrl: "https://www.youtube.com/shorts/6Qd3QfSXfEE",
      igUrl: "https://www.instagram.com/p/example2/",
      thumbnailUrl: "https://img.youtube.com/vi/6Qd3QfSXfEE/maxresdefault.jpg",
    },
    {
      id: "tra-01",
      type: "Travel",
      title: "Travel Reel",
      year: "2026",
      ytUrl: "https://www.youtube.com/shorts/aU7gdNo_KUo",
      igUrl: "https://www.instagram.com/p/example3/",
      thumbnailUrl: "https://img.youtube.com/vi/aU7gdNo_KUo/maxresdefault.jpg",
    },
    {
      id: "tra-02",
      type: "Travel",
      title: "Travel Reel",
      year: "2026",
      ytUrl: "https://www.youtube.com/shorts/K8HMEuZgAtM",
      igUrl: "https://www.instagram.com/p/example4/",
      thumbnailUrl: "https://img.youtube.com/vi/K8HMEuZgAtM/maxresdefault.jpg",
    },
  ],

  teasers: [
    {
      id: "teaser-01",
      type: "Pre-Wedding",
      title: "Mathura Pre-Wedding Teaser",
      year: "2026",
      ytUrl: "https://youtu.be/1E6YLh_t5Tk",
      igUrl: "https://www.instagram.com/p/example3/",
      thumbnailUrl: "https://img.youtube.com/vi/1E6YLh_t5Tk/maxresdefault.jpg",
    },
    {
      id: "teaser-02",
      type: "Pre-Wedding",
      title: "Vrindavan Pre-Wedding Teaser",
      year: "2026",
      ytUrl: "https://youtu.be/N7YTy1Gw66k",
      igUrl: "https://www.instagram.com/p/example3/",
      thumbnailUrl: "https://img.youtube.com/vi/N7YTy1Gw66k/maxresdefault.jpg",
    },
  ],

  traditionalFilms: [],
  films: [],
};

type PortfolioCategory = "ALL" | "REELS" | "TEASERS" | "FILMS";

type PortfolioItem = (Reel | Teaser | TraditionalFilm | Film) & {
  categoryLabel: "Reel" | "Teaser" | "Traditional Film" | "Film";
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

/* =========================================================================
   Component
   ========================================================================= */
export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>("ALL");
  const [activeVideo, setActiveVideo] = useState<PortfolioItem | null>(null);

  // Flattened portfolio items
  const allItems: PortfolioItem[] = useMemo(() => {
    return [
      ...portfolioData.reels.map((item) => ({ ...item, categoryLabel: "Reel" as const })),
      ...portfolioData.teasers.map((item) => ({ ...item, categoryLabel: "Teaser" as const })),
      ...portfolioData.traditionalFilms.map((item) => ({
        ...item,
        categoryLabel: "Traditional Film" as const,
      })),
      ...portfolioData.films.map((item) => ({ ...item, categoryLabel: "Film" as const })),
    ];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeTab === "ALL") return allItems;
    if (activeTab === "REELS") return allItems.filter((i) => i.categoryLabel === "Reel");
    if (activeTab === "TEASERS") return allItems.filter((i) => i.categoryLabel === "Teaser");
    if (activeTab === "FILMS") {
      return allItems.filter(
        (i) => i.categoryLabel === "Film" || i.categoryLabel === "Traditional Film"
      );
    }
    return allItems;
  }, [allItems, activeTab]);

  return (
    <main className="min-h-screen bg-[var(--color-bg-white)] text-[var(--color-foreground)] antialiased selection:bg-black selection:text-white">
      {/* ===================================================================
          1. INTRO / ABOUT SECTION
          =================================================================== */}
      <section className="border-b-4 border-black px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Top Label */}
          <div className="mb-6 inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest shadow-[var(--shadow-brutal-sm)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Aspiring Cinematographer &amp; Visual Storyteller</span>
          </div>

          {/* Main Hero Grid */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Headline & Bio */}
            <div className="space-y-6 lg:col-span-7">
              <h1 className="font-[family-name:var(--font-heading)] text-5xl uppercase tracking-tight sm:text-7xl lg:text-8xl leading-none">
                Swapnil <br />
                <span className="text-prism">Vishwakarma</span>
              </h1>

              <p className="font-[family-name:var(--font-body)] text-xl sm:text-2xl leading-relaxed text-neutral-800">
                &quot;New to the industry, but aspiring to create some of India&apos;s finest wedding films. Currently looking for opportunities to collaborate and create.&quot;
              </p>

              {/* Badges / Accents */}
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

{/* Right Stat Cards */}
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

      {/* ===================================================================
          2. PORTFOLIO SECTION
          =================================================================== */}
      <section className="px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Header & Filter Controls */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-neutral-500 mb-2">
Portfolio              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl uppercase tracking-tight sm:text-6xl">
                Early Works &amp; Experiments
              </h2>
            </div>

            {/* Filter Buttons */}
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

          {/* Video Cards Grid */}
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
                  {/* Thumbnail / Play trigger */}
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

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex gap-1 font-[family-name:var(--font-mono)] text-[10px] font-bold">
                      <span className="border border-black bg-white px-2 py-0.5 shadow-[1px_1px_0px_#000]">
                        {item.type}
                      </span>
                      <span className="border border-black bg-black px-2 py-0.5 text-white">
                        {item.year}
                      </span>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white shadow-[var(--shadow-brutal-sm)]">
                        <svg className="h-5 w-5 fill-black translate-x-0.5" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
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

      {/* ===================================================================
          MODAL VIDEO PLAYER
          =================================================================== */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl border-4 border-black bg-white shadow-[8px_8px_0px_#000]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
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

            {/* Video Player */}
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