"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../shared/container";
import ShowcaseCard from "./showcase-card";

const ShowcaseSection = () => {
  return (
    <motion.div
      // className="relative py-14 overflow-hidden md:min-h-[834px]"
      className="relative py-14 overflow-hidden lg:min-h-[834px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Mask */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/showcase/section_3.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 55%",
        }}
      />

      {/* top overlay  */}
      <div
        className="absolute top-0 left-0 w-full h-10 md:h-[122px] z-10 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_36.65%,_rgba(255,_255,_255,_0.009)_68.95%,_rgba(255,_255,_255,_0.1)_100%)
] backdrop-blur-3xl"
      />

      {/* bottom overlay  */}
      <div className="absolute bottom-0 left-0 w-full h-8 z-10 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_36.65%,_rgba(255,_255,_255,_0.009)_68.95%,_rgba(255,_255,_255,_0.1)_100%)] backdrop-blur-3xl" />

      <Container
        // className="relative z-50 flex flex-col px-6 md:px-0 gap-20"
        className="relative z-50 flex flex-col px-6 lg:px-0 gap-30"
      >
        {/* Large Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* <Image
            src="/images/logo_light.webp"
            alt="Circle Club Logo"
            width={724}
            height={164}
            className="object-contain"
          /> */}
          <Image
            src="/images/logo_light.webp"
            alt="Circle Club Logo"
            width={724}
            height={164}
            // className="w-48 sm:w-64 md:w-auto object-contain"
            className="w-48 sm:w-64 lg:w-auto object-contain"
          />
        </motion.div>

        {/* Showcase Card */}
        <ShowcaseCard />
      </Container>
    </motion.div>
  );
};

export default ShowcaseSection;
