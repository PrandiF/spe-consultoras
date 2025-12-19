"use client";
import React, { useRef, useEffect, useState } from "react";
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
   * Armamos slides de 2 items
   * =======================================================*/
  const slides: React.ReactNode[][] = [];
  for (let i = 0; i < children.length; i += 2) {
    slides.push([children[i], children[i + 1]]);
  }

  /* =========================================================
   * Actualiza índice activo
   * =======================================================*/
  const updateActiveIndex = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const index = Math.round(container.scrollLeft / (cardWidth + 16));

    setActiveIndex(Math.min(index, children.length - 1));
  };

  const handleScroll = () => {
    updateActiveIndex();
  };

  /* =========================================================
   * Navegación
   * =======================================================*/
  const moveLeft = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    container.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
  };

  const moveRight = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    container.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        className={`relative w-full flex ${
          twoPerView ? "items-center" : "items-center justify-center"
        }`}
      >
        <button
          onClick={moveLeft}
          disabled={activeIndex === 0}
          className={`p-2 z-10 cursor-pointer flex my-auto ${
            activeIndex === 0 ? "opacity-30 pointer-events-none" : ""
          }`}
        >
          <ChevronLeft size={32} />
        </button>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className={`overflow-x-scroll hide-scrollbar flex snap-x snap-mandatory w-full ${
            twoPerView ? "gap-12 px-4 mx-4" : "flex-1 gap-2"
          }`}
          style={{ scrollBehavior: "smooth" }}
        >
          {slides.map((pair, index) => (
            <div
              key={index}
              className="shrink-0 w-full snap-center flex justify-center"
            >
              {/* 📱 MOBILE → 1 item */}
              <div className="flex w-full justify-center md:hidden py-2">
                <div className="w-full flex justify-center">{pair[0]}</div>
              </div>

              {/* 💻 DESKTOP → 2 items */}
              <div className="hidden md:flex w-full justify-center gap-6">
                {pair.map(
                  (child, i) =>
                    child && (
                      <div key={i} className="w-1/2 flex justify-center">
                        {child}
                      </div>
                    )
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={moveRight}
          disabled={activeIndex === slides.length - 1}
          className={`p-2 z-10 cursor-pointer flex my-auto ${
            activeIndex === slides.length - 1
              ? "opacity-30 pointer-events-none"
              : ""
          }`}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {showDots && (
        <div className="flex gap-2 mt-3">
          {children.map((_, i) => (
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
