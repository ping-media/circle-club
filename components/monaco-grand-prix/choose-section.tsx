"use client";

import Image from "next/image";
import HeroVideo from "../hero/hero-video";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { CHOOSE_LIST, ChooseList } from "@/constants/choose-us";
import { motion } from "framer-motion";
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

const ChooseSection = () => {
  return (
    <>
      <HeroVideo
        src="videos/monaco.mp4"
        overlayClassName="bg-[linear-gradient(0deg,_rgba(255,246,219,0.2)_0%,_#FFF6DB_100%)]!"
      />

      <Container className="relative z-50 px-6 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center gap-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 md:gap-4"
          >
            <SectionLabel
              number="004"
              label="Why choose us"
              squareClassName="bg-[#0E0E0E29]!"
            />
            <SectionTitle
              title="why circle club"
              colorClassName="text-2xl! font-bold! md:text-[56px]!"
            />
            <p className="text-sm md:text-base text-center">
              A curated private ecosystem built for individuals who expect more
              than access they expect position.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full flex md:grid gap-6 md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar mb-8 md:items-end"
          >
            {CHOOSE_LIST.map((choose, index) => (
              <ChooseCard choose={choose} index={index} key={choose.title} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default ChooseSection;

const ChooseCard = ({
  choose,
  index,
}: {
  choose: ChooseList;
  index: number;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="snap-start shrink-0 w-[88%] md:w-auto flex flex-col p-4 lg:p-6 gap-4.5 lg:gap-6 bg-[linear-gradient(180deg,_rgba(33,34,17,0.3)_0%,_rgba(0,0,0,0.3)_100%)] shadow-[0px_0px_2px_0.25px_#FFFFFF80_inset] backdrop-blur-md h-full"
    >
      {/* Image with consistent ratio */}
      {/* <div className="relative w-full aspect-square md:aspect-2/3 overflow-hidden"> */}
      <div className="relative w-full aspect-square h-[342px] md:h-[451px] overflow-hidden">
        <Image
          src={choose.thumbnail}
          alt={choose.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 gap-3 lg:gap-4">
        <h3
          className={cn(
            "uppercase text-white font-semibold tracking-[1.1] text-lg",
            index == 0 ? "w-1/2 md:w-auto" : "",
          )}
        >
          {choose.title}
        </h3>

        <p className="text-white/80 text-sm leading-relaxed mt-auto">
          {choose.description}
        </p>
      </div>
    </motion.div>
  );
};
