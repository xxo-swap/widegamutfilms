"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection({ onOpenReel }: { onOpenReel: () => void }) {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const laurelsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".meta-badge", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        stagger: 0.1,
      })
        .from(
          headlineRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.3"
        )
        .from(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.8,
            ease: "expo.out",
          },
          "-=0.5"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current?.children || [],
          {
            opacity: 0,
            y: 15,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          laurelsRef.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.6,
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative border-b-2 border-[var(--color-foreground)] bg-[var(--color-bg-white)] px-4 py-20 md:px-8 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Context Badges */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="meta-badge border border-[var(--color-foreground)] bg-neutral-100 px-2.5 py-1 text-[var(--color-foreground)] font-[family-name:var(--font-subHeading)] text-xs font-bold uppercase tracking-wider">
            ESTD. INDIA
          </span>
          <span className="meta-badge font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-neutral-500">
            NON-FICTION CINEMA · CINEMA VERITÉ
          </span>
        </div>

        {/* Heading 1: Anton */}
        <div className="overflow-hidden">
          <h1
            ref={headlineRef}
            className="font-[family-name:var(--font-heading)] text-6xl uppercase leading-none tracking-normal text-[var(--color-foreground)] sm:text-8xl lg:text-9xl"
          >
            Unfiltered Truths. <br />
            <span className="relative inline-block">
              Untethered Stories.
              <span
                ref={lineRef}
                className="absolute left-0 bottom-2 h-2 w-full bg-prism"
              />
            </span>
          </h1>
        </div>

        {/* Narrative Body Copy: Forum */}
        <p
          ref={descRef}
          className="mt-8 max-w-2xl font-[family-name:var(--font-body)] text-2xl leading-relaxed text-[var(--color-foreground)]/85 sm:text-3xl"
        >
          WGF documents Indian realities without staging or direction—archiving unvarnished human
          conditions, underground subcultures, and regional friction.
        </p>

        {/* CTAs: Urbanist / Mono */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#films"
            className="group relative inline-flex items-center gap-2 border-2 border-[var(--color-foreground)] bg-[var(--color-foreground)] px-6 py-3 font-[family-name:var(--font-subHeading)] text-sm font-extrabold uppercase tracking-wider text-[var(--color-bg-white)] shadow-brutal transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg"
          >
            <span>Explore Film Slate</span>
            <span className="h-2 w-2 rounded-full bg-prism" />
          </a>

          <button
            onClick={onOpenReel}
            className="group relative inline-flex p-[2px] transition-all"
          >
            <div className="absolute inset-0 bg-prism opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative border-2 border-[var(--color-foreground)] bg-[var(--color-bg-white)] px-6 py-3 font-[family-name:var(--font-subHeading)] text-sm font-extrabold uppercase tracking-wider text-[var(--color-foreground)] shadow-brutal transition-all group-hover:shadow-none">
              ▶ Watch 2026 Showreel
            </span>
          </button>
        </div>

        {/* Honors Ticker */}
        <div ref={laurelsRef} className="mt-16 border-t border-[var(--color-foreground)]/10 pt-8">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/40 mb-3">
            SELECTIONS & HONORS
          </p>
          <div className="flex flex-wrap items-center gap-6 font-[family-name:var(--font-subHeading)] text-sm font-bold uppercase tracking-wider text-[var(--color-foreground)]/80">
            <span>[ IDFA Amsterdam ]</span>
            <span>[ Sundance Labs ]</span>
            <span>[ Hot Docs Toronto ]</span>
            <span>[ Dharamsala IFF ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}