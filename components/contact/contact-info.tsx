"use client";

import { CONTACT_INFO, ContactInfo as TypeContactInfo } from "@/constants/site";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

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

const ContactInfo = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "real-estate" | "cars" | null;
  return (
    <motion.div
      className="ml-auto w-8/12 lg:w-full flex flex-wrap md:flex-nowrap items-center justify-start md:justify-end mt-16 md:mt-24 2xl:mt-30 gap-4 lg:gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {CONTACT_INFO?.map((item) => (
        <IconAndLabel item={item} key={item.label} type={type} />
      ))}
    </motion.div>
  );
};

export default ContactInfo;

const IconAndLabel = ({
  item,
  type,
}: {
  item: TypeContactInfo;
  type: "real-estate" | "cars" | null;
}) => {
  if (item.phones) {
    // const phones =
    //   type && item.phones.find((p) => p.type === type)
    //     ? item.phones.filter((p) => p.type === type)
    //     : item.phones;
    const phones = type
      ? item.phones.filter((p) => p.type === type)
      : item.phones.filter((p) => p.value.startsWith("+33"));

    return (
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full md:w-auto"
      >
        <Button
          variant="gray-gradient"
          className="font-normal! px-3! py-5!"
          asChild
        >
          <Link
            href={phones[0]?.href}
            target="_blank"
            className="flex items-center gap-3 text-black w-full"
          >
            <Image
              width={20}
              height={20}
              src={item.icon}
              alt={item.label}
              // className="mt-1 md:mt-0 shrink-0"
              className="shrink-0"
            />

            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              {/* {phones.map((phone, index) => (
              <span key={phone.value} className="flex items-center gap-2">
                <Link
                  href={phone.href}
                  className="hover:text-black/90 transition-colors"
                >
                  {phone.value}
                </Link>

                {index !== phones.length - 1 && (
                  <span className="hidden md:inline text-[#DDDDDD38]">|</span>
                )}
              </span>
            ))} */}
              <span className="hover:text-black/90 transition-colors">
                {phones[0]?.value}
              </span>
            </div>
          </Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full md:w-auto"
    >
      <Button
        variant="outline"
        asChild
        className="rounded-none px-3 py-5 font-normal"
      >
        <Link
          href={item.href!}
          className="flex items-center gap-3 text-black w-full"
        >
          <Image
            width={20}
            height={20}
            src={item.icon}
            alt={item.label}
            // className="mt-1 md:mt-0 shrink-0"
            className="shrink-0"
          />
          <span className="hover:text-black/90 transition-colors">
            {item.value}
          </span>
          {/* <Link
            href={item.href!}
            className="hover:text-black/90 transition-colors"
          >
            {item.value}
          </Link> */}
        </Link>
      </Button>
    </motion.div>
  );
};
