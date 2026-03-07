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

const RequestAccessSection = () => {
  return (
    <>
      <AnimatedHeader phase={"reveal"} />

      <Container className="mt-40 mb-10 px-6 lg:px-0">
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
                  Submit Your <br /> Request
                </>
              }
              colorClassName="font-black text-white leading-normal! md:leading-[1.01] lg:leading-[124px] text-[42px]! md:text-8xl! lg:text-[128px]! lg:tracking-[-4.32px]"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-sm lg:text-xl leading-normal lg:leading-6"
          >
            Tell us what you need. We respond precisely. We focus on
            understanding first, then delivering with precision.
          </motion.p>
        </motion.div>
      </Container>
    </>
  );
};

export default RequestAccessSection;
