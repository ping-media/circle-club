"use client";

import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const NAVIGATION = [
  { label: "Legal Notice", href: "/legal" },
  { label: "Services", href: "/services" },
  { label: "Monaco F1 Grand Prix", href: "/monaco" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const CONNECT = [
  { label: "Request Access", href: "/request-access" },
  { label: "Sponsor Inquiry", href: "/sponsor" },
  { label: "WhatsApp", href: "#" },
  { label: "Instagram", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-transparent">
      {/* footer background image  */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/images/footer.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* <div className="absolute inset-0 -z-20">
        <Image
          src="/images/footer.webp"
          alt="Footer Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div> */}

      {/* Overlay (optional) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/50 to-white/70 backdrop-blur-md" />

      <Container className="relative z-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          {/* LEFT BLOCK */}
          <motion.div
            className="md:col-span-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <SectionLabel label="Beyond Race" />

              <h3 className="text-xl md:text-2xl font-medium">
                Private Concierge – Monaco
              </h3>
            </div>

            <p className="text-xs tracking-[0.2em] uppercase text-brown-800/70 mt-16">
              &copy; 2026 Circle Club. All rights reserved.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="md:col-span-6 grid grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* NAVIGATION */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] text-brown-800/60">
                Navigation
              </h4>

              <ul className="space-y-3 text-sm">
                {NAVIGATION.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:opacity-70 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-4 pt-6">
                <Facebook size={16} />
                <Instagram size={16} />
                <Youtube size={16} />
              </div>
            </div>

            {/* CONNECT */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] text-brown-800/60">
                Connect
              </h4>

              <ul className="space-y-3 text-sm">
                {CONNECT.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:opacity-70 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* text cliping logo image at footer bottom  */}
      <div className="relative w-full h-[260px] mt-16">
        <Image
          src="/images/footer_text_clip.webp"
          alt="Circle Club Text Clip"
          fill
          className="object-contain object-bottom"
        />
      </div>
    </footer>
  );
};

export default Footer;
