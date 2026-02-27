"use client";

import AnimatedHeader from "../layout/animated-header";
import BorderGrid from "../shared/border-grid";
import Container from "../shared/container";
import DotAndLabel from "../shared/DotAndLabel";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";

const LIST = ["Monaco rooted", "Experience-focused", "Ecosystem-powered"];

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

const AboutHero = () => {
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
                  Circle <br />
                  Club
                </>
              }
              colorClassName="font-black text-white leading-[1.01] md:text-8xl!"
            />
          </motion.div>

          <motion.div
            className="flex items-center gap-7"
            variants={containerVariants}
          >
            {LIST.map((l) => (
              <motion.div
                key={l}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <DotAndLabel label={l} className="font-medium!" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default AboutHero;
