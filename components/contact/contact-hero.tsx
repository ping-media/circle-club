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

      <Container
        className="mt-40 mb-10 px-6 lg:px-0"
        // className="mt-40 mb-10 px-6 md:px-0"
      >
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
          className="ml-auto w-8/12 lg:w-full flex flex-wrap md:flex-nowrap items-center justify-start md:justify-end mt-16 md:mt-24 2xl:mt-30 gap-1.5 lg:gap-16"
          // className="ml-auto w-8/12 md:w-full flex flex-wrap md:flex-nowrap items-center justify-start md:justify-end mt-16 md:mt-24 2xl:mt-30 gap-1.5 md:gap-16"
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
