"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ShowcaseCard = () => {
  return (
    <motion.div
      className="bg-white/20 backdrop-blur-lg border border-white/20 p-8 flex flex-col gap-8 max-w-3xl ml-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Header Row */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 text-xs uppercase text-white/70 tracking-[0.3em] font-space"
      >
        <span className="w-3 h-3 2xl:w-4 2xl:h-4 bg-muted-foreground"></span>
        <span className="-ml-2">003</span>
        <span className="text-white leading-[1.2] tracking-[2.1]">
          Monaco Grand Prix – June 2026
        </span>
      </motion.div>

      {/* Logos + Title */}
      <div className="flex flex-col gap-6">
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <Image
            src="/images/showcase/F1.svg"
            alt="F1 logo"
            width={80}
            height={28}
            className="object-contain"
          />

          <div className="h-8 border-r border-white border-dashed" />

          <Image
            src="/images/showcase/frame.svg"
            alt="Country flag"
            width={40}
            height={28}
            className="object-contain"
          />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="uppercase font-bold text-5xl text-white leading-[1.2]"
        >
          Rooted in Monaco.
          <br />
          Connected{" "}
          <span className="italic text-white/70 font-normal">Worldwide</span>.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="text-white/80 text-sm leading-[1.6] w-full md:max-w-2xl"
        >
          Our presence in Monaco places us at the center of the world’s most
          exclusive networks — from Formula 1 to private real estate and luxury
          mobility.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ShowcaseCard;
