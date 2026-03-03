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
      className="bg-[#FFFFFF33] backdrop-blur-[54px] p-4 md:p-8 flex flex-col gap-2.5 md:gap-8 md:max-w-3xl md:ml-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Header Row */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 text-xs uppercase text-white/70 tracking-[0.3em]"
      >
        <span className="w-3 h-3 2xl:w-4 2xl:h-4 bg-[#FFFFFF29]"></span>
        <span className="-ml-2 font-light! text-sm leading-4">003</span>
        <span className="text-white tracking-[2.1] font-normal! text-sm leading-4">
          Monaco Grand Prix – June 2026
        </span>
      </motion.div>

      {/* Logos + Title */}
      <div className="flex flex-col gap-3 md:gap-6">
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 md:gap-6"
        >
          <Image
            src="/images/showcase/F1.svg"
            alt="F1 logo"
            width={76}
            height={19}
            className="object-contain"
          />

          <div className="h-8 border-r border-[#FFFFFF80] border-dashed" />

          <Image
            src="/images/showcase/Frame.svg"
            alt="frame logo"
            width={35}
            height={24}
            className="object-contain"
          />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="uppercase font-bold text-2xl md:text-[56px] text-white leading-normal md:leading-[1.4] tracking-tighter"
        >
          Rooted in Monaco.
          <br />
          Connected{" "}
          <span className="italic text-white/70 font-normal">Worldwide.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="text-[#FFFFFFCC] text-xs md:text-[20px] leading-normal md:leading-6 w-full md:max-w-2xl"
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
