"use client";
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: React.ReactNode[];
};

export default function Carousel({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // triple items para loop
  const items = [...children, ...children, ...children];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // posicion central
    const start = children.length;
    const cardWidth = container.firstElementChild?.clientWidth || 0;

    container.scrollLeft = start * (cardWidth + 16);
    setReady(true);
  }, [children]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || !ready) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const totalWidth = (cardWidth + 16) * children.length;

    if (container.scrollLeft >= totalWidth * 2) {
      container.scrollLeft = totalWidth;
    }

    if (container.scrollLeft <= 0) {
      container.scrollLeft = totalWidth;
    }
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
    <div className="relative w-full flex items-center justify-center">
      <button className="p-2 z-10" onClick={moveLeft}>
        <ChevronLeft size={32} />
      </button>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="overflow-x-scroll flex no-scrollbar gap-4 snap-x snap-mandatory flex-1 px-30 py-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((child, index) => (
          <div key={index} className="snap-center flex shrink-0 mx-2">
            {child}
          </div>
        ))}
      </div>

      <button className="p-2 z-10" onClick={moveRight}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
