"use client";

import Image from "next/image";
import Container from "../shared/container";
import SectionTitle from "../shared/section-title";
import { RequestAccessForm } from "./request-access-form";
import { motion } from "framer-motion";

const RequestAccessFormSection = () => {
  return (
    <Container className="relative z-50">
      <motion.div
        className="grid lg:grid-cols-12 lg:items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* left side  */}
        <motion.div
          className="order-2 lg:order-0 lg:col-span-6 relative h-full"
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full h-[416px] lg:h-full relative">
            <div className="absolute z-20 top-0 left-0 inset-x-0 h-[106px] lg:h-[149px] bg-[#FFFFFF1A] backdrop-blur-sm flex flex-col justify-center">
              <div className="max-w-xs">
                <p className="text-white font-semibold text-sm md:text-[20px] pl-6 lg:pl-10 md:leading-7">
                  Begin your journey to the exclusive experiences
                </p>
              </div>
            </div>
            <Image
              className="object-cover"
              src="/images/request-access/request-access.webp"
              alt="request form"
              fill
            />
          </div>
        </motion.div>
        {/* right side  */}
        <motion.div
          className="order-1 lg:order-0 lg:col-span-6 gap-6 lg:gap-8 lg:pl-16 h-full px-6 lg:px-0"
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-start justify-center gap-3 md:gap-5">
            <SectionTitle
              title="Send Request"
              colorClassName="font-bold! text-brown-100!"
            />

            <p className="text-foreground font-normal md:leading-6.5">
              Whether it concerns Monaco Grand Prix access, luxury mobility,
              property, or specific operational requests our team reviews every
              submission directly.
            </p>
          </div>

          <RequestAccessForm />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default RequestAccessFormSection;
