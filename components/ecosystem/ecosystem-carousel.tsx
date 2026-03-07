"use client";

import { motion } from "framer-motion";
import { useCarousel } from "@/hook/use-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../shared/container";
import { ECOSYSTEM_CARD } from "@/constants/ecosystem";
import Image from "next/image";

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const EcosystemCarousel = () => {
  const { containerRef, next, prev } = useCarousel();

  return (
    <Container>
      <motion.div
        ref={containerRef}
        className="
            grid grid-flow-col auto-cols-[85%] md:auto-cols-[45%] lg:auto-cols-[29%]
            gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory
            scroll-smooth no-scrollbar"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ECOSYSTEM_CARD.map((service) => (
          <motion.div
            key={service.title}
            data-slide
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="snap-start flex flex-col p-3 md:p-6 gap-10 md:gap-12 bg-linear-to-b from-white/20 to-transparent h-full"
          >
            {/* Image with consistent ratio */}
            <div className="relative w-full aspect-3/2 overflow-hidden">
              <Image
                src={service.thumbnail}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 gap-2 md:gap-4">
              <h3 className="uppercase text-white font-semibold tracking-[1.1] leading-4 text-[22px]">
                {service.title}
              </h3>

              <p className="text-white/80 text-[18px] leading-6">
                {service.description}
              </p>

              <button className="text-gold-200 cursor-pointer flex items-center gap-2 underline underline-offset-2 mt-auto text-[18px] leading-6">
                {service.buttonText}
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <button
          onClick={prev}
          className="w-12 h-12 bg-gold-200 flex items-center justify-center cursor-pointer"
        >
          <ArrowLeft className="text-brown-100" size={16} />
        </button>

        <button
          onClick={next}
          className="w-12 h-12 border border-gold-200 text-gold-200 flex items-center justify-center cursor-pointer"
        >
          <ArrowRight className="text-gold-200" size={16} />
        </button>
      </div>
    </Container>
  );
};

export default EcosystemCarousel;
