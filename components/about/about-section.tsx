"use client";

import { motion } from "framer-motion";
import Container from "../shared/container";
import SectionLabel from "../shared/section-label";
import SectionTitle from "../shared/section-title";
import Image from "next/image";

const LIST = [
  "Based in Monaco.",
  "Operating globally.",
  "Selective by nature.",
];

const AboutSection = () => {
  return (
    <Container className="px-6 md:px-0">
      <div className="grid gap-6 md:gap-16 md:grid-cols-12 md:items-start relative z-50">
        {/* Left Column */}
        <motion.div
          className="w-full md:col-span-5 flex flex-col h-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 md:gap-0">
            <SectionLabel
              number="005"
              label="About"
              colorClassName="text-[#0E0E0EA3]! font-light!"
              squareClassName="bg-[#0E0E0E29]!"
              labelClassName="text-foreground! md:text-sm"
            />

            <SectionTitle
              title="This Is Not A Service.This Is A Circle."
              colorClassName="text-2xl! font-bold! block md:hidden"
            />
          </div>

          <div className="mt-4 md:mt-36 w-full">
            <Image
              src="/images/about/about.webp"
              className="w-full aspect-square object-cover"
              width={556}
              height={478}
              alt="about"
            />
            {/* <video
              className="w-full aspect-square object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/about.mp4" type="video/mp4" />
            </video> */}
          </div>
        </motion.div>

        {/* right Column  */}
        <motion.div
          className="space-y-6 md:col-span-7 flex flex-col gap-3 md:gap-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <SectionTitle
            title={
              <>
                This Is Not A Service.
                <br />
                This Is A Circle.
              </>
            }
            colorClassName="hidden md:block md:text-3xl lg:text-5xl font-bold! leading-[1.3]"
          />

          <div className="flex flex-col gap-3 md:gap-8">
            <h2 className="font-semibold text-xl md:text-[40px] leading-normal">
              You don't hire us. <br /> You enter the Circle.
            </h2>

            <p className="w-full md:max-w-lg 2xl:max-w-xl text-sm md:text-[20px]">
              A curated private ecosystem built for individuals who expect more
              than access — they expect position.
            </p>

            <ul className="list-disc leading-8 ml-4 flex flex-col gap-2.5 md:gap-6">
              {LIST.map((list) => (
                <li key={list} className="text-sm md:text-[20px]">
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutSection;
