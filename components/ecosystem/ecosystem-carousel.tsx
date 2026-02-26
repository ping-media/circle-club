"use client";

import { motion } from "framer-motion";
import { useCarousel } from "@/hook/use-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../shared/container";
import { ECOSYSTEM_CARD } from "@/constants/ecosystem";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EcosystemCarousel = () => {
  const { containerRef, next, prev } = useCarousel();

  return (
    <Container>
      <motion.div
        ref={containerRef}
        className="
            grid grid-flow-col auto-cols-[85%] md:auto-cols-[45%] lg:auto-cols-[30%]
            gap-12 overflow-x-auto snap-x snap-mandatory
            scroll-smooth no-scrollbar
          "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {ECOSYSTEM_CARD.map((service) => (
          <motion.div
            key={service.title}
            data-slide
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="snap-start flex flex-col p-6 gap-6 bg-linear-to-b from-white/20 to-transparent"
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

            <div className="flex flex-col gap-4">
              <h3 className="uppercase text-white font-semibold tracking-[1.1] text-lg">
                {service.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed">
                {service.description}
              </p>

              <button className="text-gold-200 cursor-pointer flex items-center gap-2 underline underline-offset-2 text-sm mt-auto">
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
