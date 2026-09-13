"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [istTime, setIstTime] = useState("");

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

  return (
    <footer className="border-t-2 border-[var(--color-foreground)] bg-[var(--color-bg-white)] text-[var(--color-foreground)]">
      {/* Top Bar: Regional Coordinates & Live Clock */}
      <div className="border-b-2 border-[var(--color-foreground)] px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 font-[family-name:var(--font-mono)] text-xs">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-prism animate-pulse" />
            <span className="font-bold uppercase tracking-wider">
              STUDIO LOCATION: AKSHARDHAM, NEW DELHI · OPERATING PAN-INDIA
            </span>
          </div>
          <div className="flex items-center gap-4 text-[var(--color-foreground)]/70">
            <span>28.6127° N, 77.2773° E</span>
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
          {/* Brand & Identity (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 border-2 border-[var(--color-foreground)] bg-white shadow-[var(--shadow-brutal-sm)]">
                  <Image
                    src="/brand/darkLogo.png"
                    alt="Wide Gamut Films Logo"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="font-[family-name:var(--font-heading)] text-3xl uppercase tracking-tight">
                  WIDE GAMUT FILMS
                </span>
              </div>

              <p className="mt-6 max-w-md font-[family-name:var(--font-body)] text-xl leading-relaxed text-[var(--color-foreground)]/80">
                Founded by Swapnil Vishwakarma. Crafting unscripted, deeply
                cinematic wedding documentaries, teasers, and independent short
                films across India.
              </p>
            </div>

            {/* Direct Contact Signal */}
            <div className="mt-8 space-y-1 font-[family-name:var(--font-mono)] text-xs">
              <span className="text-[var(--color-foreground)]/50 uppercase block mb-2 tracking-widest">
                Direct Inquiries &amp; Bookings
              </span>
              <div>
                <a
                  href="mailto:swapnilvishwakarma881@gmail.com"
                  className="font-bold text-[var(--color-foreground)] underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  swapnilvishwakarma881@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+916389760485"
                  className="font-bold text-[var(--color-foreground)] hover:underline"
                >
                  +91 6389760485
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-[family-name:var(--font-subHeading)] text-xs font-black uppercase tracking-widest text-[var(--color-foreground)]/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-[family-name:var(--font-subHeading)] text-sm font-bold uppercase tracking-wider">
              <li>
                <Link href="/about" className="hover:underline underline-offset-4">
                  About Swapnil
                </Link>
              </li>
              <li>
                <Link href="/about#portfolio" className="hover:underline underline-offset-4">
                  Wedding Reels &amp; Teasers
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-foreground)]/60">
                  Govardhan Short Film
                  <span className="border border-black px-1 py-0.2 text-[9px] font-mono">
                    SOON
                  </span>
                </span>
              </li>
            </ul>

            <h4 className="mt-8 font-[family-name:var(--font-subHeading)] text-xs font-black uppercase tracking-widest text-[var(--color-foreground)]/40 mb-3">
              Official Channels
            </h4>
            <ul className="flex flex-wrap gap-3 font-[family-name:var(--font-mono)] text-xs font-bold uppercase">
              <li>
                <a
                  href="https://www.youtube.com/@widegamutfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  [YouTube @widegamutfilms]
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/widegamutfilms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  [Instagram @widegamutfilms]
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Office & Production Base Card (4 Cols) */}
          <div className="lg:col-span-4 border-2 border-[var(--color-foreground)] bg-white p-6 shadow-[var(--shadow-brutal)] flex flex-col justify-between">
            <div>
              <span className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-[var(--color-foreground)]/60 block">
                PRODUCTION BASE
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-subHeading)] text-xl font-black uppercase tracking-tight">
                Akshardham, New Delhi
              </h3>
              <p className="mt-2 font-[family-name:var(--font-subHeading)] text-sm text-[var(--color-foreground)]/70 leading-relaxed">
                Open for documentary wedding commissions, associate direction, and
                creative collaborations.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-black/10 pt-4 flex flex-col gap-2 font-[family-name:var(--font-mono)] text-xs">
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">DIRECTOR</span>
                <span className="font-bold">Swapnil Vishwakarma</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">PHONE</span>
                <a href="tel:+916389760485" className="font-bold underline">
                  +91 6389760485
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">INQUIRY</span>
                <a
                  href="mailto:swapnilvishwakarma881@gmail.com"
                  className="font-bold truncate max-w-[200px] hover:underline"
                >
                  swapnilvishwakarma881@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Typographic Watermark */}
      <div className="overflow-hidden border-t-2 border-[var(--color-foreground)] select-none">
        <h2 className="font-[family-name:var(--font-heading)] text-[13vw] font-black uppercase leading-none tracking-tighter text-black/5 whitespace-nowrap text-center -my-2">
          WIDE GAMUT FILMS
        </h2>
      </div>

      {/* Bottom Legal & Viewfinder Reset */}
      <div className="border-t-2 border-[var(--color-foreground)] px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row font-[family-name:var(--font-mono)] text-xs">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-prism" />
            <span className="text-[var(--color-foreground)]/70">
              © {new Date().getFullYear()} WIDE GAMUT FILMS · SWAPNIL VISHWAKARMA · ALL RIGHTS RESERVED
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[var(--color-foreground)]/40 hidden sm:inline">
              DELHI · VRINDAVAN 
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