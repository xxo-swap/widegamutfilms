// components/HudNavbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HudNavbar() {
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Real-time 24fps SMPTE Timecode generator
  useEffect(() => {
    const updateTimecode = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      // Calculate 24fps frames (0 - 23)
      const f = String(
        Math.floor((now.getMilliseconds() / 1000) * 24)
      ).padStart(2, "0");
      setTimecode(`${h}:${m}:${s}:${f}`);
    };

    const interval = setInterval(updateTimecode, 41); // ~24 fps (1000/24 ~= 41.6ms)
    return () => clearInterval(interval);
  }, []);

  // Subtle border shadow shift on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b-2 border-[var(--color-foreground)] bg-[var(--color-bg-white)] transition-all duration-200 ${
        isScrolled ? "shadow-brutal-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Brand Logo & Studio Mark */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="relative h-10 w-10 overflow-hidden border-2 border-[var(--color-foreground)] bg-black transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-brutal-sm ">
            <Image
              src="/brand/lightLogo.png"
              alt="WGF Documentary Films Logo"
              fill
              priority
              className="object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-[family-name:var(--font-heading)] text-xl tracking-normal leading-none text-[var(--color-foreground)] uppercase sm:text-2xl">
                Wide Gamut Films
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] font-bold text-[var(--color-foreground)]/40">
                {/* STUDIO */}
              </span>
            </div>
            <span className="font-[family-name:var(--font-subHeading)] text-[10px] font-extrabold uppercase tracking-widest text-[var(--color-foreground)]/70">
              Documentary Films · India
            </span>
          </div>
        </Link>

        {/* Center: Live Director Camera HUD */}
        <div className="hidden lg:flex items-center gap-5 border border-[var(--color-foreground)]/20 bg-neutral-50 px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs shadow-sm">
          {/* Prismatic Blinking Recording Indicator */}
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-prism animate-pulse" />
            <span className="font-bold text-[var(--color-foreground)] tracking-wide">
              REC 24FPS
            </span>
          </div>

          <span className="text-[var(--color-foreground)]/20">|</span>

          {/* Running SMPTE Timecode */}
          <div className="flex items-center gap-1.5 font-bold tracking-wider text-[var(--color-foreground)]">
            <span className="text-[var(--color-foreground)]/40">TC</span>
            <span>{timecode}</span>
          </div>

          <span className="text-[var(--color-foreground)]/20">|</span>

          <span className="text-[11px] text-[var(--color-foreground)]/60 uppercase">
            2.39:1 CINEMASCOPE
          </span>

          <span className="text-[var(--color-foreground)]/20">|</span>

          <span className="text-[11px] text-[var(--color-foreground)]/60 uppercase">
            IST GMT+5:30
          </span>
        </div>

        {/* Right Navigation & Pitch CTA */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 font-[family-name:var(--font-subHeading)] text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
            <a
              href="/manifesto"
              className="transition-colors hover:text-black/60 hover:underline underline-offset-4"
            >
              Manifesto
            </a>
            <a
              href="/archives"
              className="transition-colors hover:text-black/60 hover:underline underline-offset-4"
            >
              Archives
            </a>
            <a
              href="/about"
              className="transition-colors hover:text-black/60 hover:underline underline-offset-4"
            >
              About
            </a>
          </nav>

          {/* Rainbow Accent Hover Pitch Button */}
          <a
            href="/pitch"
            className="group relative p-[2px] transition-transform active:translate-x-[1px] active:translate-y-[1px]"
          >
            {/* Prismatic gradient appears on hover */}
            <div className="absolute inset-0 bg-prism opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex items-center gap-1.5 border-2 border-[var(--color-foreground)] bg-[var(--color-foreground)] px-4 py-2 font-[family-name:var(--font-subHeading)] text-xs font-extrabold uppercase tracking-widest text-[var(--color-bg-white)] shadow-brutal-sm transition-colors group-hover:bg-[var(--color-bg-white)] group-hover:text-[var(--color-foreground)] group-hover:shadow-none">
              <span>Pitch Story</span>
              <span className="h-1.5 w-1.5 rounded-full bg-prism" />
            </span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="flex md:hidden flex-col justify-center items-center h-9 w-9 border-2 border-[var(--color-foreground)] bg-[var(--color-bg-white)] p-1 gap-1 shadow-brutal-sm"
          >
            <span
              className={`h-0.5 w-5 bg-[var(--color-foreground)] transition-transform ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[var(--color-foreground)] transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[var(--color-foreground)] transition-transform ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t-2 border-[var(--color-foreground)] bg-[var(--color-bg-white)] px-4 py-6 md:hidden">
          <div className="flex flex-col gap-4 font-[family-name:var(--font-subHeading)] text-sm font-bold uppercase tracking-wider">
            
            <a
              href="/manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-[var(--color-foreground)]/10 pb-2"
            >
              Manifesto
            </a>
            <a
              href="/archives"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-[var(--color-foreground)]/10 pb-2"
            >
              Archives
            </a>
              <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-[var(--color-foreground)]/10 pb-2"
            >
              About
            </a>
            <div className="pt-2 font-[family-name:var(--font-mono)] text-xs text-[var(--color-foreground)]/60 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-prism animate-pulse" />
              <span>LIVE TC: {timecode}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}