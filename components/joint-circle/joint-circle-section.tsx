"use client";

import Image from "next/image";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const JointCircleSection = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <Container className="relative z-50 px-6 lg:px-0">
      <div className="grid lg:grid-cols-12 lg:items-stretch">
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {!isHome ? (
            // <div className="relative w-full aspect-4/3">
            <div className="relative aspect-4/4 w-full">
              <Image
                src="/images/joint-circle/joint-circle.webp"
                fill
                className="object-cover"
                alt="Joint circle"
              />
            </div>
          ) : (
            <video
              // className="w-full aspect-4/3 object-cover"
              className="w-full aspect-4/4 object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/sponsor.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>

        <motion.div
          className="lg:col-span-6 flex flex-col p-4 lg:p-14.5 bg-white/10 h-full"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4">
            <SectionLabel
              number="007"
              label="Join the Circle"
              descriptionClassName="text-white/80"
              colorClassName="text-white font-bold!"
              labelClassName="text-white!"
              squareClassName="bg-[#FFFFFF29]!"
            />

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white font-black text-2xl md:text-3xl lg:text-[56px] leading-[100%] lg:leading-[77px] uppercase"
            >
              Enter the Circle
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/80 text-sm leading-[100%] md:text-2xl md:leading-6"
            >
              Access is curated. Requests are reviewed discreetly.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 lg:mt-36 2xl:mt-42"
          >
            <Button className="text-sm leading-[100%] 2xl:text-sm rounded-none font-bold uppercase tracking-[4%] transition-colors text-brown-200 bg-gold-200 px-5 py-3 w-full lg:w-1/3 2xl:w-2/3">
              <Link href="/request-access">Request Access</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default JointCircleSection;
