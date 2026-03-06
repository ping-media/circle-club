"use client";

import Container from "@/components/shared/container";
import Feature from "./feature";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
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

const EventSection = () => {
  return (
    <>
      <Container className="flex flex-col items-center gap-11 relative z-50 px-6 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col gap-4 lg:gap-6"
        >
          <SectionLabel number="002" label="Events" colorClassName="text-sm" />
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 lg:items-end">
            <div className="lg:col-span-7">
              <SectionTitle
                title="Exclusive Monaco Experiences"
                colorClassName="text-2xl! font-bold! md:text-[56px]! leading-normal! md:leading-19"
              />
            </div>
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 gap-2.5"
            >
              <p className="text-sm md:text-base">
                Access the Monaco Grand Prix from the most privileged vantage
                points terrace and sea.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <Feature />
      </Container>
    </>
  );
};

export default EventSection;
