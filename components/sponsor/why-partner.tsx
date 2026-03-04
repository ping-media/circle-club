"use client";

import { PARTNER_LIST, PartnerList } from "@/constants/partner";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import Image from "next/image";
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhyPartner = () => {
  return (
    <Container
      className="relative z-50 px-6 lg:px-0"
      // className="relative z-50 px-6 md:px-0"
    >
      <motion.div
        className="grid lg:grid-cols-12 gap-10"
        // className="grid md:grid-cols-12 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col gap-7 lg:gap-44"
          // className="md:col-span-7 flex flex-col gap-7 md:gap-44"
        >
          <div
            className="flex flex-col gap-3 lg:gap-4"
            // className="flex flex-col gap-3 md:gap-4"
          >
            <SectionLabel
              number="002"
              label="Why Partner"
              squareClassName="bg-[#0E0E0E29]!"
            />
            <SectionTitle
              title="circle club provides access to:"
              colorClassName="text-2xl! font-bold! md:text-[56px]!"
            />
            <div className="border-b border-[#0000002E]" />
          </div>

          <div
            className="grid md:grid-cols-2 gap-4 md:gap-16"
            // className="grid md:grid-cols-2 gap-4 md:gap-16"
          >
            {PARTNER_LIST.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <PartnerCard item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-5"
          // className="md:col-span-5"
        >
          <Image
            width={515}
            height={620}
            className="w-full aspect-2/3 object-cover"
            src="/images/partner/partner.webp"
            alt="why partner"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default WhyPartner;

const PartnerCard = ({ item }: { item: PartnerList }) => (
  <div className="flex flex-col gap-1.5 md:gap-4">
    <SectionLabel
      label={item.title}
      colorClassName="tracking-tight! text-sm!"
      labelClassName="text-foreground! font-semibold!"
      squareClassName="bg-brown-100!"
    />

    <p className="text-[#000000CC] md:w-2/3 font-normal leading-6">
      {item.description}
    </p>
  </div>
);
