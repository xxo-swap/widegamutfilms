"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [istTime, setIstTime] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setIstTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="border-t-2 border-[var(--color-foreground)] bg-[var(--color-bg-white)] text-[var(--color-foreground)]">
      {/* Top Bar: Regional Coordinates & Live Clock */}
      <div className="border-b-2 border-[var(--color-foreground)] px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 font-[family-name:var(--font-mono)] text-xs">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-prism animate-pulse" />
            <span className="font-bold uppercase tracking-wider">
              OPERATING FREQUENCIES: NEW DELHI · VRINDAVAN · REMOTE
            </span>
          </div>
          <div className="flex items-center gap-4 text-[var(--color-foreground)]/70">
            <span>28.6139° N, 77.2090° E</span>
            <span>|</span>
            <span className="font-bold text-[var(--color-foreground)]">
              IST {istTime || "00:00:00"} (GMT+5:30)
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Studio Brief (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 border-2 border-[var(--color-foreground)] bg-bg-white">
                  <Image
                    src="/brand/darkLogo.png"
                    alt="WGF Logo"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="font-[family-name:var(--font-heading)] text-3xl uppercase tracking-tight">
                  WGF FILMS
                </span>
              </div>

              <p className="mt-6 max-w-sm font-[family-name:var(--font-body)] text-xl leading-relaxed text-[var(--color-foreground)]/80">
                An independent non-fiction documentary studio archiving human
                contradictions, labor architecture, and subterranean movements
                across South Asia.
              </p>
            </div>

            {/* Direct Contact Signal */}
            <div className="mt-8 font-[family-name:var(--font-mono)] text-xs">
              <span className="text-[var(--color-foreground)]/50 uppercase block mb-1">
                Direct Pitch & Signals
              </span>
              <a
                href="mailto:contact@wgffilms.in"
                className="font-bold text-[var(--color-foreground)] underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                contact@wgffilms.in
              </a>
            </div>
          </div>

          {/* Navigation & Sections (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-[family-name:var(--font-subHeading)] text-xs font-black uppercase tracking-widest text-[var(--color-foreground)]/40 mb-4">
              Archival Index
            </h4>
            <ul className="space-y-2.5 font-[family-name:var(--font-subHeading)] text-sm font-bold uppercase tracking-wider">
              <li>
                <a href="#films" className="hover:underline underline-offset-4">
                  Canonical Slate
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:underline underline-offset-4">
                  Director&apos;s Manifesto
                </a>
              </li>
              <li>
                <a href="#pitch" className="hover:underline underline-offset-4">
                  Whistleblower & Story Leads
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:underline underline-offset-4">
                  Technical 24FPS Camera Specs
                </a>
              </li>
              <li>
                <a href="#press" className="hover:underline underline-offset-4">
                  Festival Screenings Kit
                </a>
              </li>
            </ul>

            <h4 className="mt-8 font-[family-name:var(--font-subHeading)] text-xs font-black uppercase tracking-widest text-[var(--color-foreground)]/40 mb-3">
              Broadcasting Channels
            </h4>
            <ul className="flex flex-wrap gap-3 font-[family-name:var(--font-mono)] text-xs font-bold uppercase">
              <li>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  [Vimeo]
                </a>
              </li>
              <li>
                <a
                  href="https://letterboxd.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  [Letterboxd]
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  [YouTube]
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  [Instagram]
                </a>
              </li>
            </ul>
          </div>

          {/* Archival Dispatch / Newsletter (4 Cols) */}
          <div className="lg:col-span-4 border-2 border-[var(--color-foreground)] bg-neutral-50 p-6 shadow-brutal-sm">
            <span className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-[var(--color-foreground)]/60">
              FIELD NOTES DISPATCH
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-subHeading)] text-xl font-black uppercase tracking-tight">
              Production Log Transmissions
            </h3>
            <p className="mt-2 font-[family-name:var(--font-body)] text-base text-[var(--color-foreground)]/70 leading-normal">
              Occasional essays, raw grading LUT releases, and clandestine screening invites. Zero corporate spam.
            </p>

            {isSubscribed ? (
              <div className="mt-4 border border-[var(--color-foreground)] bg-white p-3 font-[family-name:var(--font-mono)] text-xs font-bold text-black">
                ✓ SIGNAL REGISTERED. YOU ARE ON THE DIRECT DOCKET.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@institution.org"
                  className="w-full border-2 border-[var(--color-foreground)] bg-white p-2.5 font-[family-name:var(--font-mono)] text-xs text-[var(--color-foreground)] outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  type="submit"
                  className="group relative block p-[2px] transition-transform active:translate-x-[1px] active:translate-y-[1px]"
                >
                  <div className="absolute inset-0 bg-prism opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <span className="relative block border-2 border-[var(--color-foreground)] bg-[var(--color-foreground)] py-2.5 text-center font-[family-name:var(--font-subHeading)] text-xs font-black uppercase tracking-wider text-[var(--color-bg-white)] transition-colors group-hover:bg-[var(--color-bg-white)] group-hover:text-[var(--color-foreground)]">
                    Subscribe to Dispatch
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Massive Typographic Watermark */}
      <div className="overflow-hidden border-t-2 border-[var(--color-foreground)] select-none">
        <h2 className="font-[family-name:var(--font-heading)] text-[14vw] font-black uppercase leading-none tracking-tighter text-black/5 whitespace-nowrap text-center -my-2">
          WGF DOCUMENTARY FILMS
        </h2>
      </div>

      {/* Bottom Legal & Viewfinder Reset */}
      <div className="border-t-2 border-[var(--color-foreground)] px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row font-[family-name:var(--font-mono)] text-xs">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-prism" />
            <span className="text-[var(--color-foreground)]/70">
              © {new Date().getFullYear()} WGF NON-FICTION MEDIA · ALL RIGHTS ARCHIVED
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[var(--color-foreground)]/40 hidden sm:inline">
              ENCODED: 4K PRORES 422 HQ / DCI-P3
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 font-bold uppercase tracking-wider text-[var(--color-foreground)] hover:underline"
            >
              <span>[ Top of Slate ↑ ]</span>
              <span className="h-2 w-2 rounded-full bg-prism opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}