"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: React.ReactNode[];
  showDots?: boolean;
};

export default function Carousel({ children, showDots = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================================
   * Calcula el slide activo
   * =======================================================*/
  const updateActiveIndex = () => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = container.firstElementChild?.clientWidth || 1;

    const index = Math.round(container.scrollLeft / slideWidth);
    setActiveIndex(Math.min(index, children.length - 1));
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
        {/* ⬅ Flecha izquierda */}
        <button
          onClick={moveLeft}
          disabled={activeIndex === 0}
          className={`p-2 z-10 ${
            activeIndex === 0 ? "opacity-30 pointer-events-none" : ""
          }`}
        >
          <ChevronLeft size={32} />
        </button>

        {/* 🧩 Contenedor */}
        <div
          ref={containerRef}
          onScroll={updateActiveIndex}
          className="overflow-x-scroll hide-scrollbar flex snap-x snap-mandatory w-full"
          style={{ scrollBehavior: "smooth" }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="
                shrink-0 
                snap-center 
                w-full 
                md:w-1/2 
                flex 
                justify-center 
                px-4
              "
            >
              {child}
            </div>
          ))}
        </div>

        {/* ➡ Flecha derecha */}
        <button
          onClick={moveRight}
          disabled={activeIndex === children.length - 1}
          className={`p-2 z-10 ${
            activeIndex === children.length - 1
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
