"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionLabel from "./section-label";
import SectionTitle from "./section-title";

interface SectionIntroProps {
  number: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  colorClassName?: string;
  descriptionClassName?: string;
}

const SectionIntro = ({
  number,
  label,
  title,
  description,
  className = "",
  colorClassName = "",
  descriptionClassName = "",
}: SectionIntroProps) => {
  return (
    <motion.div
      className={cn("w-full", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        {/* Left Column */}
        <div
          className={cn("space-y-6", title ? "md:col-span-7" : "md:col-span-6")}
        >
          {/* Small Label */}
          <SectionLabel
            number={number}
            label={label}
            colorClassName={colorClassName}
            descriptionClassName={descriptionClassName}
          />

          {/* Title */}
          <SectionTitle title={title} colorClassName={colorClassName} />
        </div>

        {/* Right Column */}
        {description && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
              "md:col-span-4 md:col-start-9 text-sm md:text-base leading-relaxed text-muted-foreground max-w-md",
              descriptionClassName,
            )}
          >
            {description}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SectionIntro;
