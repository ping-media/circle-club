"use client";

import { motion } from "framer-motion";
import Container from "./container";
import SectionLabel from "./section-label";
import SectionTitle from "./section-title";
import { Button } from "../ui/button";
import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BannerSectionProps {
  number: string;
  label: string;
  title: string | ReactNode;
  description?: string;
  btnLabel: string;
  href: string;
  className?: string;
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
  href,
  className,
}: BannerSectionProps) => {
  return (
    <Container className={cn("flex flex-col bg-white", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center px-5 py-10 md:p-14 gap-4 md:gap-14"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center gap-4"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel
              number={number}
              label={label}
              descriptionClassName="text-[#000000A3]!"
              squareClassName="bg-[#C9CBCD]!"
              labelClassName="text-foreground"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle
              title={title}
              colorClassName="text-2xl! lg:text-[56px]! tracking-[-0.05px] text-black text-center"
            />
          </motion.div>
          {description && (
            <motion.p
              className="text-black md:max-w-lg text-sm md:text-xl text-center font-normal"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <Button
          variant="outline"
          className="w-full lg:w-1/4 text-sm md:text-xl leading-[100%] rounded-none font-semibold uppercase tracking-[4%] px-3 py-5 gray-gradient transition-colors"
          asChild
        >
          <Link href={href}>{btnLabel}</Link>
        </Button>
      </motion.div>
    </Container>
  );
};

export default BannerSection;
