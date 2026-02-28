"use client";

import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Partnership = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-12 md:items-stretch">
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <video
            className="w-full aspect-4/3 object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/sponsor.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          className="md:col-span-6 flex flex-col p-14 bg-white/10 h-full"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4">
            <SectionLabel
              number="004"
              label="partnerships"
              descriptionClassName="text-white/80"
              colorClassName="text-white font-bold!"
              labelClassName="text-white!"
            />

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white font-black text-3xl md:text-5xl leading-[1.6] uppercase"
            >
              Let’s Discuss a Strategic Partnership
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-2 2xl:mt-4"
          >
            <Button className="text-xs 2xl:text-sm rounded-none font-bold uppercase tracking-[0.1em] transition-colors text-brown-200 bg-gradient-to-r from-gold-medium to-gold-light px-3 py-5 w-full md:w-1/3 2xl:w-2/3">
              contact our team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Partnership;
