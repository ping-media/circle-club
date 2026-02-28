"use client";

import { CONTACT_LIST, ContactList } from "@/constants/contact";
import Container from "../shared/container";
import Image from "next/image";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <Container>
      <motion.div
        className="grid md:grid-cols-4 gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {CONTACT_LIST.map((item) => (
          <ContactCard item={item} key={item.title} />
        ))}
      </motion.div>
    </Container>
  );
};

export default ContactSection;

const ContactCard = ({ item }: { item: ContactList }) => (
  <motion.div
    variants={itemVariants}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-gold-200 flex flex-col justify-between p-5 gap-2 group hover:scale-107 transition-transform duration-150 ease-in-out hover:bg-brown-200 cursor-pointer"
  >
    <h2 className="text-[#00000026] font-semibold md:text-[84px] group-hover:text-gold-200">
      {item.number}
    </h2>

    <div>
      <Image
        src={item.src}
        width={317}
        height={270}
        className="w-full aspect-5/4 object-cover invisible group-hover:visible transition-transform duration-200 ease-in-out"
        alt={item.title}
      />
    </div>

    <div className="flex flex-col gap-3">
      <h2 className="text-gray-warm font-semibold uppercase group-hover:text-gold-200">
        {item.title}
      </h2>
      <p className="font-normal text-[#000000CC] group-hover:text-gold-200">
        {item.description}
      </p>
    </div>
  </motion.div>
);
