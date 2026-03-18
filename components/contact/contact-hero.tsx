"use client";

import AnimatedHeader from "../layout/animated-header";
import Container from "../shared/container";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { Suspense } from "react";
import ContactInfo from "./contact-info";

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

const ContactHero = () => {
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
              title={"Contact Us"}
              colorClassName="font-black text-black leading-[100%]! md:leading-[1.01] lg:leading-[124px] text-[42px]! md:text-8xl! lg:text-[128px]! lg:tracking-[-4.32px]"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-black text-sm lg:text-xl leading-[100%] lg:leading-6"
          >
            Direct access. Discreet communication. Fast response.
          </motion.p>
        </motion.div>

        {/* adding suspense because useSearchParams will not working as prerender at build time */}
        <Suspense fallback={<ContactDetailsSkeleton />}>
          <ContactInfo />
        </Suspense>
      </Container>
    </>
  );
};

export default ContactHero;

const ContactDetailsSkeleton = () => {
  return (
    <div className="ml-auto w-8/12 lg:w-full flex gap-10 mt-16 md:mt-24 animate-pulse">
      <div className="h-5 w-48 bg-white/20 rounded"></div>
      <div className="h-5 w-64 bg-white/20 rounded"></div>
    </div>
  );
};
