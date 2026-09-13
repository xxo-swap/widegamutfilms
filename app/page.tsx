// app/page.tsx
"use client"; // <-- MUST be at the very top line!

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
// ...other imports

export default function Home() {
  const [showReelModal, setShowReelModal] = useState(false);

  return (
    <main>
      {/* Now passing functions works without error */}
      <HeroSection onOpenReel={() => setShowReelModal(true)} />
      {/* ...rest of page */}
    </main>
  );
}