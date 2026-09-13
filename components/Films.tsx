"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FilmCard from "./FilmCard";
import { Film } from "@/data/film";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FilmGrid({
  films,
  onSelectFilm,
}: {
  films: Film[];
  onSelectFilm: (film: Film) => void;
}) {
  const gridContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".film-card-item");

      gsap.from(cards, {
        scrollTrigger: {
          trigger: gridContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: gridContainerRef, dependencies: [films] }
  );

  return (
    <div
      ref={gridContainerRef}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {films.map((film) => (
        <div key={film.id} className="film-card-item">
          <FilmCard film={film} onSelect={onSelectFilm} />
        </div>
      ))}
    </div>
  );
}