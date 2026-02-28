"use client";

import Image from "next/image";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { YACHT_LIST } from "@/constants/monaco";
import { Button } from "../ui/button";

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

const MonacoTwoSection = () => {
  return (
    <>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-12 gap-11"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 flex flex-col justify-between"
          >
            <SectionLabel
              number="003"
              label="yacht experience"
              squareClassName="border-[#0E0E0E29]!"
            />
            <SectionTitle
              title={"Yacht Viewing Experience"}
              colorClassName="font-bold!"
            />
          </motion.div>

          <motion.div className="md:col-span-4" variants={itemVariants}>
            <Image
              src="/images/monaco/yacht.webp"
              alt="yacht viewing experience"
              width={358}
              height={413}
              className="w-full aspect-3/4 object-cover"
            />
          </motion.div>

          <motion.div
            className="md:col-span-4 flex flex-col justify-end gap-7"
            variants={itemVariants}
          >
            <motion.ul className="flex flex-col gap-3">
              {YACHT_LIST?.map((item) => (
                <ListItem item={item} key={item} />
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
              <Button
                variant="outline"
                className="md:w-7/11 text-sm rounded-none font-semibold uppercase tracking-[0.1em] px-3 py-5 bg-brown-100 text-white hover:bg-brown-100/90 hover:text-white transition-colors"
              >
                Request Yacht Access
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default MonacoTwoSection;

const ListItem = ({ item }: { item: string }) => (
  <motion.li
    variants={itemVariants}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 py-4 border-b border-[#00000014]"
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
