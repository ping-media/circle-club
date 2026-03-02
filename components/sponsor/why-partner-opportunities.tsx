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
    <Container className="relative z-50">
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
          <SectionTitle title="opportunities" colorClassName="font-bold!" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid w-full grid-cols-1 md:grid-cols-4"
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
        "relative flex",
        index === 0 && "justify-start",
        index === OPPORTUNNITIES_LIST.length - 1 && "justify-end",
        index !== 0 &&
          index !== OPPORTUNNITIES_LIST.length - 1 &&
          "justify-center",
        index + 1 < OPPORTUNNITIES_LIST.length && "border-r border-[#D1CAB3]",
      )}
    >
      <div className="flex flex-col gap-4 w-10/12">
        {/* Image */}
        <div
          className={cn(
            "relative w-full aspect-4/5 overflow-hidden",
            isGrow ? "aspect-2/3" : "aspect-4/5",
          )}
        >
          <Image src={src} alt={title} fill className="object-cover" />
        </div>

        {/* Label */}
        <div className="bg-brown-100 px-4 py-2">
          <p className="text-white text-sm font-medium leading-snug">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};
