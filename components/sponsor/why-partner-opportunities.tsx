"use client";

import Container from "../shared/container";
import { motion } from "framer-motion";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { opportunitiesList, OPPORTUNNITIES_LIST } from "@/constants/partner";
import Image from "next/image";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhyPartnerOpportunities = () => {
  return (
    <Container className="relative px-6 lg:px-0 z-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center gap-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <SectionLabel
            number="003"
            label="why partner"
            squareClassName="bg-[#0E0E0E29]!"
          />
          <SectionTitle
            title="opportunities"
            colorClassName="text-2xl! font-bold! md:text-[56px]!"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full flex md:grid md:grid-cols-4 gap-4 md:gap-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar"
        >
          {OPPORTUNNITIES_LIST.map((opp, index) => (
            <OpportunitiesCard
              src={opp.src}
              title={opp.title}
              isGrow={opp.isGrow}
              key={opp.title}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default WhyPartnerOpportunities;

const OpportunitiesCard = ({
  src,
  title,
  isGrow,
  index,
}: opportunitiesList & { index: number }) => {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "relative flex snap-start shrink-0 w-1/2 md:w-auto",
        index === 0 && "md:justify-start",
        index === OPPORTUNNITIES_LIST.length - 1 && "md:justify-end",
        index !== 0 &&
          index !== OPPORTUNNITIES_LIST.length - 1 &&
          "md:justify-center",
        index + 1 < OPPORTUNNITIES_LIST.length && "border-r border-[#D1CAB3]",
      )}
    >
      <div className="flex flex-col gap-4 w-10/12">
        {/* Image */}
        <div
          className={cn(
            "relative w-full aspect-4/5 overflow-hidden",
            isGrow ? "md:aspect-2/3" : "aspect-4/5",
          )}
        >
          <Image src={src} alt={title} fill className="object-cover" />
        </div>

        {/* Label */}
        <div className="bg-brown-100 px-2.5 md:px-4 py-1.5 md:py-2.5">
          <p className="text-white text-sm md:text-base font-medium leading-6.5 lg:min-h-[72px] flex items-center justify-center">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
