"use client";

import { FEATURES } from "@/constants/features";
import FeatureCard from "./feature-card";
import FeatureProgress from "./feature-progress";
import { useCarousel } from "@/hook/use-carousel";
import { motion } from "framer-motion";

const FeatureCarousel = () => {
  const { containerRef, activeIndex } = useCarousel();

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <FeatureProgress activeIndex={activeIndex} />
      </motion.div>
    </motion.div>
  );
};

export default FeatureCarousel;
