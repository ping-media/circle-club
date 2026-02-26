"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../shared/container";
import ShowcaseCard from "./showcase-card";

const ShowcaseSection = () => {
  return (
    <motion.section
      className="relative py-14 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Mask */}
      <div className="absolute inset-0 -z-10 mask-t-from-80% mask-b-from-90%">
        <Image
          src="/images/showcase/section_3.webp"
          alt="Showcase"
          fill
          priority={false}
          className="object-cover"
          objectPosition="center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-20">
        {/* Large Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/logo_light.webp"
            alt="Circle Club Logo"
            width={724}
            height={164}
            className="object-contain"
          />
        </motion.div>

        {/* Showcase Card */}
        <ShowcaseCard />
      </Container>
    </motion.section>
  );
};

export default ShowcaseSection;
