"use client";

import Image from "next/image";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { Button } from "../ui/button";
import { ABOUT_LIST_ONE } from "@/constants/about";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutInfoOne = () => {
  return (
    <Container className="flex flex-col px-6 lg:px-0 gap-11 relative z-50">
      <motion.div
        className="flex flex-col gap-3 lg:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <SectionLabel
            number="002"
            label="Our Approach"
            squareClassName="bg-[#0E0E0E29]!"
          />
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.8 }}>
          <SectionTitle
            title="Beyond Traditional Concierge"
            colorClassName="text-2xl! lg:text-[56px]! font-bold!"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-11 lg:grid-cols-12 lg:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="lg:col-span-6"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/about/about_info_1.webp"
            width={500}
            height={480}
            className="w-full aspect-4/5 object-cover"
            alt="about info one"
          />
        </motion.div>
        <motion.div className="lg:col-span-6" variants={containerVariants}>
          <div className="flex flex-col gap-6 lg:gap-9 mt-5">
            <motion.p variants={itemVariants}>
              We design, manage, and execute experiences with complete ownership
              and oversight.
            </motion.p>

            <motion.ul className="flex flex-col gap-1.5 md:gap-3">
              {ABOUT_LIST_ONE?.map((item) => (
                <ListItem item={item} key={item} />
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
              <Button
                variant="outline"
                className="w-full lg:w-auto text-sm rounded-none font-semibold uppercase tracking-[0.1em] px-3 py-5 bg-brown-100 text-white hover:bg-brown-100/90 hover:text-white transition-colors"
                asChild
              >
                <Link href="/request-access">Request Access</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default AboutInfoOne;

const ListItem = ({ item }: { item: string }) => (
  <motion.li
    variants={itemVariants}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 py-2.5 md:py-4 border-b border-[#00000014]"
  >
    <Image
      src="/icons/checkmark-circle.svg"
      alt="checkmark circle"
      width={20}
      height={20}
      className="object-contain"
    />

    {item}
  </motion.li>
);
