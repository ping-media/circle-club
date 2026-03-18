"use client";

import AnimatedHeader from "../layout/animated-header";
import Container from "../shared/container";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const MonacoHero = () => {
  return (
    <>
      <AnimatedHeader phase={"reveal"} />

      <Container className="mt-36 px-6 lg:px-0 mb-10">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:max-w-[964px]"
          >
            <SectionTitle
              title={
                <>
                  Monaco <br />
                  Grand Prix <br />
                  Experience
                </>
              }
              colorClassName="font-black text-black leading-[100%]! md:leading-[1.01] lg:leading-[124px] text-[42px]! md:text-8xl! lg:text-[128px]! lg:tracking-[-4.32px]"
            />
          </motion.div>

          <motion.div
            className="flex items-center gap-7"
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#313233] text-sm lg:text-xl leading-[100%] lg:leading-6"
            >
              The most iconic race in the world elevated through privileged
              access.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default MonacoHero;
