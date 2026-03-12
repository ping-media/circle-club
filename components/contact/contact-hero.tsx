"use client";

import Image from "next/image";
import AnimatedHeader from "../layout/animated-header";
import Container from "../shared/container";
import SectionTitle from "../shared/section-title";
import { motion } from "framer-motion";
import { CONTACT_INFO, ContactInfo } from "@/constants/site";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "real-estate" | "cars" | null;

  return (
    <>
      <AnimatedHeader phase={"reveal"} />

      <Container className="mt-40 mb-10 px-6 lg:px-0">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:max-w-[964px]"
          >
            <SectionTitle
              title={"Contact Us"}
              colorClassName="font-black text-white leading-[100%]! md:leading-[1.01] lg:leading-[124px] text-[42px]! md:text-8xl! lg:text-[128px]! lg:tracking-[-4.32px]"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-sm lg:text-xl leading-[100%] lg:leading-6"
          >
            Direct access. Discreet communication. Fast response.
          </motion.p>
        </motion.div>

        <motion.div
          className="ml-auto w-8/12 lg:w-full flex flex-wrap md:flex-nowrap items-center justify-start md:justify-end mt-16 md:mt-24 2xl:mt-30 gap-1.5 lg:gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {CONTACT_INFO?.map((item) => (
            <IconAndLabel item={item} key={item.label} type={type} />
          ))}
        </motion.div>
      </Container>
    </>
  );
};

export default ContactHero;

const IconAndLabel = ({
  item,
  type,
}: {
  item: ContactInfo;
  type: "real-estate" | "cars" | null;
}) => {
  if (item.phones) {
    // if type exists → show only that number
    // if no type → show all numbers
    const phones =
      type && item.phones.find((p) => p.type === type)
        ? item.phones.filter((p) => p.type === type)
        : item.phones;

    return (
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full md:w-auto"
      >
        <div className="flex items-start md:items-center gap-3 text-white">
          <Image
            width={20}
            height={20}
            src={item.icon}
            alt={item.label}
            className="mt-1 md:mt-0 shrink-0"
          />

          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            {phones.map((phone, index) => (
              <span key={phone.value} className="flex items-center gap-2">
                <Link
                  href={phone.href}
                  className="hover:text-gold-200 transition-colors"
                >
                  {phone.value}
                </Link>

                {index !== phones.length - 1 && (
                  <span className="hidden md:inline text-[#DDDDDD38]">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
  // const values = Array.isArray(item.value) ? item.value : [item.value];
  // const links = Array.isArray(item.href) ? item.href : [item.href];

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full md:w-auto"
    >
      <div className="flex items-start md:items-center gap-3 text-white">
        <Image
          width={20}
          height={20}
          src={item.icon}
          alt={item.label}
          className="mt-1 md:mt-0 shrink-0"
        />

        <Link
          href={item.href!}
          className="hover:text-gold-200 transition-colors"
        >
          {item.value}
        </Link>

        {/* <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
          {values.map((value, index) => (
            <span key={value} className="flex items-center gap-2">
              <Link
                href={links[index]}
                className="hover:text-gold-200 transition-colors"
              >
                {value}
              </Link>

              separator only on desktop
              {index !== values.length - 1 && (
                <span className="hidden md:inline text-[#DDDDDD38]">|</span>
              )}
            </span>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};
