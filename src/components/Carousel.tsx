"use client";
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: React.ReactNode[];
  showDots?: boolean;
  twoPerView?: boolean; // ⬅ NUEVA PROP
};

export default function Carousel({
  children,
  showDots = false,
  twoPerView = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < children.length; i += 2) {
    slides.push([children[i], children[i + 1]]);
  }

  // triple items para loop
  const items = twoPerView ? children : [...children, ...children, ...children];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 👉 En modo twoPerView NO hacemos el reposicionamiento del loop
    if (twoPerView) {
      setReady(true);
      return;
    }

    const timeout = setTimeout(() => {
      const cardWidth = container.firstElementChild?.clientWidth || 0;
      const start = children.length;

      container.scrollLeft = start * (cardWidth + 16) + 1;
      setReady(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [children, twoPerView]);

  const updateActiveIndex = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const rawIndex = Math.round(container.scrollLeft / (cardWidth + 16));
    const moduloIndex = rawIndex % children.length;

    setActiveIndex(
      ((moduloIndex % children.length) + children.length) % children.length
    );
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || !ready) return;

    // 👉 Si hay dos por vista, NO hacemos loop
    if (twoPerView) {
      updateActiveIndex();
      return;
    }

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const totalWidth = (cardWidth + 16) * children.length;

    if (container.scrollLeft >= totalWidth * 2) {
      container.scrollLeft = totalWidth;
    }
    if (container.scrollLeft <= 0) {
      container.scrollLeft = totalWidth;
    }

    updateActiveIndex();
  };

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
          className="p-2 z-10 cursor-pointer flex my-auto"
          onClick={moveLeft}
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
              {/* 📱 MOBILE → 1 item centrado */}
              <div className="flex w-full justify-center md:hidden py-2">
                <div className="w-full flex justify-center">{pair[0]}</div>
              </div>

              {/* 💻 DESKTOP → 2 items */}
              <div className="hidden md:flex w-full justify-center gap-6">
                {pair.map((child, i) => (
                  <div key={i} className="w-1/2 flex justify-center">
                    {child}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="p-2 z-10 cursor-pointer flex my-auto"
          onClick={moveRight}
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
