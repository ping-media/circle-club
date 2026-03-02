"use client";

import { motion } from "framer-motion";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import Image from "next/image";

const SponsorSection = () => {
  return (
    <div className="grid md:grid-cols-12 md:items-start">
      <div className="order-2 md:order-0 md:col-span-6">
        <Container className="max-w-lg! px-6 md:px-0">
          <motion.div
            className="flex flex-col gap-3 md:gap-8 py-11"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionLabel
              number="006"
              label="Become a Sponsor"
              descriptionClassName="text-muted-foreground"
              squareClassName="bg-[#0E0E0E29]!"
              labelClassName="text-foreground! text-sm"
              colorClassName="text-black"
            />

            <div className="flex flex-col gap-3 md:gap-6">
              <SectionTitle
                title={
                  <>
                    <p className="hidden md:block">
                      Become a <br /> Sponsor
                    </p>
                    <p className="block md:hidden">Become a Sponsor</p>
                  </>
                }
                colorClassName="font-bold! lg:text-[56px]! leading-[77px]!"
              />

              <p className="w-full md:max-w-sm 2xl:max-w-md text-foreground text-sm md:text-[20px] leading-normal">
                Partner with Circle Club during Monaco’s most prestigious
                events.
              </p>

              <p className="w-full md:max-w-md 2xl:max-w-lg text-foreground text-sm md:text-[20px] leading-normal">
                We collaborate with brands aligned with excellence and
                discretion.
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block w-full md:w-5/12 2xl:1/4 bg-brown-100 text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition cursor-pointer mt-6 md:mt-0"
            >
              Sponsor Inquiry
            </motion.button>
          </motion.div>
        </Container>
      </div>

      <div className="order-1 md:order-0 md:col-span-6 relative z-50">
        <div className="w-full p-4 md:p-0">
          <Image
            src="/images/sponsor/sponsor.webp"
            className="w-full aspect-square object-cover"
            width={720}
            height={697}
            alt="sponsor"
          />
          {/* <video
            className="w-full aspect-square object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/sponsor.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
