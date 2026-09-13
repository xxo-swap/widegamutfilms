import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-white)] text-[var(--color-foreground)] flex items-center justify-center p-6 antialiased">
      <div className="w-full max-w-xl border-4 border-black bg-white p-8 sm:p-12 shadow-[var(--shadow-brutal-lg)] text-center space-y-6">
        <div className="inline-block border-2 border-black bg-white px-3 py-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest shadow-[var(--shadow-brutal-sm)]">
          <span className="text-red-500 mr-2">●</span>Under Production
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl uppercase tracking-tight leading-none">
          Wide Gamut <br />
          <span className="text-prism">Films</span>
        </h1>

        <div className="border-t-2 border-b-2 border-black py-4">
          <p className="font-[family-name:var(--font-subHeading)] font-semibold text-lg text-neutral-800">
            We are working on the website. Soon we will drop a short film about Govardhan.
          </p>
        </div>

        <p className="font-[family-name:var(--font-mono)] text-xs text-neutral-500 uppercase tracking-wider">
          Currently in post-production • 2026
        </p>

        <div className="pt-2">
          <Link
            href="/about"
            className="inline-block border-2 border-black bg-black text-white px-6 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest font-bold shadow-[var(--shadow-brutal-sm)] hover:bg-neutral-800 transition-all"
          >
            Read About Me &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}