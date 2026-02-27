"use client";

import Image from "next/image";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { Button } from "../ui/button";
import { ABOUT_LIST_TWO } from "@/constants/about";
import { motion } from "framer-motion";

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

const AboutInfoTwo = () => {
  return (
    <Container className="flex flex-col gap-11">
      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <SectionLabel number="003" label="Our Strength" />
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.8 }}>
          <SectionTitle
            title="Operational Ecosystem"
            colorClassName="lg:text-[56px]! font-bold!"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-11 md:grid-cols-12 md:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="md:col-span-6"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/about/about_info_2.webp"
            width={500}
            height={480}
            className="w-full aspect-5/4 object-cover"
            alt="about info one"
          />
        </motion.div>
        <motion.div className="md:col-span-6" variants={containerVariants}>
          <div className="flex flex-col gap-9 mt-5">
            <motion.p variants={itemVariants}>
              We design, manage, and execute experiences with complete ownership
              and oversight.
            </motion.p>

            <motion.ul
              className="flex flex-col gap-4"
              variants={containerVariants}
            >
              {ABOUT_LIST_TWO?.map((item) => (
                <ListItem item={item} key={item} />
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
              <Button
                variant="outline"
                className="md:w-1/3 text-sm rounded-none font-semibold uppercase tracking-[0.1em] px-3 py-5 bg-brown-100 text-white hover:bg-brown-100/90 hover:text-white transition-colors"
              >
                Request Access
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default AboutInfoTwo;

const ListItem = ({ item }: { item: string }) => (
  <motion.li
    variants={containerVariants}
    transition={{ duration: 0.5 }}
    className="flex items-start gap-3 py-4 border-b border-[#00000014]"
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
