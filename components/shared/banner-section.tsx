"use client";

import { motion } from "framer-motion";
import Container from "./container";
import SectionLabel from "./section-label";
import SectionTitle from "./section-title";
import { Button } from "../ui/button";
import { ReactNode } from "react";

interface BannerSectionProps {
  number: string;
  label: string;
  title: string | ReactNode;
  description?: string;
  btnLabel: string;
}

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const BannerSection = ({
  number,
  label,
  title,
  description,
  btnLabel,
}: BannerSectionProps) => {
  return (
    <Container className="flex flex-col bg-white/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center p-14 gap-14"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center gap-4"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel
              number={number}
              label={label}
              colorClassName="text-white"
              descriptionClassName="text-white/64!"
              squareClassName="text-white/10!"
              labelClassName="text-white"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle
              title={title}
              colorClassName="lg:text-[40px]! text-white text-center"
            />
          </motion.div>
          {description && (
            <motion.p
              className="text-white md:max-w-lg text-center font-normal"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <Button
          variant="outline"
          className="md:w-1/4 text-sm rounded-none font-semibold uppercase tracking-[0.1em] px-3 py-5 bg-gold-200 text-brown-200 hover:bg-gold-200/95 hover:text-brown-100 transition-colors"
        >
          {btnLabel}
        </Button>
      </motion.div>
    </Container>
  );
};

export default BannerSection;
