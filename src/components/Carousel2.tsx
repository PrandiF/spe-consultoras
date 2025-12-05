"use client";
import React, { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode[];
};

export default function Carousel2({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Detectar mobile vs md
  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop grande → 3 por página
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet → 2 por página
      } else {
        setItemsPerPage(1); // Mobile → 1 por página
      }
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Agrupar children en páginas dinámicamente
  const pages = [];
  for (let i = 0; i < children.length; i += itemsPerPage) {
    pages.push(children.slice(i, i + itemsPerPage));
  }

  // Triple páginas para loop infinito
  const loopPages = [...pages, ...pages, ...pages];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timeout = setTimeout(() => {
      const pageWidth = container.firstElementChild?.clientWidth || 0;
      const start = pages.length;

      container.scrollLeft = start * (pageWidth + 16) + 1;
      setReady(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [itemsPerPage, children]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || !ready) return;

    const pageWidth = container.firstElementChild?.clientWidth || 0;
    const totalWidth = (pageWidth + 16) * pages.length;
    const scroll = container.scrollLeft;

    // Loop infinito
    if (scroll >= totalWidth * 2) container.scrollLeft = totalWidth;
    if (scroll <= 0) container.scrollLeft = totalWidth;

    // Página activa
    const index = Math.round(scroll / (pageWidth + 16)) % pages.length;
    setCurrentIndex(index);
  };

  const goToIndex = (idx: number) => {
    const container = containerRef.current;
    if (!container) return;

    const pageWidth = container.firstElementChild?.clientWidth || 0;
    const offset = (pageWidth + 16) * (idx + pages.length);

    container.scrollTo({ left: offset, behavior: "smooth" });
  };

  // ⭐ AUTOPLAY SCROLL AUTOMÁTICO ⭐
  useEffect(() => {
    if (!ready) return;

    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      const pageWidth = container.firstElementChild?.clientWidth || 0;

      container.scrollTo({
        left: container.scrollLeft + (pageWidth + 16),
        behavior: "smooth",
      });
    }, 2000); // ⏱ cada 3 segundos

    return () => clearInterval(interval);
  }, [ready, itemsPerPage]);

  return (
    <div className="relative w-full md:w-[95%] md:px-0 px-6 mx-auto">
      {/* Contenedor scrollable con dots adentro */}
      <div className="relative w-full">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="hide-scrollbar overflow-x-scroll flex gap-4 snap-x snap-mandatory w-full px-4 py-6 pb-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {loopPages.map((page, index) => (
            <div
              key={index}
              className="snap-center shrink-0 mx-2 flex gap-4"
              style={{ width: "100%" }}
            >
              {page.map((child, i) => (
                <div key={i} className="flex-1">
                  {child}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Dots superpuestos dentro del mismo bloque */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-3 pointer-events-auto">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`
                w-2 h-2 rounded-full transition-all
                ${currentIndex === i ? "bg-blue-600 scale-125" : "bg-gray-400"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
