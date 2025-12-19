"use client";

import React, { useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: React.ReactNode[];
  showDots?: boolean;
  twoPerView?: boolean;
};

export default function Carousel({
  children,
  showDots = false,
  twoPerView = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================================
   * Slides: 1 o 2 items según twoPerView (solo desktop)
   * =======================================================*/
  const slides = useMemo(() => {
    if (!twoPerView) {
      return children.map((child) => [child]);
    }

    const grouped: React.ReactNode[][] = [];
    for (let i = 0; i < children.length; i += 2) {
      grouped.push(children.slice(i, i + 2));
    }
    return grouped;
  }, [children, twoPerView]);

  /* =========================================================
   * Índice activo
   * =======================================================*/
  const updateActiveIndex = () => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = container.firstElementChild?.clientWidth || 1;
    const index = Math.round(container.scrollLeft / slideWidth);

    setActiveIndex(Math.min(index, slides.length - 1));
  };

  /* =========================================================
   * Navegación
   * =======================================================*/
  const moveLeft = () => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = container.firstElementChild?.clientWidth || 0;

    container.scrollBy({
      left: -slideWidth,
      behavior: "smooth",
    });
  };

  const moveRight = () => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = container.firstElementChild?.clientWidth || 0;

    container.scrollBy({
      left: slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full flex items-center">
        {/* ⬅ */}
        <button
          onClick={moveLeft}
          disabled={activeIndex === 0}
          className={`p-2 z-10 ${
            activeIndex === 0 ? "opacity-30 pointer-events-none" : ""
          }`}
        >
          <ChevronLeft size={32} />
        </button>

        {/* 🧩 Slides */}
        <div
          ref={containerRef}
          onScroll={updateActiveIndex}
          className="overflow-x-scroll hide-scrollbar flex snap-x snap-mandatory w-full"
          style={{ scrollBehavior: "smooth" }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="shrink-0 snap-center w-full flex justify-center px-4"
            >
              {/* 📱 Mobile → 1 */}
              <div className="flex md:hidden w-full justify-center">
                {slide[0]}
              </div>

              {/* 💻 Desktop */}
              <div
                className={`hidden md:flex w-full justify-center gap-6 ${
                  twoPerView ? "" : "max-w-lg"
                }`}
              >
                {slide.map((item, i) => (
                  <div
                    key={i}
                    className={twoPerView ? "w-1/2 flex justify-center" : ""}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ➡ */}
        <button
          onClick={moveRight}
          disabled={activeIndex === slides.length - 1}
          className={`p-2 z-10 ${
            activeIndex === slides.length - 1
              ? "opacity-30 pointer-events-none"
              : ""
          }`}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* 🔵 Dots */}
      {showDots && (
        <div className="flex gap-2 mt-3">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === i
                  ? "bg-gray-800 scale-110"
                  : "bg-gray-400 opacity-60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
