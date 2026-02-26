"use client";

import { FEATURES } from "@/constants/features";
import FeatureCard from "./feature-card";
import FeatureProgress from "./feature-progress";
import { useCarousel } from "@/hook/use-carousel";

const FeatureCarousel = () => {
  const { containerRef, activeIndex } = useCarousel();

  return (
    <div className="relative">
      {/* Slides */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-6 px-6"
      >
        {FEATURES.map((feature, index) => (
          <div
            key={`feature-${index}`}
            data-slide
            className="snap-start shrink-0 w-[95%]"
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <FeatureProgress activeIndex={activeIndex} />
    </div>
  );
};

export default FeatureCarousel;
