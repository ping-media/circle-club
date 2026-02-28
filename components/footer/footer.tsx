"use client";

import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site";
import { CONNECT, NAVIGATION, SOCIAL } from "@/constants/footer";
import BorderGrid from "../shared/border-grid";

const Footer = () => {
  return (
    <motion.footer
      className="relative isolate overflow-hidden bg-transparent"
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
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/50 to-white/70 backdrop-blur-md" />

      <Container className="relative z-10 my-24">
        <motion.div
          className="grid md:grid-cols-12 gap-12"
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
                colorClassName="text-brown-100"
              />

              <h3 className="text-xl md:text-2xl font-medium text-brown-100">
                Private Concierge – Monaco
              </h3>
            </div>

            <p className="text-xs tracking-[0.2em] uppercase text-brown-100 mt-16">
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
              <div className="flex items-center gap-4 pt-6">
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
          </motion.div>
        </motion.div>
      </Container>

      {/* text cliping logo image at footer bottom  */}
      <motion.div
        className="relative w-full h-[260px] mt-16"
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
