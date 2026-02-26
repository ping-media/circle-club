"use client";

import { motion } from "framer-motion";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";

const SponsorSection = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-12 md:items-start">
        <motion.div
          className="md:col-span-6 flex flex-col gap-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel number="006" label="Become a Sponsor" />

          <div className="flex flex-col gap-6">
            <SectionTitle
              title={
                <>
                  Become a <br /> Sponsor
                </>
              }
            />

            <p className="w-full md:max-w-sm 2xl:max-w-md">
              Partner with Circle Club during Monaco’s most prestigious events.
            </p>

            <p className="w-full md:max-w-md 2xl:max-w-lg">
              We collaborate with brands aligned with excellence and discretion.
            </p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block w-full md:w-1/3 2xl:1/4 bg-brown-100 text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition cursor-pointer"
          >
            Sponsor Inquiry
          </motion.button>
        </motion.div>

        <div className="md:col-span-6">
          {/* <div className="w-1/2 absolute right-0 top-0"> */}
          <div className="w-full">
            <video
              className="w-full aspect-square object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/sponsor.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SponsorSection;
