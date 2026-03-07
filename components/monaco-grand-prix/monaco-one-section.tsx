"use client";

import Image from "next/image";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { TERRACE_LIST } from "@/constants/monaco";
import { Button } from "../ui/button";
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

const MonacoOneSection = () => {
  return (
    <>
      <Container className="relative z-50 px-6 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-11"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col gap-4 lg:gap-0 justify-between"
          >
            <SectionLabel
              number="002"
              label="terrace experience"
              squareClassName="bg-[#0E0E0E29]!"
            />
            <SectionTitle
              title={"Private Terrace Access"}
              colorClassName="text-2xl! font-bold! md:text-[56px]!"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Image
              src="/images/monaco/terrace.webp"
              alt="private terrace access"
              width={358}
              height={413}
              className="w-full aspect-3/4 object-cover"
            />
          </motion.div>

          <motion.div
            className="lg:col-span-4 flex flex-col justify-end gap-6 lg:gap-7"
            variants={itemVariants}
          >
            <motion.ul className="flex flex-col gap-2.5 lg:gap-3">
              {TERRACE_LIST?.map((item) => (
                <ListItem item={item} key={item} />
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
              <Button
                variant="outline"
                className="w-full lg:w-auto text-sm lg:text-base rounded-none font-semibold uppercase tracking-[0.1em] px-3 py-5 bg-brown-100 text-white hover:bg-brown-100/90 hover:text-white transition-colors"
                asChild
              >
                <Link href="/request-access">Request Terrace Access</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default MonacoOneSection;

const ListItem = ({ item }: { item: string }) => (
  <motion.li
    variants={itemVariants}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 py-3.5 md:py-4 border-b border-[#00000014]"
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
