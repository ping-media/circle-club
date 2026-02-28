"use client";

import Image from "next/image";
import AnimatedHeader from "../layout/animated-header";
import Container from "../shared/container";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { CONTACT_INFO, ContactInfo } from "@/constants/site";
import Link from "next/link";

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
              title={"Contact Us"}
              colorClassName="font-black text-white leading-[1.01] md:text-8xl!"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white"
          >
            Direct access. Discreet communication. Fast response.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full flex items-center justify-end md:mt-24 2xl:mt-30 gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {CONTACT_INFO?.map((item) => (
            <IconAndLabel item={item} key={item.label} />
          ))}
        </motion.div>
      </Container>
    </>
  );
};

export default ContactHero;

const IconAndLabel = ({ item }: { item: ContactInfo }) => (
  <motion.div
    variants={itemVariants}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <Link href={item.href} className="group">
      <div className="flex items-center gap-2">
        <Image
          width={20}
          height={20}
          src={item.icon}
          alt={item.label}
          className="group-hover:scale-110 transition transform ease-in-out duration-200"
        />
        <p className="text-white group-hover:text-gold-200">{item.value}</p>
      </div>
    </Link>
  </motion.div>
);
