"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../shared/container";
import ShowcaseCard from "./showcase-card";

const ShowcaseSection = () => {
  return (
    <motion.div
      className="relative py-6 md:py-14 overflow-hidden lg:min-h-[834px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Mask */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/showcase/section_3.webp"
          alt=""
          fill
          className="object-cover object-[50%_100%] md:object-[50%_85%] lg:object-[5%_60%] min-w-[155%] md:min-w-[115%] lg:min-w-[120%]"
        />
      </div>

      {/* top overlay  */}
      <div
        className="absolute top-0 left-0 w-full h-10 md:h-[122px] z-10 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_36.65%,_rgba(255,_255,_255,_0.009)_68.95%,_rgba(255,_255,_255,_0.1)_100%)
] backdrop-blur-3xl"
      />

      {/* bottom overlay  */}
      <div className="absolute bottom-0 left-0 w-full h-8 z-10 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_36.65%,_rgba(255,_255,_255,_0.009)_68.95%,_rgba(255,_255,_255,_0.1)_100%)] backdrop-blur-3xl" />

      <Container className="relative z-50 flex flex-col px-6 lg:px-0 gap-30">
        {/* Large Logo */}
        <motion.div
          initial={{ opacity: 0, x: "-40%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src="/images/logo_light.webp"
            alt="Circle Club Logo"
            width={725}
            height={164}
            className="w-[158px] md:w-[258px] lg:w-[725px] h-auto"
          />
        </motion.div>

        {/* Showcase Card */}
        <motion.div
          initial={{ opacity: 0, x: 140, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ShowcaseCard />
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default ShowcaseSection;
