"use client";

import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site";
import { CONNECT, NAVIGATION, SOCIAL, SOCIAL_MOBILE } from "@/constants/footer";
import BorderGrid from "../shared/border-grid";

const Footer = () => {
  return (
    <motion.footer
      className="relative isolate overflow-hidden flex flex-col gap-10 md:gap-[70px] bg-transparent pb-8"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <BorderGrid borderClassName="border-[#0000001F]!" />
      {/* footer background  */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/images/footer.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/50 to-white/70 backdrop-blur-md" />

      <Container className="relative top-15 md:top-30 mb-12 md:mb-24 z-10 px-6 md:px-0">
        <motion.div
          className="grid md:grid-cols-12 gap-6 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* LEFT BLOCK */}
          <motion.div
            className="md:col-span-6 flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <SectionLabel
                label="Beyond Race"
                squareClassName="bg-[#530E1029]!"
                labelClassName="text-brown-100! tracking-[2.1] leading-4! text-sm font-normal!"
              />

              <h3 className="text-xl md:text-2xl font-normal text-brown-100">
                Private Concierge – Monaco
              </h3>
            </div>

            <p className="hidden md:block text-xs tracking-[0.2em] uppercase text-brown-100 md:mt-16">
              &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="md:col-span-6 grid grid-cols-2 gap-12"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            {/* NAVIGATION */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] text-brown-50">
                Navigation
              </h4>

              <ul className="space-y-3 text-sm">
                {NAVIGATION.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:opacity-70 transition text-brown-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* SOCIAL ICONS */}
              <div className="hidden md:flex items-center gap-4 pt-6">
                {SOCIAL.map((i) => (
                  <div key={i.label}>
                    <Link href={i.href}>
                      <Image
                        src={i.src}
                        alt={i.label}
                        width={24}
                        height={24}
                        className="object-contain hover:scale-105 transition-transform duration-200 ease-in-out"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* CONNECT */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] text-brown-50">
                Connect
              </h4>

              <ul className="space-y-3 text-sm">
                {CONNECT.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:opacity-70 transition text-brown-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* mobile social  */}
            <div className="w-full col-span-full">
              <p className="md:hidden text-xs tracking-[0.2em] uppercase text-white">
                &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
              </p>

              <div className="md:hidden flex items-center gap-4 pt-6">
                {SOCIAL_MOBILE.map((i) => (
                  <Link key={i.label} href={i.href}>
                    <Image
                      src={i.src}
                      alt={i.label}
                      width={18}
                      height={18}
                      className="object-contain hover:scale-105 transition-transform duration-200 ease-in-out"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* text cliping logo image at footer bottom  */}
      <motion.div
        className="relative w-full h-[86px] md:h-[260px] z-[60] px-6 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/footer_text_clip.webp"
          alt="circle club footer logo"
          fill
          className="object-contain object-bottom"
        />
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
