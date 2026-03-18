"use client";

import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import EcosystemCarousel from "./ecosystem-carousel";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EcosystemSection = () => {
  return (
    <Container className="relative z-50 flex flex-col items-center px-6 lg:px-0 gap-11">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex flex-col gap-4 lg:gap-6"
      >
        <SectionLabel
          number="004"
          label="Ecosystem"
          colorClassName="text-sm"
          squareClassName="bg-[#0F0F0F29]!"
          descriptionClassName="text-[#0F0F0FA3]!"
          labelClassName="text-black-100!"
        />
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 lg:items-end">
          <div className="lg:col-span-4">
            <SectionTitle
              title={
                <>
                  The Circle <span className="text-brown-100">Ecosystem</span>
                </>
              }
              colorClassName="text-2xl! font-bold! text-black-100! md:text-[56px]! leading-[100%]! md:leading-19"
            />
          </div>
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 lg:col-start-8 gap-2.5"
          >
            {/* text-[#0F0F0FCC] */}
            <p className="text-sm md:text-xl text-black-100/80 leading-[100%] md:leading-6">
              Unlike traditional concierge services, we operate our own luxury
              infrastructure — ensuring direct control, quality, and speed.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <EcosystemCarousel />
    </Container>
  );
};

export default EcosystemSection;
