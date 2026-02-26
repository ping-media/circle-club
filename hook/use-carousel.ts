// "use client";

// import { useRef, useState, useEffect } from "react";

// export const useCarousel = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const slide = container.querySelector<HTMLElement>("[data-slide]");
//       if (!slide) return;

//       const slideWidth = slide.offsetWidth;
//       const index = Math.round(container.scrollLeft / slideWidth);
//       setActiveIndex(index);
//     };

//     container.addEventListener("scroll", handleScroll);

//     return () => {
//       container.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return {
//     containerRef,
//     activeIndex,
//   };
// };

"use client";

import { useRef, useState, useEffect } from "react";

export const useCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideWidth = () => {
    const container = containerRef.current;
    if (!container) return 0;

    const slide = container.querySelector<HTMLElement>("[data-slide]");
    if (!slide) return 0;

    const gap =
      parseInt(
        window.getComputedStyle(container).columnGap ||
          window.getComputedStyle(container).gap,
      ) || 0;

    return slide.offsetWidth + gap;
  };

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = getSlideWidth();
    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  const next = () => {
    scrollToIndex(activeIndex + 1);
  };

  const prev = () => {
    scrollToIndex(activeIndex - 1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth = getSlideWidth();
      const index = Math.round(container.scrollLeft / slideWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    containerRef,
    activeIndex,
    next,
    prev,
    scrollToIndex,
  };
};
