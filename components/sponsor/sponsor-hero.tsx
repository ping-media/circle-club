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

const SponsorHero = () => {
  return (
    <>
      <AnimatedHeader phase={"reveal"} />

      <Container className="mt-40 mb-10">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle
              title={
                <>
                  Partner With
                  <br /> Circle Club
                </>
              }
              colorClassName="font-black text-white leading-[1.01] md:text-8xl!"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white"
          >
            Position your brand within Monaco’s most prestigious environments.
          </motion.p>
        </motion.div>
      </Container>
    </>
  );
};

export default SponsorHero;
